import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  User, 
  Mail,
  Phone,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "1/7/2025";

  const dataTypes = [
    {
      icon: <User className="text-primary-400" size={20} />,
      title: 'المعلومات الشخصية',
      description: 'الاسم، البريد الإلكتروني، رقم الهاتف، العنوان'
    },
    {
      icon: <Database className="text-blue-400" size={20} />,
      title: 'بيانات الاستخدام',
      description: 'سجل التصفح، الصفحات المفضلة، التفاعلات مع المحتوى'
    },
    {
      icon: <Eye className="text-green-400" size={20} />,
      title: 'بيانات التقنية',
      description: 'نوع المتصفح، نظام التشغيل، عنوان IP، ملفات تعريف الارتباط'
    },
    {
      icon: <FileText className="text-purple-400" size={20} />,
      title: 'المحتوى المقدم',
      description: 'التعليقات، الأسئلة، المراجعات، المحتوى المشارك'
    }
  ];

  const dataUsage = [
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'تقديم الخدمات',
      description: 'توفير المحتوى الإسلامي والخدمات المطلوبة'
    },
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'تحسين التجربة',
      description: 'تحسين واجهة المستخدم وتجربة التصفح'
    },
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'التواصل',
      description: 'الرد على الاستفسارات وإرسال التحديثات المهمة'
    },
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'الأمان',
      description: 'حماية الموقع والمستخدمين من المخاطر الأمنية'
    }
  ];

  const userRights = [
    {
      icon: <Eye className="text-blue-500" size={20} />,
      title: 'الحق في المعرفة',
      description: 'معرفة ما هي البيانات التي يتم جمعها وكيفية استخدامها'
    },
    {
      icon: <Database className="text-green-500" size={20} />,
      title: 'الحق في الوصول',
      description: 'الوصول إلى بياناتك الشخصية وتحديثها أو تصحيحها'
    },
    {
      icon: <AlertTriangle className="text-red-500" size={20} />,
      title: 'الحق في الحذف',
      description: 'طلب حذف بياناتك الشخصية من قواعد بياناتنا'
    },
    {
      icon: <Lock className="text-purple-500" size={20} />,
      title: 'الحق في الخصوصية',
      description: 'ضمان عدم مشاركة بياناتك مع أطراف ثالثة دون موافقتك'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-islamic-700 dark:from-primary-900 dark:to-islamic-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-arabic">
              نحن نلتزم بحماية خصوصيتك وبياناتك الشخصية. تعرف على كيفية جمع واستخدام وحماية معلوماتك
            </p>
            <div className="mt-6 text-sm text-gray-200 font-arabic">
              آخر تحديث: {lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transition-colors duration-300">
            <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="text-primary-600 dark:text-primary-300" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 font-arabic">
                  مقدمة
                </h2>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-arabic">
                  في موقع "الإسلام حياة"، نعتبر خصوصيتك وأمان بياناتك من أهم أولوياتنا. 
                  هذه السياسة توضح كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام موقعنا.
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-arabic">
              نحن نلتزم بالشفافية التامة في التعامل مع بياناتك، ونضمن لك أن جميع المعلومات 
              التي تشاركها معنا ستُستخدم فقط للأغراض المعلنة وبالطرق الآمنة.
            </p>
          </div>
        </div>
      </div>

      {/* Data Collection Section */}
      <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 font-arabic">
              البيانات التي نجمعها
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
              نجمع أنواع مختلفة من البيانات لتحسين خدماتنا وتجربتك على الموقع
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors duration-300">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-arabic">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-arabic">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Usage Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 font-arabic">
              كيفية استخدام البيانات
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
              نستخدم بياناتك فقط للأغراض المشروعة والمعلنة مسبقاً
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataUsage.map((usage, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  {usage.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-arabic">
                    {usage.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-arabic">
                  {usage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Protection Section */}
      <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-islamic-50 dark:from-primary-900 dark:to-islamic-900 rounded-2xl p-8 transition-colors duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-primary-600 dark:text-primary-300" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 font-arabic">
                حماية البيانات
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 font-arabic">
                  إجراءات الأمان
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 font-arabic">
                  <li className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>تشفير البيانات باستخدام تقنيات SSL المتقدمة</span>
                  </li>
                  <li className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>مراقبة مستمرة للأنظمة لمنع الاختراقات</span>
                  </li>
                  <li className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>نسخ احتياطية منتظمة للبيانات</span>
                  </li>
                  <li className="flex items-start space-x-2 rtl:space-x-reverse">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>تقييد الوصول للبيانات للموظفين المصرح لهم فقط</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 font-arabic">
                  عدم مشاركة البيانات
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Rights Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 font-arabic">
              حقوقك كمتخدم
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
              لديك حقوق محددة فيما يتعلق ببياناتك الشخصية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userRights.map((right, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  {right.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-arabic">
                    {right.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-arabic">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-primary-600 to-islamic-700 dark:from-primary-900 dark:to-islamic-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white font-arabic">
            لديك أسئلة حول الخصوصية؟
          </h2>
          <p className="text-xl text-gray-100 mb-8 font-arabic">
            نحن هنا للإجابة على جميع استفساراتك حول سياسة الخصوصية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mohamedadelabdullah7@gmail.com"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 font-arabic"
            >
              راسلنا عبر البريد الإلكتروني
            </a>
            <a
              href="tel:01144509350"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 font-arabic"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </div>

      {/* Updates Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8 transition-colors duration-300">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <AlertTriangle className="text-yellow-600 dark:text-yellow-300 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 font-arabic">
                  تحديثات السياسة
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-arabic">
                  قد نقوم بتحديث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات جوهرية 
                  عبر البريد الإلكتروني أو من خلال إشعار على الموقع. ننصحك بمراجعة هذه الصفحة 
                  بانتظام للاطلاع على أحدث المعلومات.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-4 font-arabic">
                  آخر تحديث: {lastUpdated}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 