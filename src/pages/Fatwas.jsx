import React, { useState } from 'react';
import fuzzyIncludes from './fuzzy';
// import FavoriteButton from '../components/FavoriteButton'; // فعلها عند توفر المكون

const fatwasData = [
  {
    id: 1,
    question: 'ما حكم الصلاة بدون وضوء؟',
    answer: 'الصلاة بدون وضوء غير صحيحة ويجب الوضوء قبل كل صلاة مفروضة.',
    category: 'الطهارة',
    authority: 'اللجنة الدائمة',
    date: '2022-01-01',
    source: 'الإسلام سؤال وجواب'
  },
  {
    id: 2,
    question: 'هل يجوز الإفطار في رمضان للمريض؟',
    answer: 'يجوز للمريض الذي يتضرر بالصوم أن يفطر ويقضي بعد شفائه.',
    category: 'الصيام',
    authority: 'الشيخ ابن باز',
    date: '2021-05-10',
    source: 'binbaz.org.sa'
  },
  // أضف المزيد من الفتاوى التجريبية هنا
];

const categories = [...new Set(fatwasData.map(f => f.category))];
const authorities = [...new Set(fatwasData.map(f => f.authority))];

const Fatwas = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [authority, setAuthority] = useState('');

  const filtered = fatwasData.filter(f =>
    (!search || fuzzyIncludes(f.question, search) || fuzzyIncludes(f.answer, search)) &&
    (!category || f.category === category) &&
    (!authority || f.authority === authority)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8" dir="rtl">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-right text-gray-900 dark:text-white font-arabic">الفتاوى الشرعية</h1>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            className="p-2 rounded border w-full md:w-1/3"
            placeholder="ابحث في نص السؤال أو الجواب..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            dir="rtl"
          />
          <select className="p-2 rounded border" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">التصنيف الفقهي</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <select className="p-2 rounded border" value={authority} onChange={e => setAuthority(e.target.value)}>
            <option value="">الجهة المصدرة</option>
            {authorities.map(a => <option key={a}>{a}</option>)}
          </select>
        </div>
        <div className="space-y-4">
          {filtered.map(fatwa => (
            <div key={fatwa.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all text-right font-arabic">
              <div className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{fatwa.question}</div>
              <div className="mb-2 text-gray-700 dark:text-gray-300">{fatwa.answer}</div>
              <div className="mb-1 text-sm text-gray-700 dark:text-gray-300">التصنيف: {fatwa.category} | الجهة: {fatwa.authority}</div>
              <div className="mb-1 text-sm text-gray-700 dark:text-gray-300">تاريخ النشر: {fatwa.date} | المصدر: {fatwa.source}</div>
              {/* <FavoriteButton itemId={fatwa.id} type="fatwa" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fatwas; 