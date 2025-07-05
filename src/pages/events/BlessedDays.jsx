import React from 'react';
import { Link } from 'react-router-dom';

const blessedDays = [
  { name: 'يوم الجمعة', desc: 'خير يوم طلعت عليه الشمس، فيه ساعة إجابة.' },
  { name: 'عاشوراء', desc: 'اليوم العاشر من محرم، يكفر سنة ماضية.' },
  { name: 'يوم عرفة', desc: 'أفضل أيام السنة، يكفر سنتين.' },
  { name: 'العشر من ذي الحجة', desc: 'أفضل أيام الدنيا، العمل فيها أحب إلى الله.' },
  { name: 'ليلة القدر', desc: 'خير من ألف شهر.' },
  { name: 'ليلة النصف من شعبان', desc: 'ليلة مباركة يُغفر فيها للكثير.' },
];

const BlessedDays = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center font-arabic">الأيام المباركة</h1>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">ما هي الأيام المباركة؟</h2>
          <p className="mb-2 font-arabic">الأيام المباركة هي أيام اختصها الله بفضل عظيم، يُستحب فيها الإكثار من الطاعات والأعمال الصالحة.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic"> الأيام المباركة</h2>
          <ul className="list-disc pr-6 font-arabic">
            {blessedDays.map(day => (
              <li key={day.name} className="mb-2"><span className="font-bold text-primary-700">{day.name}:</span> {day.desc}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">أعمال مستحبة في هذه الأيام</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>الصيام(استثناء الجمعه ليست سُنه عن النبي).</li>
            <li>الذكر والدعاء.</li>
            <li>قراءة القرآن.</li>
            <li>الصدقة.</li>
            <li>صلة الرحم.</li>
            <li>قيام الليل.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">أدوات تفاعلية (قريباً)</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>تنبيهات للأيام الفاضلة.</li>
            <li>جدول أعمال للأيام المباركة.</li>
            <li>عداد للأذكار والصيام.</li>
          </ul>
        </section>
        
        {/* أسئلة وأجوبة الأيام المباركة */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-800 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 font-arabic text-purple-800 dark:text-purple-200">
              أسئلة وأجوبة الأيام المباركة
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic">
              إجابات على الأسئلة الشائعة حول الأيام والليالي المباركة في الإسلام
            </p>
            <Link
              to="/events/blessed-days-questions"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-arabic hover:bg-purple-700 transition-colors text-lg"
            >
              عرض الأسئلة والأجوبة
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlessedDays; 