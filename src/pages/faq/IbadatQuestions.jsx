import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fuzzyIncludes from '../fuzzy';

const ibadatQuestions = [
  {
    id: 1,
    question: 'ما هي أركان الوضوء؟',
    answer: 'أركان الوضوء ستة: غسل الوجه، غسل اليدين مع المرفقين، مسح الرأس، غسل الرجلين مع الكعبين، الترتيب، الموالاة.',
    category: 'الطهارة',
    source: 'كتب الفقه'
  },
  {
    id: 2,
    question: 'ما هي نواقض الوضوء؟',
    answer: 'نواقض الوضوء: الخارج من السبيلين (البول والغائط والريح)، النوم المستغرق، أكل لحم الإبل، مس الذكر، الردة عن الإسلام.',
    category: 'الطهارة',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 3,
    question: 'ما هي أركان الصلاة؟',
    answer: 'أركان الصلاة: القيام مع القدرة، تكبيرة الإحرام، قراءة الفاتحة، الركوع، الرفع منه، السجود، الجلوس بين السجدتين، التشهد الأخير، التسليم.',
    category: 'الصلاة',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 4,
    question: 'ما حكم ترك الصلاة؟',
    answer: 'ترك الصلاة كفر أكبر يخرج من الملة، قال النبي صلى الله عليه وسلم: "العهد الذي بيننا وبينهم الصلاة، فمن تركها فقد كفر" رواه الترمذي.',
    category: 'الصلاة',
    source: 'سنن الترمذي'
  },
  {
    id: 5,
    question: 'ما هي شروط وجوب الصيام؟',
    answer: 'شروط وجوب الصيام: الإسلام، البلوغ، العقل، القدرة على الصيام، الإقامة (للمسافر رخصة الإفطار)، عدم وجود مانع شرعي كالحيض والنفاس.',
    category: 'الصيام',
    source: 'كتب الفقه'
  },
  {
    id: 6,
    question: 'ما هي مفسدات الصيام؟',
    answer: 'مفسدات الصيام: الأكل والشرب عمداً، الجماع، الاستمناء، القيء عمداً، الحيض والنفاس، الردة عن الإسلام.',
    category: 'الصيام',
    source: 'كتب الفقه'
  },
  {
    id: 7,
    question: 'ما هي شروط وجوب الزكاة؟',
    answer: 'شروط وجوب الزكاة: الإسلام، الحرية، ملك النصاب، مرور الحول، النماء، عدم الدين المؤثر.',
    category: 'الزكاة',
    source: 'كتب الفقه'
  },
  {
    id: 8,
    question: 'ما هو نصاب الذهب والفضة؟',
    answer: 'نصاب الذهب: 85 جرام، ونصاب الفضة: 595 جرام، ونصاب النقود: ما يعادل قيمة 85 جرام ذهب، ومقدار الزكاة ربع العشر (2.5%).',
    category: 'الزكاة',
    source: 'كتب الفقه'
  },
  {
    id: 9,
    question: 'ما هي أركان الحج؟',
    answer: 'أركان الحج: الإحرام، الوقوف بعرفة، طواف الإفاضة، السعي بين الصفا والمروة.',
    category: 'الحج',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 10,
    question: 'ما حكم الأذكار بعد الصلاة؟',
    answer: 'الأذكار بعد الصلاة مستحبة، قال النبي صلى الله عليه وسلم: "من سبح الله في دبر كل صلاة ثلاثاً وثلاثين، وحمد الله ثلاثاً وثلاثين، وكبر الله ثلاثاً وثلاثين" رواه البخاري ومسلم.',
    category: 'الأذكار',
    source: 'صحيح البخاري ومسلم'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'الطهارة', value: 'الطهارة' },
  { name: 'الصلاة', value: 'الصلاة' },
  { name: 'الصيام', value: 'الصيام' },
  { name: 'الزكاة', value: 'الزكاة' },
  { name: 'الحج', value: 'الحج' },
  { name: 'الأذكار', value: 'الأذكار' }
];

const IbadatQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = ibadatQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = fuzzyIncludes(q.question, searchQuery) || fuzzyIncludes(q.answer, searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-green-800 dark:text-green-400">
            أسئلة وأجوبة العبادات
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الطهارة والصلاة والصيام والزكاة والحج والأذكار
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-arabic hover:bg-green-700 transition-colors text-center"
            >
              العودة للأسئلة الشرعية
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-arabic transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-green-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((q, index) => (
            <div key={q.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-green-800 dark:text-green-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded px-3 py-1 text-sm font-arabic">
                      {q.category}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded px-3 py-1 text-sm font-arabic">
                      {q.source}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 font-arabic text-lg">
              لم يتم العثور على أسئلة تطابق البحث
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IbadatQuestions; 