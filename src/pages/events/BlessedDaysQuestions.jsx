import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blessedDaysQuestions = [
  {
    id: 1,
    question: 'ما هي الأيام المباركة في الإسلام؟',
    answer: 'الأيام المباركة تشمل: يوم الجمعة، العشر من ذي الحجة، يوم عرفة، يوم النحر، أيام التشريق، ليلة القدر، يوم عاشوراء، ليلة النصف من شعبان، وغيرها من الأيام التي وردت فيها نصوص شرعية.',
    category: 'معلومات عامة',
    source: 'كتب الحديث والفقه'
  },
  {
    id: 2,
    question: 'ما هي فضائل يوم الجمعة؟',
    answer: 'يوم الجمعة هو أفضل أيام الأسبوع، فيه ساعة الإجابة، وفيه صلاة الجمعة التي هي أفضل الصلوات، قال النبي صلى الله عليه وسلم: "خير يوم طلعت عليه الشمس يوم الجمعة" رواه مسلم.',
    category: 'فضائل الأيام',
    source: 'صحيح مسلم'
  },
  {
    id: 3,
    question: 'ما حكم صيام يوم الجمعة؟',
    answer: 'صيام يوم الجمعة منفرداً مكروه، إلا إذا كان يوافق عادة كصيام يوم وإفطار يوم، أو كان يصوم قبله أو بعده، أو كان يوافق يوم عاشوراء أو عرفة.',
    category: 'أحكام الصيام',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 4,
    question: 'ما هي فضائل العشر من ذي الحجة؟',
    answer: 'العشر من ذي الحجة هي أفضل أيام السنة، قال النبي صلى الله عليه وسلم: "ما من أيام العمل الصالح فيها أحب إلى الله من هذه الأيام" رواه البخاري.',
    category: 'فضائل الأيام',
    source: 'صحيح البخاري'
  },
  {
    id: 5,
    question: 'ما حكم صيام العشر من ذي الحجة؟',
    answer: 'صيام العشر من ذي الحجة مستحب، إلا يوم العيد فلا يجوز صيامه، وأفضلها صيام يوم عرفة لغير الحاج.',
    category: 'أحكام الصيام',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 6,
    question: 'ما هي فضائل يوم عرفة؟',
    answer: 'يوم عرفة هو أفضل أيام السنة، قال النبي صلى الله عليه وسلم: "صيام يوم عرفة أحتسب على الله أن يكفر السنة التي قبله والسنة التي بعده" رواه مسلم.',
    category: 'فضائل الأيام',
    source: 'صحيح مسلم'
  },
  {
    id: 7,
    question: 'ما حكم صيام يوم عاشوراء؟',
    answer: 'صيام يوم عاشوراء مستحب، قال النبي صلى الله عليه وسلم: "صيام يوم عاشوراء أحتسب على الله أن يكفر السنة التي قبله" رواه مسلم.',
    category: 'أحكام الصيام',
    source: 'صحيح مسلم'
  },
  {
    id: 8,
    question: 'ما هي فضائل ليلة القدر؟',
    answer: 'ليلة القدر هي خير من ألف شهر، فيها أنزل القرآن، يغفر الله فيها الذنوب لمن قامها إيماناً واحتساباً، قال تعالى: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ".',
    category: 'فضائل الليالي',
    source: 'القرآن الكريم'
  },
  {
    id: 9,
    question: 'ما حكم قيام ليلة القدر؟',
    answer: 'قيام ليلة القدر مستحب، قال النبي صلى الله عليه وسلم: "من قام ليلة القدر إيماناً واحتساباً غفر له ما تقدم من ذنبه" رواه البخاري ومسلم.',
    category: 'أحكام العبادة',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 10,
    question: 'ما هي فضائل ليلة النصف من شعبان؟',
    answer: 'ليلة النصف من شعبان هي ليلة مباركة، يستحب فيها قيام الليل والعبادة، قال النبي صلى الله عليه وسلم: "إذا كان ليلة النصف من شعبان فقوموا ليلها وصوموا نهارها" رواه ابن ماجه.',
    category: 'فضائل الليالي',
    source: 'سنن ابن ماجه'
  },
  {
    id: 11,
    question: 'ما حكم الاحتفال بالمولد النبوي؟',
    answer: 'الاحتفال بالمولد النبوي بدعة لم تكن في عهد النبي صلى الله عليه وسلم ولا الصحابة، والأفضل إحياء سنته صلى الله عليه وسلم واتباع هديه.',
    category: 'أحكام العبادة',
    source: 'كتب العقيدة'
  },
  {
    id: 12,
    question: 'ما هي الأيام التي يستحب فيها الصيام؟',
    answer: 'يستحب الصيام في: يوم عرفة، يوم عاشوراء، الأيام البيض (13-15 من كل شهر)، الاثنين والخميس، ستة أيام من شوال، العشر من ذي الحجة، شهر محرم.',
    category: 'أحكام الصيام',
    source: 'صحيح البخاري ومسلم'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'معلومات عامة', value: 'معلومات عامة' },
  { name: 'فضائل الأيام', value: 'فضائل الأيام' },
  { name: 'فضائل الليالي', value: 'فضائل الليالي' },
  { name: 'أحكام الصيام', value: 'أحكام الصيام' },
  { name: 'أحكام العبادة', value: 'أحكام العبادة' }
];

const BlessedDaysQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = blessedDaysQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-purple-800 dark:text-purple-400">
            أسئلة وأجوبة الأيام المباركة
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول الأيام والليالي المباركة في الإسلام
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              to="/events/blessed-days"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-arabic hover:bg-purple-700 transition-colors text-center"
            >
              العودة لصفحة الأيام المباركة
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-arabic transition-colors text-sm ${
                  selectedCategory === cat.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
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
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-purple-800 dark:text-purple-400">
                    {q.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-arabic leading-relaxed">
                    {q.answer}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded px-3 py-1 text-sm font-arabic">
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

export default BlessedDaysQuestions; 