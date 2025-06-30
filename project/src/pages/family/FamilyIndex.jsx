import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'الأسرة المسلمة',
    desc: 'كل ما يخص بناء الأسرة المسلمة وحقوقها وأحكامها. مقالات وفتاوى وخريطة تفاعلية.',
    href: '/family/life',
    icon: '👨‍👩‍👧‍👦',
    color: 'bg-primary-100 dark:bg-primary-900'
  },
  {
    title: 'دليل التربية الإسلامية',
    desc: 'أسس التربية النبوية، غرس الإيمان، التعامل مع الأطفال والمراهقين، أدوات تفاعلية.',
    href: '/family/parenting',
    icon: '🧑‍🏫',
    color: 'bg-gold-100 dark:bg-gold-900'
  },
  {
    title: 'صفحة الأطفال',
    desc: 'قصص، أدعية، تعليم الصلاة، مسابقات، واجهة مخصصة للأطفال.',
    href: '/family/kids',
    icon: '🧒',
    color: 'bg-pink-100 dark:bg-pink-900'
  },
  {
    title: 'الألعاب التعليمية',
    desc: 'ألعاب تفاعلية عن السيرة، الوضوء، القبلة، الأذكار، جمع الحسنات.',
    href: '/family/games',
    icon: '🎮',
    color: 'bg-blue-100 dark:bg-blue-900'
  },
];

const FamilyIndex = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center font-arabic">قسم الأسرة والأطفال</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((sec, idx) => (
            <Link to={sec.href} key={idx} className={`rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform ${sec.color}`}>
              <div className="text-5xl mb-3">{sec.icon}</div>
              <h2 className="text-xl font-bold mb-2 font-arabic">{sec.title}</h2>
              <p className="font-arabic text-sm text-gray-700 dark:text-gray-200 text-center">{sec.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyIndex; 