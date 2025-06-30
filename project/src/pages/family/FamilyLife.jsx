import React from 'react';
import { Heart, Users, BookOpen, Handshake, Gift, UserCheck, AlertTriangle, Star, Home, Link2 } from 'lucide-react';

const sections = [
  {
    icon: <Home className="text-primary-500 w-7 h-7 mb-2" />, title: 'دور الأسرة في بناء المجتمع الإسلامي',
    content: 'الأسرة هي اللبنة الأولى في بناء المجتمع، وبصلاحها يصلح المجتمع كله. الإسلام أولى الأسرة عناية كبيرة في التشريع والتوجيه.'
  },
  {
    icon: <Handshake className="text-gold-500 w-7 h-7 mb-2" />, title: 'أحكام الزواج في الإسلام',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>الخطبة: التعارف الشرعي قبل العقد.</li>
        <li>العقد: أركانه (الإيجاب والقبول، الولي، الشهود، المهر).</li>
        <li>الحقوق والواجبات: لكل من الزوجين حقوق وواجبات متبادلة.</li>
      </ul>
    )
  },
  {
    icon: <UserCheck className="text-primary-500 w-7 h-7 mb-2" />, title: 'حقوق الزوج والزوجة',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>حق القوامة، النفقة، المعاشرة بالمعروف.</li>
        <li>حق الطاعة في غير معصية، وحق الاحترام والرعاية.</li>
        <li>العدل بين الزوجات لمن كان له أكثر من زوجة.</li>
      </ul>
    )
  },
  {
    icon: <AlertTriangle className="text-gold-500 w-7 h-7 mb-2" />, title: 'أحكام الطلاق والخلع والنفقة',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>الطلاق: آخر الحلول، وله ضوابط شرعية.</li>
        <li>الخلع: حق المرأة في طلب الفسخ بعوض.</li>
        <li>النفقة: واجبة على الزوج للأبناء والزوجة.</li>
      </ul>
    )
  },
  {
    icon: <Users className="text-primary-500 w-7 h-7 mb-2" />, title: 'العلاقات الأسرية',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>صلة الرحم، بر الوالدين، حقوق الأقارب.</li>
        <li>التعاون والتراحم بين أفراد الأسرة.</li>
      </ul>
    )
  },
  {
    icon: <Heart className="text-gold-500 w-7 h-7 mb-2" />, title: 'العلاقة بين الزوجين',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>آداب المعاشرة، التربية المشتركة للأبناء.</li>
        <li>الحوار وحل الخلافات بالرفق.</li>
      </ul>
    )
  },
  {
    icon: <AlertTriangle className="text-primary-500 w-7 h-7 mb-2" />, title: 'الأسرة في الأزمات',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>الطلاق، الوفاة، الخلافات: حلول شرعية ونصائح عملية.</li>
      </ul>
    )
  },
  {
    icon: <Star className="text-gold-500 w-7 h-7 mb-2" />, title: 'نماذج من أسر الصحابة والتابعين',
    content: 'قصص واقعية من حياة الصحابة والتابعين في التعامل الأسري، مثل بيت علي وفاطمة، وبيت عمر بن الخطاب.'
  },
  {
    icon: <Gift className="text-primary-500 w-7 h-7 mb-2" />, title: 'فقه المناسبات الأسرية',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>آداب العيد، الزيارات، الهدايا، التهنئة، العزاء.</li>
      </ul>
    )
  },
];

const FamilyLife = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-10 text-center font-arabic text-primary-700 dark:text-primary-300">الأسرة المسلمة</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform border-t-4" style={{borderColor: idx%2===0 ? '#22c55e' : '#f59e0b'}}>
              {sec.icon}
              <h2 className="text-lg font-bold mb-2 font-arabic text-primary-700 dark:text-gold-300">{sec.title}</h2>
              <div className="font-arabic text-sm text-gray-700 dark:text-gray-200">{sec.content}</div>
            </div>
          ))}
        </div>
        {/* الميزات التفاعلية القادمة */}
        <div className="mt-12 bg-primary-50 dark:bg-primary-900 rounded-xl p-6 text-center shadow-md">
          <h2 className="text-lg font-bold font-arabic text-primary-700 dark:text-gold-200 mb-2 flex items-center justify-center gap-2"><Link2 className="w-5 h-5" />ميزات تفاعلية قادمة</h2>
          <ul className="list-disc pr-6 font-arabic text-sm text-gray-700 dark:text-gray-200 inline-block text-right mx-auto" style={{textAlign:'right'}}>
            <li>مقالات قصيرة وفتاوى شرعية من مصادر موثوقة.</li>
            <li>خريطة تفاعلية لهيكل الأسرة الإسلامية.</li>
            <li>محتوى صوتي لشرح أحكام الأسرة.</li>
            <li>إمكانية طرح الأسئلة واستقبال الفتاوى.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FamilyLife; 