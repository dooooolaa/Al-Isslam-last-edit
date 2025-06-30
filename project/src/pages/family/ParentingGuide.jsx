import React from 'react';
import { BookOpen, Smile, UserCheck, Award, AlertTriangle, Star, Users, Link2 } from 'lucide-react';

const sections = [
  {
    icon: <Smile className="text-primary-500 w-7 h-7 mb-2" />, title: 'التربية النبوية للأبناء',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>الرحمة، القدوة، التعليم التدريجي.</li>
        <li>الاهتمام بالفروق العمرية والنفسية.</li>
      </ul>
    )
  },
  {
    icon: <BookOpen className="text-gold-500 w-7 h-7 mb-2" />, title: 'أسس التربية الإسلامية',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>العقيدة، العبادات، الأخلاق، السلوك، التربية النفسية.</li>
      </ul>
    )
  },
  {
    icon: <Star className="text-primary-500 w-7 h-7 mb-2" />, title: 'غرس الإيمان في الأطفال',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>تعليم التوحيد وأسماء الله الحسنى.</li>
        <li>تعويد الطفل على الصلاة والصيام تدريجياً.</li>
        <li>تعليم السلوك الإسلامي حسب السن.</li>
      </ul>
    )
  },
  {
    icon: <Award className="text-gold-500 w-7 h-7 mb-2" />, title: 'التربية بالعقوبة والمكافأة',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>ضوابط العقوبة في الإسلام.</li>
        <li>تشجيع الطفل بالمكافآت المعنوية والمادية.</li>
      </ul>
    )
  },
  {
    icon: <AlertTriangle className="text-primary-500 w-7 h-7 mb-2" />, title: 'مشكلات تربوية شائعة',
    content: (
      <ul className="list-disc pr-6 font-arabic space-y-1">
        <li>الطفل العنيد، الكذاب، قليل الانضباط.</li>
        <li>التعامل مع الأبناء في سن المراهقة.</li>
        <li>تربية الأبناء في بيئة غير إسلامية.</li>
        <li>التعامل مع الأجهزة الإلكترونية والألعاب.</li>
      </ul>
    )
  },
];

const ParentingGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-10 text-center font-arabic text-gold-700 dark:text-gold-300">دليل التربية الإسلامية</h1>
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
        <div className="mt-12 bg-gold-50 dark:bg-gold-900 rounded-xl p-6 text-center shadow-md">
          <h2 className="text-lg font-bold font-arabic text-gold-700 dark:text-gold-200 mb-2 flex items-center justify-center gap-2"><Link2 className="w-5 h-5" />ميزات تفاعلية قادمة</h2>
          <ul className="list-disc pr-6 font-arabic text-sm text-gray-700 dark:text-gray-200 inline-block text-right mx-auto" style={{textAlign:'right'}}>
            <li>استبيان تقييم مستوى التربية.</li>
            <li>خطة تربية إيمانية حسب عمر الأبناء.</li>
            <li>روابط لسور تعليمية وأحاديث قصيرة للأطفال.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParentingGuide; 