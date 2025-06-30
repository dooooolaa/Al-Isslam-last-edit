import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const MuslimWomenQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const questions = [
    {
      id: 1,
      question: "ما حكم الحجاب في الإسلام؟",
      answer: "الحجاب واجب على المرأة المسلمة، قال تعالى: 'يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ' (الأحزاب: 59). ويشمل ستر جميع البدن ما عدا الوجه والكفين.",
      category: "الحجاب واللباس",
      source: "القرآن الكريم - سورة الأحزاب"
    },
    {
      id: 2,
      question: "ما حكم عمل المرأة خارج البيت؟",
      answer: "عمل المرأة خارج البيت جائز بشرط الحاجة، وعدم الاختلاط المحرم، ومراعاة الحجاب، وعدم إهمال واجبات البيت. قال تعالى: 'وَقَرْنَ فِي بُيُوتِكُنَّ' (الأحزاب: 33).",
      category: "العمل والوظائف",
      source: "القرآن الكريم - سورة الأحزاب"
    },
    {
      id: 3,
      question: "ما حكم تعليم المرأة؟",
      answer: "تعليم المرأة واجب، قال رسول الله ﷺ: 'طلب العلم فريضة على كل مسلم' (رواه ابن ماجه). والمرأة كالرجل في حق التعليم والتعلم.",
      category: "التعليم",
      source: "سنن ابن ماجه"
    },
    {
      id: 4,
      question: "ما حكم الاختلاط بين الرجال والنساء؟",
      answer: "الاختلاط المحرم محظور، قال تعالى: 'وَقَرْنَ فِي بُيُوتِكُنَّ وَلَا تَبَرَّجْنَ تَبَرُّجَ الْجَاهِلِيَّةِ الْأُولَىٰ' (الأحزاب: 33). ويجوز الاختلاط للضرورة مع مراعاة الحجاب والآداب.",
      category: "الاختلاط",
      source: "القرآن الكريم - سورة الأحزاب"
    },
    {
      id: 5,
      question: "ما حكم الطلاق من قبل المرأة؟",
      answer: "المرأة لا تستطيع الطلاق مباشرة، ولكن لها حق الخلع إذا كرهت زوجها، قال تعالى: 'فَلَا جُنَاحَ عَلَيْهِمَا فِيمَا افْتَدَتْ بِهِ' (البقرة: 229).",
      category: "الطلاق",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 6,
      question: "ما حكم الميراث للمرأة؟",
      answer: "المرأة ترث في الإسلام، قال تعالى: 'لِلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ وَلِلنِّسَاءِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ' (النساء: 7).",
      category: "الميراث",
      source: "القرآن الكريم - سورة النساء"
    },
    {
      id: 7,
      question: "ما حكم شهادة المرأة؟",
      answer: "شهادة المرأة مقبولة في الإسلام، قال تعالى: 'فَإِن لَّمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌ وَامْرَأَتَانِ مِمَّن تَرْضَوْنَ مِنَ الشُّهَدَاءِ' (البقرة: 282).",
      category: "الشهادة",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 8,
      question: "ما حكم صلاة المرأة في المسجد؟",
      answer: "صلاة المرأة في المسجد جائزة، قال رسول الله ﷺ: 'لا تمنعوا إماء الله مساجد الله' (رواه البخاري). ولكن صلاتها في بيتها أفضل.",
      category: "الصلاة",
      source: "صحيح البخاري"
    },
    {
      id: 9,
      question: "ما حكم السفر للمرأة بدون محرم؟",
      answer: "سفر المرأة بدون محرم محرم، قال رسول الله ﷺ: 'لا يحل لامرأة تؤمن بالله واليوم الآخر أن تسافر مسيرة يوم وليلة إلا مع ذي محرم' (رواه البخاري).",
      category: "السفر",
      source: "صحيح البخاري"
    },
    {
      id: 10,
      question: "ما حكم تعدد الزوجات؟",
      answer: "تعدد الزوجات جائز للرجل بشرط العدل، قال تعالى: 'فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً' (النساء: 3). والمرأة لا يجوز لها تعدد الأزواج.",
      category: "الزواج",
      source: "القرآن الكريم - سورة النساء"
    }
  ];

  const categories = ['الكل', 'الحجاب واللباس', 'العمل والوظائف', 'التعليم', 'الاختلاط', 'الطلاق', 'الميراث', 'الشهادة', 'الصلاة', 'السفر', 'الزواج'];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.includes(searchTerm) || q.answer.includes(searchTerm);
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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#E91E63' }}>
          أسئلة وأجوبة في أحكام المرأة المسلمة
        </Typography>
      </Box>

      <Card sx={{ mb: 3, backgroundColor: '#FCE4EC' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#E91E63' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#E91E63' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} sx={{ mb: 2, backgroundColor: '#FAFAFA' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#E91E63' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: '#FCE4EC',
                  color: '#E91E63',
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

export default MuslimWomenQA; 