import React, { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import BadgeList from './components/BadgeList';
import { Link } from 'react-router-dom';

const ChallengeHistory = () => {
  const { history, badges, repeatChallenge, shareAchievement, successMsg } = useContext(ChallengeContext);

  return (
    <div className="bg-white dark:bg-islamic-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <div className="flex gap-2 mb-6 justify-center">
        <Link to="/challenges" className="btn btn-secondary">لوحة التحكم</Link>
        <Link to="/challenges/weekly" className="btn btn-secondary">الأسبوعية</Link>
        <Link to="/challenges/memorization" className="btn btn-secondary">الحفظ</Link>
        <Link to="/challenges/tafsir" className="btn btn-secondary">التفسير</Link>
        <Link to="/challenges/history" className="btn btn-secondary">السجل</Link>
      </div>
      <h2 className="text-xl font-bold text-primary-600 mb-4">سجل التحديات</h2>
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center font-bold animate-fade-in">
          {successMsg}
        </div>
      )}
      <BadgeList badges={badges} />
      <ul>
        {history.map((item, idx) => (
          <li key={idx} className="mb-4 p-2 border rounded-lg">
            <div>التحدي: {item.title}</div>
            <div>النقاط: {item.points}</div>
            <div>الالتزام: {item.streak} يوم</div>
            <button className="btn btn-secondary mt-2" onClick={() => repeatChallenge(item.id)}>إعادة التحدي</button>
            <button className="btn btn-primary mt-2 ml-2" onClick={() => shareAchievement(item)}>مشاركة الإنجاز</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeHistory; 