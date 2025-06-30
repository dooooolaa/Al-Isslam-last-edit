import React from 'react';

const BadgeList = ({ badges }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {badges.map((badge, idx) => (
      <span key={idx} className="inline-block px-3 py-1 bg-gold-200 dark:bg-gold-700 text-gold-900 dark:text-gold-100 rounded-full shadow text-xs font-bold">
        {badge}
      </span>
    ))}
  </div>
);

export default BadgeList; 