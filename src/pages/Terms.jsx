import React from 'react';
import { FileText, User, BookOpen, Lock, Shield, Globe, Mail, Edit, Ban, CheckCircle } from 'lucide-react';

const gradients = [
  'from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800',
  'from-islamic-100 to-islamic-50 dark:from-islamic-900 dark:to-islamic-800',
  'from-gold-100 to-gold-50 dark:from-gold-900 dark:to-gold-800',
  'from-red-100 to-red-50 dark:from-red-900 dark:to-red-800',
  'from-primary-100 to-gold-50 dark:from-primary-900 dark:to-gold-900',
  'from-islamic-100 to-primary-50 dark:from-islamic-900 dark:to-primary-900',
  'from-gold-100 to-islamic-50 dark:from-gold-900 dark:to-islamic-900',
  'from-primary-100 to-red-50 dark:from-primary-900 dark:to-red-900',
  'from-islamic-100 to-gold-50 dark:from-islamic-900 dark:to-gold-900',
];
const iconGradients = [
  'from-primary-500 to-primary-400 dark:from-primary-700 dark:to-primary-500',
  'from-islamic-500 to-islamic-400 dark:from-islamic-700 dark:to-islamic-500',
  'from-gold-500 to-gold-400 dark:from-gold-700 dark:to-gold-500',
  'from-red-500 to-red-400 dark:from-red-700 dark:to-red-500',
  'from-primary-500 to-gold-400 dark:from-primary-700 dark:to-gold-700',
  'from-islamic-500 to-primary-400 dark:from-islamic-700 dark:to-primary-700',
  'from-gold-500 to-islamic-400 dark:from-gold-700 dark:to-islamic-700',
  'from-primary-500 to-red-400 dark:from-primary-700 dark:to-red-700',
  'from-islamic-500 to-gold-400 dark:from-islamic-700 dark:to-gold-700',
];

const terms = [
  {
    icon: <CheckCircle size={24} />, title: 'القبول بالشروط', emoji: '📌',
    content: (
      <>
        <p>باستخدامك لموقع "الإسلام حياة" أو أي من خدماته، فإنك تقر بأنك قرأت هذه الشروط وفهمتها وتوافق عليها بالكامل.</p>
        <p className="mt-2">إذا كنت لا توافق على أي جزء من هذه الشروط، يُرجى عدم استخدام الموقع.</p>
      </>
    )
  },
  {
    icon: <BookOpen size={24} />, title: 'محتوى الموقع', emoji: '🧾',
    content: (
      <>
        <p>جميع المواد المنشورة (نصوص، صور، صوتيات، فيديوهات، تطبيقات) مقدمة لأغراض دينية وتعليمية فقط.</p>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          <span className="font-bold">المصادر الشرعية:</span>
          <ul className="list-disc pr-6 mt-1">
            <li>dorar.net</li>
            <li>islamqa.info</li>
            <li>binbaz.org.sa</li>
            <li>mp3quran.net</li>
          </ul>
        </div>
        <p className="mt-2">لا يُقصد بالمحتوى أن يكون بديلًا عن الفتوى الشرعية الخاصة لحالات معينة، وينبغي دائمًا الرجوع لأهل العلم.</p>
      </>
    )
  },
  {
    icon: <User size={24} />, title: 'الحسابات والاستخدام الشخصي', emoji: '👤',
    content: (
      <>
        <ul className="list-disc pr-6">
          <li>يمكنك إنشاء حساب شخصي لحفظ المفضلة وتتبع نشاطك في التلاوة والتحديات.</li>
          <li>يجب الحفاظ على سرية بيانات الدخول الخاصة بك.</li>
          <li>لا يُسمح باستخدام حسابك لأي غرض تجاري أو غير مشروع.</li>
          <li>يحق لإدارة الموقع إغلاق أو تعليق الحسابات التي تسيء الاستخدام أو تخل بالشروط.</li>
        </ul>
      </>
    )
  },
  {
    icon: <Shield size={24} />, title: 'الخصوصية وحماية البيانات', emoji: '🛡️',
    content: (
      <>
        <ul className="list-disc pr-6">
          <li>نحترم خصوصيتك. نستخدم معلوماتك فقط لتحسين تجربتك داخل الموقع.</li>
          <li>لا نبيع أو نشارك بياناتك مع أي طرف ثالث.</li>
          <li>للمزيد، يمكنك مراجعة سياسة الخصوصية الخاصة بنا.</li>
        </ul>
      </>
    )
  },
  {
    icon: <Lock size={24} />, title: 'حقوق النشر', emoji: '🔒',
    content: (
      <>
        <ul className="list-disc pr-6">
          <li>جميع الحقوق محفوظة لموقع "الإسلام حياة".</li>
          <li>لا يُسمح بإعادة نشر أو نسخ أو اقتباس أي جزء من الموقع دون إذن مكتوب، إلا لأغراض غير ربحية مع ذكر المصدر.</li>
        </ul>
      </>
    )
  },
  {
    icon: <Ban size={24} />, title: 'الاستخدامات المحظورة', emoji: '🚫',
    content: (
      <>
        <ul className="list-disc pr-6">
          <li>يُمنع استخدام الموقع في أي من الحالات التالية:</li>
          <li>نشر أو إرسال أي محتوى فيه إساءة، كراهية، أو تحريض.</li>
          <li>التلاعب في الخدمات أو محاولة الوصول غير المشروع لبيانات غيرك.</li>
          <li>استغلال المنصة في نشر روابط غير موثوقة أو إعلانات خارجية.</li>
        </ul>
      </>
    )
  },
  {
    icon: <Mail size={24} />, title: 'التواصل والدعم', emoji: '📬',
    content: (
      <>
        <ul className="list-disc pr-6">
          <li>لأي استفسار أو بلاغ عن محتوى غير مناسب، يمكنك التواصل معنا من خلال صفحة <a href="/contact" className="text-primary-600 dark:text-primary-300 underline">تواصل معنا</a>.</li>
          <li>نرحب بأي اقتراح أو ملاحظة تساعدنا على تحسين الموقع.</li>
        </ul>
      </>
    )
  },
  {
    icon: <Edit size={24} />, title: 'تعديل الشروط', emoji: '⚖️',
    content: (
      <>
        <ul className="list-disc pr-6">
          <li>يحق لإدارة الموقع تعديل هذه الشروط في أي وقت. سيتم إعلام المستخدمين بأي تغييرات هامة.</li>
          <li>استمرارك في استخدام الموقع بعد التحديث يعني موافقتك على الشروط الجديدة.</li>
        </ul>
      </>
    )
  },
  {
    icon: <Globe size={24} />, title: 'الختام', emoji: '🕊️',
    content: (
      <>
        <ul className="list-disc pr-6">
          <li>نسعى لتوفير بيئة آمنة وهادفة لكل من يستخدم "الإسلام حياة".</li>
          <li>شكرًا لاختيارك لنا، ونسأل الله أن يجعل الموقع نافعًا مباركًا للجميع.</li>
        </ul>
      </>
    )
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br dark:via-gray-700 dark:to-gray-900 py-0 sm:py-8 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-islamic-700 dark:from-primary-900 dark:to-islamic-900 text-white rounded-b-3xl shadow-lg mb-10 transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <FileText className="text-white" size={44} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-arabic mb-2 flex items-center gap-2">
            <span role="img" aria-label="شروط الاستخدام">📄</span> شروط الاستخدام
          </h1>
          <div className="text-base text-gold-200 font-arabic">آخر تحديث: 01 يوليو 2025</div>
        </div>
      </div>
      {/* Terms Cards */}
      <div className="max-w-7xl mx-auto w-full px-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {terms.map((term, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 bg-gradient-to-br ${gradients[idx % gradients.length]} transition-all duration-300`}
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900 bg-gradient-to-br ${iconGradients[idx % iconGradients.length]}`}> 
                {term.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{term.emoji}</span>
                  <span className="text-lg font-bold text-primary-700 dark:text-primary-200 font-arabic">{term.title}</span>
                </div>
                <div className="text-gray-800 dark:text-gray-100 font-arabic text-base leading-relaxed">
                  {term.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms; 