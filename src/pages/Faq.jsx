import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load FAQ data
    const loadFaqs = async () => {
      try {
        // This will be connected to Supabase later
        setFaqs([
          {
            id: 1,
            question: 'ما هي أركان الإسلام؟',
            answer: 'أركان الإسلام خمسة: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت من استطاع إليه سبيلاً.',
            category: 'عقيدة'
          },
          {
            id: 2,
            question: 'كيف أتوضأ؟',
            answer: 'الوضوء يبدأ بالنية، ثم غسل الكفين ثلاثاً، ثم المضمضة والاستنشاق ثلاثاً، ثم غسل الوجه ثلاثاً، ثم غسل اليدين إلى المرفقين ثلاثاً، ثم مسح الرأس، ثم غسل الرجلين إلى الكعبين ثلاثاً.',
            category: 'عبادات'
          }
        ]);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFaqs();
  }, []);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gold-700 dark:text-gold-400 mb-8 text-center">
          الأسئلة الشائعة
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="ابحث في الأسئلة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          />
        </div>

        <div className="grid gap-6">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
                <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded-full text-sm">
                  {faq.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              لم يتم العثور على أسئلة تطابق بحثك
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/faq/categories"
            className="inline-block bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-700 transition-colors"
          >
            تصفح جميع التصنيفات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;