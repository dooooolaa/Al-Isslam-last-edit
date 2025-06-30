import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const EthicsQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما هي الأخلاق الحميدة في الإسلام؟",
      answer: "الأخلاق الحميدة تشمل: الصدق، والأمانة، والوفاء، والكرم، والتواضع، والصبر، والعفو، والإحسان. قال رسول الله ﷺ: 'إنما بعثت لأتمم مكارم الأخلاق' (رواه أحمد).",
      category: "الأخلاق الحميدة",
      source: "مسند أحمد"
    },
    {
      id: 2,
      question: "ما حكم الكذب في الإسلام؟",
      answer: "الكذب محرم إلا في حالات محدودة: الإصلاح بين الناس، والكذب على الأعداء في الحرب، وإرضاء الزوجة. قال رسول الله ﷺ: 'إن الكذب يهدي إلى الفجور وإن الفجور يهدي إلى النار' (رواه البخاري).",
      category: "الصدق والكذب",
      source: "صحيح البخاري"
    },
    {
      id: 3,
      question: "ما حكم الغيبة والنميمة؟",
      answer: "الغيبة والنميمة محرمان، قال تعالى: 'وَلَا يَغْتَب بَّعْضُكُم بَعْضًا' (الحجرات: 12). والغيبة ذكر المسلم بما يكره في غيبته، والنميمة نقل الكلام بين الناس لإفساد العلاقات.",
      category: "آفات اللسان",
      source: "القرآن الكريم - سورة الحجرات"
    },
    {
      id: 4,
      question: "ما حكم بر الوالدين؟",
      answer: "بر الوالدين واجب، قال تعالى: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا' (الإسراء: 23). ولو كانا كافرين، إلا في أمر الدين فلا طاعة لمخلوق في معصية الخالق.",
      category: "بر الوالدين",
      source: "القرآن الكريم - سورة الإسراء"
    },
    {
      id: 5,
      question: "ما حكم صلة الرحم؟",
      answer: "صلة الرحم واجبة، قال رسول الله ﷺ: 'من أحب أن يبسط له في رزقه وينسأ له في أثره فليصل رحمه' (رواه البخاري). وقطيعة الرحم من الكبائر.",
      category: "صلة الرحم",
      source: "صحيح البخاري"
    },
    {
      id: 6,
      question: "ما حكم الحسد في الإسلام؟",
      answer: "الحسد محرم وهو تمني زوال النعمة عن الغير، قال رسول الله ﷺ: 'إياكم والحسد فإن الحسد يأكل الحسنات كما تأكل النار الحطب' (رواه أبو داود).",
      category: "الحسد والغيرة",
      source: "سنن أبي داود"
    },
    {
      id: 7,
      question: "ما حكم الكرم والجود؟",
      answer: "الكرم والجود من الأخلاق الحميدة، قال تعالى: 'وَمَا تُنفِقُوا مِنْ خَيْرٍ فَلِأَنفُسِكُمْ' (البقرة: 272). وقال رسول الله ﷺ: 'اليد العليا خير من اليد السفلى' (رواه البخاري).",
      category: "الكرم والجود",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 8,
      question: "ما حكم التواضع والكبر؟",
      answer: "التواضع محمود والكبر محرم، قال رسول الله ﷺ: 'لا يدخل الجنة من كان في قلبه مثقال ذرة من كبر' (رواه مسلم). والتواضع من أخلاق الأنبياء والصالحين.",
      category: "التواضع والكبر",
      source: "صحيح مسلم"
    },
    {
      id: 9,
      question: "ما حكم الصبر في الإسلام؟",
      answer: "الصبر واجب عند المصائب، قال تعالى: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ' (البقرة: 153). والصبر ثلاثة أنواع: صبر على الطاعة، وصبر عن المعصية، وصبر على المصيبة.",
      category: "الصبر",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 10,
      question: "ما حكم العفو والصفح؟",
      answer: "العفو والصفح محمودان، قال تعالى: 'وَلْيَعْفُوا وَلْيَصْفَحُوا أَلَا تُحِبُّونَ أَن يَغْفِرَ اللَّهُ لَكُمْ' (النور: 22). والعفو عند المقدرة من أخلاق الكرام.",
      category: "العفو والصفح",
      source: "القرآن الكريم - سورة النور"
    }
  ];

  const categories = ['الكل', 'الأخلاق الحميدة', 'الصدق والكذب', 'آفات اللسان', 'بر الوالدين', 'صلة الرحم', 'الحسد والغيرة', 'الكرم والجود', 'التواضع والكبر', 'الصبر', 'العفو والصفح'];

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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#FF6F00' }}>
          أسئلة وأجوبة في الأخلاق والسلوك
        </Typography>
      </Box>

      <Card className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#FF6F00' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#FF6F00' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#FF6F00' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: 'transparent',
                  color: '#FF6F00',
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

export default EthicsQA; 