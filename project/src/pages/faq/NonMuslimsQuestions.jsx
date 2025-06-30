import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const nonMuslimsQuestions = [
  {
    id: 1,
    question: 'ما هي حقوق غير المسلمين في الإسلام؟',
    answer: 'لغير المسلمين في الإسلام حقوق كثيرة: حق الحياة، حق الأمان، حق الملكية، حق العمل، حق العبادة، حق العدالة، قال تعالى: "لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ".',
    category: 'حقوقهم',
    source: 'القرآن الكريم'
  },
  {
    id: 2,
    question: 'ما حكم التعامل مع غير المسلمين؟',
    answer: 'التعامل مع غير المسلمين جائز في المعاملات التجارية والاجتماعية، قال النبي صلى الله عليه وسلم: "من قتل معاهداً لم يرح رائحة الجنة" رواه البخاري.',
    category: 'تعامل المسلم معهم',
    source: 'صحيح البخاري'
  },
  {
    id: 3,
    question: 'ما حكم الزواج من غير المسلمات؟',
    answer: 'يجوز للمسلم الزواج من الكتابيات (اليهوديات والنصرانيات)، قال تعالى: "وَالْمُحْصَنَاتُ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ مِن قَبْلِكُمْ"، ويحرم الزواج من المشركات.',
    category: 'تعامل المسلم معهم',
    source: 'القرآن الكريم'
  },
  {
    id: 4,
    question: 'ما حكم أكل طعام أهل الكتاب؟',
    answer: 'يجوز أكل طعام أهل الكتاب ما لم يكن محرماً، قال تعالى: "وَطَعَامُ الَّذِينَ أُوتُوا الْكِتَابَ حِلٌّ لَّكُمْ وَطَعَامُكُمْ حِلٌّ لَّهُمْ".',
    category: 'تعامل المسلم معهم',
    source: 'القرآن الكريم'
  },
  {
    id: 5,
    question: 'ما حكم الدعوة إلى الإسلام؟',
    answer: 'الدعوة إلى الإسلام واجبة على كل مسلم حسب قدرته، قال تعالى: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ"، ويجب أن تكون بالحكمة والموعظة الحسنة.',
    category: 'دخول الإسلام',
    source: 'القرآن الكريم'
  },
  {
    id: 6,
    question: 'ما حكم إكراه غير المسلم على الإسلام؟',
    answer: 'لا يجوز إكراه غير المسلم على الإسلام، قال تعالى: "لَا إِكْرَاهَ فِي الدِّينِ"، الإسلام دين الاختيار والحرية.',
    category: 'دخول الإسلام',
    source: 'القرآن الكريم'
  },
  {
    id: 7,
    question: 'ما حكم زيارة دور العبادة لغير المسلمين؟',
    answer: 'زيارة دور العبادة لغير المسلمين جائزة إذا كان الهدف التعلم أو الدعوة أو التعارف، لكن يحرم المشاركة في عباداتهم.',
    category: 'تعامل المسلم معهم',
    source: 'كتب الفقه'
  },
  {
    id: 8,
    question: 'ما حكم تهنئة غير المسلمين بأعيادهم؟',
    answer: 'تهنئة غير المسلمين بأعيادهم محل خلاف بين العلماء، فمنهم من يرى جوازها ومنهم من يرى حرمتها، والأحوط الابتعاد عنها.',
    category: 'تعامل المسلم معهم',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 9,
    question: 'ما حكم العمل مع غير المسلمين؟',
    answer: 'العمل مع غير المسلمين جائز إذا كان العمل حلالاً، قال النبي صلى الله عليه وسلم: "المسلم من سلم المسلمون من لسانه ويده" رواه البخاري ومسلم.',
    category: 'تعامل المسلم معهم',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 10,
    question: 'ما حكم الصدقة على غير المسلمين؟',
    answer: 'الصدقة على غير المسلمين جائزة ومستحبة، قال النبي صلى الله عليه وسلم: "في كل كبد رطبة أجر" رواه البخاري ومسلم، لكن زكاة المال للمسلمين فقط.',
    category: 'حقوقهم',
    source: 'صحيح البخاري ومسلم'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'حقوقهم', value: 'حقوقهم' },
  { name: 'تعامل المسلم معهم', value: 'تعامل المسلم معهم' },
  { name: 'دخول الإسلام', value: 'دخول الإسلام' }
];

const NonMuslimsQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = nonMuslimsQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-emerald-800 dark:text-emerald-400">
            أسئلة وأجوبة غير المسلمين
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول حقوق غير المسلمين وتعامل المسلم معهم ودخول الإسلام
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-arabic hover:bg-emerald-700 transition-colors text-center"
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
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-emerald-800 dark:text-emerald-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded px-3 py-1 text-sm font-arabic">
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

export default NonMuslimsQuestions; 