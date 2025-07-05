import React from 'react';
import { Link } from 'react-router-dom';

const Ramadan = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center font-arabic">شهر رمضان المبارك</h1>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">التعريف وفضائل رمضان</h2>
          <p className="mb-2 font-arabic">رمضان هو شهر الصيام والقرآن، شهر الرحمة والمغفرة والعتق من النار. فيه ليلة القدر التي هي خير من ألف شهر.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">أحكام الصيام</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>شروط الصيام: الإسلام، البلوغ، العقل، القدرة، النية.</li>
            <li>أركان الصيام: الإمساك عن المفطرات من الفجر إلى المغرب بنية.</li>
            <li>مبطلات الصيام: الأكل والشرب عمداً، الجماع، القيء عمداً، الحيض والنفاس.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">السنن والمستحبات</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>قيام الليل (التراويح).</li>
            <li>السحور وتأخيره.</li>
            <li>تعجيل الفطر.</li>
            <li>الدعاء عند الإفطار.</li>
            <li>تفطير الصائمين.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">الأعمال المستحبة في رمضان</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>قراءة القرآن وختمه.</li>
            <li>الصدقة والإحسان.</li>
            <li>صلة الرحم.</li>
            <li>الاعتكاف في العشر الأواخر.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">جدول أعمال يومي (نموذج)</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>صلاة الفجر وذكر الصباح.</li>
            <li>قراءة جزء من القرآن.</li>
            <li>العمل أو الدراسة مع النية الصالحة.</li>
            <li>الصدقة اليومية.</li>
            <li>صلاة التراويح وقيام الليل.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">إمساكية رمضان (حسب الموقع الجغرافي)</h2>
          <div className="bg-white rounded-lg p-4 text-center text-gray-800 font-arabic mb-2">[إمساكية تفاعلية ستضاف لاحقاً]</div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">زكاة الفطر</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>مقدارها: صاع من غالب قوت البلد.</li>
            <li>وقت إخراجها: قبل صلاة العيد.</li>
            <li>المستحقون: الفقراء والمساكين.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">العشر الأواخر وليلة القدر</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>الاجتهاد في العبادة والاعتكاف.</li>
            <li>الدعاء المأثور: "اللهم إنك عفو تحب العفو فاعف عني".</li>
            <li>علامات ليلة القدر: طلوع الشمس بلا شعاع، سكون، طمأنينة.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 font-arabic">أدوات تفاعلية (قريباً)</h2>
          <ul className="list-disc pr-6 font-arabic">
            <li>عداد ختم القرآن.</li>
            <li>تقويم للصلاة والقيام.</li>
            <li>عد تنازلي لبدء رمضان.</li>
            <li>إشعارات وتنبيهات يومية.</li>
            <li>حفظ خطة ختم القرآن.</li>
          </ul>
        </section>
        
        {/* أسئلة وأجوبة رمضان */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 font-arabic text-green-800 dark:text-green-200">
              أسئلة وأجوبة شهر رمضان
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic">
              إجابات على الأسئلة الشائعة حول الصيام وعبادات رمضان
            </p>
            <Link
              to="/events/ramadan-questions"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-arabic hover:bg-green-700 transition-colors text-lg"
            >
              عرض الأسئلة والأجوبة
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ramadan; 