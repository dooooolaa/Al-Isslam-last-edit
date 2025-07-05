import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Heart, 
  Target, 
  Award, 
  Globe,
  Shield,
  Lightbulb,
  Star,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <BookOpen className="text-primary-400" size={24} />,
      title: 'القرآن الكريم',
      description: 'تلاوة القرآن الكريم مع التفسير والترجمة والاستماع للقراء المميزين',
      href: '/quran',
    },
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: 'العبادة والأذكار',
      description: 'أذكار الصباح والمساء وأدعية متنوعة مع فضائلها وأوقاتها',
      href: '/worship',
    },
    {
      icon: <Users className="text-islamic-400" size={24} />,
      title: 'المحتوى العلمي',
      description: 'مقالات وفتاوى من مصادر موثوقة في مختلف المجالات الإسلامية',
      href: '/knowledge',
    },
    {
      icon: <Target className="text-green-400" size={24} />,
      title: 'الأحداث الإسلامية',
      description: 'تقويم الأحداث الإسلامية المهمة وأوقات الصلاة والأعياد',
      href: '/events',
    },
    {
      icon: <Shield className="text-blue-400" size={24} />,
      title: 'الأسرة والأطفال',
      description: 'محتوى تعليمي للأطفال وقصص الأنبياء وأخلاق إسلامية',
      href: '/family',
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      title: 'أسئلة وإجابات',
      description: 'إجابات على الأسئلة الشائعة في الدين الإسلامي',
      href: '/faq',
    }
  ];

  const stats = [
    { number: '1000+', label: 'محتوى', icon: <BookOpen size={20} /> },
    { number: '24/7', label: 'متاح دائماً', icon: <Globe size={20} /> }
  ];

  const values = [
    {
      icon: <Award className="text-primary-400" size={24} />,
      title: 'الأصالة',
      description: 'نلتزم بتقديم المحتوى الإسلامي الأصيل من مصادر موثوقة ومعتمدة'
    },
    {
      icon: <Shield className="text-green-400" size={24} />,
      title: 'الموثوقية',
      description: 'جميع المحتويات مأخوذة من علماء موثوقين ومصادر إسلامية معتمدة'
    },
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: 'الخدمة',
      description: 'نسعى لخدمة الأمة الإسلامية وتسهيل الوصول للمعرفة الدينية'
    },
    {
      icon: <Globe className="text-blue-400" size={24} />,
      title: 'الشمولية',
      description: 'نغطي جميع جوانب الحياة الإسلامية من العبادات إلى المعاملات'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-islamic-700 text-white dark:from-primary-900 dark:to-islamic-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              عن موقع الإسلام حياة
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-arabic">
              منصة إسلامية شاملة تهدف إلى نشر الوعي الديني وتسهيل الوصول للمعرفة الإسلامية الأصيلة
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white font-arabic">
                رسالتنا
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6 font-arabic">
                نسعى في موقع "الإسلام حياة" إلى تقديم منصة إسلامية شاملة ومتطورة تخدم المسلمين في جميع أنحاء العالم، 
                من خلال تقديم محتوى ديني أصيل ومفيد يسهل الوصول إليه والاستفادة منه.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6 font-arabic">
                نؤمن بأهمية نشر الوعي الديني الصحيح وتصحيح المفاهيم الخاطئة، ونسعى لتقديم الإسلام 
                كما جاء به النبي محمد صلى الله عليه وسلم، بعيداً عن التطرف والغلو.
              </p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <CheckCircle className="text-green-500" size={24} />
                <span className="text-gray-700 dark:text-gray-200 font-arabic">محتوى موثوق من مصادر إسلامية معتمدة</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="text-primary-600 dark:text-primary-400">{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-gray-600 dark:text-gray-300 font-arabic">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-arabic">
              خدماتنا المميزة
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
              نقدم مجموعة شاملة من الخدمات الإسلامية التي تغطي جميع احتياجات المسلم المعاصر
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link to={feature.href} key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 block group focus:outline-none focus:ring-2 focus:ring-primary-400">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary-50 dark:group-hover:bg-primary-900 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white font-arabic group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-arabic">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white font-arabic">
              قيمنا وأهدافنا
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-arabic">
              نلتزم بقيم إسلامية أصيلة في جميع ما نقدمه من محتوى وخدمات
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white font-arabic">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-arabic">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-primary-600 to-islamic-700 dark:from-primary-900 dark:to-islamic-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white font-arabic">
            انضم إلينا في رحلة التعلم
          </h2>
          <p className="text-xl text-gray-100 dark:text-gray-200 mb-8 max-w-2xl mx-auto font-arabic">
            اكتشف كنوز المعرفة الإسلامية واغتنم فرصة التعلم المستمر
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-arabic"
            >
              ابدأ الآن
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white dark:border-gray-700 text-white dark:text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 dark:hover:bg-gray-900 dark:hover:text-primary-400 transition-colors duration-200 font-arabic"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 