import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  User, 
  LogOut, 
  Heart,
  BookOpen,
  Calendar,
  Users,
  HelpCircle,
  Settings,
  Home,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'الرئيسية', href: '/', icon: Home },
    { name: 'القرآن الكريم', href: '/quran', icon: BookOpen },
    { name: 'العبادة والأذكار', href: '/worship', icon: Heart },
    { name: 'الأحداث الإسلامية', href: '/events', icon: Calendar },
    { name: 'التقويم الهجري', href: '/events/hijri-calendar', icon: Calendar },
    { name: 'المحتوى العلمي', href: '/knowledge', icon: BookOpen },
    { name: 'الأسرة والأطفال', href: '/family', icon: Users },
    { name: 'أسئلة وإجابات', href: '/faq', icon: HelpCircle },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setUserMenuOpen(false);
    } catch (error) {
      console.error('خطأ في تسجيل الخروج:', error);
    }
  };

  // زر الرجوع للخلف (يظهر إلا في الصفحة الرئيسية)
  const showBack = location.pathname !== '/';

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="شعار الإسلام حياة" className="w-32 h-20 object-contain" />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-arabic">{item.name}</span>
                </Link>
              );
            })}
          </div>
          {/* Right Section */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="تبديل المظهر"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* User Menu */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {currentUser.displayName?.charAt(0) || currentUser.email?.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-arabic hidden sm:block">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </button>

                {userMenuOpen && (
                  <div className="absolute left-0 rtl:right-0 rtl:left-auto mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User size={16} />
                      <span className="font-arabic">الملف الشخصي</span>
                    </Link>
                    <Link
                      to="/favorites"
                      className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Heart size={16} />
                      <span className="font-arabic">المفضلة</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings size={16} />
                      <span className="font-arabic">الإعدادات</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-right rtl:text-right"
                    >
                      <LogOut size={16} />
                      <span className="font-arabic">تسجيل الخروج</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors duration-200 font-arabic"
                >
                  إنشاء حساب
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span className="font-arabic">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;