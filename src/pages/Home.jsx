import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Heart, 
  Calendar, 
  Users, 
  HelpCircle, 
  Play,
  Star,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Compass,
  Moon,
  Target
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'القرآن الكريم',
      description: 'اقرأ واستمع للقرآن مع ترجمات وتفاسير متعددة',
      href: '/quran',
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'العبادة والأذكار',
      description: 'مواقيت الصلاة والأذكار اليومية واتجاه القبلة',
      href: '/worship',
      color: 'islamic'
    },
    {
      icon: Target,
      title: 'التحديات القرآنية',
      description: 'تحديات مخصصة لحفظ ومراجعة القرآن الكريم',
      href: '/challenges',
      color: 'gold'
    },
    {
      icon: Calendar,
      title: 'الأحداث الإسلامية',
      description: 'التقويم الهجري والمناسبات الدينية المهمة',
      href: '/events',
      color: 'primary'
    },
    {
      icon: BookOpen,
      title: 'المحتوى العلمي',
      description: 'أحاديث وفتاوى وسيرة نبوية موثقة',
      href: '/knowledge',
      color: 'islamic'
    },
    {
      icon: Users,
      title: 'الأسرة والأطفال',
      description: 'محتوى تعليمي للعائلة والأطفال',
      href: '/family',
      color: 'gold'
    }
  ];

  const stats = [
    { number: '6236', label: 'آية قرآنية', icon: BookOpen },
    { number: '114', label: 'سورة', icon: Star },
    { number: '50+', label: 'تحدٍ قرآني', icon: Target },
    { number: '100+', label: 'دعاء وذكر', icon: Heart }
  ];

  const recentTopics = [
    {
      title: 'فضائل الدعاء في الإسلام',
      excerpt: 'الدعاء هو العبادة، وهو الصلة بين العبد وربه، ووسيلة للتقرب إلى الله والحصول على رحمته وبركاته...',
      readTime: '1/7/2025',
      category: 'مواضيع دينية'
    },
    {
      title: 'أسباب الاستغفار وفوائده',
      excerpt: 'الاستغفار من أعظم العبادات التي يتقرب بها العبد إلى ربه، وله فوائد عظيمة في الدنيا والآخرة...',
      readTime: '1/7/2025',
      category: 'مواضيع دينية'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-islamic-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic leading-tight">
              مرحباً بك في
              <span className="block text-gold-300">الإسلام حياة</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto font-arabic leading-relaxed">
              موقعك الإسلامي الشامل للقرآن الكريم والأذكار والمحتوى الديني الأصيل
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <Link
                to="/quran"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-arabic inline-flex items-center space-x-2 rtl:space-x-reverse"
              >
                <BookOpen size={20} />
                <span>ابدأ القراءة</span>
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105 font-arabic"
              >
                إنشاء حساب مجاني
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="animate-bounce-gentle">
            <Moon size={40} />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
            <Star size={35} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="text-primary-600 dark:text-primary-400" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-arabic">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">
              اكتشف مميزات الموقع
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-arabic">
              نقدم لك مجموعة شاملة من الأدوات والمحتويات الإسلامية لتعزيز رحلتك الروحية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                primary: 'from-primary-500 to-primary-600 text-primary-600 bg-primary-50 dark:bg-primary-900/20',
                islamic: 'from-islamic-500 to-islamic-600 text-islamic-600 bg-islamic-50 dark:bg-islamic-900/20',
                gold: 'from-gold-500 to-gold-600 text-gold-600 bg-gold-50 dark:bg-gold-900/20'
              };

              return (
                <Link
                  key={index}
                  to={feature.href}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${colorClasses[feature.color].split(' ').slice(-2).join(' ')}`}>
                      <Icon className={`${colorClasses[feature.color].split(' ')[2]}`} size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-arabic">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-arabic">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">
                      <span className="font-arabic">اكتشف المزيد</span>
                      <ArrowLeft className="mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Topics Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">
                مواضيع دينية مهمة
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-arabic">
                اقرأ أحدث المواضيع الدينية المفيدة والمهمة
              </p>
            </div>
            <Link
              to="/topics"
              className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
            >
              <span>عرض المزيد</span>
              <ArrowLeft className="rtl:rotate-180" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentTopics.map((topic, index) => (
              <article key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-arabic">
                    {topic.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    {/* تم حذف أيقونة الساعة ونص الدقائق */}
                    <span className="font-arabic">{topic.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-arabic">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font-arabic">
                  {topic.excerpt}
                </p>
                <Link
                  to={`/topics/${index + 1}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" size={14} />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/topics"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
            >
              <span>عرض جميع المواضيع</span>
              <ArrowLeft className="rtl:rotate-180" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-islamic-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arabic">
            انضم إلى مجتمعنا الإسلامي
          </h2>
          <p className="text-xl mb-8 text-gray-200 font-arabic">
            احصل على تحديثات يومية وتذكيرات للصلاة والأذكار
          </p>
          <Link
            to="/register"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-arabic inline-flex items-center space-x-2 rtl:space-x-reverse"
          >
            <CheckCircle size={20} />
            <span>ابدأ رحلتك الآن</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;