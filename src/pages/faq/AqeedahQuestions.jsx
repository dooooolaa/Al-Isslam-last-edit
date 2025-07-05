import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const aqeedahQuestions = [
  {
    id: 1,
    question: 'ما هو الإيمان؟',
    answer: 'الإيمان هو التصديق الجازم بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره، وهو قول باللسان واعتقاد بالقلب وعمل بالجوارح.',
    category: 'الإيمان',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 2,
    question: 'ما هو التوحيد؟',
    answer: 'التوحيد هو إفراد الله بالعبادة ونفي الشرك عنه، وهو أعظم واجب على المسلم، قال تعالى: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ".',
    category: 'التوحيد',
    source: 'القرآن الكريم'
  },
  {
    id: 3,
    question: 'ما هي أقسام التوحيد؟',
    answer: 'التوحيد ثلاثة أقسام: توحيد الربوبية (إفراد الله بالخلق والملك والتدبير)، توحيد الألوهية (إفراد الله بالعبادة)، توحيد الأسماء والصفات (إثبات ما أثبته الله لنفسه من الأسماء والصفات).',
    category: 'التوحيد',
    source: 'كتب العقيدة'
  },
  {
    id: 4,
    question: 'ما هو الشرك؟',
    answer: 'الشرك هو جعل شريك لله في العبادة أو الربوبية أو الأسماء والصفات، وهو أعظم ذنب وأكبر معصية، قال تعالى: "إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ".',
    category: 'الشرك',
    source: 'القرآن الكريم'
  },
  {
    id: 5,
    question: 'ما هو الشرك الأكبر؟',
    answer: 'الشرك الأكبر هو ما يخرج من الملة، كدعاء غير الله، والذبح لغير الله، والنذر لغير الله، والخوف من غير الله فيما لا يقدر عليه إلا الله.',
    category: 'الشرك',
    source: 'كتب العقيدة'
  },
  {
    id: 6,
    question: 'ما هو الشرك الأصغر؟',
    answer: 'الشرك الأصغر هو ما ورد في النصوص تسميته شركاً لكنه لا يخرج من الملة، كالرياء، والحلف بغير الله، وقول "ما شاء الله وشئت".',
    category: 'الشرك',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 7,
    question: 'ما هو القدر؟',
    answer: 'القدر هو تقدير الله تعالى الأشياء في الأزل، وعلمه سبحانه أنها ستقع في أوقات معلومة عنده، وكتابته لها، وإرادته لها، وخلقه لها.',
    category: 'القدر',
    source: 'كتب العقيدة'
  },
  {
    id: 8,
    question: 'ما حكم إنكار القدر؟',
    answer: 'إنكار القدر كفر، قال النبي صلى الله عليه وسلم: "القدرية مجوس هذه الأمة" رواه أبو داود، ويجب الإيمان بالقدر خيره وشره.',
    category: 'القدر',
    source: 'سنن أبي داود'
  },
  {
    id: 9,
    question: 'ما هي الأسماء الحسنى؟',
    answer: 'الأسماء الحسنى هي أسماء الله تعالى التي وردت في القرآن والسنة، وهي تسعة وتسعون اسماً، من أحصاها دخل الجنة، كالرحمن، الرحيم، الملك، القدوس.',
    category: 'الأسماء والصفات',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 10,
    question: 'ما حكم التأويل في الصفات؟',
    answer: 'التأويل في الصفات بدعة، يجب إثبات الصفات لله تعالى كما وردت في النصوص من غير تحريف ولا تعطيل ولا تكييف ولا تمثيل، قال تعالى: "لَيْسَ كَمِثْلِهِ شَيْءٌ".',
    category: 'الأسماء والصفات',
    source: 'القرآن الكريم'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'الإيمان', value: 'الإيمان' },
  { name: 'التوحيد', value: 'التوحيد' },
  { name: 'الشرك', value: 'الشرك' },
  { name: 'القدر', value: 'القدر' },
  { name: 'الأسماء والصفات', value: 'الأسماء والصفات' }
];

const AqeedahQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = aqeedahQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-red-800 dark:text-red-400">
            أسئلة وأجوبة العقيدة
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الإيمان والتوحيد والشرك والقدر والأسماء والصفات
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-arabic hover:bg-red-700 transition-colors text-center"
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
                    ? 'bg-red-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-red-800 dark:text-red-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded px-3 py-1 text-sm font-arabic">
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

export default AqeedahQuestions; 