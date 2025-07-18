import React, { useState } from 'react';
import { useEffect } from 'react';
import fuzzyIncludes from './fuzzy';
import FavoriteButton from '../components/FavoriteButton';
import { fatwas } from '../lib/supabase';

const Fatwas = () => {
  const [fatwasData, setFatwasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [scholar, setScholar] = useState('');

  useEffect(() => {
    fetchFatwas();
  }, []);

  const fetchFatwas = async () => {
    try {
      setLoading(true);
      const { data, error } = await fatwas.getAll({
        category: category || undefined,
        search: search || undefined
      });
      
      if (error) throw error;
      
      setFatwasData(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchFatwas();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, category, scholar]);

  const categories = [...new Set(fatwasData.map(f => f.category))];
  const scholars = [...new Set(fatwasData.map(f => f.scholar))];
  const filtered = fatwasData.filter(f =>
    (!search || fuzzyIncludes(f.question, search) || fuzzyIncludes(f.answer, search)) &&
    (!category || f.category === category) &&
    (!scholar || f.scholar === scholar)
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex items-center justify-center">
        <div className="text-red-600 dark:text-red-400 text-center">
          <p>حدث خطأ في تحميل الفتاوى: {error}</p>
        </div>
      </div>
    );
  }

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
          <select className="p-2 rounded border" value={scholar} onChange={e => setScholar(e.target.value)}>
            <option value="">الجهة المصدرة</option>
            {scholars.map(a => <option key={a}>{a}</option>)}
          </select>
        </div>
        <div className="space-y-4">
          {filtered.map(fatwa => (
            <div key={fatwa.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all text-right font-arabic">
              <div className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{fatwa.question}</div>
              <div className="mb-2 text-gray-700 dark:text-gray-300">{fatwa.answer}</div>
              <div className="mb-1 text-sm text-gray-700 dark:text-gray-300">التصنيف: {fatwa.category} | العالم: {fatwa.scholar}</div>
              <div className="mb-1 text-sm text-gray-700 dark:text-gray-300">تاريخ النشر: {fatwa.date_issued} | المصدر: {fatwa.source}</div>
              <div className="mt-3">
                <FavoriteButton contentType="fatwa" contentId={fatwa.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fatwas; 