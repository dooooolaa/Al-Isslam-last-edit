import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, TextField, Box, Chip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import fuzzyIncludes from './fuzzy';

const EntertainmentQA = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const theme = useTheme();

  const questions = [
    {
      id: 1,
      question: "ما حكم الموسيقى والغناء في الإسلام؟",
      answer: "الموسيقى والغناء محل خلاف بين العلماء، فمنهم من حرمها مطلقاً، ومنهم من أجازها بشرط عدم وجود محرمات كالخمر أو الفحش. والأحوط الابتعاد عنها، قال تعالى: 'وَمِنَ النَّاسِ مَن يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَن سَبِيلِ اللَّهِ' (لقمان: 6).",
      category: "الموسيقى والغناء",
      source: "القرآن الكريم - سورة لقمان"
    },
    {
      id: 2,
      question: "ما حكم مشاهدة التلفاز والأفلام؟",
      answer: "مشاهدة التلفاز والأفلام جائزة إذا كانت المحتويات حلالاً، واجتناب المحرمات كالعري والفواحش والكذب. قال رسول الله ﷺ: 'من حسن إسلام المرء تركه ما لا يعنيه' (رواه الترمذي).",
      category: "وسائل الإعلام",
      source: "سنن الترمذي"
    },
    {
      id: 3,
      question: "ما حكم الألعاب الإلكترونية؟",
      answer: "الألعاب الإلكترونية جائزة إذا لم تحتوي على محرمات كالربا أو الصور المحرمة أو الأصوات المحرمة، ولم تلهي عن الصلاة والواجبات. قال تعالى: 'وَلَا تُلْهِكُمْ أَمْوَالُكُمْ وَلَا أَوْلَادُكُمْ عَن ذِكْرِ اللَّهِ' (المنافقون: 9).",
      category: "الألعاب",
      source: "القرآن الكريم - سورة المنافقون"
    },
    {
      id: 4,
      question: "ما حكم الرياضة في الإسلام؟",
      answer: "الرياضة محمودة ومشروعة، قال رسول الله ﷺ: 'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف' (رواه مسلم). وتشمل السباحة والرماية وركوب الخيل والجري وغيرها.",
      category: "الرياضة",
      source: "صحيح مسلم"
    },
    {
      id: 5,
      question: "ما حكم السفر للسياحة؟",
      answer: "السفر للسياحة جائز إذا كان في بلاد آمنة، ولم يكن فيه إسراف أو مخالفات شرعية. قال تعالى: 'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ' (العنكبوت: 20).",
      category: "السفر والسياحة",
      source: "القرآن الكريم - سورة العنكبوت"
    },
    {
      id: 6,
      question: "ما حكم الضحك والمرح؟",
      answer: "الضحك والمرح جائزان بشرط عدم الإفراط أو الاستهزاء بالدين أو الناس. قال رسول الله ﷺ: 'تبسمك في وجه أخيك صدقة' (رواه الترمذي).",
      category: "الضحك والمرح",
      source: "سنن الترمذي"
    },
    {
      id: 7,
      question: "ما حكم استخدام الإنترنت ووسائل التواصل؟",
      answer: "استخدام الإنترنت ووسائل التواصل جائز للخير والمعروف، ومحرم للشر والفحش. قال تعالى: 'وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ' (المائدة: 2).",
      category: "التقنية والإنترنت",
      source: "القرآن الكريم - سورة المائدة"
    },
    {
      id: 8,
      question: "ما حكم قراءة الروايات والقصص؟",
      answer: "قراءة الروايات والقصص جائزة إذا كانت مفيدة أو للتسلية البريئة، واجتناب ما يحتوي على فحش أو كذب أو إساءة للدين. قال تعالى: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ' (العلق: 1).",
      category: "القراءة والكتب",
      source: "القرآن الكريم - سورة العلق"
    },
    {
      id: 9,
      question: "ما حكم الاحتفال بأعياد الميلاد؟",
      answer: "الاحتفال بأعياد الميلاد جائز إذا كان احتفالاً بسيطاً بدون محرمات، وليس تقليداً للكفار. قال رسول الله ﷺ: 'من تشبه بقوم فهو منهم' (رواه أبو داود).",
      category: "الاحتفالات",
      source: "سنن أبي داود"
    },
    {
      id: 10,
      question: "ما حكم التصوير والفيديو؟",
      answer: "التصوير والفيديو جائزان إذا كان للضرورة أو الحاجة المشروعة، واجتناب تصوير ما لا يجوز كالنساء العاريات أو المناظر المحرمة. قال رسول الله ﷺ: 'إن الملائكة لا تدخل بيتاً فيه صورة' (رواه البخاري).",
      category: "التصوير والفيديو",
      source: "صحيح البخاري"
    }
  ];

  const categories = ['الكل', 'الموسيقى والغناء', 'وسائل الإعلام', 'الألعاب', 'الرياضة', 'السفر والسياحة', 'الضحك والمرح', 'التقنية والإنترنت', 'القراءة والكتب', 'الاحتفالات', 'التصوير والفيديو'];

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
        <Typography variant="h4" component="h1" sx={{ fontFamily: 'Arial, sans-serif', color: '#388E3C' }}>
          أسئلة وأجوبة في الترفيه والمباحات
        </Typography>
      </Box>

      <Card className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#388E3C' }}>
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

      <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Arial, sans-serif', color: '#388E3C' }}>
        النتائج: {filteredQuestions.length} سؤال
      </Typography>

      {filteredQuestions.map((item) => (
        <Accordion key={item.id} className="bg-gray-50 dark:bg-gray-900" sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ fontFamily: 'Arial, sans-serif' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h6" sx={{ mb: 1, color: '#388E3C' }}>
                {item.question}
              </Typography>
              <Chip 
                label={item.category} 
                size="small" 
                sx={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: '#E8F5E8',
                  color: '#388E3C',
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

export default EntertainmentQA; 