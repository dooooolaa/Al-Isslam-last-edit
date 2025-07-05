import React from 'react';
import { Link } from 'react-router-dom';

const questions = [
  { q: 'ما هو الإيمان؟', cat: 'العقيدة', age: 'كبار', type: 'مسلم ملتزم', id: 10001 },
  { q: 'ما هي أركان الصلاة؟', cat: 'العبادات', age: 'كبار', type: 'مسلم ملتزم', id: 20002 },
  { q: 'ما حكم من أفطر في رمضان بغير عذر؟', cat: 'العبادات', age: 'كبار', type: 'مسلم ملتزم', id: 20003 },
  { q: 'ما حكم بيع الذهب بالذهب مع الزيادة؟', cat: 'المعاملات المالية', age: 'كبار', type: 'باحث', id: 30001 },
  { q: 'ما حكم التعامل بالأسهم؟', cat: 'المعاملات المالية', age: 'كبار', type: 'باحث', id: 30002 },
  { q: 'ما هي شروط الزواج الشرعي؟', cat: 'الأحوال الشخصية', age: 'شباب', type: 'مسلم ملتزم', id: 40001 },
  { q: 'ما حكم الغيبة؟', cat: 'الأخلاق والسلوك', age: 'كبار', type: 'مسلم ملتزم', id: 50001 },
  { q: 'ما حكم الألعاب الإلكترونية؟', cat: 'الترفيه والمباحات', age: 'شباب', type: 'جديد على الإسلام', id: 60001 },
  { q: 'ما حكم زراعة الأعضاء؟', cat: 'النوازل', age: 'كبار', type: 'باحث', id: 70001 },
  { q: 'ما حكم الذكاء الاصطناعي؟', cat: 'النوازل', age: 'شباب', type: 'باحث', id: 70002 },
  { q: 'ما حكم الحجاب؟', cat: 'المرأة المسلمة', age: 'كبار', type: 'مسلم ملتزم', id: 90001 },
  { q: 'ما حكم العلاقات بين الشباب والفتيات؟', cat: 'المراهقون والشباب', age: 'شباب', type: 'جديد على الإسلام', id: 100001 },
  { q: 'ما حكم القروض البنكية ذات الفائدة؟', cat: 'المعاملات المالية', age: 'كبار', type: 'باحث', id: 21975 },
  { q: 'هل يجوز سماع الأغاني والموسيقى؟', cat: 'الترفيه والمباحات', age: 'شباب', type: 'جديد على الإسلام', id: 34244 },
  { q: 'ما معنى لا إله إلا الله؟', cat: 'العقيدة', age: 'شباب', type: 'جديد على الإسلام', id: 12345 },
];

const PopularQuestions = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center font-arabic">الأسئلة الشائعة</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {questions.map(q => (
            <div key={q.id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-2 hover:scale-[1.01] transition-transform">
              <h2 className="text-lg font-bold font-arabic mb-1">{q.q}</h2>
              <div className="flex flex-wrap gap-2 text-xs mb-2">
                <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded px-2 py-1 font-arabic">{q.cat}</span>
                <span className="bg-gold-100 dark:bg-gold-900 text-gold-700 dark:text-gold-300 rounded px-2 py-1 font-arabic">{q.age}</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded px-2 py-1 font-arabic">{q.type}</span>
              </div>
              <Link to={`/faq/fatwa/${q.id}`} className="text-primary-600 hover:underline font-arabic">عرض الإجابة</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularQuestions; 