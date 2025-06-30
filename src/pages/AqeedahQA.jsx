import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const AqeedahQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما هي أركان الإيمان الستة؟",
      answer: "أركان الإيمان الستة هي: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره. قال رسول الله ﷺ: 'الإيمان أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر وتؤمن بالقدر خيره وشره' (رواه مسلم).",
      category: "أركان الإيمان",
      source: "صحيح مسلم"
    },
    {
      id: 2,
      question: "ما هو التوحيد وأنواعه؟",
      answer: "التوحيد هو إفراد الله تعالى بالعبادة، وأنواعه ثلاثة: توحيد الربوبية (إفراد الله بالخلق والملك والتدبير)، وتوحيد الألوهية (إفراد الله بالعبادة)، وتوحيد الأسماء والصفات (إثبات ما أثبته الله لنفسه من الأسماء والصفات).",
      category: "التوحيد",
      source: "كتاب التوحيد - محمد بن عبد الوهاب"
    },
    {
      id: 3,
      question: "ما حكم من ينكر وجود الله؟",
      answer: "من ينكر وجود الله فهو كافر خارج عن ملة الإسلام. قال تعالى: 'وَمَن يَكْفُرْ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ فَقَدْ ضَلَّ ضَلَالًا بَعِيدًا' (النساء: 136).",
      category: "الكفر والإيمان",
      source: "القرآن الكريم - سورة النساء"
    },
    {
      id: 4,
      question: "ما هي صفات الله تعالى؟",
      answer: "صفات الله تعالى تنقسم إلى صفات ثبوتية (كالعلم والقدرة والحياة) وصفات سلبية (كعدم الموت والجهل). قال تعالى: 'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ' (الشورى: 11).",
      category: "أسماء الله وصفاته",
      source: "القرآن الكريم - سورة الشورى"
    },
    {
      id: 5,
      question: "ما حكم التوسل بالأنبياء والصالحين؟",
      answer: "التوسل المشروع هو التوسل بأسماء الله وصفاته، أو بالأعمال الصالحة، أو بدعاء الحي الصالح. أما التوسل بذوات الأنبياء والصالحين بعد موتهم فهو بدعة لا تجوز.",
      category: "التوسل والشفاعة",
      source: "فتاوى ابن تيمية"
    },
    {
      id: 6,
      question: "ما هو الشرك وأنواعه؟",
      answer: "الشرك هو جعل شريك لله في العبادة أو الربوبية. أنواعه: الشرك الأكبر (كعبادة الأصنام)، والشرك الأصغر (كالرياء)، والشرك الخفي (كقول الرجل: ما شاء الله وشئت).",
      category: "الشرك",
      source: "كتاب التوحيد - محمد بن عبد الوهاب"
    },
    {
      id: 7,
      question: "ما حكم من يسب الله أو رسوله؟",
      answer: "من يسب الله أو رسوله ﷺ فهو كافر مرتد، يستتاب فإن تاب وإلا قتل. قال تعالى: 'إِنَّ الَّذِينَ يُؤْذُونَ اللَّهَ وَرَسُولَهُ لَعَنَهُمُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ' (الأحزاب: 57).",
      category: "الكفر والإيمان",
      source: "القرآن الكريم - سورة الأحزاب"
    },
    {
      id: 8,
      question: "ما هو الإيمان بالقدر؟",
      answer: "الإيمان بالقدر هو التصديق بأن الله تعالى قد علم كل شيء قبل خلقه، وكتبه في اللوح المحفوظ، وشاءه، وخلقه. قال رسول الله ﷺ: 'القدر قدر الله' (رواه مسلم).",
      category: "أركان الإيمان",
      source: "صحيح مسلم"
    },
    {
      id: 9,
      question: "ما حكم من يقول إن القرآن مخلوق؟",
      answer: "القول بأن القرآن مخلوق قول باطل وكفر، لأن القرآن كلام الله تعالى، وكلام الله صفة من صفاته، وصفات الله غير مخلوقة. قال تعالى: 'إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ' (التكوير: 19).",
      category: "أسماء الله وصفاته",
      source: "القرآن الكريم - سورة التكوير"
    },
    {
      id: 10,
      question: "ما هو حكم من ينكر البعث بعد الموت؟",
      answer: "من ينكر البعث بعد الموت فهو كافر، لأن الإيمان باليوم الآخر ركن من أركان الإيمان. قال تعالى: 'وَقَالَ الَّذِينَ كَفَرُوا أَإِذَا كُنَّا تُرَابًا وَآبَاؤُنَا أَئِنَّا لَمُخْرَجُونَ' (النمل: 67).",
      category: "أركان الإيمان",
      source: "القرآن الكريم - سورة النمل"
    }
  ];

  const categories = ['الكل', 'أركان الإيمان', 'التوحيد', 'الكفر والإيمان', 'أسماء الله وصفاته', 'التوسل والشفاعة', 'الشرك'];

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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#2E7D32' }}>
          أسئلة وأجوبة في العقيدة
        </Typography>
      </Box>

      <Card sx={{ mb: 3, backgroundColor: theme => theme.palette.background.paper }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#2E7D32' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#2E7D32' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} sx={{ mb: 2, backgroundColor: theme => theme.palette.background.paper }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#2E7D32' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: 'transparent',
                  color: '#2E7D32',
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

export default AqeedahQA; 