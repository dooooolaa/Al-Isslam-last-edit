import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const womenQuestions = [
  {
    id: 1,
    question: 'ما حكم الحجاب للمرأة المسلمة؟',
    answer: 'الحجاب واجب على المرأة المسلمة، قال تعالى: "وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ"، ويجب ستر جميع البدن ما عدا الوجه والكفين.',
    category: 'الحجاب',
    source: 'القرآن الكريم'
  },
  {
    id: 2,
    question: 'ما حكم الاختلاط بين الرجال والنساء؟',
    answer: 'الاختلاط المحرم هو الاختلاط الذي يؤدي إلى الفتنة أو الخلوة، قال النبي صلى الله عليه وسلم: "لا يخلون رجل بامرأة إلا مع ذي محرم" رواه البخاري ومسلم.',
    category: 'الاختلاط',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 3,
    question: 'ما حكم عمل المرأة خارج البيت؟',
    answer: 'عمل المرأة خارج البيت جائز إذا كان العمل حلالاً ولم يترتب عليه محرمات، ويجب مراعاة الحجاب والاختلاط المحرم.',
    category: 'العمل',
    source: 'كتب الفقه'
  },
  {
    id: 4,
    question: 'ما حكم صلاة المرأة في المسجد؟',
    answer: 'صلاة المرأة في المسجد جائزة، قال النبي صلى الله عليه وسلم: "لا تمنعوا إماء الله مساجد الله" رواه البخاري ومسلم، لكن صلاتها في البيت أفضل.',
    category: 'الحجاب',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 5,
    question: 'ما حكم الحيض والنفاس؟',
    answer: 'الحيض والنفاس من الموانع الشرعية للصلاة والصيام، قال النبي صلى الله عليه وسلم: "أليس إذا حاضت لم تصل ولم تصم" رواه البخاري ومسلم.',
    category: 'الحيض',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 6,
    question: 'ما حكم الحمل والرضاعة؟',
    answer: 'الحمل والرضاعة من الأعذار الشرعية التي تبيح الإفطار في رمضان، قال تعالى: "وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ".',
    category: 'الحمل',
    source: 'القرآن الكريم'
  },
  {
    id: 7,
    question: 'ما حكم خروج المرأة من البيت؟',
    answer: 'خروج المرأة من البيت جائز للحاجة المشروعة، قال النبي صلى الله عليه وسلم: "قد أذن لكن أن تخرجن لحاجتكن" رواه البخاري ومسلم.',
    category: 'الاختلاط',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 8,
    question: 'ما حكم تعليم المرأة؟',
    answer: 'تعليم المرأة واجب شرعاً، قال النبي صلى الله عليه وسلم: "طلب العلم فريضة على كل مسلم" رواه ابن ماجه، والمرأة داخلة في هذا العموم.',
    category: 'العمل',
    source: 'سنن ابن ماجه'
  },
  {
    id: 9,
    question: 'ما حكم كشف المرأة وجهها؟',
    answer: 'كشف المرأة وجهها محل خلاف بين العلماء، فمنهم من يرى وجوب تغطيته ومنهم من يرى جواز كشفه، والأحوط التغطية.',
    category: 'الحجاب',
    source: 'كتب الفقه'
  },
  {
    id: 10,
    question: 'ما حكم مشاركة المرأة في الحياة العامة؟',
    answer: 'مشاركة المرأة في الحياة العامة جائزة في حدود الشرع، قال النبي صلى الله عليه وسلم: "النساء شقائق الرجال" رواه أبو داود، لكن مع مراعاة الحجاب والآداب.',
    category: 'العمل',
    source: 'سنن أبي داود'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'الحجاب', value: 'الحجاب' },
  { name: 'الحيض', value: 'الحيض' },
  { name: 'الحمل', value: 'الحمل' },
  { name: 'العمل', value: 'العمل' },
  { name: 'الاختلاط', value: 'الاختلاط' }
];

const WomenQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = womenQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-rose-800 dark:text-rose-400">
            أسئلة وأجوبة المرأة المسلمة
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الحجاب والحيض والحمل والعمل والاختلاط
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/faq"
              className="px-6 py-3 bg-rose-600 text-white rounded-lg font-arabic hover:bg-rose-700 transition-colors text-center"
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
                    ? 'bg-rose-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-rose-800 dark:text-rose-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 rounded px-3 py-1 text-sm font-arabic">
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

export default WomenQuestions; 