import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (!endTime) return;
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(endTime);
      const diff = end - now;
      if (diff <= 0) {
        setTimeLeft('انتهى الوقت');
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}س ${minutes}د ${seconds}ث`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="text-center text-sm text-gold-700 dark:text-gold-300 my-2">
      {timeLeft}
    </div>
  );
};

export default CountdownTimer; 