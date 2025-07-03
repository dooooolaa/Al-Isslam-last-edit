import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '../../context/FavoritesContext';

const FavoriteButton = ({ type, id, item, size = 22 }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const fav = isFavorite(type, id);
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        fav ? removeFavorite(type, id) : addFavorite({ ...item, type, id });
      }}
      aria-label={fav ? 'إزالة من المفضلة' : 'أضف إلى المفضلة'}
      style={{ background: 'none', border: 'none', cursor: 'pointer', color: fav ? '#e53935' : '#888', padding: 0 }}
    >
      {fav ? <FaHeart size={size} /> : <FaRegHeart size={size} />}
    </button>
  );
};

export default FavoriteButton; 