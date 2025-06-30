import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, User, Eye, ArrowLeft, Heart, Share2, BookOpen } from 'lucide-react';

const TopicDetail = () => {
  const { id } = useParams();
  
  // Mock data - في التطبيق الحقيقي، ستحصل على البيانات من API أو قاعدة البيانات
  const topics = {
    1: {
      title: 'فضائل الدعاء في الإسلام',
      content: `
        # فضائل الدعاء في الإسلام

        الدعاء هو العبادة، كما قال النبي صلى الله عليه وسلم: "الدعاء هو العبادة"، وهو من أعظم القربات إلى الله تعالى، وله فضائل عظيمة ومنافع جليلة في الدنيا والآخرة.

        ## فضائل الدعاء العظيمة:

        ### 1. الدعاء عبادة خالصة لله
        قال الله تعالى: {وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ}

        والدعاء عبادة من أجل العبادات وأشرفها، لأن فيه إظهار العبودية والافتقار إلى الله، والاعتراف بأنه وحده القادر على كل شيء.

        ### 2. الدعاء سبب لرفع البلاء
        عن سلمان الفارسي رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: "لا يرد القدر إلا الدعاء، ولا يزيد في العمر إلا البر"

        وهذا يدل على أن الدعاء له تأثير عظيم في رفع البلاء وتغيير الأحوال، فهو سبب من أسباب دفع القدر المكتوب.

        ### 3. الدعاء يقوي الصلة بالله
        الدعاء يجعل العبد في اتصال دائم مع ربه، فيشعر بالقرب منه والأنس به، ويزيد من تعلقه بالله وتوكله عليه، ويبعده عن الاعتماد على المخلوقين.

        ### 4. الدعاء سبب لاستجلاب الخيرات
        المؤمن يدعو ربه بخير الدنيا والآخرة، فيكون الدعاء سبباً في حصوله على ما يريد من خير وبركة في الدنيا والآخرة.

        ## آداب الدعاء المهمة:

        ### 1. البدء بحمد الله والثناء عليه
        من آداب الدعاء أن يبدأ الداعي بحمد الله والثناء عليه، ثم الصلاة على النبي صلى الله عليه وسلم، فإن هذا أدعى لقبول الدعاء.

        ### 2. الوضوء والطهارة
        يستحب للداعي أن يكون على وضوء وطهارة، فهذا أدعى لقبول الدعاء وأشرف للداعي.

        ### 3. استقبال القبلة
        يستحب استقبال القبلة عند الدعاء إذا أمكن ذلك، اقتداءً بالنبي صلى الله عليه وسلم.

        ### 4. رفع اليدين
        من السنة رفع اليدين عند الدعاء، كما كان يفعل النبي صلى الله عليه وسلم، وهذا من آداب الدعاء المستحبة.

        ### 5. الدعاء بأسماء الله الحسنى
        يستحب أن يتوسل الداعي إلى الله بأسمائه الحسنى وصفاته العلى، كأن يقول: "اللهم يا رحمن يا رحيم ارحمني".

        ## الأوقات المستجابة للدعاء:

        ### 1. بين الأذان والإقامة
        عن أنس بن مالك رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: "لا يُرد الدعاء بين الأذان والإقامة"

        ### 2. الثلث الأخير من الليل
        عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: "ينزل ربنا تبارك وتعالى كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر فيقول: من يدعوني فأستجيب له؟ من يسألني فأعطيه؟ من يستغفرني فأغفر له؟"

        ### 3. يوم الجمعة
        يوم الجمعة له فضل عظيم، وفيه ساعة إجابة، كما أخبر النبي صلى الله عليه وسلم أن فيه ساعة لا يوافقها عبد مسلم يسأل الله خيراً إلا أعطاه إياه.

        ### 4. عند النزول المطر
        الدعاء عند نزول المطر مستجاب، فهو وقت رحمة من الله تعالى، والرحمة تنزل مع المطر.

        ### 5. بين المغرب والعشاء
        هذا الوقت من الأوقات المباركة للدعاء، وقد كان السلف يحرصون على الدعاء فيه.

        ## من أدعية القرآن والسنة:

        ### دعاء سيد الاستغفار:
        "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي، فاغفر لي فإنه لا يغفر الذنوب إلا أنت"

        ### دعاء ختم الصلاة:
        "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار"

        ### دعاء الاستخارة:
        "اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم..."

        ## موانع إجابة الدعاء:

        ### 1. أكل الحرام
        أكل الحرام يمنع إجابة الدعاء، كما ورد في الحديث عن الرجل الذي يمد يديه إلى السماء يدعو ومطعمه حرام ومشربه حرام.

        ### 2. الدعاء بالإثم والعدوان
        الدعاء على الناس بالظلم أو طلب ما فيه إثم يمنع إجابة الدعاء.

        ### 3. الاستعجال في الإجابة
        قال النبي صلى الله عليه وسلم: "يستجاب لأحدكم ما لم يعجل، يقول: قد دعوت فلم يستجب لي"

        ## خاتمة:
        الدعاء نعمة عظيمة من الله تعالى، فهو باب مفتوح بين العبد وربه في كل وقت وحين. فلنكثر من الدعاء ولنتأدب بآدابه، ولنتحر الأوقات المستجابة، وليكن دعاؤنا بخشوع وحضور قلب، وليكن لنا يقين تام بأن الله سيجيب دعوتنا في الوقت المناسب وبالطريقة التي فيها خير لنا، والله أعلم.

        نسأل الله أن يتقبل منا ومنكم صالح الأعمال، وأن يجعلنا من الذين يدعونه في السراء والضراء، وأن يستجيب دعاءنا ويغفر لنا ذنوبنا، إنه سميع مجيب.
      `,
      readTime: '12 دقيقة',
      category: 'العبادة والأذكار',
      publishDate: '2024-01-15',
      author: 'محمد عادل',
      views: 1250,
      tags: ['الدعاء', 'العبادة', 'الأذكار', 'السنة النبوية']
    },
    2: {
      title: 'أسباب الاستغفار وفوائده',
      content: `
        # أسباب الاستغفار وفوائده

        الاستغفار من أجل العبادات وأعظمها، وهو طلب المغفرة من الله تعالى، وقد أمر الله به في كتابه الكريم وحث عليه النبي صلى الله عليه وسلم في سنته المطهرة.

        ## تعريف الاستغفار:

        **الاستغفار لغة:** طلب المغفرة والستر من الله تعالى
        **الاستغفار اصطلاحاً:** طلب المغفرة من الله تعالى بالقول والعمل، مع الندم على ما فات والعزم على عدم العودة إليه

        ## أسباب الاستغفار:

        ### 1. الذنوب والمعاصي
        كل ابن آدم خطاء، وقد قال النبي صلى الله عليه وسلم: "كل ابن آدم خطاء، وخير الخطائين التوابون"

        فالإنسان معرض للخطأ والذنب، ولذلك يحتاج إلى الاستغفار المستمر لتطهير نفسه من هذه الذنوب.

        ### 2. التقصير في العبادة
        حتى لو لم يرتكب الإنسان ذنوباً كبيرة، فهو مقصر في عبادة ربه وشكره، فلا يستطيع أن يؤدي حق الله عليه كما ينبغي، فيحتاج إلى الاستغفار.

        ### 3. الغفلة عن ذكر الله
        الإنسان يغفل كثيراً عن ذكر الله وعن استشعار عظمته، وهذا نوع من التقصير يستوجب الاستغفار.

        ### 4. ضعف اليقين والإيمان
        أحياناً يضعف إيمان الإنسان ويقل يقينه، وهذا يستدعي الاستغفار لتقوية الإيمان وزيادة اليقين.

        ## فوائد الاستغفار العظيمة:

        ### 1. غفران الذنوب ومحو السيئات
        قال الله تعالى: {وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا}

        وهذا وعد من الله بأن من استغفر بصدق فإن الله سيغفر له ذنوبه مهما كانت.

        ### 2. تكفير السيئات ورفع الدرجات
        الاستغفار يكفر السيئات ويمحو الخطايا، بل ويرفع الدرجات عند الله تعالى.

        ### 3. جلب الرزق والخيرات
        قال الله على لسان نوح عليه السلام: {فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا * يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا * وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا}

        ### 4. دفع البلاء والمصائب
        الاستغفار يدفع البلاء ويرفع المصائب عن العبد، ويكون حصناً له من الشرور.

        ### 5. طمأنينة القلب والراحة النفسية
        المستغفر يشعر بالراحة والطمأنينة، لأنه يعلم أن الله غفور رحيم، وأن ذنوبه ستُغفر بإذن الله.

        ### 6. قوة في البدن ونشاط في العمل
        الاستغفار يبارك في الصحة والعافية، ويعطي الإنسان قوة ونشاطاً في أعماله.

        ## من صيغ الاستغفار الواردة:

        ### 1. سيد الاستغفار:
        "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي، فاغفر لي فإنه لا يغفر الذنوب إلا أنت"

        ### 2. الاستغفار العام:
        "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه"

        ### 3. الاستغفار مع التوبة:
        "رب اغفر لي ذنبي وتب علي إنك أنت التواب الرحيم"

        ### 4. الاستغفار بأسماء الله الحسنى:
        "أستغفر الله الغفور الرحيم، أستغفر الله التواب الرحيم"

        ## آداب الاستغفار:

        ### 1. الإخلاص لله تعالى
        يجب أن يكون الاستغفار خالصاً لوجه الله تعالى، لا رياء فيه ولا سمعة.

        ### 2. حضور القلب والخشوع
        ينبغي أن يستغفر الإنسان بحضور قلب وخشوع، مستشعراً عظمة الله وحاجته إلى مغفرته.

        ### 3. الندم على الذنب
        الاستغفار الحقيقي يتطلب الندم على ما فات من الذنوب والمعاصي.

        ### 4. العزم على عدم العودة
        من شروط الاستغفار المقبول العزم الصادق على عدم العودة إلى الذنب.

        ### 5. الإكثار منه
        كان النبي صلى الله عليه وسلم يستغفر في اليوم أكثر من سبعين مرة، فينبغي الإكثار من الاستغفار.

        ## الأوقات المستحبة للاستغفار:

        ### 1. الأسحار (الثلث الأخير من الليل)
        قال الله تعالى في وصف المتقين: {وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ}

        ### 2. بعد الصلوات
        من السنة الاستغفار ثلاث مرات بعد كل صلاة، كما كان يفعل النبي صلى الله عليه وسلم.

        ### 3. عند المصائب والبلايا
        الاستغفار عند حدوث المصائب والبلايا، فهو يخفف من وطأتها ويدفع شرورها.

        ### 4. بين الصلوات
        يستحب الاستغفار في جميع الأوقات، وخاصة بين الصلوات.

        ### 5. عند النوم والاستيقاظ
        من الأوقات المباركة للاستغفار عند النوم وعند الاستيقاظ من النوم.

        ## قصص وعبر حول الاستغفار:

        ### قصة الإمام أحمد مع الخباز:
        روي أن الإمام أحمد بن حنبل كان يكثر من الاستغفار، وأنه كان إذا أشكلت عليه مسألة يستغفر ألف مرة أو أكثر حتى ينشرح صدره للجواب.

        ### تجربة شخصية مع الاستغفار:
        كثير من الناس جربوا الاستغفار فوجدوا آثاره العجيبة في حياتهم، من انشراح الصدر وحل المشاكل وزيادة الرزق.

        ## كيف نجعل الاستغفار جزءاً من حياتنا:

        ### 1. الاستغفار عند الاستيقاظ
        اجعل الاستغفار أول ما تقوله عند استيقاظك من النوم.

        ### 2. الاستغفار في السير
        استغفر وأنت تسير في الطريق أو تقود السيارة.

        ### 3. الاستغفار عند الانتظار
        بدلاً من إضاعة الوقت في الانتظار، استغل هذا الوقت في الاستغفار.

        ### 4. الاستغفار قبل النوم
        اختتم يومك بالاستغفار، فهو يطهر قلبك من ذنوب اليوم.

        ## خاتمة:
        الاستغفار باب عظيم من أبواب الخير، وطريق موصل إلى رضا الله ومغفرته. فلنكثر من الاستغفار ولنجعله جزءاً من حياتنا اليومية، ولنتذكر أن الله تعالى يحب من عبده أن يستغفره ويتوب إليه، فهو سبحانه الغفور الرحيم التواب.

        ولنتذكر قول الله تعالى: {وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا * وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ}، فالاستغفار من أعظم أسباب التقوى، ومن أعظم أسباب الفرج والرزق.

        نسأل الله أن يتقبل منا الاستغفار، وأن يغفر لنا ذنوبنا، وأن يرزقنا التوبة النصوح، إنه غفور رحيم.
      `,
      readTime: '15 دقيقة',
      category: 'العبادة والأذكار',
      publishDate: '2024-01-10',
      author: 'محمد عادل',
      views: 980,
      tags: ['الاستغفار', 'التوبة', 'العبادة', 'الأذكار']
    }
  };

  const topic = topics[id];

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

  const formatContent = (content) => {
    // تحويل النص إلى HTML مع التنسيق المناسب
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return `<h1 key=${index} class="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-8 font-arabic">${line.substring(2)}</h1>`;
        } else if (line.startsWith('## ')) {
          return `<h2 key=${index} class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-6 font-arabic">${line.substring(3)}</h2>`;
        } else if (line.startsWith('### ')) {
          return `<h3 key=${index} class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-4 font-arabic">${line.substring(4)}</h3>`;
        } else if (line.startsWith('**') && line.endsWith('**')) {
          return `<p key=${index} class="font-bold text-gray-900 dark:text-white mb-2 font-arabic">${line.slice(2, -2)}</p>`;
        } else if (line.trim() === '') {
          return `<br key=${index} />`;
        } else {
          return `<p key=${index} class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-arabic">${line}</p>`;
        }
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 font-arabic">الرئيسية</Link>
            <span>/</span>
            <Link to="/topics" className="hover:text-primary-600 dark:hover:text-primary-400 font-arabic">المواضيع</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-arabic">{topic.title}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="text-center mb-8">
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-arabic">
              {topic.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-6 font-arabic leading-tight">
            {topic.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <User size={16} />
              <span className="font-arabic">{topic.author}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Calendar size={16} />
              <span className="font-arabic">{new Date(topic.publishDate).toLocaleDateString('ar-SA')}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock size={16} />
              <span className="font-arabic">{topic.readTime}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Eye size={16} />
              <span className="font-arabic">{topic.views} مشاهدة</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {topic.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-arabic">
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <button className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-200">
              <Heart size={16} />
              <span className="font-arabic">أضف للمفضلة</span>
            </button>
            <button className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
              <Share2 size={16} />
              <span className="font-arabic">شارك</span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(topic.content) }}
          />
        </article>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            to="/topics"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-arabic"
          >
            <ArrowLeft className="rtl:rotate-180" size={16} />
            <span>العودة إلى المواضيع</span>
          </Link>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 font-arabic mb-2">هل استفدت من هذا المقال؟</p>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <button className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors duration-200 font-arabic">
                نعم
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 font-arabic">
                لا
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400">
            <BookOpen size={16} />
            <span className="font-arabic">المزيد من المواضيع</span>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default TopicDetail;