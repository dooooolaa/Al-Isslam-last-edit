import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const hijriCalendarQuestions = [
  {
    id: 1,
    question: 'ما هو التقويم الهجري؟',
    answer: 'التقويم الهجري هو التقويم الإسلامي الذي يعتمد على دورة القمر، بدأ العمل به في عهد الخليفة عمر بن الخطاب رضي الله عنه، ويبدأ من هجرة النبي صلى الله عليه وسلم من مكة إلى المدينة.',
    category: 'معلومات عامة',
    source: 'كتب التاريخ الإسلامي'
  },
  {
    id: 2,
    question: 'كم عدد أيام الشهر الهجري؟',
    answer: 'الشهر الهجري إما 29 أو 30 يوماً، وذلك حسب رؤية الهلال، ولا يمكن أن يكون أقل من 29 أو أكثر من 30 يوماً.',
    category: 'أحكام التقويم',
    source: 'القرآن الكريم'
  },
  {
    id: 3,
    question: 'ما هي أسماء الشهور الهجرية؟',
    answer: 'الشهور الهجرية: محرم، صفر، ربيع الأول، ربيع الآخر، جمادى الأولى، جمادى الآخرة، رجب، شعبان، رمضان، شوال، ذو القعدة، ذو الحجة.',
    category: 'معلومات عامة',
    source: 'كتب التاريخ الإسلامي'
  },
  {
    id: 4,
    question: 'ما حكم رؤية الهلال؟',
    answer: 'رؤية الهلال واجبة لبداية الشهر، قال النبي صلى الله عليه وسلم: "صوموا لرؤيته وأفطروا لرؤيته، فإن غم عليكم فأكملوا عدة شعبان ثلاثين" رواه البخاري ومسلم.',
    category: 'أحكام رؤية الهلال',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 5,
    question: 'ما حكم من رأى الهلال وحده؟',
    answer: 'إذا رأى الهلال شخص واحد موثوق به، وجب العمل برؤيته، أما إذا كان غير موثوق فلا تقبل رؤيته إلا مع غيره.',
    category: 'أحكام رؤية الهلال',
    source: 'كتب الفقه'
  },
  {
    id: 6,
    question: 'ما هي الأشهر الحرم؟',
    answer: 'الأشهر الحرم أربعة: ذو القعدة، ذو الحجة، محرم، رجب. قال تعالى: "إِنَّ عِدَّةَ الشُّهُورِ عِنْدَ اللَّهِ اثْنَا عَشَرَ شَهْرًا فِي كِتَابِ اللَّهِ يَوْمَ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ مِنْهَا أَرْبَعَةٌ حُرُمٌ".',
    category: 'الأشهر الحرم',
    source: 'القرآن الكريم'
  },
  {
    id: 7,
    question: 'ما حكم القتال في الأشهر الحرم؟',
    answer: 'القتال محرم في الأشهر الحرم إلا للدفاع عن النفس أو رد العدوان، قال تعالى: "فَلَا تَظْلِمُوا فِيهِنَّ أَنْفُسَكُمْ".',
    category: 'الأشهر الحرم',
    source: 'القرآن الكريم'
  },
  {
    id: 8,
    question: 'ما هي فضائل شهر رجب؟',
    answer: 'شهر رجب من الأشهر الحرم، وفيه الإسراء والمعراج، ويستحب فيه الصيام والعبادة، لكن لا توجد أعمال خاصة به غير مشروعة.',
    category: 'فضائل الشهور',
    source: 'كتب الحديث'
  },
  {
    id: 9,
    question: 'ما هي فضائل شهر شعبان؟',
    answer: 'شهر شعبان هو شهر النبي صلى الله عليه وسلم، كان يصوم فيه كثيراً، وفيه ليلة النصف من شعبان التي يستحب قيامها.',
    category: 'فضائل الشهور',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 10,
    question: 'ما حكم صيام النصف من شعبان؟',
    answer: 'صيام النصف من شعبان مستحب، قال النبي صلى الله عليه وسلم: "إذا كان ليلة النصف من شعبان فقوموا ليلها وصوموا نهارها" رواه ابن ماجه.',
    category: 'أحكام الصيام',
    source: 'سنن ابن ماجه'
  },
  {
    id: 11,
    question: 'ما هي الأيام البيض؟',
    answer: 'الأيام البيض هي الثالث عشر والرابع عشر والخامس عشر من كل شهر هجري، ويستحب صيامها، قال النبي صلى الله عليه وسلم: "صيام ثلاثة أيام من كل شهر صيام الدهر" رواه البخاري ومسلم.',
    category: 'أحكام الصيام',
    source: 'صحيح البخاري ومسلم'
  },
  {
    id: 12,
    question: 'ما حكم العمل بالتقويم الميلادي؟',
    answer: 'يجوز العمل بالتقويم الميلادي في المعاملات الدنيوية، لكن في العبادات كالصيام والحج يجب العمل بالتقويم الهجري.',
    category: 'أحكام التقويم',
    source: 'كتب الفقه'
  }
];

const categories = [
  { name: 'جميع الأسئلة', value: 'all' },
  { name: 'معلومات عامة', value: 'معلومات عامة' },
  { name: 'أحكام التقويم', value: 'أحكام التقويم' },
  { name: 'أحكام رؤية الهلال', value: 'أحكام رؤية الهلال' },
  { name: 'الأشهر الحرم', value: 'الأشهر الحرم' },
  { name: 'فضائل الشهور', value: 'فضائل الشهور' },
  { name: 'أحكام الصيام', value: 'أحكام الصيام' }
];

const HijriCalendarQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = hijriCalendarQuestions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category.includes(selectedCategory);
    const matchesSearch = q.question.includes(searchQuery) || q.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold mb-4 font-arabic text-blue-800 dark:text-blue-400">
            أسئلة وأجوبة التقويم الهجري
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-arabic">
            إجابات على الأسئلة الشائعة حول التقويم الهجري والأشهر الإسلامية
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
              to="/events/hijri-calendar"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-arabic hover:bg-blue-700 transition-colors text-center"
            >
              العودة للتقويم الهجري
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-arabic transition-colors text-sm ${
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

export default HijriCalendarQuestions; 