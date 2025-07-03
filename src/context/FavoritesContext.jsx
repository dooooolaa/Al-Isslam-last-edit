import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

const FAVORITES_KEY = 'favorites';

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_KEY);
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // إضافة عنصر للمفضلة
  const addFavorite = (item) => {
    setFavorites((prev) => {
      if (prev.find(f => f.type === item.type && f.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  // إزالة عنصر من المفضلة
  const removeFavorite = (type, id) => {
    setFavorites((prev) => prev.filter(f => !(f.type === type && f.id === id)));
  };

  // التحقق هل العنصر في المفضلة
  const isFavorite = (type, id) => {
    return favorites.some(f => f.type === type && f.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}; 