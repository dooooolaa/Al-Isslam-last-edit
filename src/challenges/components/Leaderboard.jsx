import React, { useContext } from 'react';
import { ChallengeContext } from '../../context/ChallengeContext';

const Leaderboard = () => {
  const { leaderboard } = useContext(ChallengeContext);
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2 text-primary-600">الترتيب بين المستخدمين</h3>
      <ul className="bg-primary-50 dark:bg-islamic-800 rounded-lg p-2">
        {leaderboard.map((user, idx) => (
          <li key={user.id} className={`flex justify-between py-1 px-2 ${user.isCurrent ? 'bg-gold-100 dark:bg-gold-800 font-bold' : ''}`}>
            <span>{idx + 1}. {user.name}</span>
            <span>{user.points} نقطة</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard; 