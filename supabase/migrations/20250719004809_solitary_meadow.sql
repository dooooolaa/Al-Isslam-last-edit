/*
  # إنشاء قاعدة بيانات شاملة للموقع الإسلامي

  1. الجداول الجديدة
    - `profiles` - ملفات المستخدمين
    - `questions` - الأسئلة والأجوبة
    - `fatwas` - الفتاوى الشرعية
    - `seerah_events` - أحداث السيرة النبوية
    - `islamic_events` - الأحداث الإسلامية
    - `memorization_progress` - تتبع الحفظ
    - `quiz_results` - نتائج الاختبارات
    - `knowledge_content` - المحتوى العلمي
    - `family_content` - محتوى الأسرة والأطفال
    - `hijri_events` - أحداث التقويم الهجري
    - `user_favorites` - المفضلة

  2. الأمان
    - تفعيل RLS على جميع الجداول
    - إضافة سياسات الأمان المناسبة

  3. الفهارس
    - إضافة فهارس للبحث والأداء
*/

-- إنشاء جدول ملفات المستخدمين
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  full_name text,
  avatar_url text,
  bio text,
  is_admin boolean DEFAULT false,
  preferences jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول الأسئلة والأجوبة
CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  title text NOT NULL,
  question_text text NOT NULL,
  answer text,
  category text NOT NULL,
  subcategory text,
  tags text[],
  source text,
  scholar text,
  ruling text,
  is_approved boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  views_count integer DEFAULT 0,
  likes_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول الفتاوى
CREATE TABLE IF NOT EXISTS fatwas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  fatwa_number text UNIQUE,
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL,
  subcategory text,
  tags text[],
  source text NOT NULL,
  source_url text,
  scholar text NOT NULL,
  ruling text,
  date_issued date,
  is_featured boolean DEFAULT false,
  views_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول أحداث السيرة النبوية
CREATE TABLE IF NOT EXISTS seerah_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  details text,
  date_hijri text,
  date_gregorian text,
  location text,
  category text NOT NULL,
  importance_level integer DEFAULT 1,
  tags text[],
  sources text[],
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول الأحداث الإسلامية
CREATE TABLE IF NOT EXISTS islamic_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_type text NOT NULL,
  start_date_hijri text,
  end_date_hijri text,
  start_date_gregorian date,
  end_date_gregorian date,
  is_recurring boolean DEFAULT false,
  recurrence_pattern text,
  location text,
  significance text,
  recommended_actions text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول تتبع الحفظ
CREATE TABLE IF NOT EXISTS memorization_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  surah_number integer NOT NULL,
  ayah_number integer NOT NULL,
  status text NOT NULL CHECK (status IN ('memorized', 'reviewing', 'not_started')),
  memorized_date date,
  last_reviewed date,
  review_count integer DEFAULT 0,
  difficulty_level integer DEFAULT 1,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, surah_number, ayah_number)
);

-- إنشاء جدول نتائج الاختبارات
CREATE TABLE IF NOT EXISTS quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  quiz_type text NOT NULL,
  quiz_title text NOT NULL,
  total_questions integer NOT NULL,
  correct_answers integer NOT NULL,
  score_percentage numeric(5,2) NOT NULL,
  time_taken_seconds integer,
  answers jsonb,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- إنشاء جدول المحتوى العلمي
CREATE TABLE IF NOT EXISTS knowledge_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  category text NOT NULL,
  subcategory text,
  content_type text NOT NULL CHECK (content_type IN ('article', 'lesson', 'hadith', 'tafsir')),
  author text,
  source text,
  tags text[],
  difficulty_level integer DEFAULT 1,
  estimated_read_time integer,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  views_count integer DEFAULT 0,
  likes_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول محتوى الأسرة والأطفال
CREATE TABLE IF NOT EXISTS family_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  category text NOT NULL,
  target_age_group text,
  content_type text NOT NULL CHECK (content_type IN ('article', 'story', 'game', 'activity')),
  difficulty_level integer DEFAULT 1,
  tags text[],
  is_interactive boolean DEFAULT false,
  media_urls text[],
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  views_count integer DEFAULT 0,
  likes_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول أحداث التقويم الهجري
CREATE TABLE IF NOT EXISTS hijri_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  hijri_day integer NOT NULL,
  hijri_month integer NOT NULL,
  hijri_year integer,
  event_type text NOT NULL,
  significance text,
  recommended_actions text[],
  is_recurring boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- إنشاء جدول المفضلة
CREATE TABLE IF NOT EXISTS user_favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  content_type text NOT NULL,
  content_id uuid NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, content_type, content_id)
);

-- تفعيل RLS على جميع الجداول
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE fatwas ENABLE ROW LEVEL SECURITY;
ALTER TABLE seerah_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE islamic_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE memorization_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE knowledge_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE hijri_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- سياسات الأمان للملفات الشخصية
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can view public profiles"
  ON profiles FOR SELECT
  TO public
  USING (true);

-- سياسات الأمان للأسئلة والأجوبة
CREATE POLICY "Anyone can view approved questions"
  ON questions FOR SELECT
  TO public
  USING (is_approved = true);

CREATE POLICY "Users can create questions"
  ON questions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own questions"
  ON questions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all questions"
  ON questions FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- سياسات الأمان للفتاوى
CREATE POLICY "Anyone can view fatwas"
  ON fatwas FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can manage fatwas"
  ON fatwas FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- سياسات الأمان لأحداث السيرة
CREATE POLICY "Anyone can view seerah events"
  ON seerah_events FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can manage seerah events"
  ON seerah_events FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- سياسات الأمان للأحداث الإسلامية
CREATE POLICY "Anyone can view islamic events"
  ON islamic_events FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can manage islamic events"
  ON islamic_events FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- سياسات الأمان لتتبع الحفظ
CREATE POLICY "Users can view their own memorization progress"
  ON memorization_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own memorization progress"
  ON memorization_progress FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- سياسات الأمان لنتائج الاختبارات
CREATE POLICY "Users can view their own quiz results"
  ON quiz_results FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quiz results"
  ON quiz_results FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- سياسات الأمان للمحتوى العلمي
CREATE POLICY "Anyone can view published knowledge content"
  ON knowledge_content FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Admins can manage knowledge content"
  ON knowledge_content FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- سياسات الأمان لمحتوى الأسرة
CREATE POLICY "Anyone can view published family content"
  ON family_content FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Admins can manage family content"
  ON family_content FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- سياسات الأمان لأحداث التقويم الهجري
CREATE POLICY "Anyone can view hijri events"
  ON hijri_events FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can manage hijri events"
  ON hijri_events FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- سياسات الأمان للمفضلة
CREATE POLICY "Users can view their own favorites"
  ON user_favorites FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own favorites"
  ON user_favorites FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- إنشاء الفهارس للأداء
CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category);
CREATE INDEX IF NOT EXISTS idx_questions_user_id ON questions(user_id);
CREATE INDEX IF NOT EXISTS idx_questions_approved ON questions(is_approved);
CREATE INDEX IF NOT EXISTS idx_questions_search ON questions USING gin(to_tsvector('arabic', title || ' ' || question_text || ' ' || COALESCE(answer, '')));

CREATE INDEX IF NOT EXISTS idx_fatwas_category ON fatwas(category);
CREATE INDEX IF NOT EXISTS idx_fatwas_search ON fatwas USING gin(to_tsvector('arabic', question || ' ' || answer));

CREATE INDEX IF NOT EXISTS idx_seerah_events_category ON seerah_events(category);
CREATE INDEX IF NOT EXISTS idx_seerah_events_search ON seerah_events USING gin(to_tsvector('arabic', title || ' ' || description));

CREATE INDEX IF NOT EXISTS idx_memorization_user_id ON memorization_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_memorization_status ON memorization_progress(status);

CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_type ON quiz_results(quiz_type);

CREATE INDEX IF NOT EXISTS idx_knowledge_content_category ON knowledge_content(category);
CREATE INDEX IF NOT EXISTS idx_knowledge_content_published ON knowledge_content(is_published);

CREATE INDEX IF NOT EXISTS idx_family_content_category ON family_content(category);
CREATE INDEX IF NOT EXISTS idx_family_content_age_group ON family_content(target_age_group);

CREATE INDEX IF NOT EXISTS idx_hijri_events_month ON hijri_events(hijri_month);
CREATE INDEX IF NOT EXISTS idx_hijri_events_day ON hijri_events(hijri_day);

CREATE INDEX IF NOT EXISTS idx_user_favorites_user_id ON user_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_user_favorites_content ON user_favorites(content_type, content_id);

-- إنشاء دالة لتحديث updated_at تلقائياً
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- إضافة triggers لتحديث updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_questions_updated_at BEFORE UPDATE ON questions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_fatwas_updated_at BEFORE UPDATE ON fatwas FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_seerah_events_updated_at BEFORE UPDATE ON seerah_events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_islamic_events_updated_at BEFORE UPDATE ON islamic_events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_memorization_progress_updated_at BEFORE UPDATE ON memorization_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_knowledge_content_updated_at BEFORE UPDATE ON knowledge_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_family_content_updated_at BEFORE UPDATE ON family_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();