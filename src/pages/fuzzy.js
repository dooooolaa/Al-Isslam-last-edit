// بحث تقريبي ذكي للغة العربية يهمل التشكيل ويستخدم Levenshtein distance
function removeTashkeel(text) {
  return text.normalize("NFD").replace(/[\u064B-\u065F\u0610-\u061A\u06D6-\u06ED]/g, "");
}

function normalizeArabic(text) {
  return removeTashkeel(text)
    .replace(/[\u0640]/g, "")        // إزالة الكشيدة
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\w\s]/g, "")         // إزالة الرموز الخاصة
    .toLowerCase()
    .trim();
}

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}

export default function fuzzyIncludes(text, search, tolerance = 2) {
  if (!search) return true;
  if (!text) return false;

  const normText = normalizeArabic(text);
  const normSearch = normalizeArabic(search);

  if (normText.includes(normSearch)) return true;

  // قسّم النص إلى كلمات، وابحث عن أي كلمة قريبة بما فيه الكفاية
  const words = normText.split(/\s+/);
  return words.some(word => levenshtein(word, normSearch) <= tolerance);
} 