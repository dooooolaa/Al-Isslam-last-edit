import React, { useContext } from 'react';
import { ChallengeContext } from '../../context/ChallengeContext';

const Leaderboard = () => {
  const { rank, points } = useContext(ChallengeContext);
  return (
    <div className="block bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition-all text-right font-arabic border-r-4 border-primary-600 max-w-xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white text-center">ترتيبك بين المستخدمين</h2>
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
        <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">#{rank}</div>
        <div className="text-gray-600 dark:text-gray-300 mb-2">ترتيبك الحالي بين المشاركين. بيانات المستخدمين الآخرين مخفية حفاظًا على الخصوصية.</div>
        <div className="font-bold text-primary-700 dark:text-primary-400">نقاطك: <span className="text-blue-700 dark:text-blue-400">{points}</span></div>
      </div>
    </div>
  );
};

export default Leaderboard; 