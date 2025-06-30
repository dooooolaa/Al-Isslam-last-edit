import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NonMuslimsQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما حكم التعامل مع غير المسلمين؟",
      answer: "التعامل مع غير المسلمين جائز بالعدل والإحسان، قال تعالى: 'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ' (الممتحنة: 8).",
      category: "التعامل مع غير المسلمين",
      source: "القرآن الكريم - سورة الممتحنة"
    },
    {
      id: 2,
      question: "ما حكم أكل طعام أهل الكتاب؟",
      answer: "أكل طعام أهل الكتاب جائز، قال تعالى: 'وَطَعَامُ الَّذِينَ أُوتُوا الْكِتَابَ حِلٌّ لَّكُمْ وَطَعَامُكُمْ حِلٌّ لَّهُمْ' (المائدة: 5). بشرط أن يكون الطعام حلالاً في أصل الشريعة.",
      category: "الطعام والشراب",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 3,
      question: "ما حكم الزواج من أهل الكتاب؟",
      answer: "الزواج من أهل الكتاب جائز للرجل المسلم من المرأة الكتابية، قال تعالى: 'وَالْمُحْصَنَاتُ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ مِن قَبْلِكُمْ' (المائدة: 5). ولا يجوز للمرأة المسلمة الزواج من غير المسلم.",
      category: "الزواج",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 4,
      question: "ما حكم الدعوة إلى الإسلام؟",
      answer: "الدعوة إلى الإسلام واجبة بالحكمة والموعظة الحسنة، قال تعالى: 'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ' (النحل: 125). ولا يجوز الإكراه في الدين.",
      category: "الدعوة إلى الإسلام",
      source: "القرآن الكريم - سورة النحل"
    },
    {
      id: 5,
      question: "ما حكم زيارة دور العبادة لغير المسلمين؟",
      answer: "زيارة دور العبادة لغير المسلمين جائزة للتعلم أو السياحة، بشرط عدم المشاركة في العبادات المحرمة. قال تعالى: 'وَلَا تَسُبُّوا الَّذِينَ يَدْعُونَ مِن دُونِ اللَّهِ' (الأنعام: 108).",
      category: "دور العبادة",
      source: "القرآن الكريم - سورة الأنعام"
    },
    {
      id: 6,
      question: "ما حكم العمل مع غير المسلمين؟",
      answer: "العمل مع غير المسلمين جائز إذا كان العمل حلالاً، قال تعالى: 'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ' (الممتحنة: 8).",
      category: "العمل والوظائف",
      source: "القرآن الكريم - سورة الممتحنة"
    },
    {
      id: 7,
      question: "ما حكم تهنئة غير المسلمين بأعيادهم؟",
      answer: "تهنئة غير المسلمين بأعيادهم جائزة إذا كانت التهنئة عامة، وليس فيها مشاركة في العبادات المحرمة. قال تعالى: 'وَقُولُوا لِلنَّاسِ حُسْنًا' (البقرة: 83).",
      category: "التهنئة والاحتفالات",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 8,
      question: "ما حكم الصدقة على غير المسلمين؟",
      answer: "الصدقة على غير المسلمين جائزة، قال رسول الله ﷺ: 'في كل كبد رطبة أجر' (رواه البخاري). والصدقة تشمل المسلمين وغير المسلمين.",
      category: "الصدقة والإحسان",
      source: "صحيح البخاري"
    },
    {
      id: 9,
      question: "ما حكم التعلم من غير المسلمين؟",
      answer: "التعلم من غير المسلمين جائز في العلوم الدنيوية المفيدة، قال رسول الله ﷺ: 'الحكمة ضالة المؤمن أنى وجدها فهو أحق بها' (رواه الترمذي).",
      category: "التعليم والعلوم",
      source: "سنن الترمذي"
    },
    {
      id: 10,
      question: "ما حكم الصداقة مع غير المسلمين؟",
      answer: "الصداقة مع غير المسلمين جائزة بالعدل والإحسان، قال تعالى: 'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ' (الممتحنة: 8). مع الحفاظ على الهوية الإسلامية.",
      category: "الصداقة والعلاقات",
      source: "القرآن الكريم - سورة الممتحنة"
    }
  ];

  const categories = ['الكل', 'التعامل مع غير المسلمين', 'الطعام والشراب', 'الزواج', 'الدعوة إلى الإسلام', 'دور العبادة', 'العمل والوظائف', 'التهنئة والاحتفالات', 'الصدقة والإحسان', 'التعليم والعلوم', 'الصداقة والعلاقات'];

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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#6A1B9A' }}>
          أسئلة وأجوبة في التعامل مع غير المسلمين
        </Typography>
      </Box>

      <Card className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#6A1B9A' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#6A1B9A' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#6A1B9A' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: '#F3E5F5',
                  color: '#6A1B9A',
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

export default NonMuslimsQA; 