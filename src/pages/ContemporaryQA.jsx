import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const ContemporaryQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما حكم التلقيح الصناعي في الإسلام؟",
      answer: "التلقيح الصناعي جائز بين الزوجين، ومحرم من متبرع غريب. قال تعالى: 'وَاللَّهُ جَعَلَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا' (النحل: 72). ويجب أن يكون البويضة والحيوان المنوي من الزوجين.",
      category: "الطب والعلاج",
      source: "القرآن الكريم - سورة النحل"
    },
    {
      id: 2,
      question: "ما حكم البنوك الإسلامية؟",
      answer: "البنوك الإسلامية جائزة إذا التزمت بأحكام الشريعة، وابتعدت عن الربا والغرر والمخاطرة. قال تعالى: 'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا' (البقرة: 275).",
      category: "المعاملات المالية",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 3,
      question: "ما حكم التبرع بالأعضاء؟",
      answer: "التبرع بالأعضاء جائز بعد الموت بشرط موافقة المتوفى أو أهله، وللمصلحة العامة. قال تعالى: 'وَمَن أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا' (المائدة: 32).",
      category: "الطب والعلاج",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 4,
      question: "ما حكم العمل في الشركات الأجنبية؟",
      answer: "العمل في الشركات الأجنبية جائز إذا كان العمل حلالاً، ولم يتعلق بالربا أو المحرمات. قال تعالى: 'وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ' (المائدة: 2).",
      category: "العمل والوظائف",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 5,
      question: "ما حكم الإجهاض في الإسلام؟",
      answer: "الإجهاض محرم بعد نفخ الروح (120 يوماً)، وجائز قبل ذلك للضرورة كخطر على الأم. قال تعالى: 'وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ' (الإسراء: 33).",
      category: "الطب والعلاج",
      source: "القرآن الكريم - سورة الإسراء"
    },
    {
      id: 6,
      question: "ما حكم العمل في مجال التصميم والجرافيك؟",
      answer: "العمل في التصميم والجرافيك جائز إذا كان للخير والمعروف، واجتناب تصميم المحرمات كالإعلانات الخادشة أو الصور المحرمة. قال تعالى: 'وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ' (المائدة: 2).",
      category: "العمل والوظائف",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 7,
      question: "ما حكم الاستثمار في الأسهم؟",
      answer: "الاستثمار في الأسهم جائز إذا كانت الشركة لا تتعامل بالربا أو المحرمات، وكان النشاط حلالاً. قال تعالى: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ' (النساء: 29).",
      category: "المعاملات المالية",
      source: "القرآن الكريم - سورة النساء"
    },
    {
      id: 8,
      question: "ما حكم العمل في مجال الإعلام؟",
      answer: "العمل في الإعلام جائز إذا كان لنشر الخير والمعروف، واجتناب نشر الفحش والكذب والإثم. قال تعالى: 'وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ' (المائدة: 2).",
      category: "العمل والوظائف",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 9,
      question: "ما حكم العلاج بالخلايا الجذعية؟",
      answer: "العلاج بالخلايا الجذعية جائز إذا كان من مصادر حلال (كالبالغين أو الحبل السري)، ولم يكن من الأجنة. قال تعالى: 'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ' (الإسراء: 70).",
      category: "الطب والعلاج",
      source: "القرآن الكريم - سورة الإسراء"
    },
    {
      id: 10,
      question: "ما حكم العمل في مجال السياحة؟",
      answer: "العمل في السياحة جائز إذا كان للسياحة المشروعة، واجتناب السياحة الجنسية أو السياحة في الأماكن المحرمة. قال تعالى: 'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ' (العنكبوت: 20).",
      category: "العمل والوظائف",
      source: "القرآن الكريم - سورة العنكبوت"
    }
  ];

  const categories = ['الكل', 'الطب والعلاج', 'المعاملات المالية', 'العمل والوظائف'];

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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#1565C0' }}>
          أسئلة وأجوبة في النوازل المعاصرة
        </Typography>
      </Box>

      <Card className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#1565C0' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#1565C0' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#1565C0' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: '#E3F2FD',
                  color: '#1565C0',
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

export default ContemporaryQA; 