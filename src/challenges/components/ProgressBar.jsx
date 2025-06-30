import React from 'react';

const ProgressBar = ({ value }) => {
  return (
    <div className="w-full bg-gray-200 dark:bg-islamic-800 rounded-full h-4 mb-4">
      <div
        className="bg-primary-500 h-4 rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
      <span className="block text-center text-xs mt-1 text-primary-700 dark:text-primary-200">{value}%</span>
    </div>
  );
};

export default ProgressBar; 