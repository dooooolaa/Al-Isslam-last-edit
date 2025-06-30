import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    name: 'العقيدة', 
    count: 10, 
    desc: 'الإيمان، التوحيد، الشرك، القدر، الأسماء والصفات', 
    color: 'bg-red-100 dark:bg-red-900',
    path: '/aqeedah-qa'
  },
  { 
    name: 'العبادات', 
    count: 10, 
    desc: 'الطهارة، الصلاة، الصيام، الزكاة، الحج، الأذكار', 
    color: 'bg-green-100 dark:bg-green-900',
    path: '/ibadat-qa'
  },
  { 
    name: 'المعاملات المالية', 
    count: 10, 
    desc: 'الربا، البيع، القرض، الزكاة، الأسهم، العملات', 
    color: 'bg-blue-100 dark:bg-blue-900',
    path: '/financial-qa'
  },
  { 
    name: 'الأحوال الشخصية', 
    count: 10, 
    desc: 'الزواج، الطلاق، النفقة، الحضانة، الميراث', 
    color: 'bg-pink-100 dark:bg-pink-900',
    path: '/personal-status-qa'
  },
  { 
    name: 'الأخلاق والسلوك', 
    count: 10, 
    desc: 'الغيبة، الكذب، الحسد، الأمر بالمعروف', 
    color: 'bg-indigo-100 dark:bg-indigo-900',
    path: '/ethics-qa'
  },
  { 
    name: 'الترفيه والمباحات', 
    count: 10, 
    desc: 'الموسيقى، الألعاب، اللباس، التصوير، الزينة', 
    color: 'bg-yellow-100 dark:bg-yellow-900',
    path: '/entertainment-qa'
  },
  { 
    name: 'النوازل', 
    count: 10, 
    desc: 'المستجدات، الفتاوى المعاصرة، المسائل الطبية، الذكاء الاصطناعي', 
    color: 'bg-teal-100 dark:bg-teal-900',
    path: '/contemporary-qa'
  },
  { 
    name: 'غير المسلمين', 
    count: 10, 
    desc: 'حقوقهم، تعامل المسلم معهم، دخول الإسلام', 
    color: 'bg-emerald-100 dark:bg-emerald-900',
    path: '/non-muslims-qa'
  },
  { 
    name: 'المرأة المسلمة', 
    count: 10, 
    desc: 'الحجاب، الحيض، الحمل، العمل، الاختلاط', 
    color: 'bg-rose-100 dark:bg-rose-900',
    path: '/muslim-women-qa'
  },
];

const filters = [
  { label: 'الأحدث', value: 'latest' },
  { label: 'الأكثر بحثًا', value: 'popular' },
  { label: 'الأكثر تقييماً', value: 'rated' },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center font-arabic">تصنيفات الأسئلة الشرعية</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 font-arabic">
          اختر التصنيف المناسب لتصفح الأسئلة والأجوبة الشرعية
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map(f => (
            <button key={f.value} className="px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-arabic hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">{f.label}</button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <Link to={cat.path} key={cat.name} className={`rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform ${cat.color}`}>
              <h2 className="text-xl font-bold mb-2 font-arabic">{cat.name}</h2>
              <p className="font-arabic text-sm text-gray-700 dark:text-gray-200 mb-2">{cat.desc}</p>
              <span className="inline-block bg-primary-600 text-white rounded-full px-3 py-1 text-xs font-bold font-arabic">{cat.count} سؤال</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories; 