import React, { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import ProgressBar from './components/ProgressBar';
import Leaderboard from './components/Leaderboard';
import CountdownTimer from './components/CountdownTimer';
import NotificationBanner from './components/NotificationBanner';

const ChallengeDashboard = () => {
  const {
    currentChallenge,
    progress,
    points,
    rank,
    startDailyChallenge,
    postponeChallenge,
    canPostpone,
    successMsg
  } = useContext(ChallengeContext);

  return (
    <div className="bg-white dark:bg-islamic-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      {/* إشعار يومي */}
      <NotificationBanner message="تذكير: لا تنس تحدي اليوم!" />
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center font-bold animate-fade-in">
          {successMsg}
        </div>
      )}
      <h2 className="text-2xl font-bold text-primary-600 mb-4">لوحة تحديات القرآن</h2>
      <div className="mb-4">
        <span className="font-semibold">التحدي الحالي:</span> {currentChallenge?.title || 'لا يوجد تحدي حالي'}
      </div>
      {/* نسبة الإنجاز */}
      <ProgressBar value={progress} />
      <div className="flex justify-between items-center my-4">
        <span>النقاط: <b>{points}</b></span>
        <span>ترتيبك: <b>#{rank}</b></span>
      </div>
      {/* عد تنازلي */}
      <CountdownTimer endTime={currentChallenge?.endTime} />
      <div className="flex gap-2 mt-4">
        <button onClick={startDailyChallenge} className="btn btn-primary">ابدأ التحدي اليومي</button>
        <button onClick={postponeChallenge} className="btn btn-secondary" disabled={!canPostpone}>تأجيل التحدي</button>
      </div>
      {/* الترتيب بين المستخدمين */}
      <Leaderboard />
    </div>
  );
};

export default ChallengeDashboard; 