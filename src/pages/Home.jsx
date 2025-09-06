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
      <section className="relative bg-gradient-to-br from-primary-600 via-islamic-600 to-primary-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-arabic leading-tight">
              مرحباً بك في
              <span className="block text-gold-300">الإسلام حياة</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto font-arabic leading-relaxed px-2">
              موقعك الإسلامي الشامل للقرآن الكريم والأذكار والمحتوى الديني الأصيل
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse px-2">
              <Link
                to="/quran"
                className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-arabic inline-flex items-center justify-center space-x-2 rtl:space-x-reverse min-h-[48px] w-full sm:w-auto"
              >
                <BookOpen size={18} className="sm:w-5 sm:h-5" />
                <span>ابدأ القراءة</span>
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105 font-arabic min-h-[48px] w-full sm:w-auto flex items-center justify-center"
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
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="text-primary-600 dark:text-primary-400 sm:w-7 sm:h-7" size={20} />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-arabic">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-arabic">
              اكتشف مميزات الموقع
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-arabic px-2">
              نقدم لك مجموعة شاملة من الأدوات والمحتويات الإسلامية لتعزيز رحلتك الروحية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:-translate-y-2 min-h-[200px] sm:min-h-[220px]"
                >
                  <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-4 sm:mb-6 ${colorClasses[feature.color].split(' ').slice(-2).join(' ')}`}>
                      <Icon className={`${colorClasses[feature.color].split(' ')[2]} sm:w-7 sm:h-7`} size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 font-arabic">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-arabic flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-4 sm:mt-6 flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">
                      <span className="font-arabic text-sm sm:text-base">اكتشف المزيد</span>
                      <ArrowLeft className="mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180 sm:w-4 sm:h-4" size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Topics Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-arabic">
                مواضيع دينية مهمة
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-arabic">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {recentTopics.map((topic, index) => (
              <article key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs sm:text-sm font-arabic w-fit">
                    {topic.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    <span className="font-arabic">{topic.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 font-arabic">
                  {topic.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font-arabic">
                  {topic.excerpt}
                </p>
                <Link
                  to={`/topics/${index + 1}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic text-sm sm:text-base min-h-[44px]"
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-islamic-600 text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-arabic">
            انضم إلى مجتمعنا الإسلامي
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 font-arabic px-2">
            احصل على تحديثات يومية وتذكيرات للصلاة والأذكار
          </p>
          <Link
            to="/register"
            className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-arabic inline-flex items-center justify-center space-x-2 rtl:space-x-reverse min-h-[48px] w-full sm:w-auto"
          >
            <CheckCircle size={18} className="sm:w-5 sm:h-5" />
            <span>ابدأ رحلتك الآن</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;