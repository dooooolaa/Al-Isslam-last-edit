import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Instagram, 
  Heart,
  BookOpen,
  Users
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'القرآن الكريم', href: '/quran' },
    { name: 'العبادة والأذكار', href: '/worship' },
    { name: 'الأحداث الإسلامية', href: '/events' },
  ];

  const resources = [
    { name: 'المحتوى العلمي', href: '/knowledge' },
    { name: 'الأسرة والأطفال', href: '/family' },
    { name: 'أسئلة وإجابات', href: '/faq' },
  ];

  const support = [
    { name: 'عن الموقع', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
    { name: 'سياسة الخصوصية', href: '/privacy' },
    { name: 'شروط الاستخدام', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-islamic-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg"></span>
              </div>
              <span className="text-lg sm:text-xl font-bold font-arabic">الإسلام حياة</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-arabic">
              موقع إسلامي شامل يهدف إلى تقديم المحتوى الديني الأصيل والمفيد للمسلمين في جميع أنحاء العالم
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.instagram.com/quran_is_live0/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-arabic">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-arabic text-sm sm:text-base min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-arabic">الموارد</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-arabic text-sm sm:text-base min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-arabic">الدعم والتواصل</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-arabic text-sm sm:text-base min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:mohamedadelabdullah7@gmail.com"
                className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 hover:text-primary-400 transition-colors duration-200 text-xs sm:text-sm font-arabic min-h-[44px]"
                style={{ direction: 'ltr' }}
              >
                <span role="img" aria-label="email">✉️</span>
                <span className="ml-1">E-Mail</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=201144509350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 hover:text-primary-400 transition-colors duration-200 text-xs sm:text-sm font-arabic min-h-[44px]"
                style={{ direction: 'ltr' }}
              >
                <FaWhatsapp className="text-green-500 sm:w-4 sm:h-4" size={16} />
                <span className="ml-1">Whatsapp</span>
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-400 text-xs sm:text-sm font-arabic text-center">
              © {currentYear} Mohamed Adel. جميع الحقوق محفوظة.
            </p>
            <a
              href="https://mohamed-adel-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:underline text-xs sm:text-sm font-arabic min-h-[44px] flex items-center"
            >
              Mohamed Adel
            </a>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm font-arabic text-center">
            صُنع بـ <Heart className="inline-block text-red-400 mx-1 sm:w-4 sm:h-4" size={14} /> للأمة الإسلامية
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;