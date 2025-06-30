import React from 'react';

const games = [
  { title: 'اعرف نبيك', desc: 'أسئلة عن سيرة النبي ﷺ بطريقة تفاعلية', icon: '🧑‍🏫' },
  { title: 'أين القبلة؟', desc: 'حدد الاتجاه الصحيح للقبلة', icon: '🧭' },
  { title: 'وضوء صحيح', desc: 'رتب خطوات الوضوء بالصور', icon: '💧' },
  { title: 'صيام رمضان', desc: 'تحدي الأسئلة اليومية طوال الشهر', icon: '🌙' },
  { title: 'جمع الحسنات', desc: 'أنشطة خيرية تفاعلية لكسب الأجر', icon: '✨' },
  { title: 'أين الخطأ؟', desc: 'اكتشف السلوك غير الإسلامي من الصور', icon: '🔍' },
  { title: 'أذكار الصباح والمساء', desc: 'الحفظ والاستماع بتكرار', icon: '📿' },
];

const InteractiveGames = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 to-primary-50 dark:from-gray-900 dark:to-gold-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center font-arabic text-primary-700 dark:text-gold-300 animate-bounce-gentle">الألعاب التعليمية الإسلامية</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {games.map((game, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">{game.icon}</div>
              <h2 className="text-xl font-bold mb-2 font-arabic text-primary-600">{game.title}</h2>
              <p className="font-arabic text-sm mb-2 text-gray-600 dark:text-gray-300">{game.desc}</p>
              <button className="bg-primary-500 text-white px-4 py-2 rounded-lg font-arabic btn-hover-scale opacity-60 cursor-not-allowed">قريبًا</button>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-primary-50 dark:bg-gold-900 rounded-xl p-6 text-center shadow-md">
          <h2 className="text-lg font-bold font-arabic text-primary-700 dark:text-gold-200 mb-2">ميزات قادمة</h2>
          <p className="font-arabic text-sm mb-2">مستوى صعوبة تدريجي، حفظ النقاط والمكافآت، دعم الصوت التفاعلي، تصميم متجاوب للأطفال.</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGames; 