import React, { useContext } from 'react';
import { ChallengeContext } from '../../context/ChallengeContext';

const Leaderboard = () => {
  const { rank, points } = useContext(ChallengeContext);
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2 text-primary-600">ترتيبك بين المستخدمين</h3>
      <div className="bg-primary-50 dark:bg-islamic-800 rounded-lg p-4 text-center">
        <span className="text-xl font-bold">#{rank}</span>
        <div className="mt-2 text-sm">ترتيبك الحالي بين المشاركين. بيانات المستخدمين الآخرين مخفية حفاظًا على الخصوصية.</div>
        <div className="mt-2">نقاطك: <b>{points}</b></div>
      </div>
    </div>
  );
};

export default Leaderboard; 