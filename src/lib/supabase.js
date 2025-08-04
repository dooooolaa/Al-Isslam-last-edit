import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// التحقق من وجود متغيرات البيئة
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables are missing. Please set up Supabase connection.');
  console.warn('Click "Connect to Supabase" button in the top right to configure your project.');
}

// إنشاء عميل Supabase مع معالجة الأخطاء
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// دوال مساعدة للمصادقة
export const auth = {
  // تسجيل حساب جديد
  signUp: async (email, password, userData = {}) => {
    if (!supabase) {
      throw new Error('يجب إعداد Supabase أولاً. اضغط على زر "Connect to Supabase" في أعلى الصفحة.');
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    return { data, error };
  },

  // تسجيل الدخول
  signIn: async (email, password) => {
    if (!supabase) {
      throw new Error('يجب إعداد Supabase أولاً. اضغط على زر "Connect to Supabase" في أعلى الصفحة.');
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  // تسجيل الدخول بجوجل
  signInWithGoogle: async () => {
    if (!supabase) {
      throw new Error('يجب إعداد Supabase أولاً. اضغط على زر "Connect to Supabase" في أعلى الصفحة.');
    }
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
    return { data, error };
  },

  // تسجيل الخروج
  signOut: async () => {
    if (!supabase) {
      throw new Error('يجب إعداد Supabase أولاً. اضغط على زر "Connect to Supabase" في أعلى الصفحة.');
    }
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // الحصول على المستخدم الحالي
  getCurrentUser: () => {
    if (!supabase) {
      return Promise.resolve({ data: { user: null }, error: null });
    }
    return supabase.auth.getUser();
  },

  // الاستماع لتغييرات المصادقة
  onAuthStateChange: (callback) => {
    if (!supabase) {
      return { data: { subscription: { unsubscribe: () => {} } } };
    }
    return supabase.auth.onAuthStateChange(callback);
  }
};

// دوال مساعدة للملفات الشخصية
export const profiles = {
  // إنشاء ملف شخصي
  create: async (profileData) => {
    if (!supabase) {
      throw new Error('يجب إعداد Supabase أولاً. اضغط على زر "Connect to Supabase" في أعلى الصفحة.');
    }
    const { data, error } = await supabase
      .from('profiles')
      .insert([profileData])
      .select()
      .single();
    return { data, error };
  },

  // الحصول على ملف شخصي
  get: async (userId) => {
    if (!supabase) {
      throw new Error('يجب إعداد Supabase أولاً. اضغط على زر "Connect to Supabase" في أعلى الصفحة.');
    }
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    return { data, error };
  },

  // تحديث ملف شخصي
  update: async (userId, updates) => {
    if (!supabase) {
      throw new Error('يجب إعداد Supabase أولاً. اضغط على زر "Connect to Supabase" في أعلى الصفحة.');
    }
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    return { data, error };
  }
};

// دوال مساعدة للأسئلة والأجوبة
export const questions = {
  // جلب جميع الأسئلة المعتمدة
  getAll: async (filters = {}) => {
    let query = supabase
      .from('questions')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (filters.category) {
      query = query.eq('category', filters.category);
    }

    if (filters.search) {
      query = query.textSearch('title,question_text,answer', filters.search);
    }

    const { data, error } = await query;
    return { data, error };
  },

  // إنشاء سؤال جديد
  create: async (questionData) => {
    const { data, error } = await supabase
      .from('questions')
      .insert([questionData])
      .select()
      .single();
    return { data, error };
  },

  // تحديث سؤال
  update: async (id, updates) => {
    const { data, error } = await supabase
      .from('questions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    return { data, error };
  },

  // حذف سؤال
  delete: async (id) => {
    const { error } = await supabase
      .from('questions')
      .delete()
      .eq('id', id);
    return { error };
  }
};

// دوال مساعدة للفتاوى
export const fatwas = {
  // جلب جميع الفتاوى
  getAll: async (filters = {}) => {
    let query = supabase
      .from('fatwas')
      .select('*')
      .order('created_at', { ascending: false });

    if (filters.category) {
      query = query.eq('category', filters.category);
    }

    if (filters.search) {
      query = query.textSearch('question,answer', filters.search);
    }

    const { data, error } = await query;
    return { data, error };
  },

  // الحصول على فتوى واحدة
  getById: async (id) => {
    const { data, error } = await supabase
      .from('fatwas')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  },

  // إنشاء فتوى جديدة
  create: async (fatwaData) => {
    const { data, error } = await supabase
      .from('fatwas')
      .insert([fatwaData])
      .select()
      .single();
    return { data, error };
  }
};

// دوال مساعدة لتتبع الحفظ
export const memorization = {
  // جلب تقدم الحفظ للمستخدم
  getUserProgress: async (userId) => {
    const { data, error } = await supabase
      .from('memorization_progress')
      .select('*')
      .eq('user_id', userId)
      .order('surah_number', { ascending: true })
      .order('ayah_number', { ascending: true });
    return { data, error };
  },

  // تحديث حالة آية
  updateAyahStatus: async (userId, surahNumber, ayahNumber, status) => {
    const { data, error } = await supabase
      .from('memorization_progress')
      .upsert({
        user_id: userId,
        surah_number: surahNumber,
        ayah_number: ayahNumber,
        status: status,
        last_reviewed: status === 'reviewing' ? new Date().toISOString().split('T')[0] : null,
        memorized_date: status === 'memorized' ? new Date().toISOString().split('T')[0] : null
      })
      .select()
      .single();
    return { data, error };
  }
};

// دوال مساعدة لنتائج الاختبارات
export const quizzes = {
  // حفظ نتيجة اختبار
  saveResult: async (resultData) => {
    const { data, error } = await supabase
      .from('quiz_results')
      .insert([resultData])
      .select()
      .single();
    return { data, error };
  },

  // جلب نتائج المستخدم
  getUserResults: async (userId) => {
    const { data, error } = await supabase
      .from('quiz_results')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false });
    return { data, error };
  },

  // جلب لوحة المتصدرين
  getLeaderboard: async (quizType = null) => {
    let query = supabase
      .from('quiz_results')
      .select(`
        user_id,
        profiles!inner(username, full_name),
        score_percentage,
        completed_at
      `)
      .order('score_percentage', { ascending: false })
      .limit(10);

    if (quizType) {
      query = query.eq('quiz_type', quizType);
    }

    const { data, error } = await query;
    return { data, error };
  }
};

// دوال مساعدة للمفضلة
export const favorites = {
  // إضافة إلى المفضلة
  add: async (userId, contentType, contentId, notes = null) => {
    const { data, error } = await supabase
      .from('user_favorites')
      .insert([{
        user_id: userId,
        content_type: contentType,
        content_id: contentId,
        notes: notes
      }])
      .select()
      .single();
    return { data, error };
  },

  // إزالة من المفضلة
  remove: async (userId, contentType, contentId) => {
    const { error } = await supabase
      .from('user_favorites')
      .delete()
      .eq('user_id', userId)
      .eq('content_type', contentType)
      .eq('content_id', contentId);
    return { error };
  },

  // جلب مفضلة المستخدم
  getUserFavorites: async (userId, contentType = null) => {
    let query = supabase
      .from('user_favorites')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (contentType) {
      query = query.eq('content_type', contentType);
    }

    const { data, error } = await query;
    return { data, error };
  },

  // التحقق من وجود عنصر في المفضلة
  isFavorite: async (userId, contentType, contentId) => {
    const { data, error } = await supabase
      .from('user_favorites')
      .select('id')
      .eq('user_id', userId)
      .eq('content_type', contentType)
      .eq('content_id', contentId)
      .single();
    return { exists: !!data, error };
  }
};

// دوال مساعدة للمحتوى العلمي
export const knowledgeContent = {
  // جلب المحتوى العلمي
  getAll: async (filters = {}) => {
    let query = supabase
      .from('knowledge_content')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (filters.category) {
      query = query.eq('category', filters.category);
    }

    if (filters.contentType) {
      query = query.eq('content_type', filters.contentType);
    }

    const { data, error } = await query;
    return { data, error };
  },

  // الحصول على محتوى واحد
  getById: async (id) => {
    const { data, error } = await supabase
      .from('knowledge_content')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }
};

export default supabase;