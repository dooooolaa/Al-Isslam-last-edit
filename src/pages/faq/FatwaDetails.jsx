import React from 'react';
import { useParams } from 'react-router-dom';

const fatwas = [
  {
    fatwaId: 21975,
    question: 'ما حكم القروض البنكية ذات الفائدة؟',
    answer: `الحمد لله.
القرض البنكي الذي يشترط فيه دفع فائدة ربوية هو من الربا المحرم شرعًا، وقد قال الله تعالى: {وأحل الله البيع وحرم الربا} (البقرة: 275).

قال النبي ﷺ: "لعن الله آكل الربا وموكله وكاتبه وشاهديه" (رواه مسلم).

قال الشيخ ابن باز رحمه الله:
"لا يجوز للمسلم أن يتعامل بالربا لا إقراضًا ولا اقتراضًا، لما في ذلك من الإثم العظيم والخطر الجسيم...".

والواجب على المسلم أن يبتعد عن القروض الربوية إلا في حال الضرورة القصوى التي تقدر بقدرها.

انظر: [IslamQA - فتوى رقم 21975](https://islamqa.info/ar/answers/21975)
`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/21975' },
    scholar: 'اللجنة الدائمة للإفتاء، الشيخ ابن باز',
    date: '2023-01-10',
    related: [
      { id: 34244, title: 'حكم التعامل مع البنوك الإسلامية' },
      { id: 12345, title: 'هل يجوز شراء منزل بقرض ربوي؟' },
    ]
  },
  {
    fatwaId: 34244,
    question: 'هل يجوز سماع الأغاني والموسيقى؟',
    answer: `سماع الأغاني التي تشتمل على موسيقى أو كلام فاحش لا يجوز شرعًا، وقد وردت نصوص كثيرة في تحريم المعازف.
قال النبي ﷺ: "ليكونن من أمتي أقوام يستحلون الحر والحرير والخمر والمعازف..." (رواه البخاري).

قال الشيخ ابن باز:
"الأغاني والمعازف منكر وشر عظيم، يجب الحذر منها والتحذير منها...".

انظر: [Binbaz.org.sa - فتوى رقم 34244](https://binbaz.org.sa/fatwas/34244)
`,
    ruling: 'محرم',
    source: { name: 'Binbaz.org.sa', url: 'https://binbaz.org.sa/fatwas/34244' },
    scholar: 'الشيخ ابن باز',
    date: '2022-11-15',
    related: [
      { id: 21975, title: 'ما حكم القروض البنكية ذات الفائدة؟' },
      { id: 12345, title: 'هل يجوز شراء منزل بقرض ربوي؟' },
    ]
  },
  {
    fatwaId: 12345,
    question: 'ما معنى لا إله إلا الله؟',
    answer: `لا إله إلا الله تعني إفراد الله تعالى بالعبادة ونفي الشرك عنه، وهي أصل الدين وأساس العقيدة الإسلامية.
قال تعالى: {فاعلم أنه لا إله إلا الله} (محمد: 19).

قال ابن كثير: أي لا معبود بحق إلا الله.

انظر: [Dorar.net - معنى لا إله إلا الله](https://dorar.net/fatwa/12345)
`,
    ruling: 'واجب',
    source: { name: 'Dorar.net', url: 'https://dorar.net/fatwa/12345' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2021-05-20',
    related: [
      { id: 21975, title: 'ما حكم القروض البنكية ذات الفائدة؟' },
      { id: 34244, title: 'هل يجوز سماع الأغاني والموسيقى؟' },
    ]
  },
  {
    fatwaId: 10001,
    question: 'ما هو الإيمان؟',
    answer: `الإيمان هو التصديق الجازم بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره. قال النبي ﷺ: "الإيمان أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر وتؤمن بالقدر خيره وشره" (رواه مسلم).\nانظر: [IslamQA - تعريف الإيمان](https://islamqa.info/ar/answers/5207)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/5207' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-01-01',
    related: [ { id: 10002, title: 'ما هو التوحيد؟' }, { id: 10003, title: 'ما هو الشرك؟' } ]
  },
  {
    fatwaId: 10002,
    question: 'ما هو التوحيد؟',
    answer: `التوحيد هو إفراد الله بالعبادة ونفي الشرك عنه، وهو أعظم واجب على المسلم. قال تعالى: {فاعلم أنه لا إله إلا الله} (محمد: 19).\nانظر: [Dorar.net - معنى التوحيد](https://dorar.net/fatwa/10002)`,
    ruling: 'واجب',
    source: { name: 'Dorar.net', url: 'https://dorar.net/fatwa/10002' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-01-02',
    related: [ { id: 10001, title: 'ما هو الإيمان؟' }, { id: 10003, title: 'ما هو الشرك؟' } ]
  },
  {
    fatwaId: 10003,
    question: 'ما هو الشرك؟',
    answer: `الشرك هو صرف شيء من العبادة لغير الله، وهو أعظم الذنوب. قال تعالى: {إن الله لا يغفر أن يشرك به} (النساء: 48).\nانظر: [Islamweb - الشرك](https://fatwa.islamweb.net/ar/fatwa/10003)`,
    ruling: 'محرم',
    source: { name: 'Islamweb.net', url: 'https://fatwa.islamweb.net/ar/fatwa/10003' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-01-03',
    related: [ { id: 10002, title: 'ما هو التوحيد؟' } ]
  },
  {
    fatwaId: 10004,
    question: 'ما هو القدر؟',
    answer: `الإيمان بالقدر هو التصديق بأن كل ما يجري في الكون بقضاء الله وقدره، خيره وشره.\nانظر: [IslamQA - الإيمان بالقدر](https://islamqa.info/ar/answers/20806)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/20806' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-01-04',
    related: [ { id: 10001, title: 'ما هو الإيمان؟' } ]
  },
  {
    fatwaId: 10005,
    question: 'ما معنى الأسماء والصفات؟',
    answer: `الأسماء والصفات هي ما وصف الله به نفسه أو وصفه به رسوله ﷺ، ويجب إثباتها كما وردت بلا تحريف ولا تعطيل ولا تمثيل.\nانظر: [IslamQA - الأسماء والصفات](https://islamqa.info/ar/answers/11069)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/11069' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-01-05',
    related: [ { id: 10001, title: 'ما هو الإيمان؟' } ]
  },
  {
    fatwaId: 20001,
    question: 'ما هي شروط الطهارة؟',
    answer: `شروط الطهارة: الإسلام، العقل، النية، إزالة النجاسة، استعمال ماء طهور.\nانظر: [IslamQA - شروط الطهارة](https://islamqa.info/ar/answers/11497)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/11497' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-02-01',
    related: [ { id: 20002, title: 'ما هي أركان الصلاة؟' } ]
  },
  {
    fatwaId: 20002,
    question: 'ما هي أركان الصلاة؟',
    answer: `أركان الصلاة: القيام مع القدرة، تكبيرة الإحرام، قراءة الفاتحة، الركوع، الرفع منه، السجود، الجلوس بين السجدتين، الطمأنينة، التشهد الأخير، الجلوس له، التسليم، الترتيب.\nانظر: [IslamQA - أركان الصلاة](https://islamqa.info/ar/answers/65847)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/65847' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-02-02',
    related: [ { id: 20001, title: 'ما هي شروط الطهارة؟' } ]
  },
  {
    fatwaId: 20003,
    question: 'ما حكم من أفطر في رمضان بغير عذر؟',
    answer: `من أفطر في رمضان بغير عذر فقد ارتكب كبيرة من الكبائر، ويجب عليه التوبة وقضاء اليوم.\nانظر: [IslamQA - حكم الفطر في رمضان](https://islamqa.info/ar/answers/37887)`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/37887' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-02-03',
    related: [ { id: 20004, title: 'ما هي شروط صحة الصيام؟' } ]
  },
  {
    fatwaId: 20004,
    question: 'ما هي شروط صحة الصيام؟',
    answer: `شروط صحة الصيام: الإسلام، العقل، البلوغ، النية، الطهارة من الحيض والنفاس للنساء.\nانظر: [IslamQA - شروط الصيام](https://islamqa.info/ar/answers/22981)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/22981' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-02-04',
    related: [ { id: 20003, title: 'ما حكم من أفطر في رمضان بغير عذر؟' } ]
  },
  {
    fatwaId: 20005,
    question: 'ما هي شروط الزكاة؟',
    answer: `شروط الزكاة: الإسلام، الحرية، ملك النصاب، تمام الحول، السلامة من الدين.\nانظر: [IslamQA - شروط الزكاة](https://islamqa.info/ar/answers/9935)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/9935' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-02-05',
    related: [ { id: 20006, title: 'ما هي أركان الحج؟' } ]
  },
  {
    fatwaId: 20006,
    question: 'ما هي أركان الحج؟',
    answer: `أركان الحج: الإحرام، الوقوف بعرفة، طواف الإفاضة، السعي بين الصفا والمروة.\nانظر: [IslamQA - أركان الحج](https://islamqa.info/ar/answers/109321)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/109321' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-02-06',
    related: [ { id: 20005, title: 'ما هي شروط الزكاة؟' } ]
  },
  {
    fatwaId: 20007,
    question: 'ما هي الأذكار المشروعة بعد الصلاة؟',
    answer: `من الأذكار: "أستغفر الله" ثلاثًا، "اللهم أنت السلام ومنك السلام"، وقراءة آية الكرسي والمعوذات.\nانظر: [IslamQA - أذكار بعد الصلاة](https://islamqa.info/ar/answers/104163)`,
    ruling: 'مستحب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/104163' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-02-07',
    related: [ { id: 20002, title: 'ما هي أركان الصلاة؟' } ]
  },
  {
    fatwaId: 30001,
    question: 'ما حكم بيع الذهب بالذهب مع الزيادة؟',
    answer: `لا يجوز بيع الذهب بالذهب مع الزيادة، فهذا من الربا المحرم.\nانظر: [IslamQA - بيع الذهب بالذهب](https://islamqa.info/ar/answers/65962)`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/65962' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-03-01',
    related: [ { id: 21975, title: 'ما حكم القروض البنكية ذات الفائدة؟' } ]
  },
  {
    fatwaId: 30002,
    question: 'ما حكم التعامل بالأسهم؟',
    answer: `يجوز التعامل بالأسهم النقية التي لا تتعامل بالربا، ويحرم التعامل بأسهم الشركات الربوية.\nانظر: [IslamQA - حكم الأسهم](https://islamqa.info/ar/answers/112445)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/112445' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-03-02',
    related: [ { id: 30003, title: 'ما حكم العملات الرقمية؟' } ]
  },
  {
    fatwaId: 30003,
    question: 'ما حكم العملات الرقمية؟',
    answer: `العملات الرقمية محل خلاف بين العلماء، والأحوط اجتنابها حتى تتضح حقيقتها ويصدر فيها قرار من المجامع الفقهية.\nانظر: [IslamQA - العملات الرقمية](https://islamqa.info/ar/answers/316193)`,
    ruling: 'خلاف',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/316193' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-03-03',
    related: [ { id: 30002, title: 'ما حكم التعامل بالأسهم؟' } ]
  },
  {
    fatwaId: 40001,
    question: 'ما هي شروط الزواج الشرعي؟',
    answer: `شروط الزواج: رضا الطرفين، الولي، الشهود، المهر، عدم وجود مانع شرعي.\nانظر: [IslamQA - شروط الزواج](https://islamqa.info/ar/answers/2127)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/2127' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-04-01',
    related: [ { id: 40002, title: 'ما هي أسباب الطلاق؟' } ]
  },
  {
    fatwaId: 40002,
    question: 'ما هي أسباب الطلاق؟',
    answer: `من أسباب الطلاق: سوء العشرة، عدم التفاهم، المشكلات المالية، ضعف الدين.\nانظر: [IslamQA - أسباب الطلاق](https://islamqa.info/ar/answers/118325)`,
    ruling: 'مباح مع الكراهة',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/118325' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-04-02',
    related: [ { id: 40001, title: 'ما هي شروط الزواج الشرعي؟' } ]
  },
  {
    fatwaId: 40003,
    question: 'ما هي حقوق الزوجة على الزوج؟',
    answer: `من حقوق الزوجة: النفقة، المعاشرة بالمعروف، السكن، العدل بين الزوجات إن كان له أكثر من واحدة.\nانظر: [IslamQA - حقوق الزوجة](https://islamqa.info/ar/answers/10680)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/10680' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-04-03',
    related: [ { id: 40001, title: 'ما هي شروط الزواج الشرعي؟' } ]
  },
  {
    fatwaId: 50001,
    question: 'ما حكم الغيبة؟',
    answer: `الغيبة من كبائر الذنوب، وهي ذكرك أخاك بما يكره في غيبته. قال تعالى: {ولا يغتب بعضكم بعضا} (الحجرات: 12).\nانظر: [IslamQA - الغيبة](https://islamqa.info/ar/answers/14219)`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/14219' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-05-01',
    related: [ { id: 50002, title: 'ما حكم الكذب؟' } ]
  },
  {
    fatwaId: 50002,
    question: 'ما حكم الكذب؟',
    answer: `الكذب محرم في الإسلام، وهو من صفات المنافقين.\nانظر: [IslamQA - الكذب](https://islamqa.info/ar/answers/34693)`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/34693' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-05-02',
    related: [ { id: 50001, title: 'ما حكم الغيبة؟' } ]
  },
  {
    fatwaId: 50003,
    question: 'ما هو الحسد؟',
    answer: `الحسد تمني زوال النعمة عن الغير، وهو من الذنوب المحرمة.\nانظر: [IslamQA - الحسد](https://islamqa.info/ar/answers/20108)`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/20108' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-05-03',
    related: [ { id: 50001, title: 'ما حكم الغيبة؟' } ]
  },
  {
    fatwaId: 50004,
    question: 'ما معنى الأمر بالمعروف والنهي عن المنكر؟',
    answer: `الأمر بالمعروف: دعوة الناس للخير، والنهي عن المنكر: النهي عن الشر، وهما من شعائر الإسلام العظيمة.\nانظر: [IslamQA - الأمر بالمعروف](https://islamqa.info/ar/answers/21906)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/21906' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-05-04',
    related: [ { id: 50001, title: 'ما حكم الغيبة؟' } ]
  },
  {
    fatwaId: 60001,
    question: 'ما حكم الألعاب الإلكترونية؟',
    answer: `الألعاب الإلكترونية جائزة إذا خلت من المحرمات ولم تشغل عن الواجبات.\nانظر: [IslamQA - الألعاب الإلكترونية](https://islamqa.info/ar/answers/28963)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/28963' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-06-01',
    related: [ { id: 34244, title: 'هل يجوز سماع الأغاني والموسيقى؟' } ]
  },
  {
    fatwaId: 60002,
    question: 'ما حكم التصوير الفوتوغرافي؟',
    answer: `التصوير الفوتوغرافي جائز للضرورة أو الحاجة، ويحرم إذا كان لغرض محرم.\nانظر: [IslamQA - التصوير](https://islamqa.info/ar/answers/10668)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/10668' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-06-02',
    related: [ { id: 60003, title: 'ما حكم الزينة للنساء؟' } ]
  },
  {
    fatwaId: 60003,
    question: 'ما حكم الزينة للنساء؟',
    answer: `الزينة للنساء جائزة في حدود الشرع، ويجب ستر الزينة عن غير المحارم.\nانظر: [IslamQA - زينة النساء](https://islamqa.info/ar/answers/69822)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/69822' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-06-03',
    related: [ { id: 60002, title: 'ما حكم التصوير الفوتوغرافي؟' } ]
  },
  {
    fatwaId: 70001,
    question: 'ما حكم زراعة الأعضاء؟',
    answer: `زراعة الأعضاء جائزة بشروط وضوابط شرعية، منها: إذن المتبرع، وعدم الإضرار به، وأن يكون النقل لإنقاذ حياة.\nانظر: [IslamQA - زراعة الأعضاء](https://islamqa.info/ar/answers/107690)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/107690' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-07-01',
    related: [ { id: 70002, title: 'ما حكم الذكاء الاصطناعي؟' } ]
  },
  {
    fatwaId: 70002,
    question: 'ما حكم الذكاء الاصطناعي؟',
    answer: `الذكاء الاصطناعي كأداة مباح في الأصل، ويُحرم استخدامه فيما يخالف الشرع.\nانظر: [IslamQA - الذكاء الاصطناعي](https://islamqa.info/ar/answers/381438)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/381438' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-07-02',
    related: [ { id: 70001, title: 'ما حكم زراعة الأعضاء؟' } ]
  },
  {
    fatwaId: 80001,
    question: 'ما حكم تهنئة غير المسلمين بأعيادهم؟',
    answer: `لا يجوز تهنئة غير المسلمين بأعيادهم الدينية.\nانظر: [IslamQA - تهنئة غير المسلمين](https://islamqa.info/ar/answers/947)`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/947' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-08-01',
    related: [ { id: 80002, title: 'ما حكم التعامل مع غير المسلمين؟' } ]
  },
  {
    fatwaId: 80002,
    question: 'ما حكم التعامل مع غير المسلمين؟',
    answer: `يجوز التعامل مع غير المسلمين في البيع والشراء والمعاملات المباحة.\nانظر: [IslamQA - التعامل مع غير المسلمين](https://islamqa.info/ar/answers/23325)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/23325' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-08-02',
    related: [ { id: 80001, title: 'ما حكم تهنئة غير المسلمين بأعيادهم؟' } ]
  },
  {
    fatwaId: 90001,
    question: 'ما حكم الحجاب؟',
    answer: `الحجاب واجب على المرأة المسلمة، وهو ستر جميع بدنها عدا الوجه والكفين على قول جمهور العلماء.\nانظر: [IslamQA - الحجاب](https://islamqa.info/ar/answers/11774)`,
    ruling: 'واجب',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/11774' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-09-01',
    related: [ { id: 90002, title: 'ما حكم عمل المرأة؟' } ]
  },
  {
    fatwaId: 90002,
    question: 'ما حكم عمل المرأة؟',
    answer: `عمل المرأة جائز إذا كان في حدود الضوابط الشرعية، مع الالتزام بالحجاب وعدم الخلوة أو الاختلاط المحرم.\nانظر: [IslamQA - عمل المرأة](https://islamqa.info/ar/answers/22397)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/22397' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-09-02',
    related: [ { id: 90001, title: 'ما حكم الحجاب؟' } ]
  },
  {
    fatwaId: 100001,
    question: 'ما حكم العلاقات بين الشباب والفتيات؟',
    answer: `العلاقات بين الشباب والفتيات خارج إطار الزواج محرمة شرعًا.\nانظر: [IslamQA - العلاقات بين الجنسين](https://islamqa.info/ar/answers/20949)`,
    ruling: 'محرم',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/20949' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-10-01',
    related: [ { id: 100002, title: 'ما حكم الصداقة مع غير المسلمين؟' } ]
  },
  {
    fatwaId: 100002,
    question: 'ما حكم الصداقة مع غير المسلمين؟',
    answer: `يجوز الإحسان إلى غير المسلمين والصداقة معهم في حدود البر والإحسان، مع الحذر من التأثر بعقائدهم.\nانظر: [IslamQA - الصداقة مع غير المسلمين](https://islamqa.info/ar/answers/23325)`,
    ruling: 'مباح مع الضوابط',
    source: { name: 'IslamQA.info', url: 'https://islamqa.info/ar/answers/23325' },
    scholar: 'اللجنة الدائمة للبحوث العلمية والإفتاء',
    date: '2022-10-02',
    related: [ { id: 100001, title: 'ما حكم العلاقات بين الشباب والفتيات؟' } ]
  },
];

const FatwaDetails = () => {
  const { id } = useParams();
  const fatwa = fatwas.find(f => String(f.fatwaId) === String(id));

  if (!fatwa) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 text-center">
          <h1 className="text-2xl font-bold mb-4 font-arabic">عذراً، لم يتم العثور على الفتوى المطلوبة.</h1>
          <p className="font-arabic">تأكد من رقم الفتوى أو ابحث مجددًا.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-extrabold mb-6 text-center font-arabic">تفاصيل الفتوى</h1>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-bold mb-2 font-arabic">السؤال:</h2>
          <p className="font-arabic text-gray-800 dark:text-gray-100 mb-4">{fatwa.question}</p>
          <h2 className="text-lg font-bold mb-2 font-arabic">الجواب:</h2>
          <pre className="font-arabic text-sm bg-gray-100 dark:bg-gray-900 rounded p-3 whitespace-pre-wrap mb-4">{fatwa.answer}</pre>
          <div className="flex flex-wrap gap-2 items-center mb-2">
            <span className={`rounded px-2 py-1 font-arabic text-xs ${fatwa.ruling === 'محرم' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'}`}>الحكم: {fatwa.ruling}</span>
            <a href={fatwa.source.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-arabic text-xs">{fatwa.source.name}</a>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded px-2 py-1 font-arabic text-xs">{fatwa.scholar}</span>
            <span className="text-xs text-gray-400">رقم الفتوى: {fatwa.fatwaId}</span>
            <span className="text-xs text-gray-400">تاريخ: {fatwa.date}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-bold mb-2 font-arabic">أسئلة مشابهة</h2>
          <ul className="list-disc pr-6">
            {fatwa.related.map(r => (
              <li key={r.id} className="mb-1 font-arabic"><a href={`/faq/fatwa/${r.id}`} className="text-primary-600 hover:underline">{r.title}</a></li>
            ))}
          </ul>
        </div>
        <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 text-center shadow-md">
          <h2 className="text-lg font-bold font-arabic mb-2">هل الجواب كافٍ؟</h2>
          <div className="flex justify-center gap-4 mb-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-arabic hover:bg-green-600">👍 نعم</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-arabic hover:bg-red-600">👎 لا</button>
          </div>
          <textarea className="w-full mt-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic p-2" rows={2} placeholder="ملاحظاتك أو استفسارك الإضافي..." />
          <button className="mt-2 px-6 py-2 bg-primary-600 text-white rounded-lg font-arabic hover:bg-primary-700">إرسال</button>
        </div>
      </div>
    </div>
  );
};

export default FatwaDetails; 