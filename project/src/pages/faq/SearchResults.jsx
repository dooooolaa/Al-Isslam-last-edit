import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sampleResults = [
  {
    title: 'ما هو الإيمان؟',
    summary: 'الإيمان هو التصديق الجازم بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره...',
    source: 'IslamQA.info',
    category: 'العقيدة',
    fatwaId: 10001,
    hasAudio: false,
    hasVideo: false
  },
  {
    title: 'ما هو التوحيد؟',
    summary: 'التوحيد هو إفراد الله بالعبادة ونفي الشرك عنه، وهو أعظم واجب على المسلم...',
    source: 'Dorar.net',
    category: 'العقيدة',
    fatwaId: 10002,
    hasAudio: false,
    hasVideo: true
  },
  {
    title: 'ما هي أركان الصلاة؟',
    summary: 'أركان الصلاة: القيام مع القدرة، تكبيرة الإحرام، قراءة الفاتحة، الركوع، الرفع منه، السجود...',
    source: 'IslamQA.info',
    category: 'العبادات',
    fatwaId: 20002,
    hasAudio: true,
    hasVideo: false
  },
  {
    title: 'ما حكم من أفطر في رمضان بغير عذر؟',
    summary: 'من أفطر في رمضان بغير عذر فقد ارتكب كبيرة من الكبائر، ويجب عليه التوبة وقضاء اليوم...',
    source: 'IslamQA.info',
    category: 'العبادات',
    fatwaId: 20003,
    hasAudio: false,
    hasVideo: false
  },
  {
    title: 'ما حكم بيع الذهب بالذهب مع الزيادة؟',
    summary: 'لا يجوز بيع الذهب بالذهب مع الزيادة، فهذا من الربا المحرم...',
    source: 'IslamQA.info',
    category: 'المعاملات المالية',
    fatwaId: 30001,
    hasAudio: false,
    hasVideo: false
  },
  {
    title: 'ما حكم التعامل بالأسهم؟',
    summary: 'يجوز التعامل بالأسهم النقية التي لا تتعامل بالربا، ويحرم التعامل بأسهم الشركات الربوية...',
    source: 'IslamQA.info',
    category: 'المعاملات المالية',
    fatwaId: 30002,
    hasAudio: true,
    hasVideo: false
  },
  {
    title: 'ما هي شروط الزواج الشرعي؟',
    summary: 'شروط الزواج: رضا الطرفين، الولي، الشهود، المهر، عدم وجود مانع شرعي...',
    source: 'IslamQA.info',
    category: 'الأحوال الشخصية',
    fatwaId: 40001,
    hasAudio: false,
    hasVideo: true
  },
  {
    title: 'ما حكم الغيبة؟',
    summary: 'الغيبة من كبائر الذنوب، وهي ذكرك أخاك بما يكره في غيبته...',
    source: 'IslamQA.info',
    category: 'الأخلاق والسلوك',
    fatwaId: 50001,
    hasAudio: false,
    hasVideo: false
  },
  {
    title: 'ما حكم الألعاب الإلكترونية؟',
    summary: 'الألعاب الإلكترونية جائزة إذا خلت من المحرمات ولم تشغل عن الواجبات...',
    source: 'IslamQA.info',
    category: 'الترفيه والمباحات',
    fatwaId: 60001,
    hasAudio: true,
    hasVideo: false
  },
  {
    title: 'ما حكم زراعة الأعضاء؟',
    summary: 'زراعة الأعضاء جائزة بشروط وضوابط شرعية، منها: إذن المتبرع، وعدم الإضرار به...',
    source: 'IslamQA.info',
    category: 'النوازل',
    fatwaId: 70001,
    hasAudio: false,
    hasVideo: true
  },
  {
    title: 'ما حكم الحجاب؟',
    summary: 'الحجاب واجب على المرأة المسلمة، وهو ستر جميع بدنها عدا الوجه والكفين على قول جمهور العلماء...',
    source: 'IslamQA.info',
    category: 'المرأة المسلمة',
    fatwaId: 90001,
    hasAudio: false,
    hasVideo: false
  },
  {
    title: 'ما حكم العلاقات بين الشباب والفتيات؟',
    summary: 'العلاقات بين الشباب والفتيات خارج إطار الزواج محرمة شرعًا...',
    source: 'IslamQA.info',
    category: 'المراهقون والشباب',
    fatwaId: 100001,
    hasAudio: true,
    hasVideo: false
  },
  {
    title: 'ما حكم القروض البنكية ذات الفائدة؟',
    summary: 'القروض البنكية التي تشتمل على فائدة ربوية محرمة شرعًا، ولا يجوز للمسلم التعامل بها إلا للضرورة القصوى...',
    source: 'IslamQA.info',
    category: 'المعاملات المالية',
    fatwaId: 21975,
    hasAudio: false,
    hasVideo: false
  },
  {
    title: 'هل يجوز سماع الأغاني والموسيقى؟',
    summary: 'سماع الأغاني التي تشتمل على موسيقى أو كلام فاحش لا يجوز شرعًا، وقد وردت نصوص كثيرة في تحريم المعازف...',
    source: 'Binbaz.org.sa',
    category: 'الترفيه والمباحات',
    fatwaId: 34244,
    hasAudio: true,
    hasVideo: false
  },
  {
    title: 'ما معنى لا إله إلا الله؟',
    summary: 'تعني إفراد الله تعالى بالعبادة ونفي الشرك عنه، وهي أصل الدين وأساس العقيدة الإسلامية...',
    source: 'Dorar.net',
    category: 'العقيدة',
    fatwaId: 12345,
    hasAudio: false,
    hasVideo: true
  },
];

const SearchResults = () => {
  const [query, setQuery] = useState('');
  // لاحقًا: جلب النتائج من API

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center font-arabic">ابحث في الأسئلة الشرعية</h1>
        <div className="mb-8 flex items-center gap-2">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-arabic focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="اكتب سؤالك أو كلمة مفتاحية..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="px-4 py-3 bg-primary-600 text-white rounded-lg font-arabic hover:bg-primary-700 transition-colors">بحث</button>
        </div>
        <div className="space-y-6">
          {sampleResults.map((res, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-2 hover:scale-[1.01] transition-transform">
              <div className="flex items-center gap-2">
                <Link to={`/faq/fatwa/${res.fatwaId}`} className="text-lg font-bold font-arabic flex-1 text-primary-700 hover:underline">{res.title}</Link>
                {res.hasAudio && <span title="إجابة صوتية" className="text-primary-600">🔊</span>}
                {res.hasVideo && <span title="إجابة مرئية" className="text-gold-500">🎥</span>}
              </div>
              <p className="font-arabic text-sm text-gray-700 dark:text-gray-200">{res.summary}</p>
              <div className="flex flex-wrap gap-2 items-center text-xs mt-2">
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded px-2 py-1 font-arabic">{res.category}</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded px-2 py-1 font-arabic">{res.source}</span>
                <button className="text-gray-400 hover:text-primary-600" title="مشاركة"><span>🔗</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 