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
    { type: 'mcq', question: 'ما معنى التوحيد؟', options: ['إفراد الله بالعبادة دون شريك', 'الإيمان بالملائكة', 'الصلاة فقط', 'الزكاة فقط'], answer: 0, explanation: 'التوحيد هو إفراد الله بالعبادة دون شريك.' },
    { type: 'mcq', question: 'ما هو الشرك الأكبر؟', options: ['إشراك أحد لله في الربوبية أو الألوهية', 'عدم الصلاة', 'ترك الزكاة', 'الغيبة'], answer: 0, explanation: 'الشرك الأكبر هو إشراك أحد لله في الربوبية أو الألوهية.' },
    { type: 'mcq', question: 'هل الإيمان بالكتائب الأربعة من أركان الإيمان؟', options: ['نعم', 'لا', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'نعم، الإيمان بالكتب من أركان الإيمان.' },
    { type: 'mcq', question: 'ما الفرق بين التوحيد الربوبي والتوحيد العبادي؟', options: ['الربوبي: الإيمان بعلم الله وقدرته، العبادي: توجيه العبادة لله وحده', 'كلاهما واحد', 'الربوبي: الصلاة فقط', 'العبادي: الزكاة فقط'], answer: 0, explanation: 'الربوبي: الإيمان بعلم الله وقدرته، العبادي: توجيه العبادة لله وحده.' },
    { type: 'mcq', question: 'هل الدعاء لغير الله رياء؟', options: ['نعم، ولا يصح', 'لا، يجوز', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'نعم، ولا يصح؛ الدعاء أولى لله وحده.' },
    { type: 'mcq', question: 'ما معنى الإلحاد؟', options: ['إنكار وجود الله', 'الإيمان بالملائكة', 'الصلاة فقط', 'الزكاة فقط'], answer: 0, explanation: 'الإلحاد هو إنكار وجود الله.' },
    { type: 'mcq', question: 'من هو الشاهد الأعظم على التوحيد؟', options: ['الكون الطبيعي بأدلته', 'الملائكة', 'الرسل', 'القرآن'], answer: 0, explanation: 'الكون الطبيعي بأدلته شاهد على التوحيد.' },
    { type: 'mcq', question: 'هل الاستعاذة من الشيطان عبادة؟', options: ['لا، هي طلب حماية', 'نعم، عبادة', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'لا، هي طلب حماية من شره، ولا تُعد شركًا.' },
    { type: 'mcq', question: 'ما هي صفات الله الخمسون؟', options: ['العليم، الحكيم، القدير…', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'صفات الله مثل العليم، الحكيم، القدير… مع تحسينها وتفويض معناها.' },
    { type: 'mcq', question: 'هل يجوز القول "الله لا يعلم الغيب"؟', options: ['لا، هذا إنكار لعلم الله', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'لا، هذا إنكار لعلم الله.' },
    { type: 'mcq', question: 'ما هو المعنى الصحيح لعقيدة القدَر؟', options: ['أن الله عليم ومقدر خيره وشره', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'أن الله عليم ومقدر خيره وشره.' },
    { type: 'mcq', question: 'هل يؤمن المسلم بالملائكة؟', options: ['نعم، من أركان الإيمان', 'لا', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'نعم، الإيمان بالملائكة من أركان الإيمان.' },
    { type: 'mcq', question: 'من أول من آمن برسول الله من الرجال؟', options: ['أبو بكر الصديق', 'علي بن أبي طالب', 'عمر بن الخطاب', 'عثمان بن عفان'], answer: 0, explanation: 'أول من آمن من الرجال هو أبو بكر الصديق.' },
    { type: 'mcq', question: 'ما الفرق بين توحيد الأسماء والصفات؟', options: ['الاعتقاد بأسماء الله وصفاته كما وردت في النص دون تشبيه أو تعطيل', 'تشبيه الله بخلقه', 'تعطيل الصفات', 'تفسير الصفات بالعقل فقط'], answer: 0, explanation: 'الاعتقاد بأسماء الله وصفاته كما وردت في النص دون تشبيه أو تعطيل.' },
    { type: 'mcq', question: 'هل يجوز صنع تماثيل؟', options: ['مكروه أو محرم', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'مكروه أو محرم بحسب العادة الإسلامية.' },
    { type: 'mcq', question: 'ما معنى الإيمان بالغيب؟', options: ['الإيمان بما لا يُدرك بالحواس مثل الجنة والنار', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'الإيمان بما لا يُدرك بالحواس مثل الجنة والنار.' },
    { type: 'mcq', question: 'هل يجوز التقرب إلى الله بالأضرحة؟', options: ['لا، إنها بدعة', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'لا، إنها بدعة.' },
    { type: 'mcq', question: 'ما معنى التوحيد الاقتصادي؟', options: ['توفيق الأموال لله واستخدامها في طاعاته', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'توفيق الأموال لله واستخدامها في طاعاته.' },
    { type: 'mcq', question: 'هل الصدقة تدفع الغرامة؟', options: ['لا، فالغرامة مالية خيارية', 'نعم، تدفع', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'لا، فالغرامة مالية خيارية حسب القانون.' },
    { type: 'mcq', question: 'ما الفرق بين الإيمان والعمل؟', options: ['الإيمان هو الاعتقاد، والعمل هو الثمر الناتج عنه', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'الإيمان هو الاعتقاد، والعمل هو الثمر الناتج عنه.' },
    { type: 'mcq', question: 'ما هو الكتاب الذي يؤمن به المسلم؟', options: ['القرآن الكريم', 'الإنجيل', 'التوراة', 'الزبور'], answer: 0, explanation: 'القرآن الكريم هو الكتاب الذي يؤمن به المسلم.' },
    { type: 'mcq', question: 'أوَّل آية أنزلت في القرآن؟', options: ['اقرأ باسم ربك الذي خلق', 'بسم الله الرحمن الرحيم', 'الحمد لله رب العالمين', 'قل هو الله أحد'], answer: 0, explanation: 'أول آية أنزلت: "اقرأ باسم ربك الذي خلق".' },
    { type: 'mcq', question: 'ما معنى "لا حول ولا قوة إلا بالله"؟', options: ['التسليم بعجز العبد واعتماد القدرة لله', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'معناها التسليم بعجز العبد واعتماد القدرة لله.' },
    { type: 'mcq', question: 'هل الشفاعة حكر على النبي ﷺ فقط؟', options: ['نعم، الشفاعة الكبرى له', 'لا، للجميع', 'لبعض الأنبياء فقط', 'لبعض الصحابة فقط'], answer: 0, explanation: 'الشفاعة الكبرى لنبيه ﷺ وأصفيائه عند الله.' },
    { type: 'mcq', question: 'هل يجوز الاستنجاء من الجنابة بالغسول فقط؟', options: ['لا، يجب غسل الجسد بالماء', 'نعم، يجوز', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'لا، يجب غسل الجسد بالماء.' },
    { type: 'mcq', question: 'من أول من دعا إلى الإسلام بعد خديجة؟', options: ['أبو بكر الصديق', 'علي بن أبي طالب', 'عمر بن الخطاب', 'عثمان بن عفان'], answer: 0, explanation: 'أبو بكر الصديق أول من دعا بعد خديجة.' },
    { type: 'mcq', question: 'هل أول من وضع الميزان ليوم القيامة العلماء؟', options: ['لا، هو من أعمال العباد', 'نعم، العلماء', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'هو من أعمال العباد على وزن أعمالهم.' },
    { type: 'mcq', question: 'كيف نعرف أن الرسول ﷺ بشر وليس إلهًا؟', options: ['لوجود موته وكذا نصوص القرآن والسنة', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'لوجود موته وكذا نصوص القرآن والسنة.' },
    { type: 'mcq', question: 'ما معنى العدل عند الله؟', options: ['إعطاء كل ذي حق حقه', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'العدل هو إعطاء كل ذي حق حقه.' },
    { type: 'mcq', question: 'هل يملك الإنسان كل الأقدار؟', options: ['لا، إلا ما جعله الله قادرًا عليه', 'نعم، كل شيء', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'لا، إلا ما جعله الله قادرًا عليه.' },
    { type: 'mcq', question: 'هل كل كلام يُقال "بسم الله" يُعد توحيدًا؟', options: ['لا، بل يريد المعنية ويعني إخلاصه لله', 'نعم، توحيد', 'في بعض الحالات', 'مشكوك فيه'], answer: 0, explanation: 'لا، بل يريد المعنية ويعني إخلاصه لله.' },
    { type: 'mcq', question: 'ما المقصود بمواريث المرأة والرجل؟', options: ['التوزيع الشرعي بناءً على القرابة والقواعد الفقهية', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'التوزيع الشرعي بناءً على القرابة والقواعد الفقهية.' },
    { type: 'mcq', question: 'كيف نثبت الإيمان بالرسل جميعًا؟', options: ['القبول بجميع الرسل إيمان', 'بعض الرسل فقط', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'القبول بجميع الرسل إيمان.' },
    { type: 'mcq', question: 'هل أصول الدين أركان شرعية؟', options: ['لا، أركان الإيمان', 'نعم، أركان شرعية', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'أصول الدين أركان الإيمان، وليست ركنًا من أركان الإسلام.' },
    { type: 'mcq', question: 'ما معنى القول بالتفويض؟', options: ['ترك فهم صفات الله وحكمه بلا تعطيل', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'ترك فهم صفات الله وحكمه بلا تعطيل.' },
    { type: 'mcq', question: 'هل الملائكة جنس مخلوق؟', options: ['نعم، مخلوقة من نور', 'لا', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'نعم، مخلوقة من نور.' },
    { type: 'mcq', question: 'هل الجن مخلوق مثلنا؟', options: ['نعم، مخلوقون من نار', 'لا', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'نعم، مخلوقون من نار.' },
    { type: 'mcq', question: 'ماهو الإيمان بالقضاء؟', options: ['التصديق بأن الله مقدر الأحداث', 'الصلاة فقط', 'الزكاة فقط', 'الصوم فقط'], answer: 0, explanation: 'الإيمان بأن الله مقدر الأحداث.' },
    { type: 'mcq', question: 'هل الرسول ﷺ يعلمه الله الغيب؟', options: ['لا، فقط يُعلمه بما شاء من العلم الشرعي', 'نعم، كل الغيب', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'لا، فقط يُعلمه بما شاء من العلم الشرعي.' },
    { type: 'mcq', question: 'هل التوحيد يشمل الأسماء والصفات؟', options: ['نعم، لأنه التوحيد الكامل لله', 'لا', 'جزئيًا', 'مشكوك فيه'], answer: 0, explanation: 'نعم، لأنه التوحيد الكامل لله.' },
  ],
  seerah: [
    {
      type: 'mcq',
      question: 'من هو أول من آمن برسول الله صلى الله عليه وسلم من الرجال؟',
      options: ['أبو بكر الصديق', 'عمر بن الخطاب', 'علي بن أبي طالب', 'عثمان بن عفان'],
      answer: 2,
      explanation: 'أول من آمن من الرجال هو علي بن أبي طالب. (سيرة ابن هشام)'
    },
    {
      type: 'tf',
      question: 'ولد النبي محمد صلى الله عليه وسلم في مكة.',
      answer: true,
      explanation: 'النبي محمد وُلد في مكة المكرمة.'
    },
    {
      type: 'blank',
      question: 'أكمل: غزوة بدر كانت في السنة ___ للهجرة',
      answer: 'الثانية',
      explanation: 'غزوة بدر كانت في السنة الثانية للهجرة.'
    },
    {
      type: 'image',
      question: 'ما اسم هذا الجبل الذي وقف عليه النبي في مكة؟',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jabal_Al-Noor_Mecca.jpg',
      options: ['جبل أحد', 'جبل النور', 'جبل ثور', 'جبل الرحمة'],
      answer: 1,
      explanation: 'جبل النور هو الذي فيه غار حراء.'
    },
    {
      type: 'timed',
      question: 'كم كان عمر النبي عند البعثة؟',
      options: ['30', '35', '40', '45'],
      answer: 2,
      time: 10,
      explanation: 'بعث النبي محمد صلى الله عليه وسلم وعمره 40 سنة.'
    },
  ],
  quran: [
    {
      type: 'mcq',
      question: 'ما هي أطول سورة في القرآن الكريم؟',
      options: ['البقرة', 'آل عمران', 'النساء', 'المائدة'],
      answer: 0,
      explanation: 'أطول سورة في القرآن هي سورة البقرة.'
    },
    {
      type: 'tf',
      question: 'سورة الإخلاص تتكون من 4 آيات فقط.',
      answer: true,
      explanation: 'سورة الإخلاص تتكون من 4 آيات.'
    },
    {
      type: 'blank',
      question: 'أكمل: أول آية في القرآن هي ___',
      answer: 'بسم الله الرحمن الرحيم',
      explanation: 'أول آية في المصحف: بسم الله الرحمن الرحيم.'
    },
    {
      type: 'image',
      question: 'ما اسم هذه السورة؟',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Quran2.jpg',
      options: ['الفاتحة', 'البقرة', 'الكوثر', 'الإخلاص'],
      answer: 0,
      explanation: 'هذه صورة بداية سورة الفاتحة.'
    },
    {
      type: 'timed',
      question: 'كم عدد أجزاء القرآن الكريم؟',
      options: ['20', '30', '40', '60'],
      answer: 1,
      time: 10,
      explanation: 'القرآن الكريم 30 جزءاً.'
    },
  ],
  hadith: [
    { type: 'mcq', question: 'ما الحديث الذي يُعدّ أساسًا في النية؟', options: ['إنما الأعمال بالنيات', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "إنما الأعمال بالنيات" هو أساس في النية.' },
    { type: 'mcq', question: 'ما الحديث الذي يجمع أركان الإسلام؟', options: ['حديث جبريل عليه السلام', 'حديث النية', 'حديث الصدق', 'حديث الأمانة'], answer: 0, explanation: 'حديث جبريل عليه السلام يجمع أركان الإسلام.' },
    { type: 'mcq', question: 'ما الحديث الذي يوصي بحسن الخلق؟', options: ['إن من خياركم أحسنكم أخلاقًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "إن من خياركم أحسنكم أخلاقًا" يوصي بحسن الخلق.' },
    { type: 'mcq', question: 'ما الحديث الذي يُحذر من الكذب؟', options: ['إياكم والكذب، فإن الكذب يهدي إلى الفجور', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "إياكم والكذب، فإن الكذب يهدي إلى الفجور" يحذر من الكذب.' },
    { type: 'mcq', question: 'ما الحديث الذي يحث على الصدق؟', options: ['عليكم بالصدق، فإن الصدق يهدي إلى البر', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "عليكم بالصدق، فإن الصدق يهدي إلى البر" يحث على الصدق.' },
    { type: 'mcq', question: 'ما الحديث الذي فيه فضل الأم؟', options: ['أمك ثم أمك ثم أمك', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "أمك ثم أمك ثم أمك" يبين فضل الأم.' },
    { type: 'mcq', question: 'ما الحديث الذي ينهى عن الغضب؟', options: ['لا تغضب', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "لا تغضب" ينهى عن الغضب.' },
    { type: 'mcq', question: 'ما الحديث الذي يحث على إماطة الأذى؟', options: ['إماطة الأذى عن الطريق صدقة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "إماطة الأذى عن الطريق صدقة" يحث على إماطة الأذى.' },
    { type: 'mcq', question: 'ما الحديث الذي فيه فضل العلم؟', options: ['من سلك طريقًا يلتمس فيه علمًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "من سلك طريقًا يلتمس فيه علمًا" يبين فضل العلم.' },
    { type: 'mcq', question: 'ما الحديث الذي يدل على نية الخير؟', options: ['من همّ بحسنة فلم يعملها كتبها الله له حسنة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "من همّ بحسنة فلم يعملها كتبها الله له حسنة" يدل على نية الخير.' },
    { type: 'mcq', question: 'ما الحديث عن فضل الصلاة؟', options: ['الصلاة نور', 'الدين النصيحة', 'أفشوا السلام بينكم', 'إماطة الأذى صدقة'], answer: 0, explanation: 'حديث "الصلاة نور" يبين فضل الصلاة.' },
    { type: 'mcq', question: 'ما الحديث الذي يُعظم الأمانة؟', options: ['أدِّ الأمانة إلى من ائتمنك', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "أدِّ الأمانة إلى من ائتمنك" يعظم الأمانة.' },
    { type: 'mcq', question: 'ما الحديث الذي يحذر من الغش؟', options: ['من غشنا فليس منا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "من غشنا فليس منا" يحذر من الغش.' },
    { type: 'mcq', question: 'ما الحديث الذي يبين أهمية النية؟', options: ['إنما الأعمال بالنيات', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "إنما الأعمال بالنيات" يبين أهمية النية.' },
    { type: 'mcq', question: 'ما الحديث الذي يوصي بالإحسان؟', options: ['إن الله كتب الإحسان على كل شيء', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "إن الله كتب الإحسان على كل شيء" يوصي بالإحسان.' },
    { type: 'mcq', question: 'ما الحديث عن فضل إفشاء السلام؟', options: ['أفشوا السلام بينكم', 'الدين النصيحة', 'إنما الأعمال بالنيات', 'الصلاة نور'], answer: 0, explanation: 'حديث "أفشوا السلام بينكم" يبين فضل إفشاء السلام.' },
    { type: 'mcq', question: 'ما الحديث الذي يدل على أن الدين النصيحة؟', options: ['الدين النصيحة', 'أفشوا السلام بينكم', 'إنما الأعمال بالنيات', 'الصلاة نور'], answer: 0, explanation: 'حديث "الدين النصيحة" يدل على أن الدين النصيحة.' },
    { type: 'mcq', question: 'ما الحديث عن الرفق؟', options: ['ما كان الرفق في شيء إلا زانه', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "ما كان الرفق في شيء إلا زانه" يبين فضل الرفق.' },
    { type: 'mcq', question: 'ما الحديث الذي يحذر من الظلم؟', options: ['الظلم ظلمات يوم القيامة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "الظلم ظلمات يوم القيامة" يحذر من الظلم.' },
    { type: 'mcq', question: 'ما الحديث الذي يبين من هو المفلس؟', options: ['المفلس من أمتي من يأتي يوم القيامة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "المفلس من أمتي من يأتي يوم القيامة" يبين من هو المفلس.' },
    { type: 'mcq', question: 'ما الحديث الذي يوصي بحق الجار؟', options: ['ما زال جبريل يوصيني بالجار', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "ما زال جبريل يوصيني بالجار" يوصي بحق الجار.' },
    { type: 'mcq', question: 'ما الحديث الذي ينهى عن الحسد؟', options: ['لا تحاسدوا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "لا تحاسدوا" ينهى عن الحسد.' },
    { type: 'mcq', question: 'ما الحديث عن فضل الذكر؟', options: ['ألا أنبئكم بخير أعمالكم', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "ألا أنبئكم بخير أعمالكم" يبين فضل الذكر.' },
    { type: 'mcq', question: 'ما الحديث عن الصدقة؟', options: ['الصدقة تطفئ الخطيئة كما يطفئ الماء النار', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "الصدقة تطفئ الخطيئة كما يطفئ الماء النار" يبين فضل الصدقة.' },
    { type: 'mcq', question: 'ما الحديث عن صلة الرحم؟', options: ['من أحب أن يُبسط له في رزقه', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "من أحب أن يُبسط له في رزقه" يبين فضل صلة الرحم.' },
    { type: 'mcq', question: 'ما الحديث عن بر الوالدين؟', options: ['رغم أنف من أدرك والديه ولم يدخل الجنة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "رغم أنف من أدرك والديه ولم يدخل الجنة" يبين فضل بر الوالدين.' },
    { type: 'mcq', question: 'ما الحديث عن فضل ليلة القدر؟', options: ['من قام ليلة القدر إيمانًا واحتسابًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "من قام ليلة القدر إيمانًا واحتسابًا" يبين فضل ليلة القدر.' },
    { type: 'mcq', question: 'ما الحديث عن فضل رمضان؟', options: ['من صام رمضان إيمانًا واحتسابًا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "من صام رمضان إيمانًا واحتسابًا" يبين فضل رمضان.' },
    { type: 'mcq', question: 'ما الحديث عن فضل الدعاء؟', options: ['الدعاء هو العبادة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "الدعاء هو العبادة" يبين فضل الدعاء.' },
    { type: 'mcq', question: 'ما الحديث عن التوبة؟', options: ['التائب من الذنب كمن لا ذنب له', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "التائب من الذنب كمن لا ذنب له" يبين فضل التوبة.' },
    { type: 'mcq', question: 'ما الحديث عن غض البصر؟', options: ['العينان تزنيان وزناهما النظر', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "العينان تزنيان وزناهما النظر" يبين أهمية غض البصر.' },
    { type: 'mcq', question: 'ما الحديث عن العمل؟', options: ['إن الله يحب إذا عمل أحدكم عملاً أن يتقنه', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "إن الله يحب إذا عمل أحدكم عملاً أن يتقنه" يبين أهمية إتقان العمل.' },
    { type: 'mcq', question: 'ما الحديث عن الحياء؟', options: ['الحياء لا يأتي إلا بخير', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "الحياء لا يأتي إلا بخير" يبين فضل الحياء.' },
    { type: 'mcq', question: 'ما الحديث عن الإيمان؟', options: ['الإيمان بضع وسبعون شعبة', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "الإيمان بضع وسبعون شعبة" يبين شعب الإيمان.' },
    { type: 'mcq', question: 'ما الحديث عن الجنة؟', options: ['في الجنة ما لا عين رأت ولا أذن سمعت', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "في الجنة ما لا عين رأت ولا أذن سمعت" يبين نعيم الجنة.' },
    { type: 'mcq', question: 'ما الحديث عن النار؟', options: ['أكثر ما يُدخل الناس النار الفم والفرج', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "أكثر ما يُدخل الناس النار الفم والفرج" يحذر من المعاصي.' },
    { type: 'mcq', question: 'ما الحديث عن المروءة؟', options: ['ليس منا من لم يوقر كبيرنا', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "ليس منا من لم يوقر كبيرنا" يبين أهمية المروءة.' },
    { type: 'mcq', question: 'ما الحديث عن السلام؟', options: ['يسلم الراكب على الماشي', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "يسلم الراكب على الماشي" يبين آداب السلام.' },
    { type: 'mcq', question: 'ما الحديث عن فضل سورة الفاتحة؟', options: ['ما أنزل في التوراة ولا في الإنجيل مثلها', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "ما أنزل في التوراة ولا في الإنجيل مثلها" يبين فضل سورة الفاتحة.' },
    { type: 'mcq', question: 'ما الحديث عن الشكر؟', options: ['من لا يشكر الناس لا يشكر الله', 'الدين النصيحة', 'أفشوا السلام بينكم', 'الصلاة نور'], answer: 0, explanation: 'حديث "من لا يشكر الناس لا يشكر الله" يبين أهمية الشكر.' },
  ],
  mix: [] // سيتم ملؤها تلقائيًا من جميع الأقسام
};

// حذف جميع الأسئلة من نوع blank من كل الأقسام في بنك الأسئلة (نهائي)
Object.keys(questionsBank).forEach(section => {
  questionsBank[section] = questionsBank[section].filter(q => q.type === 'mcq' || q.type === 'tf');
});

const getRandomQuestions = (arr, n = 5) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
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