import React, { useContext } from 'react';
import { useMemorization } from '../hooks/useMemorization';
import { ChallengeContext } from '../context/ChallengeContext';
import AudioPlayer from './components/AudioPlayer';
import ProgressBar from './components/ProgressBar';
import { Link } from 'react-router-dom';

const MemorizationTracker = () => {
  const { memorizationPlan, todayAyat, audioReciter, setReciter, successMsg } = useContext(ChallengeContext);
  const { progress: memProgress, updateAyahStatus, getProgressStats, loading } = useMemorization();
  
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-900 bg-gold-50 dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
        </div>
      </div>
    );
  }

  const stats = getProgressStats();

  const handleMarkStatus = async (ayah, status) => {
    const statusMap = {
      'done': 'memorized',
      'later': 'reviewing',
      'notyet': 'not_started'
    };
    
    const result = await updateAyahStatus(ayah.sura, ayah.number, statusMap[status]);
    if (result.error) {
      alert('حدث خطأ في حفظ التقدم');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 bg-gold-50 dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <div className="flex gap-2 mb-6 justify-center">
        <Link to="/challenges" className="btn btn-secondary">لوحة التحكم</Link>
        <Link to="/challenges/weekly" className="btn btn-secondary">الأسبوعية</Link>
        <Link to="/challenges/memorization" className="btn btn-secondary">الحفظ</Link>
        <Link to="/challenges/tafsir" className="btn btn-secondary">التفسير</Link>
        <Link to="/challenges/history" className="btn btn-secondary">السجل</Link>
      </div>
      <h2 className="text-xl font-bold text-gold-700 dark:text-gold-400 mb-4">متابعة الحفظ</h2>
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center font-bold animate-fade-in border-2 border-gold-400">
          {successMsg}
        </div>
      )}
      <select value={audioReciter} onChange={e => setReciter(e.target.value)} className="mb-4">
        <option value="alafasy">مشاري العفاسي</option>
        <option value="minshawi">المنشاوي</option>
        <option value="ajmy">العجمي</option>
      </select>
      <div className="mb-4">
        <span>خطة الحفظ: {memorizationPlan?.name || 'لم يتم اختيار خطة'}</span>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          محفوظ: {stats.memorized} | قيد المراجعة: {stats.reviewing} | النسبة: {stats.percentage}%
        </div>
      </div>
      <ul>
        {todayAyat.map((ayah, idx) => (
          <li key={idx} className="mb-2 p-3 rounded-2xl shadow-lg border-2 border-gold-400 bg-white dark:bg-[#23272f] text-primary-500 dark:text-primary-500">
            <span className="font-bold text-primary-500">{ayah.text}</span>
            <AudioPlayer sura={ayah.sura} ayah={ayah.number} reciter={audioReciter} />
            <div className="flex gap-2 mt-1">
              <button onClick={() => handleMarkStatus(ayah, 'done')} className="btn btn-success">أنجزت</button>
              <button onClick={() => handleMarkStatus(ayah, 'later')} className="btn btn-warning">راجع لاحقًا</button>
              <button onClick={() => handleMarkStatus(ayah, 'notyet')} className="btn btn-secondary">لم أحفظ بعد</button>
            </div>
          </li>
        ))}
      </ul>
      <ProgressBar value={stats.percentage} />
    </div>
  );
};

export default MemorizationTracker;