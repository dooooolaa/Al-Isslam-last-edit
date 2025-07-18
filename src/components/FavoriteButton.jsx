import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { favorites } from '../lib/supabase';

const FavoriteButton = ({ contentType, contentId, className = '' }) => {
  const { currentUser } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser && contentId) {
      checkFavoriteStatus();
    }
  }, [currentUser, contentId]);

  const checkFavoriteStatus = async () => {
    try {
      const { exists } = await favorites.isFavorite(currentUser.id, contentType, contentId);
      setIsFavorite(exists);
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  const toggleFavorite = async () => {
    if (!currentUser) {
      alert('يجب تسجيل الدخول أولاً');
      return;
    }

    setLoading(true);
    try {
      if (isFavorite) {
        await favorites.remove(currentUser.id, contentType, contentId);
        setIsFavorite(false);
      } else {
        await favorites.add(currentUser.id, contentType, contentId);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      alert('حدث خطأ أثناء إضافة/إزالة المفضلة');
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <button
      onClick={toggleFavorite}
      disabled={loading}
      className={`inline-flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 rounded-full transition-colors duration-200 ${
        isFavorite
          ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20'
      } ${className}`}
    >
      <Heart 
        size={16} 
        className={isFavorite ? 'fill-current' : ''} 
      />
      <span className="text-sm font-arabic">
        {loading ? 'جاري...' : isFavorite ? 'مفضل' : 'إضافة للمفضلة'}
      </span>
    </button>
  );
};

export default FavoriteButton;