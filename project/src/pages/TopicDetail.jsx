import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Heart, Share2, BookOpen } from 'lucide-react';

  const topics = {
    1: {
      title: 'فضائل الدعاء في الإسلام',
      category: 'العبادة والأذكار',
    publishDate: '2025-07-01', // ثابت
    hijriDate: '1447/01/05', // ثابت
      author: 'محمد عادل',
    tags: ['الدعاء', 'العبادة', 'الأذكار', 'السنة النبوية'],
    virtues: [
      {
        icon: '💎',
        title: 'الدعاء عبادة خالصة لله',
        evidence: '﴿ وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ ﴾ [غافر: 60]',
        comment: 'فيه ذل العبد لعز الرب'
      },
      {
        icon: '💠',
        title: 'الدعاء يرفع البلاء',
        evidence: 'قال رسول الله ﷺ: "لا يرد القدر إلا الدعاء، ولا يزيد في العمر إلا البر" (حديث حسن)',
        comment: ''
      },
      {
        icon: '🔗',
        title: 'يقوي الصلة بالله',
        evidence: '',
        comment: 'كلما دعوت، كلما شعرت بالقرب من الله وازداد قلبك طمأنينة.'
      },
      {
        icon: '🌿',
        title: 'يجلب خيرات الدنيا والآخرة',
        evidence: '',
        comment: 'الدعاء سبب في حصول الخير والبركة في الدنيا والآخرة.'
      }
    ],
    etiquettes: [
      {
        icon: '👐',
        title: 'رفع اليدين',
        description: 'من السنة رفع اليدين عند الدعاء.'
      },
      {
        icon: '🧼',
        title: 'الطهارة',
        description: 'يستحب أن يكون الداعي على وضوء.'
      },
      {
        icon: '📍',
        title: 'استقبال القبلة',
        description: 'يستحب استقبال القبلة عند الدعاء.'
      },
      {
        icon: '💬',
        title: 'البدء بالحمد والصلاة على النبي',
        description: 'يبدأ الداعي بحمد الله ثم الصلاة على النبي.'
      },
      {
        icon: '🧠',
        title: 'الدعاء بأسماء الله الحسنى',
        description: 'يتوسل الداعي بأسماء الله وصفاته.'
      }
    ],
    times: [
      {
        icon: '🕌',
        title: 'بين الأذان والإقامة',
        evidence: 'عن أنس بن مالك رضي الله عنه قال: قال رسول الله ﷺ: "لا يُرد الدعاء بين الأذان والإقامة" (رواه الترمذي)',
      },
      {
        icon: '🌌',
        title: 'الثلث الأخير من الليل',
        evidence: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ: "ينزل ربنا تبارك وتعالى كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر فيقول: من يدعوني فأستجيب له؟ من يسألني فأعطيه؟ من يستغفرني فأغفر له؟" (متفق عليه)',
      },
      {
        icon: '🌧️',
        title: 'وقت نزول المطر',
        evidence: 'الدعاء عند نزول المطر مستجاب، فهو وقت رحمة من الله تعالى، والرحمة تنزل مع المطر.',
      },
      {
        icon: '🕋',
        title: 'يوم الجمعة',
        evidence: 'قال رسول الله ﷺ: "فيه ساعة لا يوافقها عبد مسلم يسأل الله خيراً إلا أعطاه إياه" (رواه البخاري)',
      },
      {
        icon: '🔆',
        title: 'بين المغرب والعشاء',
        evidence: 'هذا الوقت من الأوقات المباركة للدعاء، وقد كان السلف يحرصون على الدعاء فيه.',
      }
    ],
    duas: [
      {
        icon: '📘',
        title: 'دعاء سيد الاستغفار',
        text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي، فاغفر لي فإنه لا يغفر الذنوب إلا أنت.'
      },
      {
        icon: '📗',
        title: 'دعاء ختم الصلاة',
        text: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار.'
      },
      {
        icon: '📙',
        title: 'دعاء الاستخارة',
        text: 'اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم، فإنك تقدر ولا أقدر وتعلم ولا أعلم وأنت علام الغيوب. اللهم إن كنت تعلم أن هذا الأمر خير لي في ديني ومعاشي وعاقبة أمري أو قال عاجل أمري وآجله فاقدره لي ويسره لي ثم بارك لي فيه، وإن كنت تعلم أن هذا الأمر شر لي في ديني ومعاشي وعاقبة أمري أو قال في عاجل أمري وآجله فاصرفه عني واصرفني عنه، واقدر لي الخير حيث كان ثم أرضني.'
      }
    ],
    warnings: [
      {
        icon: '❌',
        title: 'أكل الحرام',
        description: 'يمنع إجابة الدعاء.'
      },
      {
        icon: '⚠️',
        title: 'الاستعجال',
        description: 'يستجاب لأحدكم ما لم يعجل.'
      },
      {
        icon: '💭',
        title: 'الدعاء بالإثم',
        description: 'الدعاء بالإثم أو قطيعة رحم يمنع الإجابة.'
      }
    ],
    conclusion: {
      text: 'اجعل بينك وبين الله خطًا مباشرًا لا ينقطع... وأكثر من الدعاء في كل وقت، فإنك بين خيرين: إما إجابة أو أجر وانتظار.'
    }
    },
    2: {
      title: 'أسباب الاستغفار وفوائده',
      category: 'العبادة والأذكار',
    publishDate: '2025-07-01',
    hijriDate: '1447/01/05',
      author: 'محمد عادل',
    tags: ['الاستغفار', 'التوبة', 'العبادة', 'الأذكار'],
    reasons: [
      {
        icon: '💠',
        title: 'كثرة الذنوب',
        evidence: 'قال رسول الله ﷺ: "كل ابن آدم خطاء، وخير الخطائين التوابون" (رواه الترمذي)',
        comment: 'الاستغفار يُطهّرك باستمرار'
      },
      {
        icon: '💠',
        title: 'اتباعًا للنبي ﷺ',
        evidence: 'قال رسول الله ﷺ: "يا أيها الناس توبوا إلى الله واستغفروه، فإني أستغفر الله في اليوم مائة مرة" (رواه مسلم)',
        comment: 'سنة يومية للمؤمنين'
      },
      {
        icon: '💠',
        title: 'فتح للرزق',
        evidence: '﴿ فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا * يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا * وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا ﴾ (نوح: 10-12)',
        comment: 'مفتاح للبركة والخير'
      },
      {
        icon: '💠',
        title: 'محبة الله للتوابين',
        evidence: '﴿ إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ ﴾ (البقرة: 222)',
        comment: 'طريق لمحبته عز وجل'
      }
    ],
    virtues: [
      {
        icon: '🤲',
        title: 'غفران الذنوب',
        evidence: '﴿ وَمَن يَغْفِرُ الذُّنُوبَ إِلَّا اللَّهُ ﴾ (آل عمران: 135)'
      },
      {
        icon: '🌧️',
        title: 'نزول المطر والرزق',
        evidence: '﴿ فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا * يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا * وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ ﴾ (نوح: 10-12)'
      },
      {
        icon: '😌',
        title: 'راحة القلب وانشراح الصدر',
        evidence: 'قال رسول الله ﷺ: "من لزم الاستغفار جعل الله له من كل هم فرجًا ومن كل ضيق مخرجًا ورزقه من حيث لا يحتسب" (رواه أبو داود)'
      },
      {
        icon: '🔁',
        title: 'تبديل السيئات حسنات',
        evidence: '﴿ فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ ﴾ (الفرقان: 70)'
      }
    ],
    etiquettes: [
      { icon: '👐', title: 'رفع اليدين', description: 'اقتداءً بالنبي ﷺ' },
      { icon: '🧼', title: 'الطهارة', description: 'الاستغفار حال الطهارة أحب إلى الله' },
      { icon: '📍', title: 'استقبال القبلة', description: 'سنة النبي ﷺ في الدعاء' },
      { icon: '📜', title: 'البدء بالحمد والصلاة على النبي', description: 'يُعظم القبول' },
      { icon: '💬', title: 'الإخلاص والحضور', description: 'القلب حاضر مع اللسان' }
    ],
    times: [
      {
        icon: '🕓',
        title: 'الأسحار',
        evidence: '﴿ وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ ﴾ (الذاريات: 18)'
      },
      {
        icon: '🕌',
        title: 'بعد الصلوات الخمس',
        evidence: 'عن ثوبان رضي الله عنه: كان النبي ﷺ إذا سلم من صلاته قال: "أستغفر الله ثلاثًا" (رواه مسلم)'
      },
      {
        icon: '🌌',
        title: 'آخر الليل',
        evidence: 'قال رسول الله ﷺ: "ينزل ربنا تبارك وتعالى إلى السماء الدنيا حين يبقى ثلث الليل الآخر فيقول: من يدعوني فأستجيب له؟ من يسألني فأعطيه؟ من يستغفرني فأغفر له؟" (رواه البخاري)'
      },
      {
        icon: '📅',
        title: 'كل وقت',
        evidence: 'قال رسول الله ﷺ: "من أحب أن تسره صحيفته فليكثر من الاستغفار" (رواه الطبراني)'
      }
    ],
    forms: [
      {
        icon: '📘',
        title: 'سيد الاستغفار',
        text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي، فاغفر لي فإنه لا يغفر الذنوب إلا أنت.'
      },
      {
        icon: '📗',
        title: 'القصيرة',
        text: 'أستغفر الله وأتوب إليه.'
      },
      {
        icon: '📙',
        title: 'اللهم اغفر لي وتب علي',
        text: 'اللهم اغفر لي وتب علي، إنك أنت التواب الرحيم.'
      },
      {
        icon: '📔',
        title: 'رب اغفر لي وتب علي',
        text: 'رب اغفر لي وتب علي، إنك أنت التواب الرحيم.'
      }
    ],
    warnings: [
      {
        icon: '❌',
        title: 'الإصرار على الذنب',
        description: 'لسان يطلب، وقلب يصر على الذنب.'
      },
      {
        icon: '⚠️',
        title: 'عدم الإخلاص',
        description: 'طلب مغفرة دون نية صادقة.'
      },
      {
        icon: '❌',
        title: 'أكل الحرام',
        description: 'قال النبي ﷺ: "أنّى يستجاب له؟" (رواه مسلم)'
      },
      {
        icon: '💭',
        title: 'الاستعجال',
        description: 'قال النبي ﷺ: "يستجاب لأحدكم ما لم يعجل، يقول: قد دعوت فلم يُستجب لي" (رواه البخاري)'
      }
    ],
    conclusion: {
      text: 'استغفر الله على الدوام... فإنك لا تدري أي ذنب حجب عنك النور وأخر عنك الفرج.'
    }
  }
};

const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics[id];
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(() => {
    const favs = JSON.parse(localStorage.getItem('favTopics') || '[]');
    return favs.includes(id);
  });
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [showToast, setShowToast] = useState(false);

  // عرض كلا الموضوعين
  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">
            الموضوع غير موجود
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-arabic">
            عذراً، الموضوع المطلوب غير متوفر
          </p>
          <Link
            to="/topics"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
          >
            <ArrowLeft className="rtl:rotate-180" size={16} />
            <span>العودة إلى المواضيع</span>
          </Link>
        </div>
      </div>
    );
  }

  // دالة نسخ الأدعية
  const handleCopyDua = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1200);
    } catch {
      alert('حدث خطأ أثناء النسخ!');
    }
  };

  // دالة المشاركة
  const handleShare = async () => {
    const url = window.location.href;
    let shared = false;
    if (navigator.share) {
      try {
        await navigator.share({ title: topic.title, url });
        shared = true;
      } catch (e) {
        shared = false;
      }
    }
    if (!shared) {
      try {
        await navigator.clipboard.writeText(url);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
      } catch {
        alert('حدث خطأ أثناء نسخ الرابط!');
      }
    }
  };

  // دالة المفضلة
  const handleFav = () => {
    let favs = JSON.parse(localStorage.getItem('favTopics') || '[]');
    if (favs.includes(id)) {
      favs = favs.filter(f => f !== id);
      setIsFav(false);
    } else {
      favs.push(id);
      setIsFav(true);
    }
    localStorage.setItem('favTopics', JSON.stringify(favs));
  };

  // عرض موضوع الدعاء (id=1)
  if (id === '1') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toast */}
          {showToast && (
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-2 rounded shadow-lg font-arabic text-lg animate-fadein">
              تم نسخ رابط الصفحة!
            </div>
          )}
          {/* Header */}
          <header className="mb-8">
            <div className="text-center mb-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-arabic">
                {topic.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4 font-arabic leading-tight">
              {topic.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <User size={16} />
                <span className="font-arabic">{topic.author}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Calendar size={16} />
                <span className="font-arabic">{new Date(topic.publishDate).toLocaleDateString('ar-EG')}</span>
                <span className="mx-1">|</span>
                <span className="font-arabic">{topic.hijriDate} هـ</span>
              </div>
            </div>
          </header>

          {/* 1. فضائل الدعاء العظيمة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">📖 فضائل الدعاء العظيمة</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Array.isArray(topic.virtues) && topic.virtues.map((v, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 flex flex-col gap-2 border-t-4 border-primary-200 dark:border-primary-700">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{v.icon}</span>
                    <span className="font-bold font-arabic text-lg">{v.title}</span>
                  </div>
                  {v.evidence && <div className="text-primary-700 dark:text-primary-400 font-arabic mb-1">{v.evidence}</div>}
                  {v.comment && <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{v.comment}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* 2. آداب الدعاء المهمة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">🧼 آداب الدعاء المهمة</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {Array.isArray(topic.etiquettes) && topic.etiquettes.map((e, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg shadow p-3">
                  <span className="text-xl">{e.icon}</span>
                  <div>
                    <div className="font-bold font-arabic">{e.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{e.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. الأوقات المستجابة للدعاء */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">🕰️ الأوقات المستجابة للدعاء</h2>
            <div className="flex flex-col gap-6 border-r-4 border-primary-200 dark:border-primary-700 pr-4">
              {Array.isArray(topic.times) && topic.times.map((t, idx) => (
                <div key={idx} className="flex items-start gap-3 relative">
                  <span className="text-xl absolute -right-8 top-0">{t.icon}</span>
                  <div>
                    <div className="font-bold font-arabic">{t.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{t.evidence}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. أدعية من القرآن والسنة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">📜 أدعية من القرآن والسنة</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Array.isArray(topic.duas) && topic.duas.map((d, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
                  <span className="text-2xl mb-2">{d.icon}</span>
                  <div className="font-bold font-arabic mb-2">{d.title}</div>
                  <div className="font-arabic text-center mb-2 text-lg">{d.text}</div>
                  <button
                    className={`mt-auto px-3 py-1 rounded font-arabic text-sm ${copiedIdx === idx ? 'bg-green-100 text-green-700' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'}`}
                    onClick={() => handleCopyDua(d.text, idx)}
                  >
                    {copiedIdx === idx ? 'تم النسخ' : 'نسخ'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 5. موانع إجابة الدعاء */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 font-arabic">🚫 موانع إجابة الدعاء</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 grid gap-3">
              {Array.isArray(topic.warnings) && topic.warnings.map((w, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xl">{w.icon}</span>
                  <div>
                    <div className="font-bold font-arabic">{w.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{w.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. الخاتمة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">🤲 الخاتمة</h2>
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 rounded-lg p-6 text-center font-arabic text-lg text-primary-800 dark:text-primary-200 mb-4">
              {topic.conclusion.text}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={handleShare} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg font-arabic">شارك مع من تحب</button>
              <button onClick={handleFav} className={`px-4 py-2 rounded-lg font-arabic ${isFav ? 'bg-red-100 text-red-700' : 'bg-red-50 text-red-600'}`}>{isFav ? 'في المفضلة' : 'احفظ في المفضلة'}</button>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Link
              to="/topics"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
            >
              <ArrowLeft className="rtl:rotate-180" size={16} />
              <span>العودة إلى المواضيع</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // عرض موضوع الاستغفار (id=2)
  if (id === '2') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toast */}
          {showToast && (
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-2 rounded shadow-lg font-arabic text-lg animate-fadein">
              تم نسخ رابط الصفحة!
            </div>
          )}
          {/* Header */}
          <header className="mb-8">
            <div className="text-center mb-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-arabic">
                {topic.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4 font-arabic leading-tight">
              {topic.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <User size={16} />
                <span className="font-arabic">{topic.author}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Calendar size={16} />
                <span className="font-arabic">{new Date(topic.publishDate).toLocaleDateString('ar-EG')}</span>
                <span className="mx-1">|</span>
                <span className="font-arabic">{topic.hijriDate} هـ</span>
              </div>
            </div>
          </header>

          {/* 1. أسباب الاستغفار */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">أسباب الاستغفار ودوافعه</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Array.isArray(topic.reasons) && topic.reasons.map((r, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 flex flex-col gap-2 border-t-4 border-primary-200 dark:border-primary-700">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{r.icon}</span>
                    <span className="font-bold font-arabic text-lg">{r.title}</span>
                  </div>
                  <div className="text-primary-700 dark:text-primary-400 font-arabic mb-1">{r.evidence}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{r.comment}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. فضائل الاستغفار */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">فضائل الاستغفار المؤكدة</h2>
            <div className="flex flex-col gap-6 border-r-4 border-primary-200 dark:border-primary-700 pr-4">
              {Array.isArray(topic.virtues) && topic.virtues.map((v, idx) => (
                <div key={idx} className="flex items-start gap-3 relative">
                  <span className="text-2xl absolute -right-8 top-0">{v.icon}</span>
                  <div>
                    <div className="font-bold font-arabic">{v.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{v.evidence}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. آداب الاستغفار */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">آداب الاستغفار</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {Array.isArray(topic.etiquettes) && topic.etiquettes.map((e, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg shadow p-3">
                  <span className="text-xl">{e.icon}</span>
                  <div>
                    <div className="font-bold font-arabic">{e.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{e.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. الأوقات المفضلة للاستغفار */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">الأوقات المفضلة للاستغفار</h2>
            <div className="flex flex-col gap-6 border-r-4 border-primary-200 dark:border-primary-700 pr-4">
              {Array.isArray(topic.times) && topic.times.map((t, idx) => (
                <div key={idx} className="flex items-start gap-3 relative">
                  <span className="text-xl absolute -right-8 top-0">{t.icon}</span>
                  <div>
                    <div className="font-bold font-arabic">{t.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{t.evidence}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. صيغ الاستغفار */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">صيغ الاستغفار المأثورة</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Array.isArray(topic.forms) && topic.forms.map((d, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
                  <span className="text-2xl mb-2">{d.icon}</span>
                  <div className="font-bold font-arabic mb-2">{d.title}</div>
                  <div className="font-arabic text-center mb-2 text-lg">{d.text}</div>
                  <button
                    className={`mt-auto px-3 py-1 rounded font-arabic text-sm ${copiedIdx === idx ? 'bg-green-100 text-green-700' : 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'}`}
                    onClick={() => handleCopyDua(d.text, idx)}
                  >
                    {copiedIdx === idx ? 'تم النسخ' : 'نسخ'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 6. موانع إجابة الاستغفار */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 font-arabic">موانع إجابة الاستغفار</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 grid gap-3">
              {Array.isArray(topic.warnings) && topic.warnings.map((w, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xl">{w.icon}</span>
                  <div>
                    <div className="font-bold font-arabic">{w.title}</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic text-sm">{w.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. الخاتمة */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6 font-arabic">خاتمة تحفيزية</h2>
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 rounded-lg p-6 text-center font-arabic text-lg text-primary-800 dark:text-primary-200 mb-4">
              {topic.conclusion.text}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={handleShare} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg font-arabic">شارك مع من تحب</button>
              <button onClick={handleFav} className={`px-4 py-2 rounded-lg font-arabic ${isFav ? 'bg-red-100 text-red-700' : 'bg-red-50 text-red-600'}`}>{isFav ? 'في المفضلة' : 'احفظ في المفضلة'}</button>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Link
              to="/topics"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
            >
              <ArrowLeft className="rtl:rotate-180" size={16} />
              <span>العودة إلى المواضيع</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default TopicDetail;