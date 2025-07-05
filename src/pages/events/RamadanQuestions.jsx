import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ramadanQuestions = [
  {
    id: 1,
    question: 'ما هي فضائل شهر رمضان؟',
    answer: 'شهر رمضان هو شهر القرآن وشهر الصيام، فيه ليلة القدر التي هي خير من ألف شهر، وفيه تفتح أبواب الجنة وتغلق أبواب النار، وتصفد الشياطين.',
    category: 'فضائل رمضان',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 2,
    question: 'ما هي شروط وجوب الصيام؟',
    answer: 'شروط وجوب الصيام: الإسلام، البلوغ، العقل، القدرة على الصيام، الإقامة (للمسافر رخصة الإفطار)، عدم وجود مانع شرعي كالحيض والنفاس.',
    category: 'أحكام الصيام',
    source: 'كتب الفقه'
  },
  {
    id: 3,
    question: 'ما حكم من أفطر في رمضان بغير عذر؟',
    answer: 'من أفطر في رمضان بغير عذر فقد ارتكب كبيرة من الكبائر، ويجب عليه التوبة وقضاء اليوم الذي أفطره، مع كفارة إذا كان الفطر بالجماع.',
    category: 'أحكام الصيام',
    source: 'صحيح البخاري'
  },
  {
    id: 4,
    question: 'ما هي مفسدات الصيام؟',
    answer: 'مفسدات الصيام: الأكل والشرب عمداً، الجماع، الاستمناء، القيء عمداً، الحيض والنفاس، الردة عن الإسلام.',
    category: 'أحكام الصيام',
    source: 'كتب الفقه'
  },
  {
    id: 5,
    question: 'ما حكم السحور؟',
    answer: 'السحور مستحب وليس واجباً، وقد قال النبي صلى الله عليه وسلم: "تسحروا فإن في السحور بركة" رواه البخاري ومسلم.',
    category: 'آداب الصيام',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 6,
    question: 'ما حكم تأخير الإفطار؟',
    answer: 'يستحب تعجيل الإفطار عند غروب الشمس، قال النبي صلى الله عليه وسلم: "لا يزال الناس بخير ما عجلوا الفطر" رواه البخاري ومسلم.',
    category: 'آداب الصيام',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 7,
    question: 'ما هي صلاة التراويح؟',
    answer: 'صلاة التراويح هي صلاة قيام الليل في رمضان، وهي سنة مؤكدة، تصلى بعد صلاة العشاء، وعدد ركعاتها إحدى عشرة أو ثلاث عشرة ركعة.',
    category: 'عبادات رمضان',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 8,
    question: 'ما حكم الاعتكاف؟',
    answer: 'الاعتكاف سنة في رمضان، وهو لزوم المسجد للعبادة، وأفضله في العشر الأواخر من رمضان، ويجوز في أي وقت من السنة.',
    category: 'عبادات رمضان',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 9,
    question: 'ما هي ليلة القدر؟',
    answer: 'ليلة القدر هي ليلة في العشر الأواخر من رمضان، فيها أنزل القرآن، وهي خير من ألف شهر، يغفر الله فيها الذنوب لمن قامها إيماناً واحتساباً.',
    category: 'فضائل رمضان',
    source: 'القرآن الكريم'
  },
  {
    id: 10,
    question: 'ما حكم زكاة الفطر؟',
    answer: 'زكاة الفطر واجبة على كل مسلم، تخرج قبل صلاة العيد، مقدارها صاع من الطعام عن كل شخص، وتجب على من يملك قوت يومه.',
    category: 'أحكام مالية',
    source: 'صحيح البخاري ومسلم'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'فضائل رمضان', value: 'فضائل' },
  { name: 'أحكام الصيام', value: 'أحكام' },
  { name: 'آداب الصيام', value: 'آداب' },
  { name: 'عبادات رمضان', value: 'عبادات' },
  { name: 'أحكام مالية', value: 'مالية' }
];

const RamadanQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = ramadanQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-green-800 dark:text-green-400">
            أسئلة وأجوبة شهر رمضان المبارك
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الصيام وعبادات رمضان
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/events/ramadan"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-arabic hover:bg-green-700 transition-colors text-center"
            >
              العودة لصفحة رمضان
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-arabic transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-green-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-green-800 dark:text-green-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded px-3 py-1 text-sm font-arabic">
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

export default RamadanQuestions; 