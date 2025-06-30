import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false
  });
  
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return;
    }

    // تحقق قوي من كلمة المرور
    const password = formData.password;
    const checks = {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    };
    setPasswordChecks(checks);
    const allValid = Object.values(checks).every(Boolean);
    if (!allValid) {
      setError('كلمة المرور لا تحقق جميع الشروط');
      return;
    }

    setLoading(true);

    try {
      await signup(formData.email, formData.password, formData.name);
      navigate('/');
    } catch (error) {
      // ترجم بعض أشهر رسائل الأخطاء
      let msg = 'حدث خطأ غير متوقع. حاول مرة أخرى.';
      if (error.code === 'auth/email-already-in-use') {
        msg = 'البريد الإلكتروني مستخدم بالفعل.';
      } else if (error.code === 'auth/invalid-email') {
        msg = 'البريد الإلكتروني غير صالح.';
      } else if (error.code === 'auth/weak-password') {
        msg = 'كلمة المرور ضعيفة جداً.';
      }
      setError(msg);
    }
    
    setLoading(false);
  };

  const handleGoogleRegister = async () => {
    setError('');
    setLoading(true);

    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setError('خطأ في التسجيل بجوجل');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-500 to-islamic-600 rounded-xl flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">إح</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-arabic">
            إنشاء حساب جديد
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 font-arabic">
            أو <Link to="/login" className="text-primary-600 hover:text-primary-500">تسجيل الدخول لحسابك</Link>
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {(error && error !== 'كلمة المرور لا تحقق جميع الشروط') && (
            <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3 rtl:space-x-reverse">
              <AlertCircle className="text-red-500" size={20} />
              <span className="text-red-700 dark:text-red-300 font-arabic">{error}</span>
            </div>
          )}

          {/* شروط كلمة المرور */}
          {error === 'كلمة المرور لا تحقق جميع الشروط' && (
            <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="mb-2 text-red-700 dark:text-red-300 font-bold font-arabic flex items-center gap-2">
                <AlertCircle className="text-red-500" size={20} />
                يجب أن تحقق كلمة المرور جميع الشروط التالية:
              </div>
              <ul className="list-disc pr-6 space-y-1 text-sm font-arabic">
                <li className={passwordChecks.length ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                  {passwordChecks.length ? '✔' : '✖'} 8 أحرف أو أكثر
                </li>
                <li className={passwordChecks.upper ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                  {passwordChecks.upper ? '✔' : '✖'} حرف كبير (A-Z) واحد على الأقل
                </li>
                <li className={passwordChecks.lower ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                  {passwordChecks.lower ? '✔' : '✖'} حرف صغير (a-z) واحد على الأقل
                </li>
                <li className={passwordChecks.number ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                  {passwordChecks.number ? '✔' : '✖'} رقم واحد على الأقل
                </li>
                <li className={passwordChecks.special ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                  {passwordChecks.special ? '✔' : '✖'} رمز خاص واحد على الأقل (مثل !@#$%)
                </li>
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-arabic">
                الاسم الكامل
              </label>
              <div className="relative">
                <User className="absolute right-3 rtl:left-3 rtl:right-auto top-3 text-gray-400" size={20} />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-arabic">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 rtl:left-3 rtl:right-auto top-3 text-gray-400" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-arabic">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 rtl:left-3 rtl:right-auto top-3 text-gray-400" size={20} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 rtl:pr-10 pr-10 rtl:pl-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 rtl:right-3 rtl:left-auto top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-arabic">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 rtl:left-3 rtl:right-auto top-3 text-gray-400" size={20} />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 rtl:pr-10 pr-10 rtl:pl-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="أعد إدخال كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 rtl:right-3 rtl:left-auto top-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="agree-terms" className="mr-2 rtl:ml-2 rtl:mr-0 block text-sm text-gray-700 dark:text-gray-300 font-arabic">
                أوافق على <Link to="/terms" className="text-primary-600 hover:text-primary-500">شروط الاستخدام</Link> و <Link to="/privacy" className="text-primary-600 hover:text-primary-500">سياسة الخصوصية</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-arabic"
            >
              {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-arabic">أو</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleRegister}
              disabled={loading}
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-arabic flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>التسجيل بجوجل</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;