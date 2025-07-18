import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, profiles } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  const signup = async (email, password, displayName) => {
    // تسجيل المستخدم في Supabase Auth
    const { data, error } = await auth.signUp(email, password, {
      full_name: displayName
    });

    if (error) throw error;

    // إنشاء ملف شخصي في قاعدة البيانات
    if (data.user) {
      const { error: profileError } = await profiles.create({
        id: data.user.id,
        username: email.split('@')[0], // استخدام الجزء الأول من الإيميل كاسم مستخدم
        full_name: displayName,
        preferences: {
          theme: 'light',
          language: 'ar',
          notifications: true
        }
      });
      
      if (profileError) {
        console.error('Error creating profile:', profileError);
      }
    }

    return data;
  };

  const login = (email, password) => {
    return auth.signIn(email, password);
  };

  const loginWithGoogle = async () => {
    const { data, error } = await auth.signInWithGoogle();

    if (error) throw error;

    // التحقق من وجود ملف شخصي وإنشاؤه إذا لم يكن موجوداً
    if (data.user) {
      const { data: existingProfile } = await profiles.get(data.user.id);
      
      if (!existingProfile) {
        await profiles.create({
          id: data.user.id,
          username: data.user.email?.split('@')[0] || 'user',
          full_name: data.user.user_metadata?.full_name || data.user.user_metadata?.name,
          avatar_url: data.user.user_metadata?.avatar_url,
          preferences: {
            theme: 'light',
            language: 'ar',
            notifications: true
          }
        });
      }
    }

    return data;
  };

  const logout = () => {
    return auth.signOut();
  };

  const fetchUserProfile = async (uid) => {
    const { data, error } = await profiles.get(uid);
    if (data && !error) {
      setUserProfile(data);
    }
  };

  useEffect(() => {
    const { data: { subscription } } = auth.onAuthStateChange(async (event, session) => {
      setCurrentUser(session?.user || null);
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    loginWithGoogle,
    logout,
    fetchUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};