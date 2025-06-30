import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const hajjUmrahQuestions = [
  {
    id: 1,
    question: 'ما هي شروط وجوب الحج؟',
    answer: 'شروط وجوب الحج: الإسلام، البلوغ، العقل، الحرية، الاستطاعة (المال والصحة والأمان)، وجود المحرم للمرأة.',
    category: 'أحكام الحج',
    source: 'كتب الفقه'
  },
  {
    id: 2,
    question: 'ما هي أركان الحج؟',
    answer: 'أركان الحج: الإحرام، الوقوف بعرفة، طواف الإفاضة، السعي بين الصفا والمروة.',
    category: 'أركان الحج',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 3,
    question: 'ما هي واجبات الحج؟',
    answer: 'واجبات الحج: الإحرام من الميقات، المبيت بمزدلفة، المبيت بمنى، رمي الجمرات، الحلق أو التقصير، طواف الوداع.',
    category: 'واجبات الحج',
    source: 'كتب الفقه'
  },
  {
    id: 4,
    question: 'ما حكم العمرة؟',
    answer: 'العمرة سنة مؤكدة، تجب مرة واحدة في العمر على المستطيع، وتصح في أي وقت من السنة.',
    category: 'أحكام العمرة',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 5,
    question: 'ما هي أركان العمرة؟',
    answer: 'أركان العمرة: الإحرام، الطواف، السعي بين الصفا والمروة، الحلق أو التقصير.',
    category: 'أركان العمرة',
    source: 'كتب الفقه'
  },
  {
    id: 6,
    question: 'ما هي محظورات الإحرام؟',
    answer: 'محظورات الإحرام: حلق الشعر، تقليم الأظافر، لبس المخيط، تغطية الرأس للرجل، تغطية الوجه للمرأة، الطيب، الجماع، الصيد.',
    category: 'محظورات الإحرام',
    source: 'كتب الفقه'
  },
  {
    id: 7,
    question: 'ما حكم من ارتكب محظوراً من محظورات الإحرام؟',
    answer: 'من ارتكب محظوراً من محظورات الإحرام فعليه فدية: إما ذبح شاة، أو إطعام ستة مساكين، أو صيام ثلاثة أيام.',
    category: 'أحكام الإحرام',
    source: 'كتب الفقه'
  },
  {
    id: 8,
    question: 'ما حكم طواف الوداع؟',
    answer: 'طواف الوداع واجب على الحاج، ويجب على المعتمر إذا كان من خارج الحرم، ولا يجب على من كان من أهل مكة.',
    category: 'أحكام الطواف',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 9,
    question: 'ما حكم رمي الجمرات؟',
    answer: 'رمي الجمرات واجب في الحج، يرمي الحاج جمرة العقبة يوم العيد، والجمرات الثلاث في أيام التشريق.',
    category: 'أحكام الرمي',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 10,
    question: 'ما حكم المبيت بمنى؟',
    answer: 'المبيت بمنى واجب في ليلة الحادي عشر والثاني عشر والثالث عشر من ذي الحجة، ويجوز المبيت في مكة للمعذورين.',
    category: 'أحكام المبيت',
    source: 'كتب الفقه'
  },
  {
    id: 11,
    question: 'ما حكم التلبية؟',
    answer: 'التلبية مستحبة في الإحرام، يقول الحاج: "لبيك اللهم لبيك، لبيك لا شريك لك لبيك، إن الحمد والنعمة لك والملك، لا شريك لك".',
    category: 'آداب الحج',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 12,
    question: 'ما حكم من فاته الوقوف بعرفة؟',
    answer: 'من فاته الوقوف بعرفة فقد فاته الحج، وعليه قضاؤه في العام القادم، ولا يصح حجه.',
    category: 'أحكام الحج',
    source: 'كتب الفقه'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'أحكام الحج', value: 'أحكام الحج' },
  { name: 'أركان الحج', value: 'أركان الحج' },
  { name: 'واجبات الحج', value: 'واجبات الحج' },
  { name: 'أحكام العمرة', value: 'أحكام العمرة' },
  { name: 'أركان العمرة', value: 'أركان العمرة' },
  { name: 'محظورات الإحرام', value: 'محظورات الإحرام' },
  { name: 'أحكام الإحرام', value: 'أحكام الإحرام' },
  { name: 'أحكام الطواف', value: 'أحكام الطواف' },
  { name: 'أحكام الرمي', value: 'أحكام الرمي' },
  { name: 'أحكام المبيت', value: 'أحكام المبيت' },
  { name: 'آداب الحج', value: 'آداب الحج' }
];

const HajjUmrahQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = hajjUmrahQuestions.filter(q => {
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
            أسئلة وأجوبة الحج والعمرة
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول مناسك الحج والعمرة
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
              to="/events/hajj-umrah"
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-arabic hover:bg-yellow-700 transition-colors text-center"
            >
              العودة لصفحة الحج والعمرة
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-arabic transition-colors text-sm ${
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

export default HajjUmrahQuestions; 