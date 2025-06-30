import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  User,
  FileText,
  CheckCircle,
  AlertCircle,
  Phone as PhoneIcon
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال الرسالة
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // إعادة تعيين الحالة بعد 3 ثوان
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-400" size={24} />,
      title: 'البريد الإلكتروني',
      value: <a href="mailto:mohamedadelabdullah7@gmail.com" className="text-green-600 dark:text-green-400 hover:underline break-all font-arabic text-sm">mohamedadelabdullah7@gmail.com</a>,
      link: null,
      description: 'راسلنا عبر البريد الإلكتروني'
    },
    {
      icon: <FaWhatsapp className="text-green-500" size={24} />,
      title: 'واتساب',
      value: 'تواصل عبر واتساب',
      link: 'https://api.whatsapp.com/send?phone=201144509350',
      description: 'تواصل معنا مباشرة عبر واتساب'
    },
    {
      icon: <Clock className="text-blue-400" size={24} />,
      title: 'أوقات العمل',
      value: '24/7',
      link: '#',
      description: 'متاحون على مدار الساعة'
    }
  ];

  const faqItems = [
    {
      question: 'كيف يمكنني التسجيل في الموقع؟',
      answer: 'يمكنك التسجيل بسهولة من خلال الضغط على زر "تسجيل" في أعلى الصفحة وملء النموذج بالمعلومات المطلوبة.'
    },
    {
      question: 'هل المحتوى مجاني؟',
      answer: 'نعم، جميع المحتويات الإسلامية في الموقع مجانية بالكامل للاستخدام الشخصي والتعليمي.'
    },
    {
      question: 'كيف يمكنني الإبلاغ عن خطأ؟',
      answer: 'يمكنك الإبلاغ عن أي خطأ أو مشكلة من خلال نموذج التواصل أو إرسال بريد إلكتروني مباشر.'
    },
    {
      question: 'هل يمكنني مشاركة المحتوى؟',
      answer: 'نعم، يمكنك مشاركة المحتوى مع الآخرين مع الحفاظ على حقوق الملكية وذكر المصدر.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-islamic-700 text-white dark:from-primary-900 dark:to-islamic-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-arabic">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في أي شيء تحتاجه
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-4">
                  {info.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-arabic">
                    {info.title}
                  </h3>
                </div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary-600 dark:text-primary-400 hover:underline font-semibold block mb-2 font-arabic"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="mb-2">{info.value}</div>
                )}
                <p className="text-gray-600 dark:text-gray-300 text-sm font-arabic">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-arabic">
              أرسل لنا رسالة
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
              املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-700 dark:text-green-300 font-arabic">
                    تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-arabic">
                    الاسم الكامل *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="block w-full pr-10 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:text-white font-arabic"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-arabic">
                    البريد الإلكتروني *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full pr-10 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:text-white font-arabic"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-arabic">
                  الموضوع *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="block w-full pr-10 border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:text-white font-arabic"
                    placeholder="أدخل موضوع الرسالة"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-arabic">
                  الرسالة *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="block w-full border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:text-white font-arabic"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-arabic"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="ml-2" size={20} />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-arabic">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
              إجابات على أكثر الأسئلة شيوعاً
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white font-arabic">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-arabic">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Contact Section */}
      <div className="py-16 bg-gradient-to-r from-primary-600 to-islamic-700 dark:from-primary-900 dark:to-islamic-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white font-arabic">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-xl text-gray-100 dark:text-gray-200 mb-8 font-arabic">
            لا تتردد في التواصل معنا لأي استفسار أو مساعدة تحتاجها
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mohamedadelabdullah7@gmail.com"
              className="bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-arabic"
            >
              راسلنا عبر البريد الإلكتروني
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=201144509350"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white dark:border-gray-700 text-white dark:text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 dark:hover:bg-gray-900 dark:hover:text-primary-400 transition-colors duration-200 font-arabic flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-green-500" size={20} />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 