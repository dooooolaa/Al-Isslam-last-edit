import React, { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import BadgeList from './components/BadgeList';
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

const ChallengeHistory = () => {
  console.log("ChallengeHistory Rendered");
  const { history, badges, repeatChallenge, shareAchievement, successMsg } = useContext(ChallengeContext);

  return (
    <div className="bg-white dark:bg-gray-900 bg-gold-50 dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <div className="flex gap-2 mb-6 justify-center">
        <Link to="/challenges" className="btn btn-secondary">لوحة التحكم</Link>
        <Link to="/challenges/weekly" className="btn btn-secondary">الأسبوعية</Link>
        <Link to="/challenges/memorization" className="btn btn-secondary">الحفظ</Link>
        <Link to="/challenges/tafsir" className="btn btn-secondary">التفسير</Link>
        <Link to="/challenges/history" className="btn btn-secondary">السجل</Link>
      </div>
      <h2 className="text-xl font-bold text-gold-700 dark:text-gold-400 mb-4">سجل التحديات</h2>
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center font-bold animate-fade-in border-2 border-gold-400">
          {successMsg}
        </div>
      )}
      <BadgeList badges={badges} />
      <ul>
        {history.map((item, idx) => (
          <li key={idx} className="mb-4 p-4 rounded-2xl shadow-lg border-2 border-gold-400 bg-white dark:bg-[#23272f] text-primary-500 dark:text-primary-500">
            <div className="font-bold text-primary-500">التحدي: {item.title}</div>
            <div className="text-primary-500">النقاط: {item.points}</div>
            <div className="text-primary-500">الالتزام: {item.streak} يوم</div>
            <button className="btn btn-secondary mt-2" onClick={() => repeatChallenge(item.id)}>إعادة التحدي</button>
            <button className="btn btn-primary mt-2 ml-2" onClick={() => shareAchievement(item)}>مشاركة الإنجاز</button>
          </li>
        ))}
      </ul>
      {/* نص تشخيصي */}
      <div style={{fontWeight: 'bold', color: 'blue', fontSize: 26, margin: '20px 0', textAlign: 'center'}}>صفحة سجل التحديات (ChallengeHistory) تعمل ✅</div>
      <div className="flex justify-center my-8">
        <button className="btn btn-secondary text-2xl px-10 py-4 opacity-60 cursor-not-allowed" disabled>قريبًا</button>
      </div>
      {/* نهاية التعديلات */}
    </div>
  );
};

export default ChallengeHistory; 