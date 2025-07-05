import React from 'react';
import { Link } from 'react-router-dom';

const HajjUmrah = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center font-arabic">الحج والعمرة</h1>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">تعريف الحج والعمرة وفضلهما</h2>
          <p className="mb-2 font-arabic">الحج ركن من أركان الإسلام، والعمرة سنة مؤكدة. فيهما تطهير للنفس وتكفير للذنوب وفضل عظيم.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">شروط الحج والعمرة</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>الإسلام، البلوغ، العقل، الحرية، الاستطاعة.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">أركان الحج</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>الإحرام.</li>
            <li>الوقوف بعرفة.</li>
            <li>طواف الإفاضة.</li>
            <li>السعي بين الصفا والمروة.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">واجبات الحج</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>الإحرام من الميقات.</li>
            <li>المبيت بمزدلفة ومنى.</li>
            <li>رمي الجمار.</li>
            <li>الحلق أو التقصير.</li>
            <li>طواف الوداع.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">سنن الحج والعمرة</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>التلبية.</li>
            <li>الاغتسال للإحرام.</li>
            <li>دخول مكة من أعلاها.</li>
            <li>الدعاء عند المشاعر.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">مناسك الحج خطوة بخطوة (قريباً)</h2>
          <div className="bg-white rounded-lg p-4 text-center text-gray-800 font-arabic mb-2">[دليل تفاعلي للحج والعمرة سيضاف لاحقاً]</div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">أدوات تفاعلية (قريباً)</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>عداد الطواف والسعي.</li>
            <li>خريطة المشاعر المقدسة.</li>
            <li>جدول أعمال الحاج والمعتمر.</li>
            <li>تنبيهات للمواقيت والمناسك.</li>
          </ul>
        </section>
        
        {/* أسئلة وأجوبة الحج والعمرة */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-800 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 font-arabic text-yellow-800 dark:text-yellow-200">
              أسئلة وأجوبة الحج والعمرة
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic">
              إجابات على الأسئلة الشائعة حول مناسك الحج والعمرة
            </p>
            <Link
              to="/events/hajj-umrah-questions"
              className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-arabic hover:bg-yellow-700 transition-colors text-lg"
            >
              عرض الأسئلة والأجوبة
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HajjUmrah; 