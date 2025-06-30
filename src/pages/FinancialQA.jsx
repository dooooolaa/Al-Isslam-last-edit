import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const FinancialQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما حكم الربا في الإسلام؟",
      answer: "الربا محرم في الإسلام تحريماً قطعياً، قال تعالى: 'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا' (البقرة: 275). والربا نوعان: ربا الفضل (زيادة في المثل) وربا النسيئة (زيادة في الأجل).",
      category: "الربا",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 2,
      question: "ما هي شروط البيع الصحيح؟",
      answer: "شروط البيع الصحيح: التراضي بين البائع والمشتري، والملكية، والقدرة على التسليم، والمعرفة بالثمن والمثمن، والخلو من الغرر والجهالة الفاحشة. قال رسول الله ﷺ: 'البيعان بالخيار ما لم يتفرقا' (رواه البخاري).",
      category: "البيع والشراء",
      source: "صحيح البخاري"
    },
    {
      id: 3,
      question: "ما حكم التأمين التجاري؟",
      answer: "التأمين التجاري محرم لأنه من الربا والغرر والمقامرة، أما التأمين التعاوني (التكافلي) فهو جائز لأنه قائم على التعاون والتبرع. قال تعالى: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ' (المائدة: 2).",
      category: "التأمين",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 4,
      question: "ما حكم البيع بالتقسيط؟",
      answer: "البيع بالتقسيط جائز إذا كان الثمن محدداً وواضحاً، ولا توجد زيادة في السعر مقابل الأجل. قال رسول الله ﷺ: 'من باع بيعتين في بيعة فله أوكسهما أو الربا' (رواه أبو داود).",
      category: "البيع والشراء",
      source: "سنن أبي داود"
    },
    {
      id: 5,
      question: "ما حكم العمل في البنوك الربوية؟",
      answer: "العمل في البنوك الربوية محرم إذا كان يتعلق بالربا مباشرة، أما الأعمال الإدارية أو التقنية التي لا تتعلق بالربا فهي جائزة. قال تعالى: 'وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ' (المائدة: 2).",
      category: "البنوك والمالية",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 6,
      question: "ما حكم المضاربة في الإسلام؟",
      answer: "المضاربة جائزة وهي شراكة بين المال والعمل، حيث يقدم أحد الطرفين المال والآخر العمل، والربح بينهما حسب الاتفاق، والخسارة على المال فقط. قال رسول الله ﷺ: 'الخراج بالضمان' (رواه الترمذي).",
      category: "الشركات والمضاربة",
      source: "سنن الترمذي"
    },
    {
      id: 7,
      question: "ما حكم بيع العينة؟",
      answer: "بيع العينة محرم وهو أن يبيع شخص سلعة بثمن مؤجل ثم يشتريها من المشتري بثمن أقل نقداً، وهذا من حيل الربا. قال رسول الله ﷺ: 'إذا تبايعتم بالعينة وأخذتم أذناب البقر ورضيتم بالزرع وأخذتم الذهب وتركتم الجهاد سلط الله عليكم ذلاً لا ينزعه حتى ترجعوا إلى دينكم' (رواه أبو داود).",
      category: "الربا",
      source: "سنن أبي داود"
    },
    {
      id: 8,
      question: "ما حكم العملة الإلكترونية (البيتكوين)؟",
      answer: "العملة الإلكترونية محل خلاف بين العلماء، فمنهم من حرمها لعدم وجود ضمانة حقيقية، ومنهم من أجازها إذا استوفت شروط النقد. والأحوط الابتعاد عنها لعدم وضوح حكمها.",
      category: "العملات الإلكترونية",
      source: "فتاوى معاصرة"
    },
    {
      id: 9,
      question: "ما حكم بيع الدين بالدين؟",
      answer: "بيع الدين بالدين محرم لأنه من الربا، قال رسول الله ﷺ: 'لا يحل سلف وبيع، ولا شرطان في بيع، ولا ربح ما لم يضمن، ولا بيع ما ليس عندك' (رواه الترمذي).",
      category: "الربا",
      source: "سنن الترمذي"
    },
    {
      id: 10,
      question: "ما حكم الشركة في الإسلام؟",
      answer: "الشركة جائزة وهي اجتماع مالين أو أكثر للاتجار، وتكون إما شركة عنان (مال وعمل) أو شركة وجوه (عمل فقط) أو شركة مفاوضة (شاملة). قال تعالى: 'إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا' (النساء: 58).",
      category: "الشركات والمضاربة",
      source: "القرآن الكريم - سورة النساء"
    }
  ];

  const categories = ['الكل', 'الربا', 'البيع والشراء', 'التأمين', 'البنوك والمالية', 'الشركات والمضاربة', 'العملات الإلكترونية'];

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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#D32F2F' }}>
          أسئلة وأجوبة في المعاملات المالية
        </Typography>
      </Box>

      <Card className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#D32F2F' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#D32F2F' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#D32F2F' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: 'transparent',
                  color: '#D32F2F',
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

export default FinancialQA; 