import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { profiles, favorites } from '../lib/supabase';
import { User, Mail, Calendar, Heart, BookOpen, Award, Settings } from 'lucide-react';
import FavoriteButton from '../components/FavoriteButton';

const Profile = () => {
  const { currentUser, userProfile } = useAuth();
  const [profile, setProfile] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    bio: '',
    preferences: {}
  });

  useEffect(() => {
    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // جلب الملف الشخصي
      const { data: profileData } = await profiles.get(currentUser.id);
      setProfile(profileData);
      
      if (profileData) {
        setFormData({
          full_name: profileData.full_name || '',
          bio: profileData.bio || '',
          preferences: profileData.preferences || {}
        });
      }

      // جلب المفضلة
      const { data: favoritesData } = await favorites.getUserFavorites(currentUser.id);
      setUserFavorites(favoritesData || []);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const { data, error } = await profiles.update(currentUser.id, formData);
      
      if (error) throw error;
      
      setProfile(data);
      setEditing(false);
      alert('تم حفظ التغييرات بنجاح');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('حدث خطأ في حفظ التغييرات');
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-arabic mb-4">
            يجب تسجيل الدخول أولاً
          </h1>
          <a href="/login" className="text-primary-600 hover:underline font-arabic">
            تسجيل الدخول
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                <User className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-arabic">
                  {profile?.full_name || currentUser.email}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 font-arabic">
                  @{profile?.username}
                </p>
              </div>
            </div>
            <button
              onClick={() => setEditing(!editing)}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-arabic"
            >
              <Settings size={16} />
              <span>{editing ? 'إلغاء' : 'تعديل'}</span>
            </button>
          </div>

          {editing && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-arabic">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-arabic">
                  نبذة شخصية
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-arabic"
                >
                  حفظ
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-arabic"
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <BookOpen className="mx-auto text-primary-500 mb-2" size={32} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-arabic">
              المفضلة
            </h3>
            <p className="text-2xl font-bold text-primary-600">
              {userFavorites.length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <Award className="mx-auto text-gold-500 mb-2" size={32} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-arabic">
              النقاط
            </h3>
            <p className="text-2xl font-bold text-gold-600">
              0
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <Calendar className="mx-auto text-islamic-500 mb-2" size={32} />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-arabic">
              عضو منذ
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-arabic">
              {new Date(profile?.created_at).toLocaleDateString('ar-EG')}
            </p>
          </div>
        </div>

        {/* Favorites */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">
            المفضلة
          </h2>
          {userFavorites.length > 0 ? (
            <div className="space-y-4">
              {userFavorites.map((favorite) => (
                <div key={favorite.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
                        {favorite.content_type}
                      </span>
                      <p className="text-gray-900 dark:text-white font-arabic">
                        {favorite.notes || 'عنصر مفضل'}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(favorite.created_at).toLocaleDateString('ar-EG')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8 font-arabic">
              لا توجد عناصر مفضلة بعد
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;