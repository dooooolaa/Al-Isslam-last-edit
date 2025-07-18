  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex items-center justify-center">
        <div className="text-red-600 dark:text-red-400 text-center">
          <p>حدث خطأ في تحميل الأسئلة: {error}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8" dir="rtl">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-right text-gray-900 dark:text-white font-arabic">الأسئلة والأجوبة الشرعية</h1>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            className="p-2 rounded border w-full md:w-1/2"
            placeholder="ابحث في الأسئلة أو الأجوبة..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            dir="rtl"
          />
          <select className="p-2 rounded border" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">التصنيف</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="space-y-4">
          {faqData.map(faq => (
            <div key={faq.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all text-right font-arabic cursor-pointer" onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{faq.title || faq.question_text}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{faq.category}</div>
              </div>
              {expanded === faq.id && (
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">المصدر: {faq.source}</div>
                  <div className="mt-3">
                    <FavoriteButton contentType="question" contentId={faq.id} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq; 