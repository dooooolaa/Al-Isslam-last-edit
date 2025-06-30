import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Info,
  User,
  Lock,
  Globe,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const Terms = () => {
  const lastUpdated = "15 ديسمبر 2024";

  const generalTerms = [
    {
      icon: <User className="text-primary-400" size={20} />,
      title: 'التسجيل والحساب',
      description: 'يجب أن تكون عمرك 13 عاماً أو أكثر لإنشاء حساب. أنت مسؤول عن الحفاظ على سرية معلومات تسجيل الدخول.'
    },
    {
      icon: <Globe className="text-blue-400" size={20} />,
      title: 'الاستخدام المقبول',
      description: 'يجب استخدام الموقع لأغراض مشروعة ومتوافقة مع القيم الإسلامية. يحظر أي استخدام يسيء للدين أو للآخرين.'
    },
    {
      icon: <Shield className="text-green-400" size={20} />,
      title: 'المحتوى المقدم',
      description: 'أنت مسؤول عن المحتوى الذي تشاركه. يجب أن يكون المحتوى دقيقاً ومحترماً ومتوافقاً مع الشريعة الإسلامية.'
    },
    {
      icon: <Lock className="text-purple-400" size={20} />,
      title: 'الأمان والخصوصية',
      description: 'نلتزم بحماية خصوصيتك وأمان بياناتك. يجب عليك أيضاً اتخاذ الاحتياطات اللازمة لحماية حسابك.'
    }
  ];

  const prohibitedActivities = [
    {
      icon: <XCircle className="text-red-500" size={20} />,
      title: 'المحتوى المسيء',
      description: 'نشر محتوى مسيء أو مهين أو يتعارض مع القيم الإسلامية'
    },
    {
      icon: <XCircle className="text-red-500" size={20} />,
      title: 'الأنشطة غير القانونية',
      description: 'استخدام الموقع لأي أنشطة غير قانونية أو ضارة'
    },
    {
      icon: <XCircle className="text-red-500" size={20} />,
      title: 'انتهاك حقوق الملكية',
      description: 'نشر محتوى ينتهك حقوق الملكية الفكرية للآخرين'
    },
    {
      icon: <XCircle className="text-red-500" size={20} />,
      title: 'إساءة استخدام النظام',
      description: 'محاولة اختراق الموقع أو إعاقة عمله أو إرسال برامج ضارة'
    }
  ];

  const userObligations = [
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'احترام القيم الإسلامية',
      description: 'الالتزام بالقيم والأخلاق الإسلامية في جميع التفاعلات'
    },
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'دقة المعلومات',
      description: 'تقديم معلومات دقيقة وصحيحة عند التسجيل والتفاعل'
    },
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'حماية الحساب',
      description: 'الحفاظ على أمان حسابك وعدم مشاركة بيانات تسجيل الدخول'
    },
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      title: 'الامتثال للقوانين',
      description: 'الالتزام بجميع القوانين واللوائح المعمول بها'
    }
  ];

  const intellectualProperty = [
    {
      title: 'حقوق الملكية',
      description: 'جميع المحتويات والتصاميم والبرمجيات في الموقع مملوكة لنا أو مرخصة لنا.'
    },
    {
      title: 'المحتوى المقدم من المستخدمين',
      description: 'يحتفظ المستخدم بحقوق الملكية على المحتوى الذي يقدمه، مع منحنا ترخيصاً لاستخدامه.'
    },
    {
      title: 'الاستخدام المسموح',
      description: 'يمكن استخدام المحتوى للاستخدام الشخصي والتعليمي، مع الحفاظ على حقوق الملكية.'
    },
    {
      title: 'الاستخدام المحظور',
      description: 'يحظر نسخ أو توزيع أو تعديل المحتوى لأغراض تجارية دون إذن مسبق.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-islamic-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              شروط الاستخدام
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-arabic">
              يرجى قراءة هذه الشروط بعناية قبل استخدام موقع "الإسلام حياة". استخدامك للموقع يعني موافقتك على هذه الشروط
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
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="text-primary-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-arabic">
                  مقدمة
                </h2>
                <p className="text-gray-700 leading-relaxed font-arabic">
                  مرحباً بك في موقع "الإسلام حياة". هذه الشروط والأحكام تحكم استخدامك لموقعنا الإلكتروني 
                  وجميع الخدمات المقدمة من خلاله. باستخدامك للموقع، فإنك توافق على الالتزام بهذه الشروط.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed font-arabic">
              نحن نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات جوهرية 
              عبر البريد الإلكتروني أو من خلال إشعار على الموقع.
            </p>
          </div>
        </div>
      </div>

      {/* General Terms Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 font-arabic">
              الشروط العامة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-arabic">
              الشروط الأساسية التي يجب الالتزام بها عند استخدام الموقع
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {generalTerms.map((term, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  {term.icon}
                  <h3 className="text-xl font-semibold text-gray-900 font-arabic">
                    {term.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-arabic">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prohibited Activities Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 font-arabic">
              الأنشطة المحظورة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-arabic">
              الأنشطة التي يحظر القيام بها على الموقع
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prohibitedActivities.map((activity, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  {activity.icon}
                  <h3 className="text-xl font-semibold text-gray-900 font-arabic">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-arabic">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Obligations Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 font-arabic">
              التزامات المستخدم
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-arabic">
              المسؤوليات والالتزامات المطلوبة من المستخدمين
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userObligations.map((obligation, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  {obligation.icon}
                  <h3 className="text-xl font-semibold text-gray-900 font-arabic">
                    {obligation.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-arabic">
                  {obligation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intellectual Property Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-islamic-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-primary-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 font-arabic">
                حقوق الملكية الفكرية
              </h2>
            </div>
            <div className="space-y-6">
              {intellectualProperty.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 font-arabic">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Limitation of Liability Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <AlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 font-arabic">
                  حدود المسؤولية
                </h3>
                <p className="text-gray-700 leading-relaxed font-arabic">
                  لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة تنشأ عن استخدام الموقع. 
                  نحن نقدم المحتوى "كما هو" دون ضمانات صريحة أو ضمنية.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 font-arabic">
                  نحن لا نضمن أن الموقع سيكون متاحاً دائماً أو خالياً من الأخطاء، 
                  ولا نتحمل المسؤولية عن أي انقطاع في الخدمة أو فقدان للبيانات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Termination Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center font-arabic">
              إنهاء الخدمة
            </h2>
            <div className="space-y-4 text-gray-700 font-arabic">
              <p>
                نحتفظ بالحق في إنهاء أو تعليق حسابك في أي وقت للأسباب التالية:
              </p>
              <ul className="space-y-2">
                <li>• انتهاك شروط الاستخدام</li>
                <li>• السلوك المسيء أو الضار</li>
                <li>• عدم النشاط لفترة طويلة</li>
                <li>• طلب منك إنهاء الحساب</li>
              </ul>
              <p>
                عند إنهاء الحساب، قد يتم حذف جميع البيانات المرتبطة به نهائياً.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-primary-600 to-islamic-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white font-arabic">
            لديك أسئلة حول الشروط؟
          </h2>
          <p className="text-xl text-gray-100 mb-8 font-arabic">
            نحن هنا للإجابة على جميع استفساراتك حول شروط الاستخدام
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
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <Info className="text-blue-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 font-arabic">
                  تحديثات الشروط
                </h3>
                <p className="text-gray-700 leading-relaxed font-arabic">
                  قد نقوم بتحديث هذه الشروط من وقت لآخر لتحسين خدماتنا أو لمواكبة التغييرات القانونية. 
                  سنقوم بإشعارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على الموقع.
                </p>
                <p className="text-gray-600 mt-4 font-arabic">
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

export default Terms; 