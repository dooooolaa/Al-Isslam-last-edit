import React, { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import AudioPlayer from './components/AudioPlayer';
import ProgressBar from './components/ProgressBar';
import { Link } from 'react-router-dom';

const MemorizationTracker = () => {
  const { memorizationPlan, todayAyat, audioReciter, setReciter, progress, markStatus, successMsg } = useContext(ChallengeContext);

  return (
    <div className="bg-white dark:bg-islamic-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <div className="flex gap-2 mb-6 justify-center">
        <Link to="/challenges" className="btn btn-secondary">لوحة التحكم</Link>
        <Link to="/challenges/weekly" className="btn btn-secondary">الأسبوعية</Link>
        <Link to="/challenges/memorization" className="btn btn-secondary">الحفظ</Link>
        <Link to="/challenges/tafsir" className="btn btn-secondary">التفسير</Link>
        <Link to="/challenges/history" className="btn btn-secondary">السجل</Link>
      </div>
      <h2 className="text-xl font-bold text-primary-600 mb-4">متابعة الحفظ</h2>
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center font-bold animate-fade-in">
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
      </div>
      <ul>
        {todayAyat.map((ayah, idx) => (
          <li key={idx} className="mb-2">
            <span>{ayah.text}</span>
            <AudioPlayer sura={ayah.sura} ayah={ayah.number} reciter={audioReciter} />
            <div className="flex gap-2 mt-1">
              <button onClick={() => markStatus(ayah, 'done')} className="btn btn-success">أنجزت</button>
              <button onClick={() => markStatus(ayah, 'later')} className="btn btn-warning">راجع لاحقًا</button>
              <button onClick={() => markStatus(ayah, 'notyet')} className="btn btn-secondary">لم أحفظ بعد</button>
            </div>
          </li>
        ))}
      </ul>
      <ProgressBar value={progress} />
    </div>
  );
};

export default MemorizationTracker; 