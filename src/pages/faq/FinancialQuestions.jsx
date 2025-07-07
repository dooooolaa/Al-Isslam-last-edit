import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fuzzyIncludes from '../fuzzy';

const financialQuestions = [
  {
    id: 1,
    question: 'ما هو الربا؟',
    answer: 'الربا هو الزيادة المشروطة في القرض أو البيع، وهو محرم في الإسلام، قال تعالى: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا"، ويشمل ربا النسيئة وربا الفضل.',
    category: 'الربا',
    source: 'القرآن الكريم'
  },
  {
    id: 2,
    question: 'ما حكم بيع الذهب بالذهب مع الزيادة؟',
    answer: 'لا يجوز بيع الذهب بالذهب مع الزيادة، فهذا من الربا المحرم، قال النبي صلى الله عليه وسلم: "الذهب بالذهب، والفضة بالفضة، والبر بالبر، والشعير بالشعير، والتمر بالتمر، والملح بالملح، مثلاً بمثل، سواء بسواء، يداً بيد" رواه مسلم.',
    category: 'الربا',
    source: 'صحيح مسلم'
  },
  {
    id: 3,
    question: 'ما حكم القروض البنكية ذات الفائدة؟',
    answer: 'القروض البنكية التي تشتمل على فائدة ربوية محرمة شرعاً، ولا يجوز للمسلم التعامل بها إلا للضرورة القصوى، والأفضل البحث عن البدائل الإسلامية.',
    category: 'القرض',
    source: 'كتب الفقه'
  },
  {
    id: 4,
    question: 'ما حكم التعامل بالأسهم؟',
    answer: 'يجوز التعامل بالأسهم النقية التي لا تتعامل بالربا، ويحرم التعامل بأسهم الشركات الربوية أو التي تتعامل بالمحرمات، ويجب التأكد من طبيعة نشاط الشركة.',
    category: 'الأسهم',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 5,
    question: 'ما حكم العملات الرقمية؟',
    answer: 'العملات الرقمية كالبيتكوين محل خلاف بين العلماء، فمنهم من يرى جوازها ومنهم من يرى حرمتها، والأحوط الابتعاد عنها لعدم استقرار قيمتها وعدم ضمانها.',
    category: 'العملات',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 6,
    question: 'ما حكم التأمين التجاري؟',
    answer: 'التأمين التجاري محرم شرعاً لأنه من الغرر والمقامرة، والأفضل اللجوء للتأمين التعاوني الإسلامي الذي يقوم على التبرع والتعاون.',
    category: 'البيع',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 7,
    question: 'ما حكم البيع بالتقسيط مع الزيادة؟',
    answer: 'البيع بالتقسيط مع الزيادة جائز إذا كان البيع صحيحاً، والزيادة مقابل الأجل، بشرط أن تكون الزيادة معقولة وغير مفرطة.',
    category: 'البيع',
    source: 'كتب الفقه'
  },
  {
    id: 8,
    question: 'ما حكم المضاربة في البورصة؟',
    answer: 'المضاربة في البورصة محرمة لأنها من القمار والغرر، والأسهم المباحة هي التي تشتري للاستثمار وليس للمضاربة السريعة.',
    category: 'الأسهم',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 9,
    question: 'ما حكم البيع على المكشوف؟',
    answer: 'البيع على المكشوف (بيع ما لا تملك) محرم شرعاً لأنه من الغرر والمقامرة، قال النبي صلى الله عليه وسلم: "لا تبع ما ليس عندك" رواه الترمذي.',
    category: 'البيع',
    source: 'سنن الترمذي'
  },
  {
    id: 10,
    question: 'ما حكم زكاة الأموال المستثمرة؟',
    answer: 'زكاة الأموال المستثمرة واجبة إذا بلغت النصاب ومر عليها الحول، وتخرج على رأس المال والأرباح، ومقدارها ربع العشر (2.5%) من القيمة الإجمالية.',
    category: 'الزكاة',
    source: 'كتب الفقه'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'الربا', value: 'الربا' },
  { name: 'البيع', value: 'البيع' },
  { name: 'القرض', value: 'القرض' },
  { name: 'الزكاة', value: 'الزكاة' },
  { name: 'الأسهم', value: 'الأسهم' },
  { name: 'العملات', value: 'العملات' }
];

const FinancialQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = financialQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = fuzzyIncludes(q.question, searchQuery) || fuzzyIncludes(q.answer, searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-blue-800 dark:text-blue-400">
            أسئلة وأجوبة المعاملات المالية
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الربا والبيع والقرض والزكاة والأسهم والعملات
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-arabic hover:bg-blue-700 transition-colors text-center"
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
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-blue-800 dark:text-blue-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded px-3 py-1 text-sm font-arabic">
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

export default FinancialQuestions; 