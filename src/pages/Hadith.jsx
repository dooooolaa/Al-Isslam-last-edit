import { useState, useEffect } from 'react'
import fuzzyIncludes from './fuzzy';

const HADITH_API_BASE = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1'

const hadithBooks = {
  'bukhari': { name: 'صحيح البخاري', nameEn: 'Sahih al-Bukhari', description: 'أصح كتاب بعد كتاب الله' },
  'muslim': { name: 'صحيح مسلم', nameEn: 'Sahih Muslim', description: 'ثاني أصح الكتب بعد البخاري' },
  'abudawud': { name: 'سنن أبي داود', nameEn: 'Sunan Abu Dawud', description: 'من كتب السنن الأربعة' },
  'tirmidhi': { name: 'سنن الترمذي', nameEn: 'Jami at-Tirmidhi', description: 'من كتب السنن الأربعة' },
  'nasai': { name: 'سنن النسائي', nameEn: 'Sunan an-Nasai', description: 'من كتب السنن الأربعة' },
  'ibnmajah': { name: 'سنن ابن ماجه', nameEn: 'Sunan Ibn Majah', description: 'من كتب السنن الأربعة' }
}

function arabicGrade(gradeObjOrStr) {
  // إذا كان نص فقط
  let str = typeof gradeObjOrStr === 'string'
    ? gradeObjOrStr
    : `${gradeObjOrStr.name || ''}${gradeObjOrStr.grade ? ` (${gradeObjOrStr.grade})` : ''}`;
  // استبدال المصطلحات الشائعة
  return str
    .replace(/Al-Albani|Albani|al-albani/gi, 'الألباني')
    .replace(/Sahih/gi, 'صحيح')
    .replace(/Hasan Sahih/gi, 'حسن صحيح')
    .replace(/Hasan/gi, 'حسن')
    .replace(/Daif|Dhaif|Weak/gi, 'ضعيف')
    .replace(/Mawdu/gi, 'موضوع')
    .replace(/Musnad/gi, 'مسند')
    .replace(/Mursal/gi, 'مرسل')
    .replace(/Marfu/gi, 'مرفوع')
    .replace(/Muallaq/gi, 'معلق')
    .replace(/Muadhal/gi, 'معضل')
    .replace(/Munqati/gi, 'منقطع')
    .replace(/Munkar/gi, 'منكر')
    .replace(/Maqlub/gi, 'مقلوب')
    .replace(/Shadh/gi, 'شاذ')
    .replace(/Matrouk/gi, 'متروك')
    .replace(/Munkar/gi, 'منكر')
    .replace(/Maqbul/gi, 'مقبول')
    .replace(/Maqtu/gi, 'مقطوع')
    .replace(/Mawquf/gi, 'موقوف')
    .replace(/Muallal/gi, 'معلل')
    .replace(/Mujhool/gi, 'مجهول')
    .replace(/Sah/gi, 'صح')
    .replace(/Has/gi, 'حس')
    .replace(/Dai/gi, 'ضع')
    .replace(/Albani/gi, 'الألباني')
    .replace(/\(\s*\)/g, '') // إزالة الأقواس الفارغة
    .trim();
}

export default function HadithCollection() {
  const [selectedBook, setSelectedBook] = useState('bukhari')
  const [allHadiths, setAllHadiths] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [bookInfo, setBookInfo] = useState(null)

  useEffect(() => {
    fetchAllHadiths()
  }, [selectedBook])

  const fetchAllHadiths = async () => {
    setLoading(true)
    setCurrentPage(1)
    try {
      const response = await fetch(`${HADITH_API_BASE}/editions/ara-${selectedBook}.json`)
      if (response.ok) {
        const data = await response.json()
        setAllHadiths(data.hadiths || [])
        setBookInfo(data.metadata)
      } else {
        setAllHadiths([])
        setBookInfo(null)
      }
    } catch (error) {
      setAllHadiths([])
      setBookInfo(null)
    }
    setLoading(false)
  }

  // تصفية الأحاديث حسب البحث مع التأكد من وجود نص
  const filteredHadiths = allHadiths.filter(hadith =>
    (
      (hadith.text || hadith.body || hadith.content) &&
      (
        fuzzyIncludes(hadith.text, searchTerm) ||
        fuzzyIncludes(hadith.body, searchTerm) ||
        fuzzyIncludes(hadith.content, searchTerm) ||
        fuzzyIncludes(hadith.narrator, searchTerm) ||
        fuzzyIncludes(hadith.book, searchTerm) ||
        fuzzyIncludes(hadith.chapter, searchTerm) ||
        fuzzyIncludes(hadith.explanation, searchTerm)
      )
    )
  )

  // التقطيع المحلي
  const hadithsPerPage = 20;
  const totalPages = Math.ceil(filteredHadiths.length / hadithsPerPage);
  const paginatedHadiths = filteredHadiths.slice((currentPage - 1) * hadithsPerPage, currentPage * hadithsPerPage);

  // دالة توليد أرقام الصفحات (لشريط الترقيم)
  function getPagination(current, total) {
    const delta = 2;
    const range = [];
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i);
    }
    if (current - delta > 2) range.unshift('...');
    if (current + delta < total - 1) range.push('...');
    range.unshift(1);
    if (total > 1) range.push(total);
    return range;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            الحديث الشريف
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            مجموعة من الأحاديث النبوية الصحيحة مصنفة حسب الأبواب الفقهية
          </p>
        </div>

        {/* Book Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">اختر كتاب الحديث</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(hadithBooks).map(([key, book]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedBook(key)
                  setCurrentPage(1)
                }}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedBook === key
                    ? 'border-yellow-400 bg-yellow-100 dark:bg-yellow-900/20 shadow-lg shadow-yellow-400/25'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-yellow-400/50'
                }`}
              >
                <h3 className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{book.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{book.nameEn}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{book.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="ابحث في الأحاديث..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Book Info */}
        {bookInfo && (
          <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">{bookInfo.name}</h3>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
            <p className="mt-2 text-gray-400">جاري تحميل الأحاديث...</p>
          </div>
        )}

        {/* Hadiths Display */}
        {!loading && (
          <div className="space-y-6">
            {paginatedHadiths.length > 0 ? (
              paginatedHadiths.map((hadith, index) => (
                <div key={index + (currentPage-1)*hadithsPerPage} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      حديث رقم {hadith.hadithnumber || hadith.arabicnumber || index + 1}
                    </span>
                  </div>
                  {/* نص الحديث */}
                  {hadith.text || hadith.body || hadith.content ? (
                    <div className="text-right leading-relaxed text-lg mb-4" dir="rtl">
                      {hadith.text || hadith.body || hadith.content}
                    </div>
                  ) : (
                    <div className="text-right leading-relaxed text-lg mb-4 text-red-400" dir="rtl">
                      لا يوجد نص لهذا الحديث
                    </div>
                  )}
                  {/* صحة الحديث */}
                  {(hadith.grades && hadith.grades.length > 0) ? (
                    <div className="mb-2 flex flex-wrap gap-2 justify-end">
                      {hadith.grades.map((grade, i) => (
                        <span key={i} className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                          {typeof grade === "object" ? arabicGrade(grade) : arabicGrade(grade)}
                        </span>
                      ))}
                    </div>
                  ) : (
                    (selectedBook === 'bukhari' || selectedBook === 'muslim') && (
                      <div className="mb-2 flex flex-wrap gap-2 justify-end">
                        <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">حديث صحيح بالإجماع</span>
                      </div>
                    )
                  )}
                  {/* الإسناد */}
                  <div className="flex justify-end mt-2">
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full text-xs font-arabic">
                      {hadith.isnad || (typeof hadith.reference === 'string' ? hadith.reference : hadith.reference && typeof hadith.reference === 'object' ? `كتاب ${hadith.reference.book || ''} - حديث ${hadith.reference.hadith || ''}` : '')}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 font-arabic">لا توجد أحاديث متاحة.</div>
            )}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            السابق
          </button>
          {getPagination(currentPage, totalPages).map((page, idx) =>
            page === '...'
              ? <span key={idx} className="px-4 py-2">...</span>
              : <button
                  key={idx}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${currentPage === page ? 'bg-red-700 text-white' : 'bg-gray-800 text-white hover:bg-gray-600'}`}
                >
                  {page}
                </button>
          )}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  )
} 