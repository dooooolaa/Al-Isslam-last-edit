import React from 'react';

const NotificationBanner = ({ message }) => (
  <div className="mb-4 p-2 bg-gold-100 dark:bg-gold-800 text-gold-900 dark:text-gold-100 rounded text-center animate-bounceGentle">
    {message}
  </div>
);

export default NotificationBanner; 