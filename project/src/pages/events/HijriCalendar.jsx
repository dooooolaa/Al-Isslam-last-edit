import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const hijriMonths = [
  'محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة',
  'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
];

const specialDays = [
  { day: '1', month: 1, label: 'رأس السنة الهجرية' },
  { day: '10', month: 1, label: 'عاشوراء' },
  { day: '27', month: 7, label: 'الإسراء والمعراج' },
  { day: '15', month: 8, label: 'ليلة النصف من شعبان' },
  { day: '1', month: 9, label: 'بداية رمضان' },
  { day: '1', month: 10, label: 'عيد الفطر' },
  { day: '9', month: 12, label: 'يوم عرفة' },
  { day: '10', month: 12, label: 'عيد الأضحى' },
  { day: '13', month: 12, label: 'آخر أيام التشريق' },
];

function getTodayHijri() {
  // محاولة استخدام Intl API (قد لا تدعم كل المتصفحات)
  try {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {
      day: 'numeric', month: 'numeric', year: 'numeric'
    });
    const parts = formatter.formatToParts(date);
    const day = +parts.find(p => p.type === 'day').value;
    const month = +parts.find(p => p.type === 'month').value;
    const year = +parts.find(p => p.type === 'year').value;
    return { day, month, year };
  } catch {
    return { day: 1, month: 1, year: 1445 };
  }
}

// تحويل هجري -> ميلادي (تقريبي)
function hijriToGregorian(hDay, hMonth, hYear) {
  try {
    // Intl لا تدعم التحويل العكسي مباشرة، نستخدم طريقة تقريبية:
    // نحدد أول يوم في الشهر الهجري ثم نضيف الأيام
    const formatter = new Intl.DateTimeFormat('en-u-ca-islamic', {
      day: 'numeric', month: 'numeric', year: 'numeric'
    });
    // ابحث عن تاريخ ميلادي يوافق أول يوم في الشهر الهجري المطلوب
    let baseDate = new Date();
    for (let y = hYear - 2; y <= hYear + 2; y++) {
      for (let m = 0; m < 12; m++) {
        for (let d = 1; d <= 2; d++) {
          const testDate = new Date(Date.UTC(y + 579, m, d));
          const parts = formatter.formatToParts(testDate);
          const day = +parts.find(p => p.type === 'day').value;
          const month = +parts.find(p => p.type === 'month').value;
          const year = +parts.find(p => p.type === 'year').value;
          if (day === 1 && month === hMonth && year === hYear) {
            baseDate = testDate;
            break;
          }
        }
      }
    }
    // أضف الأيام
    const gDate = new Date(baseDate);
    gDate.setUTCDate(gDate.getUTCDate() + (hDay - 1));
    return gDate;
  } catch {
    return null;
  }
}

const HijriCalendar = () => {
  const [today, setToday] = useState(getTodayHijri());
  const [viewMonth, setViewMonth] = useState(today.month);
  const [viewYear, setViewYear] = useState(today.year);
  const [showGregorian, setShowGregorian] = useState(false);
  const [gregorianDays, setGregorianDays] = useState([]);
  const [loading, setLoading] = useState(false);

  // تحديث اليوم تلقائياً كل يوم
  useEffect(() => {
    const interval = setInterval(() => {
      setToday(getTodayHijri());
    }, 1000 * 60 * 60); // كل ساعة (أو استخدم 1000*60*60*24)
    return () => clearInterval(interval);
  }, []);

  // جلب التواريخ الميلادية عند تفعيل الزر أو تغيير الشهر/السنة
  useEffect(() => {
    if (!showGregorian) return;
    setLoading(true);
    const daysInMonth = 30;
    const fetchAll = async () => {
      const results = [];
      for (let d = 1; d <= daysInMonth; d++) {
        try {
          const res = await fetch(`https://api.aladhan.com/v1/hToG?date=${d}-${viewMonth}-${viewYear}`);
          const data = await res.json();
          if (data.code === 200 && data.data && data.data.gregorian) {
            results.push(data.data.gregorian.date);
          } else {
            results.push('--');
          }
        } catch {
          results.push('--');
        }
      }
      setGregorianDays(results);
      setLoading(false);
    };
    fetchAll();
  }, [showGregorian, viewMonth, viewYear]);

  // تمييز الأيام الخاصة
  const getSpecialLabel = (d, m) => {
    const found = specialDays.find(e => +e.day === d && +e.month === m);
    return found ? found.label : null;
  };

  // توليد أيام الشهر (بسيط، يمكن تطويره لاحقاً)
  const daysInMonth = 30; // تبسيط: كل شهر 30 يوم (يمكن ربطه بAPI لاحقاً)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center font-arabic">التقويم الهجري</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <button onClick={() => setViewMonth(m => m === 1 ? 12 : m - 1)} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700">السابق</button>
            <span className="text-xl font-bold">{hijriMonths[viewMonth - 1]} {viewYear} هـ</span>
            <button onClick={() => setViewMonth(m => m === 12 ? 1 : m + 1)} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded hover:bg-gray-300 dark:hover:bg-gray-700">التالي</button>
          </div>
          <button onClick={() => setShowGregorian(g => !g)} className="px-4 py-2 bg-primary-600 rounded hover:bg-primary-700 font-arabic">
            {showGregorian ? 'عرض الهجري فقط' : 'عرض الميلادي مع الهجري'}
          </button>
        </div>
        {showGregorian && loading && (
          <div className="text-center text-primary-600 font-arabic mb-4">جاري تحميل التواريخ الميلادية...</div>
        )}
        <div className="grid grid-cols-7 gap-2 bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
          {['أحد','إثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'].map(day => (
            <div key={day} className="text-center text-primary-400 font-bold">{day}</div>
          ))}
          {days.map((d, idx) => {
            const isToday = d === today.day && viewMonth === today.month && viewYear === today.year;
            const special = getSpecialLabel(d, viewMonth);
            return (
              <div key={d} className={`h-16 flex flex-col items-center justify-center rounded-lg border ${isToday ? 'border-yellow-400 bg-yellow-100 dark:bg-yellow-900/30' : 'border-gray-200 dark:border-gray-700'} relative group`}> 
                <span className="text-lg font-bold">{d}</span>
                {special && <span className="text-xs text-green-600 dark:text-green-400 mt-1">{special}</span>}
                {isToday && <span className="absolute top-1 right-1 text-xs text-yellow-600 dark:text-yellow-400">اليوم</span>}
                {showGregorian && <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{gregorianDays[idx] || '--'}</span>}
              </div>
            );
          })}
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-8">
          <h2 className="text-xl font-bold mb-4 font-arabic">الأيام الإسلامية المميزة في هذا الشهر</h2>
          <ul className="list-disc pr-6">
            {specialDays.filter(e => e.month === viewMonth).map(e => (
              <li key={e.day} className="mb-2 text-green-700 dark:text-green-300 font-arabic">اليوم {e.day}: {e.label}</li>
            ))}
            {specialDays.filter(e => e.month === viewMonth).length === 0 && (
              <li className="text-gray-400 font-arabic">لا يوجد أحداث مميزة في هذا الشهر.</li>
            )}
          </ul>
        </div>
        
        {/* أسئلة وأجوبة التقويم الهجري */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-800 rounded-xl p-6 text-center mt-8">
          <h2 className="text-2xl font-bold mb-4 font-arabic text-blue-800 dark:text-blue-200">
            أسئلة وأجوبة التقويم الهجري
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic">
            إجابات على الأسئلة الشائعة حول التقويم الهجري والأشهر الإسلامية
          </p>
          <Link
            to="/events/hijri-calendar-questions"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-arabic hover:bg-blue-700 transition-colors text-lg"
          >
            عرض الأسئلة والأجوبة
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HijriCalendar; 