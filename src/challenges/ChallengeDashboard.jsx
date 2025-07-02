import React, { useContext, useState } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import ProgressBar from './components/ProgressBar';
import Leaderboard from './components/Leaderboard';
import NotificationBanner from './components/NotificationBanner';
import { challengeTypes } from '../context/ChallengeContext';
import { Link } from 'react-router-dom';
// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
// Icons
import { FaBookOpen, FaBrain, FaLightbulb, FaHandsHelping, FaRegQuestionCircle } from 'react-icons/fa';

const icons = {
  'تلاوة': <FaBookOpen size={28} color="#388e3c" />,
  'حفظ': <FaBrain size={28} color="#1976d2" />,
  'تدبر': <FaLightbulb size={28} color="#fbc02d" />,
  'تطبيق': <FaHandsHelping size={28} color="#8d6e63" />,
  'فهم وتفسير': <FaRegQuestionCircle size={28} color="#7b1fa2" />,
};

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const ChallengeDashboard = () => {
  const {
    progress,
    points,
    rank,
    startDailyChallenge,
    successMsg
  } = useContext(ChallengeContext);

  const [selectedType, setSelectedType] = useState(null);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [congrats, setCongrats] = useState('');

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    const typeObj = challengeTypes.find(t => t.type === type);
    const challenge = getRandomItem(typeObj.challenges);
    const shuffled = [...typeObj.questions].sort(() => 0.5 - Math.random());
    setActiveChallenge(challenge);
    setActiveQuestions(shuffled.slice(0, 3));
    setAnswers(['', '', '']);
    setCompleted(false);
    setCongrats('');
  };

  const handleAnswerChange = (idx, value) => {
    setAnswers(ans => ans.map((a, i) => i === idx ? value : a));
  };

  const handleComplete = () => {
    setCompleted(true);
    setCongrats('مبروك! أنجزت التحدي وحصلت على نقاط.');
    startDailyChallenge();
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4, px: 1 }} className="dark:bg-gray-900 bg-gold-50">
      <Box maxWidth={600} mx="auto">
        <NotificationBanner message="تذكير: لا تنس المسابقة التفاعلية!" />
        {successMsg && (
          <Fade in={!!successMsg}><Box my={2}><Typography align="center" color="success.main" fontWeight={700}>{successMsg}</Typography></Box></Fade>
        )}
        {/* زر المسابقة الإسلامية */}
        <Box mb={3} textAlign="center">
          <Button
            component={Link}
            to="/challenges/quiz"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ fontWeight: 700, fontSize: 18, borderRadius: 3, boxShadow: 3, bgcolor: 'gold.500', color: 'white', '&:hover': { bgcolor: 'gold.600' } }}
          >
            🏆 جرب المسابقة الإسلامية التفاعلية
          </Button>
        </Box>
        {/* نسبة الإنجاز والنقاط */}
        <Card sx={{ mb: 3, p: 2, boxShadow: 2, border: '2px solid', borderColor: 'gold.500', bgcolor: 'white', color: 'text.primary' }} className="dark:bg-[#23272f] dark:text-primary-500 text-primary-500 shadow-lg border-2 border-gold-500">
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" gap={2}>
            <Box>
              <Typography fontWeight={600} className="text-primary-500">نقاطك من المسابقات:</Typography>
              <Typography fontSize={22} className="text-primary-500" fontWeight={700}>{points}</Typography>
            </Box>
            <Box textAlign="center">
              <Typography className="text-primary-500">ترتيبك: <b>#{rank}</b></Typography>
            </Box>
          </Box>
        </Card>
        {/* الترتيب */}
        <Card sx={{ p: 2, boxShadow: 1, border: '2px solid', borderColor: 'gold.400', bgcolor: 'white', color: 'text.primary' }} className="dark:bg-[#23272f] dark:text-primary-500 text-primary-500 shadow-lg border-2 border-gold-400">
          <Leaderboard />
        </Card>
      </Box>
    </Box>
  );
};

export default ChallengeDashboard; 