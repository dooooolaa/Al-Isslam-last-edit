import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const youthQuestions = [
  {
    id: 1,
    question: 'ما حكم العلاقات العاطفية قبل الزواج؟',
    answer: 'العلاقات العاطفية قبل الزواج محرمة شرعاً، قال النبي صلى الله عليه وسلم: "لا يخلون رجل بامرأة إلا مع ذي محرم" رواه البخاري ومسلم، ويجب الابتعاد عنها.',
    category: 'العلاقات',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 2,
    question: 'ما حكم الصداقة بين الجنسين؟',
    answer: 'الصداقة بين الجنسين محرمة شرعاً لأنها تؤدي إلى الفتنة، قال النبي صلى الله عليه وسلم: "إياكم والدخول على النساء" رواه البخاري ومسلم.',
    category: 'العلاقات',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 3,
    question: 'ما حكم استخدام الإنترنت للشباب؟',
    answer: 'استخدام الإنترنت مباح في الأصل، لكن يجب الحذر من المحرمات كالمواقع الإباحية أو إضاعة الوقت عن العبادات، ويجب استخدامه في الخير.',
    category: 'الإنترنت',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 4,
    question: 'ما حكم الألعاب الإلكترونية للشباب؟',
    answer: 'الألعاب الإلكترونية مباحة ما لم تشتمل على محرمات كالربا أو الصور المحرمة أو إضاعة الوقت عن الواجبات، ويجب الاعتدال في اللعب.',
    category: 'الإنترنت',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 5,
    question: 'ما حكم العبادة في سن المراهقة؟',
    answer: 'العبادة واجبة على المراهق إذا بلغ، قال النبي صلى الله عليه وسلم: "مروا أبناءكم بالصلاة لسبع" رواه أبو داود، ويجب تعليمهم العبادات تدريجياً.',
    category: 'العبادة',
    source: 'سنن أبي داود'
  },
  {
    id: 6,
    question: 'ما حكم اختيار الأصدقاء؟',
    answer: 'اختيار الأصدقاء مهم جداً، قال النبي صلى الله عليه وسلم: "المرء على دين خليله فلينظر أحدكم من يخالل" رواه أبو داود، يجب اختيار الصالحين.',
    category: 'الأصدقاء',
    source: 'سنن أبي داود'
  },
  {
    id: 7,
    question: 'ما حكم الدراسة والتعليم للشباب؟',
    answer: 'الدراسة والتعليم واجب شرعاً، قال النبي صلى الله عليه وسلم: "طلب العلم فريضة على كل مسلم" رواه ابن ماجه، ويجب الاجتهاد في الدراسة.',
    category: 'العبادة',
    source: 'سنن ابن ماجه'
  },
  {
    id: 8,
    question: 'ما حكم استخدام وسائل التواصل الاجتماعي؟',
    answer: 'وسائل التواصل الاجتماعي مباحة في الأصل، لكن يجب الحذر من المحرمات كالغيبة والنميمة أو إضاعة الوقت، ويجب استخدامها في الخير.',
    category: 'الإنترنت',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 9,
    question: 'ما حكم الرياضة والتمارين للشباب؟',
    answer: 'الرياضة والتمارين مستحبة للشباب، قال النبي صلى الله عليه وسلم: "المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف" رواه مسلم.',
    category: 'العبادة',
    source: 'صحيح مسلم'
  },
  {
    id: 10,
    question: 'ما حكم الاهتمام بالمظهر للشباب؟',
    answer: 'الاهتمام بالمظهر مباح في حدود الشرع، قال النبي صلى الله عليه وسلم: "إن الله جميل يحب الجمال" رواه مسلم، لكن يحرم الإسراف والتبذير.',
    category: 'الأصدقاء',
    source: 'صحيح مسلم'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'العلاقات', value: 'العلاقات' },
  { name: 'الأصدقاء', value: 'الأصدقاء' },
  { name: 'العبادة', value: 'العبادة' },
  { name: 'الإنترنت', value: 'الإنترنت' }
];

const YouthQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = youthQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-violet-800 dark:text-violet-400">
            أسئلة وأجوبة المراهقين والشباب
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول العلاقات والأصدقاء والعبادة والإنترنت
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-violet-600 text-white rounded-lg font-arabic hover:bg-violet-700 transition-colors text-center"
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
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-violet-800 dark:text-violet-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 rounded px-3 py-1 text-sm font-arabic">
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

export default YouthQuestions; 