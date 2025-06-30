import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const entertainmentQuestions = [
  {
    id: 1,
    question: 'ما حكم الموسيقى والغناء؟',
    answer: 'الموسيقى والغناء محل خلاف بين العلماء، فمنهم من يرى حرمتها ومنهم من يرى جوازها بشرط عدم اشتمالها على محرمات، والأحوط الابتعاد عنها.',
    category: 'الموسيقى',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 2,
    question: 'ما حكم الألعاب الإلكترونية؟',
    answer: 'الألعاب الإلكترونية مباحة ما لم تشتمل على محرمات كالربا أو الصور المحرمة أو إضاعة الوقت عن الواجبات، ويجب الاعتدال في اللعب.',
    category: 'الألعاب',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 3,
    question: 'ما حكم التصوير الفوتوغرافي؟',
    answer: 'التصوير الفوتوغرافي جائز في الأصل، لكن يحرم تصوير ذوات الأرواح إذا كان للتعظيم أو التبجيل، والأفضل الابتعاد عن تصوير الأشخاص.',
    category: 'التصوير',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 4,
    question: 'ما حكم الزينة والتجميل؟',
    answer: 'الزينة والتجميل مباحان للمرأة في حدود الشرع، قال تعالى: "وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا لِبُعُولَتِهِنَّ"، ويحرم التبرج والسفور.',
    category: 'الزينة',
    source: 'القرآن الكريم'
  },
  {
    id: 5,
    question: 'ما حكم مشاهدة الأفلام والمسلسلات؟',
    answer: 'مشاهدة الأفلام والمسلسلات جائزة إذا لم تشتمل على محرمات كالعري أو الفحش أو الشرك، ويجب الحذر من إضاعة الوقت عن العبادات.',
    category: 'الموسيقى',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 6,
    question: 'ما حكم اللباس العاري؟',
    answer: 'اللباس العاري محرم شرعاً، قال النبي صلى الله عليه وسلم: "صنفان من أهل النار لم أرهما: قوم معهم سياط كأذناب البقر يضربون بها الناس" رواه مسلم.',
    category: 'اللباس',
    source: 'صحيح مسلم'
  },
  {
    id: 7,
    question: 'ما حكم الرياضة والتمارين؟',
    answer: 'الرياضة والتمارين مباحة ومستحبة للحفاظ على الصحة، قال النبي صلى الله عليه وسلم: "المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف" رواه مسلم.',
    category: 'الألعاب',
    source: 'صحيح مسلم'
  },
  {
    id: 8,
    question: 'ما حكم السفر للسياحة؟',
    answer: 'السفر للسياحة مباح إذا كان في حدود الشرع، ويجب الحذر من الأماكن المحرمة أو المخالطة المحرمة، والأفضل السفر للعبادة.',
    category: 'اللباس',
    source: 'كتب الفقه'
  },
  {
    id: 9,
    question: 'ما حكم استخدام وسائل التواصل الاجتماعي؟',
    answer: 'وسائل التواصل الاجتماعي مباحة في الأصل، لكن يجب الحذر من المحرمات كالغيبة والنميمة وإضاعة الوقت، ويجب استخدامها في الخير.',
    category: 'التصوير',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 10,
    question: 'ما حكم الاحتفال بأعياد الميلاد؟',
    answer: 'الاحتفال بأعياد الميلاد بدعة لم تكن في عهد النبي صلى الله عليه وسلم، والأفضل الابتعاد عنها والاكتفاء بالشكر لله على نعمة العمر.',
    category: 'الزينة',
    source: 'كتب العقيدة'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'الموسيقى', value: 'الموسيقى' },
  { name: 'الألعاب', value: 'الألعاب' },
  { name: 'اللباس', value: 'اللباس' },
  { name: 'التصوير', value: 'التصوير' },
  { name: 'الزينة', value: 'الزينة' }
];

const EntertainmentQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = entertainmentQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-yellow-800 dark:text-yellow-400">
            أسئلة وأجوبة الترفيه والمباحات
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الموسيقى والألعاب واللباس والتصوير والزينة
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-arabic hover:bg-yellow-700 transition-colors text-center"
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
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-yellow-800 dark:text-yellow-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded px-3 py-1 text-sm font-arabic">
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

export default EntertainmentQuestions; 