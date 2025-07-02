import React, { createContext, useState, useEffect } from 'react';

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

// أنواع التحديات وأسئلة كثيرة لكل نوع
const challengeTypes = [
  {
    type: 'تلاوة',
    challenges: [
      { id: 1, title: 'تلاوة: البقرة 1-20', description: 'اقرأ من سورة البقرة: 1–20 خلال 3 أيام.' },
      { id: 2, title: 'تلاوة: آل عمران 1-15', description: 'اقرأ من سورة آل عمران: 1–15 اليوم.' },
      { id: 3, title: 'تلاوة: الكهف كاملة', description: 'اقرأ سورة الكهف كاملة يوم الجمعة.' },
      { id: 4, title: 'تلاوة: يس 1-27', description: 'اقرأ من سورة يس: 1–27 اليوم.' },
      { id: 5, title: 'تلاوة: جزء عمّ', description: 'اقرأ جزء عمّ كاملاً في يومين.' },
      // ... أضف المزيد
    ],
    questions: [
      'ما هي الآية التي أثرت فيك اليوم؟',
      'هل واجهت صعوبة في التلاوة؟',
      'كم استغرقت من الوقت في التلاوة؟',
      'هل قرأت التلاوة بصوت مسموع أم صامت؟',
      'هل استخدمت مصحف ورقي أم إلكتروني؟',
      // ... أضف المزيد
    ]
  },
  {
    type: 'حفظ',
    challenges: [
      { id: 1, title: 'حفظ: 5 آيات من جزء عمّ', description: 'احفظ 5 آيات من جزء عمّ مع التكرار الصوتي.' },
      { id: 2, title: 'حفظ: 3 آيات من سورة الملك', description: 'احفظ 3 آيات من سورة الملك اليوم.' },
      { id: 3, title: 'حفظ: 7 آيات من سورة النبأ', description: 'احفظ 7 آيات من سورة النبأ مع مراجعة.' },
      { id: 4, title: 'حفظ: 10 آيات من سورة البقرة', description: 'احفظ 10 آيات من سورة البقرة خلال يومين.' },
      { id: 5, title: 'حفظ: مراجعة جزء تبارك', description: 'راجع ما حفظته من جزء تبارك.' },
      // ... أضف المزيد
    ],
    questions: [
      'هل تمكنت من الحفظ دون أخطاء؟',
      'كم مرة كررت الآيات للحفظ؟',
      'هل استخدمت طريقة التكرار الصوتي؟',
      'ما هي أصعب كلمة واجهتك في الحفظ؟',
      'هل راجعت ما حفظته مع أحد؟',
      // ... أضف المزيد
    ]
  },
  {
    type: 'تدبر',
    challenges: [
      { id: 1, title: 'تدبر: تفسير 3 آيات من الملك', description: 'اقرأ تفسير 3 آيات من سورة الملك وأجب عن الأسئلة.' },
      { id: 2, title: 'تدبر: معنى الصمد', description: 'ابحث عن معنى كلمة "الصمد" في التفسير.' },
      { id: 3, title: 'تدبر: تدبر آيات الرحمة', description: 'تدبر آيتين عن الرحمة في القرآن.' },
      { id: 4, title: 'تدبر: تدبر آية الكرسي', description: 'اقرأ تفسير آية الكرسي وأجب عن سؤال.' },
      { id: 5, title: 'تدبر: تدبر سورة الإخلاص', description: 'تدبر معاني سورة الإخلاص.' },
      // ... أضف المزيد
    ],
    questions: [
      'ما المعنى الذي استوقفك في التفسير؟',
      'هل وجدت شيئًا جديدًا في تفسير اليوم؟',
      'كيف يمكن تطبيق معنى الآية في حياتك؟',
      'هل استخدمت أكثر من مصدر تفسير؟',
      'ما هو السؤال الذي ترغب في طرحه على شيخ؟',
      // ... أضف المزيد
    ]
  },
  {
    type: 'تطبيق',
    challenges: [
      { id: 1, title: 'تطبيق: قولوا للناس حسنا', description: 'عامل الناس اليوم بكلمة طيبة اقتداءً بالآية.' },
      { id: 2, title: 'تطبيق: الصدقة الخفية', description: 'تصدق اليوم دون أن يعلم أحد.' },
      { id: 3, title: 'تطبيق: صلة الرحم', description: 'اتصل بأحد أقاربك اليوم.' },
      { id: 4, title: 'تطبيق: كظم الغيظ', description: 'اضبط نفسك عند الغضب اليوم.' },
      { id: 5, title: 'تطبيق: إفشاء السلام', description: 'ابدأ بالسلام على من تقابلهم اليوم.' },
      // ... أضف المزيد
    ],
    questions: [
      'هل نفذت العمل المطلوب اليوم؟',
      'ما هو شعورك بعد التطبيق؟',
      'هل لاحظت أثر العمل على من حولك؟',
      'هل واجهت صعوبة في التطبيق؟',
      'هل ترغب في تكرار هذا العمل؟',
      // ... أضف المزيد
    ]
  },
  {
    type: 'فهم وتفسير',
    challenges: [
      { id: 1, title: 'فهم: معنى "الصمد"', description: 'اشرح معنى كلمة "الصمد".' },
      { id: 2, title: 'فهم: لماذا وصف الله نفسه بـ"الرحمن"؟', description: 'أجب عن سبب وصف الله نفسه بالرحمن.' },
      { id: 3, title: 'فهم: معنى "النبأ العظيم"', description: 'اشرح معنى "النبأ العظيم" في سورة النبأ.' },
      { id: 4, title: 'فهم: تفسير "قل هو الله أحد"', description: 'فسر آية "قل هو الله أحد".' },
      { id: 5, title: 'فهم: معنى "لا إكراه في الدين"', description: 'اشرح معنى "لا إكراه في الدين".' },
      // ... أضف المزيد
    ],
    questions: [
      'ما معنى الآية أو الكلمة المطلوبة؟',
      'هل قرأت تفسيرًا مختلفًا اليوم؟',
      'هل تغير فهمك للآية بعد البحث؟',
      'ما هو السؤال الذي بقي في ذهنك؟',
      'هل ترغب في معرفة المزيد عن هذا الموضوع؟',
      // ... أضف المزيد
    ]
  },
];

export const ChallengeProvider = ({ children }) => {
  // الحالة الرئيسية
  const [currentChallenge, setCurrentChallenge] = useState({ title: 'تلاوة: البقرة 1-20', endTime: new Date(Date.now() + 12 * 60 * 60 * 1000) });
  const [progress, setProgress] = useState(40);
  const [points, setPoints] = useState(0);
  const [rank, setRank] = useState(0);
  const [canPostpone, setCanPostpone] = useState(true);
  const [leaderboard, setLeaderboard] = useState(mockLeaderboard.map(u => ({...u, points: 0})));
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

  // تحديث النقاط والترتيب عند كل تغيير في النقاط
  useEffect(() => {
    // تحديث نقاط المستخدم الحالي في اللوحة
    setLeaderboard(prev => prev.map(u => u.isCurrent ? { ...u, points } : u));
  }, [points]);

  useEffect(() => {
    // ترتيب المستخدمين من الأعلى للأقل
    const sorted = [...leaderboard].sort((a, b) => b.points - a.points);
    const current = sorted.find(u => u.isCurrent);
    // إذا لم يشارك أحد (كل النقاط 0)
    if (sorted.every(u => u.points === 0)) {
      setRank(0);
      return;
    }
    // الترتيب حسب النقاط (الأكثر = 1)
    const uniquePoints = [...new Set(sorted.map(u => u.points))];
    const userRank = uniquePoints.indexOf(current.points) + 1;
    setRank(userRank);
  }, [leaderboard]);

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
        setPoints
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export { challengeTypes }; 