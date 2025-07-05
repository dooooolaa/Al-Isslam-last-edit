import React, { useState } from 'react';

const AskQuestionForm = () => {
  const [form, setForm] = useState({
    type: '',
    question: '',
    name: '',
    email: '',
    isPrivate: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // إرسال البيانات إلى السيرفر أو Firebase
    alert('تم إرسال سؤالك بنجاح!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-8 text-center font-arabic">اسأل سؤالاً شرعياً</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
          <div>
            <label className="block mb-1 font-arabic">نوع السؤال</label>
            <select name="type" value={form.type} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 font-arabic">
              <option value="">اختر التصنيف...</option>
              <option value="عقيدة">عقيدة</option>
              <option value="عبادة">عبادة</option>
              <option value="معاملات">معاملات</option>
              <option value="أحوال شخصية">أحوال شخصية</option>
              <option value="أخلاق وسلوك">أخلاق وسلوك</option>
              <option value="ترفيه ومباحات">ترفيه ومباحات</option>
              <option value="نوازل">نوازل</option>
              <option value="غير المسلمين">غير المسلمين</option>
              <option value="المرأة المسلمة">المرأة المسلمة</option>
              <option value="المراهقون والشباب">المراهقون والشباب</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-arabic">نص السؤال</label>
            <textarea name="question" value={form.question} onChange={handleChange} required rows={4} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 font-arabic" placeholder="اكتب سؤالك هنا..."></textarea>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-arabic">اسم المستخدم (اختياري)</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 font-arabic" />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-arabic">البريد الإلكتروني (اختياري)</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 font-arabic" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="isPrivate" checked={form.isPrivate} onChange={handleChange} id="isPrivate" />
            <label htmlFor="isPrivate" className="font-arabic">هل ترغب بجواب خاص (لن يُنشر السؤال)؟</label>
          </div>
          <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-lg font-arabic hover:bg-primary-700 transition-colors">إرسال السؤال</button>
        </form>
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-300 font-arabic text-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <p>سياسة الاستخدام: يُقبل فقط الأسئلة الشرعية – لا يُقبل طلب الفتاوى الشخصية المعقدة – الرد يكون خلال 48 ساعة من خلال هيئة علمية موثوقة.</p>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionForm; 