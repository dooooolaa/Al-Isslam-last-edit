import { useState, useEffect } from 'react';
import { memorization } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export const useMemorization = () => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      fetchProgress();
    }
  }, [currentUser]);

  const fetchProgress = async () => {
    if (!currentUser) return;

    try {
      setLoading(true);
      const { data, error } = await memorization.getUserProgress(currentUser.id);
      
      if (error) throw error;
      
      setProgress(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateAyahStatus = async (surahNumber, ayahNumber, status) => {
    if (!currentUser) return;

    try {
      const { data, error } = await memorization.updateAyahStatus(
        currentUser.id,
        surahNumber,
        ayahNumber,
        status
      );
      
      if (error) throw error;
      
      // تحديث الحالة المحلية
      setProgress(prev => {
        const existing = prev.find(p => 
          p.surah_number === surahNumber && p.ayah_number === ayahNumber
        );
        
        if (existing) {
          return prev.map(p => 
            p.surah_number === surahNumber && p.ayah_number === ayahNumber
              ? { ...p, status, updated_at: new Date().toISOString() }
              : p
          );
        } else {
          return [...prev, data];
        }
      });
      
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err.message };
    }
  };

  const getAyahStatus = (surahNumber, ayahNumber) => {
    const ayah = progress.find(p => 
      p.surah_number === surahNumber && p.ayah_number === ayahNumber
    );
    return ayah?.status || 'not_started';
  };

  const getProgressStats = () => {
    const memorized = progress.filter(p => p.status === 'memorized').length;
    const reviewing = progress.filter(p => p.status === 'reviewing').length;
    const total = progress.length;
    
    return {
      memorized,
      reviewing,
      total,
      percentage: total > 0 ? Math.round((memorized / total) * 100) : 0
    };
  };

  return {
    progress,
    loading,
    error,
    updateAyahStatus,
    getAyahStatus,
    getProgressStats,
    refetch: fetchProgress
  };
};