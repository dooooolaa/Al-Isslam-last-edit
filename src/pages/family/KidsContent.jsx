import React from 'react';

const KidsContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-100 to-gold-50 dark:from-gold-900 dark:to-gold-800 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center font-arabic text-gold-700 dark:text-gold-300 animate-bounce-gentle">مرحبا بالأطفال!</h1>
        <h2 className="text-3xl font-extrabold mb-8 text-center font-arabic text-gold-700 dark:text-gold-300 animate-bounce-gentle">  قريبا سوف يتم تشغيل القسم ,نتاسف لكم 
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* قصص الأنبياء */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-5xl mb-3" role="img" aria-label="قصص">📖</span>
            <h2 className="text-xl font-bold mb-2 font-arabic text-gold-600">قصص الأنبياء</h2>
            <p className="font-arabic text-sm mb-2">قصص مبسطة برسوم وفيديوهات ممتعة.</p>
            <button className="bg-gold-400 text-white px-4 py-2 rounded-lg font-arabic btn-hover-scale">ابدأ القصة</button>
          </div>
          {/* أدعية الأطفال */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-5xl mb-3" role="img" aria-label="أدعية">🤲</span>
            <h2 className="text-xl font-bold mb-2 font-arabic text-gold-600">أدعية يومية</h2>
            <p className="font-arabic text-sm mb-2">استمع وكرر الأدعية اليومية بالتشكيل والصوت.</p>
            <button className="bg-gold-400 text-white px-4 py-2 rounded-lg font-arabic btn-hover-scale">استمع للدعاء</button>
          </div>
          {/* تعليم الصلاة */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-5xl mb-3" role="img" aria-label="الصلاة">🕌</span>
            <h2 className="text-xl font-bold mb-2 font-arabic text-gold-600">تعليم الصلاة</h2>
            <p className="font-arabic text-sm mb-2">تعلم الوضوء والصلاة خطوة بخطوة مع رسوم وصوت.</p>
            <button className="bg-gold-400 text-white px-4 py-2 rounded-lg font-arabic btn-hover-scale">ابدأ التعلم</button>
          </div>
          {/* مسابقات وأسئلة */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-5xl mb-3" role="img" aria-label="مسابقات">❓</span>
            <h2 className="text-xl font-bold mb-2 font-arabic text-gold-600">مسابقات وأسئلة</h2>
            <p className="font-arabic text-sm mb-2">اختبر معلوماتك في الحروف، الأرقام، والسلوك الإسلامي.</p>
            <button className="bg-gold-400 text-white px-4 py-2 rounded-lg font-arabic btn-hover-scale">ابدأ المسابقة</button>
          </div>
        </div>
        {/* قسم اسأل وتعلم */}
        <div className="mt-10 bg-gold-50 dark:bg-gold-900 rounded-xl p-6 text-center shadow-md">
          <h2 className="text-lg font-bold font-arabic text-gold-700 dark:text-gold-200 mb-2">اسأل وتعلم</h2>
          <p className="font-arabic text-sm mb-2">يمكنك قريبًا طرح أسئلتك وسنجيب عليها بطريقة مبسطة!</p>
        </div>
        {/* ملاحظات الميزات القادمة */}
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-300 font-arabic text-center">
          <p>واجهة أطفال ملونة، نظام تتبع الحفظ، مكافآت رقمية، دعم القراءة الصوتية قريبًا!</p>
        </div>
      </div>
    </div>
  );
};

export default KidsContent; 