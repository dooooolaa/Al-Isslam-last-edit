import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const personalStatusQuestions = [
  {
    id: 1,
    question: 'ما هي شروط الزواج الشرعي؟',
    answer: 'شروط الزواج: رضا الطرفين، الولي، الشهود، المهر، عدم وجود مانع شرعي، الإعلان، قال النبي صلى الله عليه وسلم: "لا نكاح إلا بولي وشاهدي عدل" رواه الترمذي.',
    category: 'الزواج',
    source: 'سنن الترمذي'
  },
  {
    id: 2,
    question: 'ما حكم زواج المسيار؟',
    answer: 'زواج المسيار محل خلاف بين العلماء، فمنهم من يرى جوازه بشرط توفر شروط النكاح، ومنهم من يرى حرمته لأنه يخالف مقاصد الزواج، والأحوط الابتعاد عنه.',
    category: 'الزواج',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 3,
    question: 'ما هي أنواع الطلاق؟',
    answer: 'الطلاق ثلاثة أنواع: الطلاق الرجعي (يمكن إرجاع الزوجة في العدة)، الطلاق البائن (لا يمكن إرجاعها إلا بنكاح جديد)، الطلاق المعلق (معلق على شرط).',
    category: 'الطلاق',
    source: 'كتب الفقه'
  },
  {
    id: 4,
    question: 'ما حكم الطلاق ثلاثاً في جلسة واحدة؟',
    answer: 'الطلاق ثلاثاً في جلسة واحدة واقع عند جمهور العلماء، لكنه معصية، قال النبي صلى الله عليه وسلم: "أيما رجل طلق امرأته ثلاث تطليقات في مجلس واحد فهي واحدة" رواه أبو داود.',
    category: 'الطلاق',
    source: 'سنن أبي داود'
  },
  {
    id: 5,
    question: 'ما هي شروط وجوب النفقة؟',
    answer: 'شروط وجوب النفقة: الزوجية، الإمكان، عدم نشوز الزوجة، قال تعالى: "وَعَلَى الْمَوْلُودِ لَهُ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِالْمَعْرُوفِ".',
    category: 'النفقة',
    source: 'القرآن الكريم'
  },
  {
    id: 6,
    question: 'ما حكم حضانة الأطفال بعد الطلاق؟',
    answer: 'الحضانة للأم ما لم تتزوج أو تسافر، ثم للأب، ثم للأم، ثم للجد، ثم للخالة، ثم للعمة، ثم للأخوات، ثم للأخوات من الأم.',
    category: 'الحضانة',
    source: 'كتب الفقه'
  },
  {
    id: 7,
    question: 'ما هي شروط الميراث؟',
    answer: 'شروط الميراث: موت المورث، حياة الوارث، عدم وجود مانع، قال النبي صلى الله عليه وسلم: "لا يرث المسلم الكافر، ولا الكافر المسلم" رواه البخاري ومسلم.',
    category: 'الميراث',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 8,
    question: 'ما حكم توزيع الميراث قبل الموت؟',
    answer: 'توزيع الميراث قبل الموت لا يجوز، لكن يجوز الهبة أو الوصية، قال النبي صلى الله عليه وسلم: "لا وصية لوارث" رواه الترمذي.',
    category: 'الميراث',
    source: 'سنن الترمذي'
  },
  {
    id: 9,
    question: 'ما حكم زواج المتعة؟',
    answer: 'زواج المتعة محرم في الإسلام، قال النبي صلى الله عليه وسلم: "إن الله حرم عليكم المتعة إلى يوم القيامة" رواه مسلم.',
    category: 'الزواج',
    source: 'صحيح مسلم'
  },
  {
    id: 10,
    question: 'ما حكم الخلع؟',
    answer: 'الخلع جائز إذا كرهت المرأة زوجها وخشيت ألا تقيم حدود الله، قال تعالى: "فَإِنْ خِفْتُمْ أَلَّا يُقِيمَا حُدُودَ اللَّهِ فَلَا جُنَاحَ عَلَيْهِمَا فِيمَا افْتَدَتْ بِهِ".',
    category: 'الطلاق',
    source: 'القرآن الكريم'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'الزواج', value: 'الزواج' },
  { name: 'الطلاق', value: 'الطلاق' },
  { name: 'النفقة', value: 'النفقة' },
  { name: 'الحضانة', value: 'الحضانة' },
  { name: 'الميراث', value: 'الميراث' }
];

const PersonalStatusQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = personalStatusQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-pink-800 dark:text-pink-400">
            أسئلة وأجوبة الأحوال الشخصية
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الزواج والطلاق والنفقة والحضانة والميراث
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-pink-600 text-white rounded-lg font-arabic hover:bg-pink-700 transition-colors text-center"
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
                    ? 'bg-pink-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-pink-800 dark:text-pink-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded px-3 py-1 text-sm font-arabic">
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

export default PersonalStatusQuestions; 