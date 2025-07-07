import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import fuzzyIncludes from './fuzzy';

const IbadatQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما هي شروط الصلاة؟",
      answer: "شروط الصلاة هي: الإسلام، والعقل، والتمييز، ورفع الحدث، وإزالة النجاسة، وستر العورة، ودخول الوقت، واستقبال القبلة، والنية. قال رسول الله ﷺ: 'لا تقبل صلاة بغير طهور' (رواه مسلم).",
      category: "الصلاة",
      source: "صحيح مسلم"
    },
    {
      id: 2,
      question: "ما حكم من ترك الصلاة عمداً؟",
      answer: "من ترك الصلاة عمداً فهو كافر خارج عن ملة الإسلام، قال رسول الله ﷺ: 'العهد الذي بيننا وبينهم الصلاة، فمن تركها فقد كفر' (رواه الترمذي).",
      category: "الصلاة",
      source: "سنن الترمذي"
    },
    {
      id: 3,
      question: "ما هي أركان الوضوء؟",
      answer: "أركان الوضوء ستة: غسل الوجه، وغسل اليدين إلى المرفقين، ومسح الرأس، وغسل الرجلين إلى الكعبين، والترتيب، والموالاة. قال تعالى: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ' (المائدة: 6).",
      category: "الطهارة",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 4,
      question: "ما حكم الصيام في رمضان؟",
      answer: "الصيام في رمضان فرض على كل مسلم بالغ عاقل مقيم قادر، قال تعالى: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ' (البقرة: 183).",
      category: "الصيام",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 5,
      question: "ما هي شروط الحج؟",
      answer: "شروط الحج: الإسلام، والعقل، والبلوغ، والحرية، والاستطاعة (مالية وبدنية)، والمحرم للمرأة. قال تعالى: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا' (آل عمران: 97).",
      category: "الحج والعمرة",
      source: "القرآن الكريم - سورة آل عمران"
    },
    {
      id: 6,
      question: "ما حكم الزكاة؟",
      answer: "الزكاة ركن من أركان الإسلام الخمسة، فرض على كل مسلم مالك للنصاب الحولي. قال تعالى: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ' (البقرة: 43).",
      category: "الزكاة",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 7,
      question: "ما هي نواقض الوضوء؟",
      answer: "نواقض الوضوء: الخارج من السبيلين، والنوم المستغرق، والإغماء، والجنون، ومس الفرج باليد، وأكل لحم الإبل. قال رسول الله ﷺ: 'من مس ذكره فليتوضأ' (رواه أحمد).",
      category: "الطهارة",
      source: "مسند أحمد"
    },
    {
      id: 8,
      question: "ما حكم صلاة الجمعة؟",
      answer: "صلاة الجمعة فرض عين على كل مسلم ذكر بالغ عاقل مقيم صحيح، قال تعالى: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ' (الجمعة: 9).",
      category: "الصلاة",
      source: "القرآن الكريم - سورة الجمعة"
    },
    {
      id: 9,
      question: "ما هي أنواع المياه في الطهارة؟",
      answer: "المياه ثلاثة أنواع: طاهر مطهر (كالماء المطلق)، وطاهر غير مطهر (كالماء المستعمل)، ونجس (كالماء المتغير بالنجاسة). قال رسول الله ﷺ: 'الماء طهور لا ينجسه شيء' (رواه أبو داود).",
      category: "الطهارة",
      source: "سنن أبي داود"
    },
    {
      id: 10,
      question: "ما حكم من أفطر في رمضان عمداً؟",
      answer: "من أفطر في رمضان عمداً بغير عذر شرعي فعليه القضاء والكفارة (صيام شهرين متتابعين أو إطعام ستين مسكيناً). قال رسول الله ﷺ: 'من أفطر يوماً من رمضان من غير رخصة ولا مرض لم يقضه صوم الدهر كله' (رواه البخاري).",
      category: "الصيام",
      source: "صحيح البخاري"
    }
  ];

  const categories = ['الكل', 'الصلاة', 'الطهارة', 'الصيام', 'الحج والعمرة', 'الزكاة'];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = fuzzyIncludes(q.question, searchTerm) || fuzzyIncludes(q.answer, searchTerm);
    const matchesCategory = selectedCategory === 'الكل' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/faq-categories')}
          sx={{ fontFamily: 'Arial, sans-serif' }}
        >
          العودة للفئات
        </Button>
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#1976D2' }}>
          أسئلة وأجوبة في العبادات
        </Typography>
      </Box>

      <Card className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#1976D2' }}>
            البحث والتصفية
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="ابحث في الأسئلة والأجوبة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <SearchIcon sx={{ mr: 1, color: '#666' }} />,
                sx: { fontFamily: 'Arial, sans-serif' }
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                sx={{ fontFamily: 'Arial, sans-serif' }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#1976D2' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 2, border: '1px solid #b2dfdb', boxShadow: '0 2px 8px 0 #e0f2f1', color: '#14532d', '& .MuiAccordionSummary-root': { color: '#14532d' }, '& .MuiAccordionDetails-root': { color: '#14532d' } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#388e3c' }} />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#197d2b' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: 'transparent',
                  color: '#197d2b',
                  fontFamily: 'Arial, sans-serif'
                }} 
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ fontFamily: 'Arial, sans-serif' }}>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                {item.answer}
              </Typography>
              <Typography variant="caption" sx={{ color: '#666', fontStyle: 'italic' }}>
                المصدر: {item.source}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default IbadatQA; 