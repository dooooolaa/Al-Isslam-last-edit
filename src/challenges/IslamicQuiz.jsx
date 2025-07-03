import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import { FaQuran, FaUserTie, FaBook, FaMosque, FaPrayingHands, FaUsers, FaStarAndCrescent, FaFemale, FaHistory, FaRandom } from 'react-icons/fa';
import { MdOutlineQuiz } from 'react-icons/md';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';

// دالة لترتيب الاختيارات عشوائيًا
const shuffleOptions = (options, correctAnswer) => {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // إعادة حساب الإجابة الصحيحة بعد الترتيب العشوائي
  const newAnswer = shuffled.indexOf(options[correctAnswer]);
  return { options: shuffled, answer: newAnswer };
};

// دالة لإنشاء سؤال مع اختيارات عشوائية
const createShuffledQuestion = (question, options, correctAnswer, explanation) => {
  const shuffled = shuffleOptions(options, correctAnswer);
  return {
    type: 'mcq',
    question,
    options: shuffled.options,
    answer: shuffled.answer,
    explanation
  };
};

// أقسام المسابقة
const quizSections = [
  { key: 'aqeedah', label: 'العقيدة والتوحيد', icon: <FaMosque size={24} color="#1976d2" /> },
  { key: 'seerah', label: 'السيرة النبوية', icon: <FaUserTie size={24} color="#388e3c" /> },
  { key: 'quran', label: 'القرآن الكريم', icon: <FaQuran size={24} color="#fbc02d" /> },
  { key: 'hadith', label: 'الأحاديث النبوية', icon: <FaBook size={24} color="#8d6e63" /> },
  { key: 'fiqh', label: 'الفقه والعبادات', icon: <FaPrayingHands size={24} color="#7b1fa2" /> },
  { key: 'sahabah', label: 'الصحابة والتابعين', icon: <FaUsers size={24} color="#c62828" /> },
  { key: 'ramadan', label: 'رمضان والحج', icon: <FaStarAndCrescent size={24} color="#ff9800" /> },
  { key: 'women', label: 'المرأة في الإسلام', icon: <FaFemale size={24} color="#e91e63" /> },
  { key: 'history', label: 'التاريخ الإسلامي', icon: <FaHistory size={24} color="#607d8b" /> },
  { key: 'mix', label: 'متنوع', icon: <FaRandom size={24} color="#009688" /> },
];

// مثال أسئلة (يجب لاحقًا جلبها من قاعدة بيانات أو ملف كبير)
const questionsBank = {
  aqeedah: [
    createShuffledQuestion(
      'ما معنى التوحيد؟',
      ['إفراد الله بالعبادة دون شريك', 'الإيمان بالملائكة', 'الصلاة فقط', 'الزكاة فقط'],
      0,
      'التوحيد هو إفراد الله بالعبادة دون شريك.'
    ),
    createShuffledQuestion(
      'ما هو الشرك الأكبر؟',
      ['إشراك أحد لله في الربوبية أو الألوهية', 'عدم الصلاة', 'ترك الزكاة', 'الغيبة'],
      0,
      'الشرك الأكبر هو إشراك أحد لله في الربوبية أو الألوهية.'
    ),
    createShuffledQuestion(
      'هل الإيمان بالكتائب الأربعة من أركان الإيمان؟',
      ['نعم', 'لا', 'جزئيًا', 'مشكوك فيه'],
      0,
      'نعم، الإيمان بالكتب من أركان الإيمان.'
    ),
    createShuffledQuestion(
      'ما الفرق بين التوحيد الربوبي والتوحيد العبادي؟',
      ['الربوبي: الإيمان بعلم الله وقدرته، العبادي: توجيه العبادة لله وحده', 'كلاهما واحد', 'الربوبي: الصلاة فقط', 'العبادي: الزكاة فقط'],
      0,
      'الربوبي: الإيمان بعلم الله وقدرته، العبادي: توجيه العبادة لله وحده.'
    ),
    createShuffledQuestion(
      'هل الدعاء لغير الله رياء؟',
      ['نعم، ولا يصح', 'لا، يجوز', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'نعم، ولا يصح؛ الدعاء أولى لله وحده.'
    ),
    createShuffledQuestion(
      'ما معنى الإلحاد؟',
      ['إنكار وجود الله', 'الإيمان بالملائكة', 'الصلاة فقط', 'الزكاة فقط'],
      0,
      'الإلحاد هو إنكار وجود الله.'
    ),
    createShuffledQuestion(
      'من هو الشاهد الأعظم على التوحيد؟',
      ['الكون الطبيعي بأدلته', 'الملائكة', 'الرسل', 'القرآن'],
      0,
      'الكون الطبيعي بأدلته شاهد على التوحيد.'
    ),
    createShuffledQuestion(
      'هل الاستعاذة من الشيطان عبادة؟',
      ['لا، هي طلب حماية', 'نعم، عبادة', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'لا، هي طلب حماية من شره، ولا تُعد شركًا.'
    ),
    createShuffledQuestion(
      'ما هي صفات الله الخمسون؟',
      ['العليم، الحكيم، القدير…', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'صفات الله مثل العليم، الحكيم، القدير… مع تحسينها وتفويض معناها.'
    ),
    createShuffledQuestion(
      'هل يجوز القول "الله لا يعلم الغيب"؟',
      ['لا، هذا إنكار لعلم الله', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'لا، هذا إنكار لعلم الله.'
    ),
    createShuffledQuestion(
      'ما هو المعنى الصحيح لعقيدة القدَر؟',
      ['أن الله عليم ومقدر خيره وشره', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'أن الله عليم ومقدر خيره وشره.'
    ),
    createShuffledQuestion(
      'هل يؤمن المسلم بالملائكة؟',
      ['نعم، من أركان الإيمان', 'لا', 'جزئيًا', 'مشكوك فيه'],
      0,
      'نعم، الإيمان بالملائكة من أركان الإيمان.'
    ),
    createShuffledQuestion(
      'من أول من آمن برسول الله من الرجال؟',
      ['أبو بكر الصديق', 'علي بن أبي طالب', 'عمر بن الخطاب', 'عثمان بن عفان'],
      0,
      'أول من آمن من الرجال هو أبو بكر الصديق.'
    ),
    createShuffledQuestion(
      'ما الفرق بين توحيد الأسماء والصفات؟',
      ['الاعتقاد بأسماء الله وصفاته كما وردت في النص دون تشبيه أو تعطيل', 'تشبيه الله بخلقه', 'تعطيل الصفات', 'تفسير الصفات بالعقل فقط'],
      0,
      'الاعتقاد بأسماء الله وصفاته كما وردت في النص دون تشبيه أو تعطيل.'
    ),
    createShuffledQuestion(
      'هل يجوز صنع تماثيل؟',
      ['مكروه أو محرم', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'مكروه أو محرم بحسب العادة الإسلامية.'
    ),
    createShuffledQuestion(
      'ما معنى الإيمان بالغيب؟',
      ['الإيمان بما لا يُدرك بالحواس مثل الجنة والنار', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'الإيمان بما لا يُدرك بالحواس مثل الجنة والنار.'
    ),
    createShuffledQuestion(
      'هل يجوز التقرب إلى الله بالأضرحة؟',
      ['لا، إنها بدعة', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'لا، إنها بدعة.'
    ),
    createShuffledQuestion(
      'ما معنى التوحيد الاقتصادي؟',
      ['توفيق الأموال لله واستخدامها في طاعاته', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'توفيق الأموال لله واستخدامها في طاعاته.'
    ),
    createShuffledQuestion(
      'هل الصدقة تدفع الغرامة؟',
      ['لا، فالغرامة مالية خيارية', 'نعم، تدفع', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'لا، فالغرامة مالية خيارية حسب القانون.'
    ),
    createShuffledQuestion(
      'ما الفرق بين الإيمان والعمل؟',
      ['الإيمان هو الاعتقاد، والعمل هو الثمر الناتج عنه', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'الإيمان هو الاعتقاد، والعمل هو الثمر الناتج عنه.'
    ),
    createShuffledQuestion(
      'ما هو الكتاب الذي يؤمن به المسلم؟',
      ['القرآن الكريم', 'الإنجيل', 'التوراة', 'الزبور'],
      0,
      'القرآن الكريم هو الكتاب الذي يؤمن به المسلم.'
    ),
    createShuffledQuestion(
      'أوَّل آية أنزلت في القرآن؟',
      ['اقرأ باسم ربك الذي خلق', 'بسم الله الرحمن الرحيم', 'الحمد لله رب العالمين', 'قل هو الله أحد'],
      0,
      'أول آية أنزلت: "اقرأ باسم ربك الذي خلق".'
    ),
    createShuffledQuestion(
      'ما معنى "لا حول ولا قوة إلا بالله"؟',
      ['التسليم بعجز العبد واعتماد القدرة لله', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'معناها التسليم بعجز العبد واعتماد القدرة لله.'
    ),
    createShuffledQuestion(
      'هل الشفاعة حكر على النبي ﷺ فقط؟',
      ['نعم، الشفاعة الكبرى له', 'لا، للجميع', 'لبعض الأنبياء فقط', 'لبعض الصحابة فقط'],
      0,
      'الشفاعة الكبرى لنبيه ﷺ وأصفيائه عند الله.'
    ),
    createShuffledQuestion(
      'هل يجوز الاستنجاء من الجنابة بالغسول فقط؟',
      ['لا، يجب غسل الجسد بالماء', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'لا، يجب غسل الجسد بالماء.'
    ),
    createShuffledQuestion(
      'من أول من دعا إلى الإسلام بعد خديجة؟',
      ['أبو بكر الصديق', 'علي بن أبي طالب', 'عمر بن الخطاب', 'عثمان بن عفان'],
      0,
      'أبو بكر الصديق أول من دعا بعد خديجة.'
    ),
    createShuffledQuestion(
      'هل أول من وضع الميزان ليوم القيامة العلماء؟',
      ['لا، هو من أعمال العباد', 'نعم، العلماء', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'هو من أعمال العباد على وزن أعمالهم.'
    ),
    createShuffledQuestion(
      'كيف نعرف أن الرسول ﷺ بشر وليس إلهًا؟',
      ['لوجود موته وكذا نصوص القرآن والسنة', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'لوجود موته وكذا نصوص القرآن والسنة.'
    ),
    createShuffledQuestion(
      'ما معنى العدل عند الله؟',
      ['إعطاء كل ذي حق حقه', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'العدل هو إعطاء كل ذي حق حقه.'
    ),
    createShuffledQuestion(
      'هل يملك الإنسان كل الأقدار؟',
      ['لا، إلا ما جعله الله قادرًا عليه', 'نعم، كل شيء', 'جزئيًا', 'مشكوك فيه'],
      0,
      'لا، إلا ما جعله الله قادرًا عليه.'
    ),
    createShuffledQuestion(
      'هل كل كلام يُقال "بسم الله" يُعد توحيدًا؟',
      ['لا، بل يريد المعنية ويعني إخلاصه لله', 'نعم، توحيد', 'في بعض الحالات', 'مشكوك فيه'],
      0,
      'لا، بل يريد المعنية ويعني إخلاصه لله.'
    ),
    createShuffledQuestion(
      'ما المقصود بمواريث المرأة والرجل؟',
      ['التوزيع الشرعي بناءً على القرابة والقواعد الفقهية', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'التوزيع الشرعي بناءً على القرابة والقواعد الفقهية.'
    ),
    createShuffledQuestion(
      'كيف نثبت الإيمان بالرسل جميعًا؟',
      ['القبول بجميع الرسل إيمان', 'بعض الرسل فقط', 'جزئيًا', 'مشكوك فيه'],
      0,
      'القبول بجميع الرسل إيمان.'
    ),
    createShuffledQuestion(
      'هل أصول الدين أركان شرعية؟',
      ['لا، أركان الإيمان', 'نعم، أركان شرعية', 'جزئيًا', 'مشكوك فيه'],
      0,
      'أصول الدين أركان الإيمان، وليست ركنًا من أركان الإسلام.'
    ),
    createShuffledQuestion(
      'ما معنى القول بالتفويض؟',
      ['ترك فهم صفات الله وحكمه بلا تعطيل', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'ترك فهم صفات الله وحكمه بلا تعطيل.'
    ),
    createShuffledQuestion(
      'هل الملائكة جنس مخلوق؟',
      ['نعم، مخلوقة من نور', 'لا', 'جزئيًا', 'مشكوك فيه'],
      0,
      'نعم، مخلوقة من نور.'
    ),
    createShuffledQuestion(
      'هل الجن مخلوق مثلنا؟',
      ['نعم، مخلوقون من نار', 'لا', 'جزئيًا', 'مشكوك فيه'],
      0,
      'نعم، مخلوقون من نار.'
    ),
    createShuffledQuestion(
      'ماهو الإيمان بالقضاء؟',
      ['التصديق بأن الله مقدر الأحداث', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'],
      0,
      'الإيمان بأن الله مقدر الأحداث.'
    ),
    createShuffledQuestion(
      'هل الرسول ﷺ يعلمه الله الغيب؟',
      ['لا، فقط يُعلمه بما شاء من العلم الشرعي', 'نعم، كل الغيب', 'جزئيًا', 'مشكوك فيه'],
      0,
      'لا، فقط يُعلمه بما شاء من العلم الشرعي.'
    ),
    createShuffledQuestion(
      'هل التوحيد يشمل الأسماء والصفات؟',
      ['نعم، لأنه التوحيد الكامل لله', 'لا', 'جزئيًا', 'مشكوك فيه'],
      0,
      'نعم، لأنه التوحيد الكامل لله.'
    ),
  ],
  seerah: [
    createShuffledQuestion(
      'من هو أول من آمن برسول الله صلى الله عليه وسلم من الرجال؟',
      ['أبو بكر الصديق', 'عمر بن الخطاب', 'علي بن أبي طالب', 'عثمان بن عفان'],
      2,
      'أول من آمن من الرجال هو علي بن أبي طالب. (سيرة ابن هشام)'
    ),
    createShuffledQuestion(
      'ولد النبي محمد صلى الله عليه وسلم في مكة.',
      ['صح', 'خطأ'],
      0,
      'النبي محمد وُلد في مكة المكرمة.'
    ),
    createShuffledQuestion(
      'أكمل: غزوة بدر كانت في السنة ___ للهجرة',
      ['الثانية', 'الثالثة', 'الرابعة', 'الخامسة'],
      0,
      'غزوة بدر كانت في السنة الثانية للهجرة.'
    ),
    createShuffledQuestion(
      'ما اسم هذا الجبل الذي وقف عليه النبي في مكة؟',
      ['جبل أحد', 'جبل النور', 'جبل ثور', 'جبل الرحمة'],
      1,
      'جبل النور هو الذي فيه غار حراء.'
    ),
    createShuffledQuestion(
      'كم كان عمر النبي عند البعثة؟',
      ['30', '35', '40', '45'],
      2,
      'بعث النبي محمد صلى الله عليه وسلم وعمره 40 سنة.'
    ),
  ],
  quran: [
    createShuffledQuestion(
      'ما هي أطول سورة في القرآن الكريم؟',
      ['البقرة', 'آل عمران', 'النساء', 'المائدة'],
      0,
      'أطول سورة في القرآن هي سورة البقرة.'
    ),
    createShuffledQuestion(
      'سورة الإخلاص تتكون من 4 آيات فقط.',
      ['صح', 'خطأ'],
      0,
      'سورة الإخلاص تتكون من 4 آيات.'
    ),
    createShuffledQuestion(
      'أكمل: أول آية في القرآن هي ___',
      ['بسم الله الرحمن الرحيم', 'اقرأ باسم ربك الذي خلق', 'الحمد لله رب العالمين', 'قل هو الله أحد'],
      0,
      'أول آية في المصحف: بسم الله الرحمن الرحيم.'
    ),
    createShuffledQuestion(
      'ما اسم هذه السورة؟',
      ['الفاتحة', 'البقرة', 'الكوثر', 'الإخلاص'],
      0,
      'هذه صورة بداية سورة الفاتحة.'
    ),
    createShuffledQuestion(
      'كم عدد أجزاء القرآن الكريم؟',
      ['20', '30', '40', '60'],
      1,
      'القرآن الكريم 30 جزءاً.'
    ),
  ],
  hadith: [
    createShuffledQuestion(
      'ما الحديث الذي يُعدّ أساسًا في النية؟',
      ['إنما الأعمال بالنيات', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "إنما الأعمال بالنيات" هو أساس في النية.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يجمع أركان الإسلام؟',
      ['حديث جبريل عليه السلام', 'حديث النية', 'حديث الصدق', 'حديث الأمانة'],
      0,
      'حديث جبريل عليه السلام يجمع أركان الإسلام.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يوصي بحسن الخلق؟',
      ['إن من خياركم أحسنكم أخلاقًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "إن من خياركم أحسنكم أخلاقًا" يوصي بحسن الخلق.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يُحذر من الكذب؟',
      ['إياكم والكذب، فإن الكذب يهدي إلى الفجور', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "إياكم والكذب، فإن الكذب يهدي إلى الفجور" يحذر من الكذب.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يحث على الصدق؟',
      ['عليكم بالصدق، فإن الصدق يهدي إلى البر', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "عليكم بالصدق، فإن الصدق يهدي إلى البر" يحث على الصدق.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي فيه فضل الأم؟',
      ['أمك ثم أمك ثم أمك', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "أمك ثم أمك ثم أمك" يبين فضل الأم.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي ينهى عن الغضب؟',
      ['لا تغضب', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "لا تغضب" ينهى عن الغضب.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يحث على إماطة الأذى؟',
      ['إماطة الأذى عن الطريق صدقة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "إماطة الأذى عن الطريق صدقة" يحث على إماطة الأذى.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي فيه فضل العلم؟',
      ['من سلك طريقًا يلتمس فيه علمًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "من سلك طريقًا يلتمس فيه علمًا" يبين فضل العلم.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يدل على نية الخير؟',
      ['من همّ بحسنة فلم يعملها كتبها الله له حسنة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "من همّ بحسنة فلم يعملها كتبها الله له حسنة" يدل على نية الخير.'
    ),
    createShuffledQuestion(
      'ما الحديث عن فضل الصلاة؟',
      ['الصلاة نور', 'الدين النصيحة', 'أفشوا السلام بينكم', 'إماطة الأذى صدقة'],
      0,
      'حديث "الصلاة نور" يبين فضل الصلاة.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يُعظم الأمانة؟',
      ['أدِّ الأمانة إلى من ائتمنك', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "أدِّ الأمانة إلى من ائتمنك" يعظم الأمانة.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يحذر من الغش؟',
      ['من غشنا فليس منا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "من غشنا فليس منا" يحذر من الغش.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يبين أهمية النية؟',
      ['إنما الأعمال بالنيات', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "إنما الأعمال بالنيات" يبين أهمية النية.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يوصي بالإحسان؟',
      ['إن الله كتب الإحسان على كل شيء', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "إن الله كتب الإحسان على كل شيء" يوصي بالإحسان.'
    ),
    createShuffledQuestion(
      'ما الحديث عن فضل إفشاء السلام؟',
      ['أفشوا السلام بينكم', 'الدين النصيحة', 'إنما الأعمال بالنيات', 'الصلاة نور'],
      0,
      'حديث "أفشوا السلام بينكم" يبين فضل إفشاء السلام.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يدل على أن الدين النصيحة؟',
      ['الدين النصيحة', 'أفشوا السلام بينكم', 'إنما الأعمال بالنيات', 'الصلاة نور'],
      0,
      'حديث "الدين النصيحة" يدل على أن الدين النصيحة.'
    ),
    createShuffledQuestion(
      'ما الحديث عن الرفق؟',
      ['ما كان الرفق في شيء إلا زانه', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "ما كان الرفق في شيء إلا زانه" يبين فضل الرفق.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يحذر من الظلم؟',
      ['الظلم ظلمات يوم القيامة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "الظلم ظلمات يوم القيامة" يحذر من الظلم.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يبين من هو المفلس؟',
      ['المفلس من أمتي من يأتي يوم القيامة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "المفلس من أمتي من يأتي يوم القيامة" يبين من هو المفلس.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي يوصي بحق الجار؟',
      ['ما زال جبريل يوصيني بالجار', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "ما زال جبريل يوصيني بالجار" يوصي بحق الجار.'
    ),
    createShuffledQuestion(
      'ما الحديث الذي ينهى عن الحسد؟',
      ['لا تحاسدوا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "لا تحاسدوا" ينهى عن الحسد.'
    ),
    createShuffledQuestion(
      'ما الحديث عن فضل الذكر؟',
      ['ألا أنبئكم بخير أعمالكم', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "ألا أنبئكم بخير أعمالكم" يبين فضل الذكر.'
    ),
    createShuffledQuestion(
      'ما الحديث عن الصدقة؟',
      ['الصدقة تطفئ الخطيئة كما يطفئ الماء النار', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "الصدقة تطفئ الخطيئة كما يطفئ الماء النار" يبين فضل الصدقة.'
    ),
    createShuffledQuestion(
      'ما الحديث عن صلة الرحم؟',
      ['من أحب أن يُبسط له في رزقه', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "من أحب أن يُبسط له في رزقه" يبين فضل صلة الرحم.'
    ),
    createShuffledQuestion(
      'ما الحديث عن بر الوالدين؟',
      ['رغم أنف من أدرك والديه ولم يدخل الجنة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "رغم أنف من أدرك والديه ولم يدخل الجنة" يبين فضل بر الوالدين.'
    ),
    createShuffledQuestion(
      'ما الحديث عن فضل ليلة القدر؟',
      ['من قام ليلة القدر إيمانًا واحتسابًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "من قام ليلة القدر إيمانًا واحتسابًا" يبين فضل ليلة القدر.'
    ),
    createShuffledQuestion(
      'ما الحديث عن فضل رمضان؟',
      ['من صام رمضان إيمانًا واحتسابًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "من صام رمضان إيمانًا واحتسابًا" يبين فضل رمضان.'
    ),
    createShuffledQuestion(
      'ما الحديث عن فضل الدعاء؟',
      ['الدعاء هو العبادة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "الدعاء هو العبادة" يبين فضل الدعاء.'
    ),
    createShuffledQuestion(
      'ما الحديث عن التوبة؟',
      ['التائب من الذنب كمن لا ذنب له', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "التائب من الذنب كمن لا ذنب له" يبين فضل التوبة.'
    ),
    createShuffledQuestion(
      'ما الحديث عن غض البصر؟',
      ['العينان تزنيان وزناهما النظر', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "العينان تزنيان وزناهما النظر" يبين أهمية غض البصر.'
    ),
    createShuffledQuestion(
      'ما الحديث عن العمل؟',
      ['إن الله يحب إذا عمل أحدكم عملاً أن يتقنه', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "إن الله يحب إذا عمل أحدكم عملاً أن يتقنه" يبين أهمية إتقان العمل.'
    ),
    createShuffledQuestion(
      'ما الحديث عن الحياء؟',
      ['الحياء لا يأتي إلا بخير', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "الحياء لا يأتي إلا بخير" يبين فضل الحياء.'
    ),
    createShuffledQuestion(
      'ما الحديث عن الإيمان؟',
      ['الإيمان بضع وسبعون شعبة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "الإيمان بضع وسبعون شعبة" يبين شعب الإيمان.'
    ),
    createShuffledQuestion(
      'ما الحديث عن الجنة؟',
      ['في الجنة ما لا عين رأت ولا أذن سمعت', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "في الجنة ما لا عين رأت ولا أذن سمعت" يبين نعيم الجنة.'
    ),
    createShuffledQuestion(
      'ما الحديث عن النار؟',
      ['أكثر ما يُدخل الناس النار الفم والفرج', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "أكثر ما يُدخل الناس النار الفم والفرج" يحذر من المعاصي.'
    ),
    createShuffledQuestion(
      'ما الحديث عن المروءة؟',
      ['ليس منا من لم يوقر كبيرنا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "ليس منا من لم يوقر كبيرنا" يبين أهمية المروءة.'
    ),
    createShuffledQuestion(
      'ما الحديث عن السلام؟',
      ['يسلم الراكب على الماشي', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "يسلم الراكب على الماشي" يبين آداب السلام.'
    ),
    createShuffledQuestion(
      'ما الحديث عن فضل سورة الفاتحة؟',
      ['ما أنزل في التوراة ولا في الإنجيل مثلها', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "ما أنزل في التوراة ولا في الإنجيل مثلها" يبين فضل سورة الفاتحة.'
    ),
    createShuffledQuestion(
      'ما الحديث عن الشكر؟',
      ['من لا يشكر الناس لا يشكر الله', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'],
      0,
      'حديث "من لا يشكر الناس لا يشكر الله" يبين أهمية الشكر.'
    ),
  ],
  mix: [] // سيتم ملؤها تلقائيًا من جميع الأقسام
};

// حذف جميع الأسئلة من نوع blank من كل الأقسام في بنك الأسئلة (نهائي)
Object.keys(questionsBank).forEach(section => {
  questionsBank[section] = questionsBank[section].filter(q => q.type === 'mcq' || q.type === 'tf');
});

// دالة لترتيب الأسئلة عشوائيًا
const shuffleQuestions = (questions) => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomQuestions = (arr, n = 5) => {
  const shuffled = shuffleQuestions(arr);
  return shuffled.slice(0, n);
};

const getLevel = (score) => {
  if (score >= 90) return 'عالِم محترف';
  if (score >= 70) return 'عالِم متوسط';
  if (score >= 50) return 'عالِم مبتدئ';
  return 'بحاجة للمزيد';
};

const IslamicQuiz = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [numQuestions, setNumQuestions] = useState(null);
  const [sectionQuestionsCount, setSectionQuestionsCount] = useState(0);
  const navigate = useNavigate();
  const { setPoints } = useContext(ChallengeContext);

  // بدء الاختبار
  const startQuiz = () => {
    const qs = getRandomQuestions(questionsBank[selectedSection], numQuestions);
    setQuestions(qs);
    setCurrent(0);
    setUserAnswers([]);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setExplanation('');
    setIsCorrect(null);
    setAttempts(0);
  };

  // التحقق من الإجابة
  const checkAnswer = (answer) => {
    const q = questions[current];
    let correct = false;
    if (q.type === 'mcq') correct = answer === q.answer;
    if (q.type === 'tf') correct = answer === q.answer;
    if (q.type === 'blank') {
      const user = answer.trim().toLowerCase();
      const model = q.answer.trim().toLowerCase();
      if (user.length === 0) {
        correct = false;
      } else {
        correct = user.includes(model) || model.includes(user) || user.split(' ').some(w => model.includes(w));
      }
    }
    setIsCorrect(correct);
    setShowExplanation(true);
    setExplanation(q.explanation);
    setUserAnswers([...userAnswers, answer]);
    // النقاط
    if (correct && attempts === 0) setScore(s => s + 10);
    else if (correct && attempts === 1) setScore(s => s + 5);
    setAttempts(0);
    setTimeout(() => {
      setShowExplanation(false);
      setIsCorrect(null);
      if (current + 1 < questions.length) {
        setCurrent(c => c + 1);
      } else {
        setShowResult(true);
      }
    }, 1800);
  };

  // إعادة المحاولة
  const retry = () => {
    setSelectedSection(null);
    setQuestions([]);
    setCurrent(0);
    setUserAnswers([]);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setExplanation('');
    setIsCorrect(null);
    setAttempts(0);
  };

  // محاولة ثانية
  const tryAgain = () => setAttempts(a => a + 1);

  // عند ظهور النتيجة النهائية، احسب النقاط الفعلية
  useEffect(() => {
    if (showResult) {
      setPoints(score);
    }
  }, [showResult]);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4, px: 1 }} className="dark:bg-[#181c23] bg-gold-50">
      <Box maxWidth={600} mx="auto">
        <div className="rounded-2xl shadow-lg border-2 border-gold-500 bg-white dark:bg-[#23272f] p-6 text-gray-900 dark:text-white transition-colors duration-300">
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <MdOutlineQuiz size={32} color="#f59e0b" />
            <Typography variant="h5" fontWeight={700} color="gold.700">المسابقات الإسلامية – اختبر معلوماتك</Typography>
          </Box>
          {/* اختيار القسم أولاً */}
          {!selectedSection && (
            <>
              <Typography mb={2} fontWeight={600}>اختر قسم الأسئلة:</Typography>
              <Grid container spacing={2} justifyContent="center">
                {quizSections.map(sec => (
                  <Grid item key={sec.key}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={sec.icon}
                      sx={{ minWidth: 150, fontWeight: 700, fontSize: 15, borderRadius: 3 }}
                      onClick={() => {
                        setSelectedSection(sec.key);
                        setSectionQuestionsCount(questionsBank[sec.key].length);
                        setNumQuestions(null);
                      }}
                    >
                      {sec.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          {/* بعد اختيار القسم: اختيار عدد الأسئلة */}
          {selectedSection && !numQuestions && !showResult && (
            <>
              <Typography mb={2} fontWeight={600}>اختر عدد الأسئلة:</Typography>
              <ButtonGroup>
                {[5, 10, 20, 40].filter(n => n <= sectionQuestionsCount).map(n => (
                  <Button
                    key={n}
                    variant={numQuestions === n ? 'contained' : 'outlined'}
                    color={numQuestions === n ? 'primary' : 'inherit'}
                    onClick={() => setNumQuestions(n)}
                  >
                    {n}
                  </Button>
                ))}
                {sectionQuestionsCount > 0 && ![5, 10, 20, 40].includes(sectionQuestionsCount) && (
                  <Button
                    key={sectionQuestionsCount}
                    variant={numQuestions === sectionQuestionsCount ? 'contained' : 'outlined'}
                    color={numQuestions === sectionQuestionsCount ? 'primary' : 'inherit'}
                    onClick={() => setNumQuestions(sectionQuestionsCount)}
                  >
                    {sectionQuestionsCount}
                  </Button>
                )}
              </ButtonGroup>
            </>
          )}
          {/* زر بدء المسابقة بعد اختيار العدد */}
          {selectedSection && numQuestions && !showResult && questions.length === 0 && (
            <Box mt={2} textAlign="center">
              <Button variant="contained" color="success" size="large" sx={{ fontWeight: 700, fontSize: 18, borderRadius: 3 }} onClick={startQuiz}>
                ابدأ المسابقة
              </Button>
            </Box>
          )}
          {/* عرض الأسئلة */}
          {questions.length > 0 && !showResult && (
            <Box>
              <Divider sx={{ my: 2 }} />
              <Typography fontWeight={700} mb={2}>سؤال {current + 1} من {questions.length}</Typography>
              <Typography mb={2} fontSize={18} fontWeight={600}>{questions[current].question}</Typography>
              {/* نوع السؤال */}
              {questions[current].type === 'mcq' && (
                <Grid container spacing={2}>
                  {questions[current].options.map((opt, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="info"
                        sx={{ mb: 1, fontWeight: 700, borderRadius: 2 }}
                        onClick={() => checkAnswer(idx)}
                        disabled={showExplanation}
                      >
                        {opt}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              )}
              {questions[current].type === 'tf' && (
                <Box display="flex" gap={2}>
                  <Button variant="contained" color="success" onClick={() => checkAnswer(true)} disabled={showExplanation} sx={{ fontWeight: 700, borderRadius: 2 }}>✓ صح</Button>
                  <Button variant="contained" color="error" onClick={() => checkAnswer(false)} disabled={showExplanation} sx={{ fontWeight: 700, borderRadius: 2 }}>✗ خطأ</Button>
                </Box>
              )}
              {/* التصحيح الفوري */}
              {showExplanation && (
                <Fade in={showExplanation}>
                  <Box mt={2} p={2} bgcolor={isCorrect ? '#e8f5e9' : '#ffebee'} borderRadius={2} textAlign="center" fontWeight={700} color={isCorrect ? 'success.main' : 'error.main'} fontSize={18} boxShadow={2}>
                    {isCorrect ? '✅ إجابة صحيحة!' : '❌ إجابة خاطئة'}
                    <Typography mt={1} color="text.secondary" fontSize={15}>{explanation}</Typography>
                    {!isCorrect && attempts === 0 && (
                      <Button variant="outlined" color="warning" sx={{ mt: 1 }} onClick={tryAgain}>محاولة ثانية</Button>
                    )}
                  </Box>
                </Fade>
              )}
            </Box>
          )}
          {/* النتيجة النهائية */}
          {showResult && (
            <Box textAlign="center" mt={3}>
              <Typography variant="h6" fontWeight={700} color="success.main">🎉 نتيجتك: {score} / {questions.length * 10}</Typography>
              <Typography fontWeight={600} mt={1}>👑 أنت: "{getLevel((score / (questions.length * 10)) * 100)}"</Typography>
              <Typography fontWeight={600} mt={1}>📈 سجل نقاطك: {score} نقطة</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2, fontWeight: 700, borderRadius: 2, mx: 1 }} onClick={retry}>🔄 اختبار جديد</Button>
              <Button variant="outlined" color="secondary" sx={{ mt: 2, fontWeight: 700, borderRadius: 2, mx: 1 }} onClick={() => navigate('/challenges')}>🏠 الرجوع لقائمة التحديات</Button>
              <Button variant="outlined" color="success" sx={{ mt: 2, fontWeight: 700, borderRadius: 2, mx: 1 }} onClick={() => navigate('/challenges')}>👑 رؤية الترتيب</Button>
            </Box>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default IslamicQuiz; 