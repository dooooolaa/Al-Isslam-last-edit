import React, { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import LevelSelector from './components/LevelSelector';
import CountdownTimer from './components/CountdownTimer';
import { Link } from 'react-router-dom';

const WeeklyChallenges = () => {
  const { weeklyChallenges, selectLevel, selectedLevel, startChallenge, successMsg } = useContext(ChallengeContext);

  return (
    <div className="bg-white dark:bg-gray-900 bg-gold-50 dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <div className="flex gap-2 mb-6 justify-center">
        <Link to="/challenges" className="btn btn-secondary">لوحة التحكم</Link>
        <Link to="/challenges/weekly" className="btn btn-secondary">الأسبوعية</Link>
        <Link to="/challenges/memorization" className="btn btn-secondary">الحفظ</Link>
        <Link to="/challenges/tafsir" className="btn btn-secondary">التفسير</Link>
        <Link to="/challenges/history" className="btn btn-secondary">السجل</Link>
      </div>
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center font-bold animate-fade-in border-2 border-gold-400">
          {successMsg}
        </div>
      )}
      <h2 className="text-xl font-bold text-gold-700 dark:text-gold-400 mb-4">التحديات الأسبوعية</h2>
      <LevelSelector selected={selectedLevel} onSelect={selectLevel} />
      <div className="grid gap-4">
        {weeklyChallenges.map((challenge) => (
          <div key={challenge.id} className="p-4 border-2 rounded-2xl shadow-lg bg-white dark:bg-[#23272f] border-gold-400 text-primary-500 dark:text-primary-500">
            <h3 className="font-semibold text-primary-500">{challenge.title}</h3>
            <p className="text-primary-500">{challenge.description}</p>
            <CountdownTimer endTime={challenge.endTime} />
            <button className="btn btn-primary mt-2 border-gold-500 bg-gold-500 hover:bg-gold-600 text-white font-bold">ابدأ التحدي</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyChallenges; 