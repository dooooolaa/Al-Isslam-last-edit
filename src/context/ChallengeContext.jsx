import React, { createContext, useState } from 'react';

export const ChallengeContext = createContext();

const mockLeaderboard = [
  { id: 1, name: 'أحمد', points: 120, isCurrent: false },
  { id: 2, name: 'سارة', points: 110, isCurrent: false },
  { id: 3, name: 'أنت', points: 100, isCurrent: true },
];

const weeklyChallengesByLevel = {
  beginner: [
    { id: 1, title: 'تلاوة: البقرة 1-10', description: 'اقرأ من سورة البقرة: 1–10 خلال 3 أيام.', endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
    { id: 2, title: 'حفظ: 3 آيات من جزء عمّ', description: 'حفظ 3 آيات من جزء عمّ مع التكرار الصوتي.', endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
  ],
  intermediate: [
    { id: 1, title: 'تلاوة: البقرة 1-20', description: 'اقرأ من سورة البقرة: 1–20 خلال 3 أيام.', endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
    { id: 2, title: 'حفظ: 5 آيات من جزء عمّ', description: 'حفظ 5 آيات من جزء عمّ مع التكرار الصوتي.', endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
  ],
  advanced: [
    { id: 1, title: 'تلاوة: البقرة 1-30', description: 'اقرأ من سورة البقرة: 1–30 خلال 2 أيام.', endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000) },
    { id: 2, title: 'حفظ: 10 آيات من جزء عمّ', description: 'حفظ 10 آيات من جزء عمّ مع التكرار الصوتي.', endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
  ],
};

const mockTafsirQuests = [
  { id: 1, ayahText: 'قُلْ هُوَ اللَّهُ أَحَدٌ', tafsir: 'أي: الله واحد أحد متفرد بالكمال.', feedback: null },
  { id: 2, ayahText: 'اللَّهُ الصَّمَدُ', tafsir: 'أي: المقصود في الحوائج.', feedback: null },
];

const mockHistory = [
  { id: 1, title: 'تلاوة يومية', points: 10, streak: 5 },
  { id: 2, title: 'حفظ 5 آيات', points: 15, streak: 2 },
];

const mockBadges = ['حافظ جزء عم', 'قارئ شهر رمضان', 'متدبر القرآن'];

export const ChallengeProvider = ({ children }) => {
  // الحالة الرئيسية
  const [currentChallenge, setCurrentChallenge] = useState({ title: 'تلاوة: البقرة 1-20', endTime: new Date(Date.now() + 12 * 60 * 60 * 1000) });
  const [progress, setProgress] = useState(40);
  const [points, setPoints] = useState(100);
  const [rank, setRank] = useState(3);
  const [canPostpone, setCanPostpone] = useState(true);
  const [leaderboard, setLeaderboard] = useState(mockLeaderboard);
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [weeklyChallenges, setWeeklyChallenges] = useState(weeklyChallengesByLevel['beginner']);
  const [memorizationPlan, setMemorizationPlan] = useState({ name: 'جزء عم' });
  const [todayAyat, setTodayAyat] = useState([
    { sura: 78, number: 1, text: 'عَمَّ يَتَسَاءَلُونَ', status: null },
    { sura: 78, number: 2, text: 'عَنِ النَّبَإِ الْعَظِيمِ', status: null },
    { sura: 78, number: 3, text: 'الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ', status: null },
  ]);
  const [audioReciter, setReciter] = useState('alafasy');
  const [tafsirQuests, setTafsirQuests] = useState(mockTafsirQuests);
  const [infoOfDay, setInfoOfDay] = useState('معلومة اليوم: الصمد هو السيد الكامل في صفاته.');
  const [history, setHistory] = useState(mockHistory);
  const [badges, setBadges] = useState(mockBadges);
  const [successMsg, setSuccessMsg] = useState('');

  // دوال تفاعلية واقعية
  const startDailyChallenge = () => {
    setPoints(p => p + 10);
    setProgress(pr => Math.min(pr + 10, 100));
    setSuccessMsg('تم بدء التحدي اليومي! حصلت على 10 نقاط.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };
  const postponeChallenge = () => {
    setCanPostpone(false);
    setProgress(pr => Math.max(pr - 10, 0));
    setSuccessMsg('تم تأجيل التحدي. نقصت نسبة الإنجاز 10%.');
    setTimeout(() => setSuccessMsg(''), 3000);
  };
  const selectLevel = (level) => {
    setSelectedLevel(level);
    setWeeklyChallenges(weeklyChallengesByLevel[level]);
    setSuccessMsg('تم تغيير مستوى التحدي!');
    setTimeout(() => setSuccessMsg(''), 2000);
  };
  const startChallenge = (id) => {
    setSuccessMsg(`تم بدء التحدي رقم ${id}`);
    setTimeout(() => setSuccessMsg(''), 2000);
  };
  const markStatus = (ayah, status) => {
    setTodayAyat(prev => prev.map(a => a.number === ayah.number ? { ...a, status } : a));
    if (status === 'done') {
      setProgress(pr => Math.min(pr + 20, 100));
      setPoints(p => p + 5);
      setSuccessMsg('أحسنت! تم تسجيل الآية كمحفوظة وزادت نسبة التقدم.');
      setTimeout(() => setSuccessMsg(''), 2000);
    }
  };
  const submitAnswer = (id, answer) => {
    setTafsirQuests(prev => prev.map(q => q.id === id ? { ...q, feedback: 'تم التصحيح: إجابتك تحت المراجعة.' } : q));
    setSuccessMsg('تم إرسال إجابتك!');
    setTimeout(() => setSuccessMsg(''), 2000);
  };
  const repeatChallenge = (id) => {
    setSuccessMsg(`تمت إعادة التحدي رقم ${id}`);
    setTimeout(() => setSuccessMsg(''), 2000);
  };
  const shareAchievement = (item) => {
    setSuccessMsg(`تمت مشاركة إنجاز: ${item.title}`);
    setTimeout(() => setSuccessMsg(''), 2000);
  };

  return (
    <ChallengeContext.Provider
      value={{
        currentChallenge,
        progress,
        points,
        rank,
        canPostpone,
        leaderboard,
        weeklyChallenges,
        selectedLevel,
        selectLevel,
        startChallenge,
        startDailyChallenge,
        postponeChallenge,
        memorizationPlan,
        todayAyat,
        audioReciter,
        setReciter,
        markStatus,
        tafsirQuests,
        submitAnswer,
        infoOfDay,
        history,
        badges,
        repeatChallenge,
        shareAchievement,
        successMsg,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}; 