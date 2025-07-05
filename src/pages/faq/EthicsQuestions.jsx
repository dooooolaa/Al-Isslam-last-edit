import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ethicsQuestions = [
  {
    id: 1,
    question: 'ما حكم الغيبة؟',
    answer: 'الغيبة محرمة شرعاً، قال تعالى: "وَلَا يَغْتَب بَّعْضُكُم بَعْضًا"، وقال النبي صلى الله عليه وسلم: "الغيبة ذكرك أخاك بما يكره" رواه مسلم.',
    category: 'الغيبة',
    source: 'القرآن الكريم وصحيح مسلم'
  },
  {
    id: 2,
    question: 'ما حكم الكذب؟',
    answer: 'الكذب محرم إلا في حالات محدودة كالإصلاح بين الناس، قال النبي صلى الله عليه وسلم: "إن الكذب يهدي إلى الفجور، وإن الفجور يهدي إلى النار" رواه البخاري ومسلم.',
    category: 'الكذب',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 3,
    question: 'ما حكم الحسد؟',
    answer: 'الحسد محرم شرعاً، قال النبي صلى الله عليه وسلم: "إياكم والحسد، فإن الحسد يأكل الحسنات كما تأكل النار الحطب" رواه أبو داود.',
    category: 'الحسد',
    source: 'سنن أبي داود'
  },
  {
    id: 4,
    question: 'ما حكم الأمر بالمعروف والنهي عن المنكر؟',
    answer: 'الأمر بالمعروف والنهي عن المنكر واجب على كل مسلم حسب قدرته، قال تعالى: "كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ".',
    category: 'الأمر بالمعروف',
    source: 'القرآن الكريم'
  },
  {
    id: 5,
    question: 'ما حكم النميمة؟',
    answer: 'النميمة محرمة شرعاً، قال النبي صلى الله عليه وسلم: "لا يدخل الجنة نمام" رواه البخاري ومسلم، وهي نقل الكلام بين الناس لإفساد العلاقات.',
    category: 'الغيبة',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 6,
    question: 'ما حكم الرياء؟',
    answer: 'الرياء محرم وهو من الشرك الأصغر، قال النبي صلى الله عليه وسلم: "إن أخوف ما أخاف عليكم الشرك الأصغر" قالوا: وما الشرك الأصغر؟ قال: "الرياء" رواه أحمد.',
    category: 'الحسد',
    source: 'مسند أحمد'
  },
  {
    id: 7,
    question: 'ما حكم التكبر؟',
    answer: 'التكبر محرم شرعاً، قال النبي صلى الله عليه وسلم: "لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر" رواه مسلم، والتواضع من صفات المؤمنين.',
    category: 'الأمر بالمعروف',
    source: 'صحيح مسلم'
  },
  {
    id: 8,
    question: 'ما حكم السب والشتم؟',
    answer: 'السب والشتم محرمان، قال النبي صلى الله عليه وسلم: "سباب المسلم فسوق، وقتاله كفر" رواه البخاري ومسلم، ويجب التحلي بحسن الخلق.',
    category: 'الكذب',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 9,
    question: 'ما حكم الغضب؟',
    answer: 'الغضب مكروه إلا لله، قال النبي صلى الله عليه وسلم: "لا تغضب" رواه البخاري، ويستحب كظم الغيظ والعفو عن الناس.',
    category: 'الأمر بالمعروف',
    source: 'صحيح البخاري'
  },
  {
    id: 10,
    question: 'ما حكم إفشاء السر؟',
    answer: 'إفشاء السر محرم إلا إذا كان في مصلحة شرعية، قال النبي صلى الله عليه وسلم: "إذا حدث الرجل بالحديث ثم التفت فهي أمانة" رواه الترمذي.',
    category: 'الغيبة',
    source: 'سنن الترمذي'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'الغيبة', value: 'الغيبة' },
  { name: 'الكذب', value: 'الكذب' },
  { name: 'الحسد', value: 'الحسد' },
  { name: 'الأمر بالمعروف', value: 'الأمر بالمعروف' }
];

const EthicsQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = ethicsQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-indigo-800 dark:text-indigo-400">
            أسئلة وأجوبة الأخلاق والسلوك
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الغيبة والكذب والحسد والأمر بالمعروف
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-arabic hover:bg-indigo-700 transition-colors text-center"
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
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-indigo-800 dark:text-indigo-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded px-3 py-1 text-sm font-arabic">
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

export default EthicsQuestions; 