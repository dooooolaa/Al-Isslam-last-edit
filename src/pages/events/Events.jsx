import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center font-arabic">الأحداث الإسلامية</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <Link to="/events/ramadan" className="block bg-white dark:bg-gray-800 rounded-lg p-6 text-center font-arabic font-bold text-xl shadow card-hover transition-colors">رمضان</Link>
          <Link to="/events/hajj-umrah" className="block bg-white dark:bg-gray-800 rounded-lg p-6 text-center font-arabic font-bold text-xl shadow card-hover transition-colors">الحج والعمرة</Link>
          <Link to="/events/hijri-calendar" className="block bg-white dark:bg-gray-800 rounded-lg p-6 text-center font-arabic font-bold text-xl shadow card-hover transition-colors">التقويم الهجري</Link>
          <Link to="/events/blessed-days" className="block bg-white dark:bg-gray-800 rounded-lg p-6 text-center font-arabic font-bold text-xl shadow card-hover transition-colors">الأيام المباركة</Link>
        </div>
      </div>
    </div>
  );
};

export default Events; 