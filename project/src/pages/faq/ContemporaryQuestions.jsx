import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const contemporaryQuestions = [
  {
    id: 1,
    question: 'ما حكم التلقيح الصناعي؟',
    answer: 'التلقيح الصناعي جائز إذا كان بين الزوجين وباستخدام بويضة الزوجة وحيوان منوي الزوج، ويحرم استخدام حيوان منوي أو بويضة من شخص آخر.',
    category: 'المسائل الطبية',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 2,
    question: 'ما حكم زراعة الأعضاء؟',
    answer: 'زراعة الأعضاء جائزة إذا كانت من شخص حي برضاه أو من ميت، وكانت لإنقاذ حياة إنسان، ويحرم بيع الأعضاء أو الاتجار بها.',
    category: 'المسائل الطبية',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 3,
    question: 'ما حكم الذكاء الاصطناعي؟',
    answer: 'الذكاء الاصطناعي مباح في الأصل إذا استخدم في الخير، لكن يحرم استخدامه في المحرمات كالربا أو القمار أو إضاعة الوقت عن العبادات.',
    category: 'الذكاء الاصطناعي',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 4,
    question: 'ما حكم العملات الرقمية؟',
    answer: 'العملات الرقمية كالبيتكوين محل خلاف بين العلماء، فمنهم من يرى جوازها ومنهم من يرى حرمتها، والأحوط الابتعاد عنها لعدم استقرار قيمتها.',
    category: 'المستجدات',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 5,
    question: 'ما حكم التبرع بالدم؟',
    answer: 'التبرع بالدم جائز ومستحب إذا كان لإنقاذ حياة إنسان، قال النبي صلى الله عليه وسلم: "من أحيا نفساً فكأنما أحيا الناس جميعاً" رواه البخاري.',
    category: 'المسائل الطبية',
    source: 'صحيح البخاري'
  },
  {
    id: 6,
    question: 'ما حكم استخدام الإنترنت؟',
    answer: 'استخدام الإنترنت مباح في الأصل، لكن يجب الحذر من المحرمات كالمواقع الإباحية أو إضاعة الوقت عن العبادات، ويجب استخدامه في الخير.',
    category: 'المستجدات',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 7,
    question: 'ما حكم التصوير بالفيديو؟',
    answer: 'التصوير بالفيديو جائز في الأصل، لكن يحرم تصوير المحرمات أو استخدامه في الإضرار بالآخرين، ويجب احترام خصوصية الناس.',
    category: 'المستجدات',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 8,
    question: 'ما حكم البنوك الإسلامية؟',
    answer: 'البنوك الإسلامية جائزة إذا التزمت بأحكام الشريعة الإسلامية، وتجنبت الربا والغرر والمخاطرة، ويجب التأكد من طبيعة معاملاتها.',
    category: 'المستجدات',
    source: 'كتب الفقه المعاصر'
  },
  {
    id: 9,
    question: 'ما حكم التطعيم ضد الأمراض؟',
    answer: 'التطعيم ضد الأمراض جائز ومستحب إذا كان آمناً وفعالاً، قال النبي صلى الله عليه وسلم: "تداووا عباد الله" رواه الترمذي.',
    category: 'المسائل الطبية',
    source: 'سنن الترمذي'
  },
  {
    id: 10,
    question: 'ما حكم استخدام الهاتف المحمول؟',
    answer: 'استخدام الهاتف المحمول مباح في الأصل، لكن يجب الحذر من المحرمات كالغيبة والنميمة أو إضاعة الوقت عن العبادات، ويجب استخدامه في الخير.',
    category: 'المستجدات',
    source: 'كتب الفقه المعاصر'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'المستجدات', value: 'المستجدات' },
  { name: 'الفتاوى المعاصرة', value: 'الفتاوى المعاصرة' },
  { name: 'المسائل الطبية', value: 'المسائل الطبية' },
  { name: 'الذكاء الاصطناعي', value: 'الذكاء الاصطناعي' }
];

const ContemporaryQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = contemporaryQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-teal-800 dark:text-teal-400">
            أسئلة وأجوبة النوازل
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول المستجدات والفتاوى المعاصرة والمسائل الطبية والذكاء الاصطناعي
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg font-arabic hover:bg-teal-700 transition-colors text-center"
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
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-teal-800 dark:text-teal-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded px-3 py-1 text-sm font-arabic">
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

export default ContemporaryQuestions; 