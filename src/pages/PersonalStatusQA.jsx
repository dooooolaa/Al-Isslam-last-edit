import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import fuzzyIncludes from './fuzzy';

const PersonalStatusQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما هي شروط الزواج الصحيح؟",
      answer: "شروط الزواج الصحيح: الإيجاب والقبول، والولي، والشهود، والكفاءة، والخلو من الموانع، والصداق. قال رسول الله ﷺ: 'لا نكاح إلا بولي وشاهدي عدل' (رواه الترمذي).",
      category: "الزواج",
      source: "سنن الترمذي"
    },
    {
      id: 2,
      question: "ما حكم الطلاق في الإسلام؟",
      answer: "الطلاق مباح عند الحاجة، قال تعالى: 'الطَّلَاقُ مَرَّتَانِ فَإِمْسَاكٌ بِمَعْرُوفٍ أَوْ تَسْرِيحٌ بِإِحْسَانٍ' (البقرة: 229). والأحسن تجنب الطلاق إلا عند الضرورة، قال رسول الله ﷺ: 'أبغض الحلال إلى الله الطلاق' (رواه أبو داود).",
      category: "الطلاق",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 3,
      question: "ما هي حقوق الزوجة على زوجها؟",
      answer: "حقوق الزوجة: النفقة (طعام وشراب وكسوة وسكن)، والمعاشرة بالمعروف، والعدل بين الزوجات، وحسن العشرة. قال تعالى: 'وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ' (النساء: 19).",
      category: "حقوق الزوجين",
      source: "القرآن الكريم - سورة النساء"
    },
    {
      id: 4,
      question: "ما حكم تعدد الزوجات؟",
      answer: "تعدد الزوجات جائز بشرط العدل، قال تعالى: 'فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً' (النساء: 3). والعدل واجب في النفقة والمبيت، أما المحبة فلا يمكن العدل فيها.",
      category: "الزواج",
      source: "القرآن الكريم - سورة النساء"
    },
    {
      id: 5,
      question: "ما حكم الخلع؟",
      answer: "الخلع جائز وهو أن تفتدي المرأة نفسها من زوجها، قال تعالى: 'فَلَا جُنَاحَ عَلَيْهِمَا فِيمَا افْتَدَتْ بِهِ' (البقرة: 229). ويتم بالتراضي بين الزوجين أو بحكم القاضي.",
      category: "الطلاق",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 6,
      question: "ما هي مدة العدة للمطلقة؟",
      answer: "عدة المطلقة ثلاثة قروء (حيضات) إذا كانت تحيض، قال تعالى: 'وَالْمُطَلَّقَاتُ يَتَرَبَّصْنَ بِأَنفُسِهِنَّ ثَلَاثَةَ قُرُوءٍ' (البقرة: 228). وإذا كانت حاملاً فحتى تضع حملها.",
      category: "العدة",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 7,
      question: "ما حكم الرضاعة؟",
      answer: "الرضاعة واجبة على الأم إذا كان الطفل يحتاجها، قال تعالى: 'وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ' (البقرة: 233). وتجوز الرضاعة من غير الأم بشرط أن تكون المرضعة مسلمة.",
      category: "الرضاعة",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 8,
      question: "ما هي حقوق الأبناء على آبائهم؟",
      answer: "حقوق الأبناء: التربية الحسنة، والتعليم، والنفقة، والعدل بينهم، وحسن المعاملة. قال رسول الله ﷺ: 'كلكم راع وكلكم مسؤول عن رعيته' (رواه البخاري).",
      category: "حقوق الأبناء",
      source: "صحيح البخاري"
    },
    {
      id: 9,
      question: "ما حكم النفقة على الأقارب؟",
      answer: "النفقة واجبة على الأقارب حسب درجة القرابة، قال تعالى: 'وَعَلَى الْمَوْلُودِ لَهُ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِالْمَعْرُوفِ' (البقرة: 233). والأولوية للزوجة والأولاد ثم الوالدين ثم الأقارب الآخرين.",
      category: "النفقة",
      source: "القرآن الكريم - سورة البقرة"
    },
    {
      id: 10,
      question: "ما حكم الميراث في الإسلام؟",
      answer: "الميراث فرض محدد في القرآن الكريم، قال تعالى: 'يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ' (النساء: 11). ولا يجوز التصرف في التركة إلا بعد سداد الديون وتنفيذ الوصية.",
      category: "الميراث",
      source: "القرآن الكريم - سورة النساء"
    }
  ];

  const categories = ['الكل', 'الزواج', 'الطلاق', 'حقوق الزوجين', 'العدة', 'الرضاعة', 'حقوق الأبناء', 'النفقة', 'الميراث'];

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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#7B1FA2' }}>
          أسئلة وأجوبة في الأحوال الشخصية
        </Typography>
      </Box>

      <Card className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#7B1FA2' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#7B1FA2' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#7B1FA2' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: 'transparent',
                  color: '#7B1FA2',
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

export default PersonalStatusQA; 