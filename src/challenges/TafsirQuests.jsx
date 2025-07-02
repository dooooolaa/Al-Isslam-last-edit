import React, { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import { Link } from 'react-router-dom';

const TafsirQuests = () => {
  const { tafsirQuests, submitAnswer, infoOfDay, successMsg } = useContext(ChallengeContext);

  return (
    <div className="bg-white dark:bg-gray-900 bg-gold-50 dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <div className="flex gap-2 mb-6 justify-center">
        <Link to="/challenges" className="btn btn-secondary">لوحة التحكم</Link>
        <Link to="/challenges/weekly" className="btn btn-secondary">الأسبوعية</Link>
        <Link to="/challenges/memorization" className="btn btn-secondary">الحفظ</Link>
        <Link to="/challenges/tafsir" className="btn btn-secondary">التفسير</Link>
        <Link to="/challenges/history" className="btn btn-secondary">السجل</Link>
      </div>
      <h2 className="text-xl font-bold text-gold-700 dark:text-gold-400 mb-4">تحديات الفهم والتفسير</h2>
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center font-bold animate-fade-in border-2 border-gold-400">
          {successMsg}
        </div>
      )}
      <div className="mb-4 p-2 bg-gold-100 dark:bg-gold-800 rounded border border-gold-300">{infoOfDay}</div>
      {tafsirQuests.map((quest, idx) => (
        <div key={idx} className="mb-4 p-4 rounded-2xl shadow-lg border-2 border-gold-400 bg-white dark:bg-[#23272f] text-primary-500 dark:text-primary-500">
          <div className="font-semibold text-primary-500">{quest.ayahText}</div>
          <div className="text-sm text-primary-500">{quest.tafsir}</div>
          <form onSubmit={e => { e.preventDefault(); submitAnswer(quest.id, e.target.answer.value); }}>
            <input name="answer" className="input input-bordered mt-2" placeholder="إجابتك..." />
            <button className="btn btn-primary ml-2">إرسال</button>
          </form>
          {quest.feedback && <div className="mt-1 text-green-600">{quest.feedback}</div>}
        </div>
      ))}
    </div>
  );
};

export default TafsirQuests; 