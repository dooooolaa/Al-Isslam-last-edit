import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import { FaQuran, FaUserTie, FaBook, FaMosque, FaPrayingHands, FaUsers, FaStarAndCrescent, FaFemale, FaHistory, FaRandom } from 'react-icons/fa';
import { MdOutlineQuiz } from 'react-icons/md';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';

// أقسام المسابقة
const quizSections = [
  { key: 'aqeedah', label: 'العقيدة والتوحيد', icon: <FaMosque size={24} color="#1976d2" /> },
  { key: 'seerah', label: 'السيرة النبوية', icon: <FaUserTie size={24} color="#388e3c" /> },
  { key: 'quran', label: 'القرآن الكريم', icon: <FaQuran size={24} color="#fbc02d" /> },
  { key: 'hadith', label: 'الأحاديث النبوية', icon: <FaBook size={24} color="#8d6e63" /> },
  { key: 'fiqh', label: 'الفقه والعبادات', icon: <FaPrayingHands size={24} color="#7b1fa2" /> },
  { key: 'sahabah', label: 'الصحابة والتابعين', icon: <FaUsers size={24} color="#c62828" /> },
  { key: 'ramadan', label: 'رمضان والحج', icon: <FaStarAndCrescent size={24} color="#ff9800" /> },
  { key: 'women', label: 'المرأة في الإسلام', icon: <FaFemale size={24} color="#e91e63" /> },
  { key: 'history', label: 'التاريخ الإسلامي', icon: <FaHistory size={24} color="#607d8b" /> },
  { key: 'mix', label: 'متنوع', icon: <FaRandom size={24} color="#009688" /> },
];

// مثال أسئلة (يجب لاحقًا جلبها من قاعدة بيانات أو ملف كبير)
const questionsBank = {
  aqeedah: [
    // أمثلة متنوعة من الأسئلة التي أرسلتها (اختيار من متعدد، صح/خطأ، فراغ)
    { type: 'mcq', question: 'ما هو الشرك الأكبر؟', options: ['إشراك أحد لله في الربوبية أو الألوهية', 'عدم الصلاة', 'ترك الزكاة', 'الغيبة'], answer: 0, explanation: 'الشرك الأكبر هو إشراك أحد لله في الربوبية أو الألوهية.' },
    { type: 'tf', question: 'هل الإيمان بالكتائب الأربعة من أركان الإيمان؟', answer: true, explanation: 'نعم، الإيمان بالكتب من أركان الإيمان.' },
    { type: 'blank', question: 'ما الفرق بين التوحيد الربوبي والتوحيد العبادي؟', answer: 'الربوبي: الإيمان بعلم الله وقدرته، العبادي: توجيه العبادة لله وحده', explanation: 'الربوبي: الإيمان بعلم الله وقدرته، العبادي: توجيه العبادة لله وحده.' },
    { type: 'tf', question: 'هل الدعاء لغير الله رياء؟', answer: true, explanation: 'الدعاء لغير الله لا يصح.' },
    { type: 'blank', question: 'ما معنى الإلحاد؟', answer: 'إنكار وجود الله', explanation: 'الإلحاد هو إنكار وجود الله.' },
    { type: 'mcq', question: 'من هو الشاهد الأعظم على التوحيد؟', options: ['الكون الطبيعي', 'الملائكة', 'الرسل', 'القرآن'], answer: 0, explanation: 'الكون الطبيعي بأدلته شاهد على التوحيد.' },
    { type: 'tf', question: 'هل الاستعاذة من الشيطان عبادة؟', answer: false, explanation: 'هي طلب حماية من شره، ولا تُعد شركًا.' },
    { type: 'blank', question: 'ما هي صفات الله الخمسون؟', answer: 'العليم، الحكيم، القدير…', explanation: 'صفات الله مثل العليم، الحكيم، القدير… مع تحسينها وتفويض معناها.' },
    { type: 'tf', question: 'هل يجوز القول "الله لا يعلم الغيب"؟', answer: false, explanation: 'لا، هذا إنكار لعلم الله.' },
    { type: 'blank', question: 'ما هو المعنى الصحيح لعقيدة القدَر؟', answer: 'أن الله عليم ومقدر خيره وشره', explanation: 'أن الله عليم ومقدر خيره وشره.' },
    { type: 'tf', question: 'هل يؤمن المسلم بالملائكة؟', answer: true, explanation: 'نعم، الإيمان بالملائكة من أركان الإيمان.' },
    { type: 'blank', question: 'من أول من آمن برسول الله من الصبيان؟', answer: 'علي بن أبي طالب', explanation: 'علي بن أبي طالب أول من آمن من الصبيان.' },
    { type: 'mcq', question: 'ما الفرق بين توحيد الأسماء والصفات؟', options: ['الاعتقاد بأسماء الله وصفاته كما وردت', 'تشبيه الله بخلقه', 'تعطيل الصفات', 'تفسير الصفات بالعقل فقط'], answer: 0, explanation: 'الاعتقاد بأسماء الله وصفاته كما وردت في النص دون تشبيه أو تعطيل.' },
    { type: 'tf', question: 'هل يجوز صنع تماثيل؟', answer: false, explanation: 'مكروه أو محرم بحسب العادة الإسلامية.' },
    { type: 'blank', question: 'ما معنى الإيمان بالغيب؟', answer: 'الإيمان بما لا يُدرك بالحواس مثل الجنة والنار', explanation: 'الإيمان بما لا يُدرك بالحواس مثل الجنة والنار.' },
    { type: 'tf', question: 'هل يجوز التقرب إلى الله بالأضرحة؟', answer: false, explanation: 'لا، إنها بدعة.' },
    { type: 'blank', question: 'ما معنى التوحيد الاقتصادي؟', answer: 'توفيق الأموال لله واستخدامها في طاعاته', explanation: 'توفيق الأموال لله واستخدامها في طاعاته.' },
    { type: 'tf', question: 'هل الصدقة تدفع الغرامة؟', answer: false, explanation: 'الغرامة مالية خيارية حسب القانون.' },
    { type: 'blank', question: 'ما الفرق بين الإيمان والعمل؟', answer: 'الإيمان هو الاعتقاد، والعمل هو الثمر الناتج عنه', explanation: 'الإيمان هو الاعتقاد، والعمل هو الثمر الناتج عنه.' },
    { type: 'mcq', question: 'ما هو الكتاب الذي يؤمن به المسلم؟', options: ['القرآن الكريم', 'الإنجيل', 'التوراة', 'الزبور'], answer: 0, explanation: 'القرآن الكريم هو الكتاب الذي يؤمن به المسلم.' },
    { type: 'blank', question: 'أوَّل آية أنزلت في القرآن؟', answer: 'اقرأ باسم ربك الذي خلق', explanation: 'أول آية أنزلت: "اقرأ باسم ربك الذي خلق".' },
    { type: 'tf', question: 'ما معنى "لا حول ولا قوة إلا بالله"؟ التسليم بعجز العبد واعتماد القدرة لله.', answer: true, explanation: 'معناها التسليم بعجز العبد واعتماد القدرة لله.' },
    { type: 'mcq', question: 'هل الشفاعة حكر على النبي ﷺ فقط؟', options: ['نعم', 'لا', 'لبعض الأنبياء فقط', 'لبعض الصحابة فقط'], answer: 0, explanation: 'الشفاعة الكبرى لنبيه ﷺ وأصفيائه عند الله.' },
    { type: 'tf', question: 'هل يجوز الاستنجاء من الجنابة بالغسول فقط؟', answer: false, explanation: 'يجب غسل الجسد بالماء.' },
    { type: 'blank', question: 'من أول من دعا إلى الإسلام بعد خديجة؟', answer: 'أبو بكر الصديق', explanation: 'أبو بكر الصديق أول من دعا بعد خديجة.' },
    { type: 'tf', question: 'هل أول من وضع الميزان ليوم القيامة العلماء؟', answer: false, explanation: 'هو من أعمال العباد على وزن أعمالهم.' },
    { type: 'blank', question: 'كيف نعرف أن الرسول ﷺ بشر وليس إلهًا؟', answer: 'لوجود موته وكذا نصوص القرآن والسنة', explanation: 'لوجود موته وكذا نصوص القرآن والسنة.' },
    { type: 'tf', question: 'ما معنى العدل عند الله؟ إعطاء كل ذي حق حقه.', answer: true, explanation: 'العدل هو إعطاء كل ذي حق حقه.' },
    { type: 'blank', question: 'هل يملك الإنسان كل الأقدار؟', answer: 'لا، إلا ما جعله الله قادرًا عليه', explanation: 'لا، إلا ما جعله الله قادرًا عليه.' },
    { type: 'tf', question: 'هل كل كلام يُقال "بسم الله" يُعد توحيدًا؟', answer: false, explanation: 'لا، بل يريد المعنية ويعني إخلاصه لله.' },
    { type: 'blank', question: 'ما المقصود بمواريث المرأة والرجل؟', answer: 'التوزيع الشرعي بناءً على القرابة والقواعد الفقهية', explanation: 'التوزيع الشرعي بناءً على القرابة والقواعد الفقهية.' },
    { type: 'tf', question: 'كيف نثبت الإيمان بالرسل جميعًا؟ القبول بهم إيمان.', answer: true, explanation: 'القبول بجميع الرسل إيمان.' },
    { type: 'blank', question: 'هل أصول الدين أركان شرعية؟', answer: 'أصول الدين أركان الإيمان، وليست ركنًا من أركان الإسلام', explanation: 'أصول الدين أركان الإيمان، وليست ركنًا من أركان الإسلام.' },
    { type: 'tf', question: 'ما معنى القول بالتفويض؟ ترك فهم صفات الله وحكمه بلا تعطيل.', answer: true, explanation: 'ترك فهم صفات الله وحكمه بلا تعطيل.' },
    { type: 'blank', question: 'هل الملائكة جنس مخلوق؟', answer: 'نعم، مخلوقة من نور', explanation: 'الملائكة مخلوقة من نور.' },
    { type: 'tf', question: 'هل الجن مخلوق مثلنا؟', answer: true, explanation: 'الجن مخلوقون من نار.' },
    { type: 'blank', question: 'ماهو الإيمان بالقضاء؟', answer: 'التصديق بأن الله مقدر الأحداث', explanation: 'الإيمان بأن الله مقدر الأحداث.' },
    { type: 'tf', question: 'هل الرسول ﷺ يعلمه الله الغيب؟', answer: false, explanation: 'لا، فقط يُعلمه بما شاء من العلم الشرعي.' },
    { type: 'blank', question: 'هل التوحيد يشمل الأسماء والصفات؟', answer: 'نعم، لأنه التوحيد الكامل لله', explanation: 'نعم، لأنه التوحيد الكامل لله.' },
    // ... أكمل حتى 40 سؤالاً بنفس النمط
  ],
  seerah: [
    {
      type: 'mcq',
      question: 'من هو أول من آمن برسول الله صلى الله عليه وسلم من الرجال؟',
      options: ['أبو بكر الصديق', 'عمر بن الخطاب', 'علي بن أبي طالب', 'عثمان بن عفان'],
      answer: 2,
      explanation: 'أول من آمن من الرجال هو علي بن أبي طالب. (سيرة ابن هشام)'
    },
    {
      type: 'tf',
      question: 'ولد النبي محمد صلى الله عليه وسلم في مكة.',
      answer: true,
      explanation: 'النبي محمد وُلد في مكة المكرمة.'
    },
    {
      type: 'blank',
      question: 'أكمل: غزوة بدر كانت في السنة ___ للهجرة',
      answer: 'الثانية',
      explanation: 'غزوة بدر كانت في السنة الثانية للهجرة.'
    },
    {
      type: 'image',
      question: 'ما اسم هذا الجبل الذي وقف عليه النبي في مكة؟',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jabal_Al-Noor_Mecca.jpg',
      options: ['جبل أحد', 'جبل النور', 'جبل ثور', 'جبل الرحمة'],
      answer: 1,
      explanation: 'جبل النور هو الذي فيه غار حراء.'
    },
    {
      type: 'timed',
      question: 'كم كان عمر النبي عند البعثة؟',
      options: ['30', '35', '40', '45'],
      answer: 2,
      time: 10,
      explanation: 'بعث النبي محمد صلى الله عليه وسلم وعمره 40 سنة.'
    },
  ],
  quran: [
    {
      type: 'mcq',
      question: 'ما هي أطول سورة في القرآن الكريم؟',
      options: ['البقرة', 'آل عمران', 'النساء', 'المائدة'],
      answer: 0,
      explanation: 'أطول سورة في القرآن هي سورة البقرة.'
    },
    {
      type: 'tf',
      question: 'سورة الإخلاص تتكون من 4 آيات فقط.',
      answer: true,
      explanation: 'سورة الإخلاص تتكون من 4 آيات.'
    },
    {
      type: 'blank',
      question: 'أكمل: أول آية في القرآن هي ___',
      answer: 'بسم الله الرحمن الرحيم',
      explanation: 'أول آية في المصحف: بسم الله الرحمن الرحيم.'
    },
    {
      type: 'image',
      question: 'ما اسم هذه السورة؟',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Quran2.jpg',
      options: ['الفاتحة', 'البقرة', 'الكوثر', 'الإخلاص'],
      answer: 0,
      explanation: 'هذه صورة بداية سورة الفاتحة.'
    },
    {
      type: 'timed',
      question: 'كم عدد أجزاء القرآن الكريم؟',
      options: ['20', '30', '40', '60'],
      answer: 1,
      time: 10,
      explanation: 'القرآن الكريم 30 جزءاً.'
    },
  ],
  // ... أكمل باقي الأقسام بنفس النمط مع تنويع الأسئلة
  mix: [] // سيتم ملؤها تلقائيًا من جميع الأقسام
};

// حذف جميع الأسئلة من نوع blank من كل الأقسام في بنك الأسئلة (نهائي)
Object.keys(questionsBank).forEach(section => {
  questionsBank[section] = questionsBank[section].filter(q => q.type === 'mcq' || q.type === 'tf');
});

const getRandomQuestions = (arr, n = 5) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const getLevel = (score) => {
  if (score >= 90) return 'عالِم محترف';
  if (score >= 70) return 'عالِم متوسط';
  if (score >= 50) return 'عالِم مبتدئ';
  return 'بحاجة للمزيد';
};

const IslamicQuiz = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [numQuestions, setNumQuestions] = useState(null);
  const [sectionQuestionsCount, setSectionQuestionsCount] = useState(0);
  const navigate = useNavigate();
  const { setPoints } = useContext(ChallengeContext);

  // بدء الاختبار
  const startQuiz = () => {
    const qs = getRandomQuestions(questionsBank[selectedSection], numQuestions);
    setQuestions(qs);
    setCurrent(0);
    setUserAnswers([]);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setExplanation('');
    setIsCorrect(null);
    setAttempts(0);
  };

  // التحقق من الإجابة
  const checkAnswer = (answer) => {
    const q = questions[current];
    let correct = false;
    if (q.type === 'mcq') correct = answer === q.answer;
    if (q.type === 'tf') correct = answer === q.answer;
    if (q.type === 'blank') {
      const user = answer.trim().toLowerCase();
      const model = q.answer.trim().toLowerCase();
      if (user.length === 0) {
        correct = false;
      } else {
        correct = user.includes(model) || model.includes(user) || user.split(' ').some(w => model.includes(w));
      }
    }
    setIsCorrect(correct);
    setShowExplanation(true);
    setExplanation(q.explanation);
    setUserAnswers([...userAnswers, answer]);
    // النقاط
    if (correct && attempts === 0) setScore(s => s + 10);
    else if (correct && attempts === 1) setScore(s => s + 5);
    setAttempts(0);
    setTimeout(() => {
      setShowExplanation(false);
      setIsCorrect(null);
      if (current + 1 < questions.length) {
        setCurrent(c => c + 1);
      } else {
        setShowResult(true);
      }
    }, 1800);
  };

  // إعادة المحاولة
  const retry = () => {
    setSelectedSection(null);
    setQuestions([]);
    setCurrent(0);
    setUserAnswers([]);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setExplanation('');
    setIsCorrect(null);
    setAttempts(0);
  };

  // محاولة ثانية
  const tryAgain = () => setAttempts(a => a + 1);

  // عند ظهور النتيجة النهائية، احسب النقاط الفعلية
  useEffect(() => {
    if (showResult) {
      setPoints(score);
    }
  }, [showResult]);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4, px: 1 }} className="dark:bg-[#181c23] bg-gold-50">
      <Box maxWidth={600} mx="auto">
        <div className="rounded-2xl shadow-lg border-2 border-gold-500 bg-white dark:bg-[#23272f] p-6 text-gray-900 dark:text-white transition-colors duration-300">
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <MdOutlineQuiz size={32} color="#f59e0b" />
            <Typography variant="h5" fontWeight={700} color="gold.700">المسابقات الإسلامية – اختبر معلوماتك</Typography>
          </Box>
          {/* اختيار القسم أولاً */}
          {!selectedSection && (
            <>
              <Typography mb={2} fontWeight={600}>اختر قسم الأسئلة:</Typography>
              <Grid container spacing={2} justifyContent="center">
                {quizSections.map(sec => (
                  <Grid item key={sec.key}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={sec.icon}
                      sx={{ minWidth: 150, fontWeight: 700, fontSize: 15, borderRadius: 3 }}
                      onClick={() => {
                        setSelectedSection(sec.key);
                        setSectionQuestionsCount(questionsBank[sec.key].length);
                        setNumQuestions(null);
                      }}
                    >
                      {sec.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          {/* بعد اختيار القسم: اختيار عدد الأسئلة */}
          {selectedSection && !numQuestions && !showResult && (
            <>
              <Typography mb={2} fontWeight={600}>اختر عدد الأسئلة:</Typography>
              <ButtonGroup>
                {[5, 10, 20, 40].filter(n => n <= sectionQuestionsCount).map(n => (
                  <Button
                    key={n}
                    variant={numQuestions === n ? 'contained' : 'outlined'}
                    color={numQuestions === n ? 'primary' : 'inherit'}
                    onClick={() => setNumQuestions(n)}
                  >
                    {n}
                  </Button>
                ))}
                {sectionQuestionsCount > 0 && ![5, 10, 20, 40].includes(sectionQuestionsCount) && (
                  <Button
                    key={sectionQuestionsCount}
                    variant={numQuestions === sectionQuestionsCount ? 'contained' : 'outlined'}
                    color={numQuestions === sectionQuestionsCount ? 'primary' : 'inherit'}
                    onClick={() => setNumQuestions(sectionQuestionsCount)}
                  >
                    {sectionQuestionsCount}
                  </Button>
                )}
              </ButtonGroup>
            </>
          )}
          {/* زر بدء المسابقة بعد اختيار العدد */}
          {selectedSection && numQuestions && !showResult && questions.length === 0 && (
            <Box mt={2} textAlign="center">
              <Button variant="contained" color="success" size="large" sx={{ fontWeight: 700, fontSize: 18, borderRadius: 3 }} onClick={startQuiz}>
                ابدأ المسابقة
              </Button>
            </Box>
          )}
          {/* عرض الأسئلة */}
          {questions.length > 0 && !showResult && (
            <Box>
              <Divider sx={{ my: 2 }} />
              <Typography fontWeight={700} mb={2}>سؤال {current + 1} من {questions.length}</Typography>
              <Typography mb={2} fontSize={18} fontWeight={600}>{questions[current].question}</Typography>
              {/* نوع السؤال */}
              {questions[current].type === 'mcq' && (
                <Grid container spacing={2}>
                  {questions[current].options.map((opt, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="info"
                        sx={{ mb: 1, fontWeight: 700, borderRadius: 2 }}
                        onClick={() => checkAnswer(idx)}
                        disabled={showExplanation}
                      >
                        {opt}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              )}
              {questions[current].type === 'tf' && (
                <Box display="flex" gap={2}>
                  <Button variant="contained" color="success" onClick={() => checkAnswer(true)} disabled={showExplanation} sx={{ fontWeight: 700, borderRadius: 2 }}>✓ صح</Button>
                  <Button variant="contained" color="error" onClick={() => checkAnswer(false)} disabled={showExplanation} sx={{ fontWeight: 700, borderRadius: 2 }}>✗ خطأ</Button>
                </Box>
              )}
              {/* التصحيح الفوري */}
              {showExplanation && (
                <Fade in={showExplanation}>
                  <Box mt={2} p={2} bgcolor={isCorrect ? '#e8f5e9' : '#ffebee'} borderRadius={2} textAlign="center" fontWeight={700} color={isCorrect ? 'success.main' : 'error.main'} fontSize={18} boxShadow={2}>
                    {isCorrect ? '✅ إجابة صحيحة!' : '❌ إجابة خاطئة'}
                    <Typography mt={1} color="text.secondary" fontSize={15}>{explanation}</Typography>
                    {!isCorrect && attempts === 0 && (
                      <Button variant="outlined" color="warning" sx={{ mt: 1 }} onClick={tryAgain}>محاولة ثانية</Button>
                    )}
                  </Box>
                </Fade>
              )}
            </Box>
          )}
          {/* النتيجة النهائية */}
          {showResult && (
            <Box textAlign="center" mt={3}>
              <Typography variant="h6" fontWeight={700} color="success.main">🎉 نتيجتك: {score} / {questions.length * 10}</Typography>
              <Typography fontWeight={600} mt={1}>👑 أنت: "{getLevel((score / (questions.length * 10)) * 100)}"</Typography>
              <Typography fontWeight={600} mt={1}>📈 سجل نقاطك: {score} نقطة</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2, fontWeight: 700, borderRadius: 2, mx: 1 }} onClick={retry}>🔄 اختبار جديد</Button>
              <Button variant="outlined" color="secondary" sx={{ mt: 2, fontWeight: 700, borderRadius: 2, mx: 1 }} onClick={() => navigate('/challenges')}>🏠 الرجوع لقائمة التحديات</Button>
              <Button variant="outlined" color="success" sx={{ mt: 2, fontWeight: 700, borderRadius: 2, mx: 1 }} onClick={() => navigate('/challenges')}>👑 رؤية الترتيب</Button>
            </Box>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default IslamicQuiz; 