import { Link } from 'react-router-dom';
import { FaCalendarWeek, FaBookOpen, FaBook, FaHistory } from 'react-icons/fa';

const sections = [
  {
    key: 'weekly',
    title: 'التحديات الأسبوعية',
    desc: 'اختبر نفسك أسبوعياً في الحفظ والمراجعة.',
    icon: <FaCalendarWeek size={32} color="#f59e0b" />,
    to: '/challenges/weekly',
    color: '#fff7e6'
  },
  {
    key: 'memorization',
    title: 'الحفظ',
    desc: 'تابع تقدمك في حفظ القرآن.',
    icon: <FaBookOpen size={32} color="#1976d2" />,
    to: '/challenges/memorization',
    color: '#e3f2fd'
  },
  {
    key: 'tafsir',
    title: 'التفسير',
    desc: 'أسئلة لفهم وتدبر معاني القرآن.',
    icon: <FaBook size={32} color="#43a047" />,
    to: '/challenges/tafsir',
    color: '#e8f5e9'
  },
  {
    key: 'history',
    title: 'السجل',
    desc: 'شاهد إنجازاتك وسجل التحديات.',
    icon: <FaHistory size={32} color="#8d6e63" />,
    to: '/challenges/history',
    color: '#fbe9e7'
  },
];

export default function SectionsGrid() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gold-700 dark:text-gold-400">أقسام التحديات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {sections.map(sec => (
            <Link to={sec.to} key={sec.key}>
              <div className="rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition" style={{ background: sec.color }}>
                <div className="mb-3">{sec.icon}</div>
                <div className="font-bold text-lg mb-1">{sec.title}</div>
                <div className="text-gray-600 mb-2 text-center">{sec.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 