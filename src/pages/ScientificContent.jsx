import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  { path: '/knowledge/hadith', label: 'الأحاديث النبوية', desc: 'مجموعة مختارة من الأحاديث الصحيحة مع الشرح والتصنيف.' },
  { path: '/knowledge/fatwas', label: 'الفتاوى الشرعية', desc: 'فتاوى موثوقة مصنفة حسب الموضوع والجهة.' },
  { path: '/knowledge/seerah', label: 'السيرة النبوية', desc: 'تسلسل زمني لأحداث السيرة النبوية الشريفة.' },
  { path: '/knowledge/faq', label: 'الأسئلة والأجوبة الشرعية', desc: 'قاعدة بيانات للأسئلة الشائعة مع الإجابات الشرعية.' },
];

const ScientificContent = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12" dir="rtl">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-10 text-right text-gray-900 dark:text-white font-arabic">المحتوى العلمي</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map(section => (
          <Link key={section.path} to={section.path} className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition-all text-right font-arabic border-r-4 border-primary-600 hover:-translate-y-1 transform">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{section.label}</h2>
            <p className="text-gray-600 dark:text-gray-300">{section.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default ScientificContent; 