import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Search, Play, Pause, Menu, X } from 'lucide-react';
import fuzzyIncludes from './fuzzy';

const RECITERS = [
  { id: 'minshawi_mojawwad', name: 'محمد صديق المنشاوي (مجود)', language: 'عربي', url: 'https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/' },
  { id: 'minshawi_murattal', name: 'محمد صديق المنشاوي (مرتل)', language: 'عربي', url: 'https://server10.mp3quran.net/minsh/' },
  { id: 'raad_kurdi', name: 'رعد محمد الكردي', language: 'عربي', url: 'https://server6.mp3quran.net/kurdi/' },
  { id: 'mishary_alafasy', name: 'مشاري راشد العفاسي', language: 'عربي', url: 'https://server8.mp3quran.net/afs/' },
  { id: 'abdulrahman_sudais', name: 'عبد الرحمن السديس', language: 'عربي', url: 'https://server11.mp3quran.net/sds/' },
  { id: 'saud_shuraim', name: 'سعود الشريم', language: 'عربي', url: 'https://server7.mp3quran.net/shur/' },
  { id: 'maher_almuaiqly_mujawwad', name: 'ماهر المعيقلي (مجود)', language: 'عربي', url: 'https://server12.mp3quran.net/maher/Almusshaf-Al-Mojawwad/' },
  { id: 'abdulbasit_murattal', name: 'عبد الباسط عبد الصمد (مرتل)', language: 'عربي', url: 'https://server7.mp3quran.net/basit/' },
  { id: 'abdulbasit_mujawwad', name: 'عبد الباسط عبد الصمد (مجود)', language: 'عربي', url: 'https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/' },
  { id: 'husary_mujawwad', name: 'محمود خليل الحصري (مجود)', language: 'عربي', url: 'https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/' },
  { id: 'husary_murattal', name: 'محمود خليل الحصري (مرتل)', language: 'عربي', url: 'https://server13.mp3quran.net/husr/' },
  { id: 'saad_ghamdi', name: 'سعد الغامدي', language: 'عربي', url: 'https://server7.mp3quran.net/s_gmd/' }
];

const Quran = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReciter, setSelectedReciter] = useState(RECITERS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef(null);
  const [viewMode, setViewMode] = useState('surahList');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchSurahs();
  }, []);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleAudioEnded);
      audio.addEventListener('pause', () => setIsPaused(true));
      audio.addEventListener('play', () => setIsPaused(false));
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleAudioEnded);
        audio.removeEventListener('pause', () => setIsPaused(true));
        audio.removeEventListener('play', () => setIsPaused(false));
      };
    }
  }, [audio]);

  useEffect(() => {
    if (selectedReciter && selectedSurah) {
      playSurah(selectedSurah.number);
    }
  }, [selectedReciter]);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audio.duration);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Helper function to convert numbers to Eastern Arabic numerals
  const convertToEasternArabicNumerals = (num) => {
    if (typeof num !== 'number') {
      return ''; // Handle cases where num is not a number
    }
    return new Intl.NumberFormat('ar-EG', { useGrouping: false }).format(num);
  };

  const handleSliderChange = (e) => {
    if (audio) {
      const newTime = parseFloat(e.target.value);
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const progressPercentage = duration === 0 ? 0 : (Math.min(currentTime, duration) / duration) * 100;

  const playSurah = async (surahNumber) => {
    if (audio && selectedReciter &&
        audio.src === `${selectedReciter.url}${surahNumber.toString().padStart(3, '0')}.mp3` &&
        !isPaused) {
      togglePlayPause();
      return;
    }

    if (audio) {
      audio.pause();
    }
    
    setCurrentTime(0);
    setDuration(0);

    if (selectedReciter && surahNumber) {
      const formattedNumber = surahNumber.toString().padStart(3, '0');
      const newAudio = new Audio(`${selectedReciter.url}${formattedNumber}.mp3`);
      audioRef.current = newAudio;
      setAudio(newAudio);
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPaused(true);
      } else {
        audioRef.current.play();
        setIsPaused(false);
      }
      setIsPlaying(!isPlaying);
    } else {
      if (selectedSurah) {
        playSurah(selectedSurah.number);
      }
    }
  };

  const fetchSurahs = async () => {
    try {
      const response = await fetch('https://api.alquran.cloud/v1/quran/quran-uthmani');
      const data = await response.json();
      console.log('Fetched Surahs Data:', data.data.surahs);
      data.data.surahs.forEach(surah => {
        console.log(`Surah ${surah.number}: numberOfAyahs = ${surah.numberOfAyahs}, type = ${typeof surah.numberOfAyahs}`);
      });
      setSurahs(data.data.surahs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching surahs:', error);
      setLoading(false);
    }
  };

  const fetchSurahDetails = async (surahNumber) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.uthmani`);
      const data = await response.json();
      setSelectedSurah(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching surah details:', error);
      setLoading(false);
    }
  };

  const filteredSurahs = surahs.filter(surah => 
    fuzzyIncludes(surah.name, searchTerm) ||
    fuzzyIncludes(surah.englishName, searchTerm)
  );

  const handleBackToSurahList = () => {
    setViewMode('surahList');
    setSelectedSurah(null);
    setSidebarOpen(false);
    if (audio) {
      audio.pause();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 relative">
          <button
            onClick={handleBackToSurahList}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-arabic mb-2 focus:outline-none focus:ring-0 bg-transparent border-none p-0 cursor-pointer"
          >
            القرآن الكريم
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-arabic">
            اقرأ وتدبر في كتاب الله عز وجل
          </p>
          
          {/* Sidebar Toggle Button - Only show when in surah display mode */}
          {viewMode === 'surahDisplay' && (
            <button
              onClick={toggleSidebar}
              className="fixed top-20 right-4 z-50 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 sidebar-toggle-btn flex items-center space-x-2 rtl:space-x-reverse lg:hidden"
              aria-label="فتح القائمة"
            >
              <Menu size={18} />
              <span className="font-arabic text-sm">القائمة</span>
            </button>
          )}
        </div>

        {viewMode === 'surahList' ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute right-3 top-3 text-gray-400" size={18} className="sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="ابحث عن سورة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {loading ? (
                <div className="col-span-full flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
                </div>
              ) : (
                filteredSurahs.map((surah) => (
                  <button
                    key={surah.number}
                    onClick={() => {
                      fetchSurahDetails(surah.number);
                      playSurah(surah.number);
                      setViewMode('surahDisplay');
                    }}
                    className="w-full text-right p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex flex-col items-start min-h-[100px] sm:min-h-[120px]"
                  >
                    <span className="text-xs text-gray-500 dark:text-gray-400">{surah.number}</span>
                    <div className="font-arabic text-sm sm:text-base text-gray-900 dark:text-white">{surah.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{surah.englishName}</div>
                    <div className="flex items-center space-x-2 text-xs font-arabic text-green-600 dark:text-green-400 mt-1">
                      <span>{convertToEasternArabicNumerals(surah.numberOfAyahs)} آية</span>
                      <span>•</span>
                      <span>{surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Overlay for Mobile */}
            {sidebarOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden quran-sidebar-overlay"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            
            {/* Sidebar */}
            <div className={`fixed lg:static top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg z-50 lg:z-auto transform transition-transform duration-300 ease-in-out quran-sidebar ${
              sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
            } lg:block lg:w-72 xl:w-80`}>
              <div className="h-full flex flex-col">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white font-arabic">القائمة</h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Sidebar Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  <button
                    onClick={handleBackToSurahList}
                    className="w-full text-center px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors duration-200"
                  >
                    الرجوع للخلف
                  </button>
                  
                  <div>
                    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 font-arabic">قائمة السور</h2>
                    <div className="flex flex-wrap gap-1.5 max-h-[160px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
                      {surahs.map((surah) => (
                        <button
                          key={surah.number}
                          onClick={() => {
                            fetchSurahDetails(surah.number);
                            playSurah(surah.number);
                            setSidebarOpen(false); // Close sidebar on mobile after selection
                          }}
                          className={`px-2 py-1 rounded-full text-xs transition-colors duration-200 ${
                            selectedSurah?.number === surah.number
                              ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white'
                          }`}
                        >
                          {surah.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 font-arabic">القراء</h2>
                    <div className="space-y-1.5 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
                      {RECITERS.map((reciter) => (
                        <button
                          key={reciter.id}
                          onClick={() => {
                            setSelectedReciter(reciter);
                            if (selectedSurah) {
                              playSurah(selectedSurah.number);
                            }
                            setSidebarOpen(false); // Close sidebar on mobile after selection
                          }}
                          className={`w-full text-right p-2 rounded-lg transition-colors duration-200 ${
                            selectedReciter?.id === reciter.id
                              ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <div className="font-arabic text-sm">{reciter.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{reciter.language}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Surah Display */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 quran-main-content quran-spacing">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-arabic mb-3">
                  {selectedSurah?.name}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  {selectedSurah?.englishName} - {selectedSurah?.numberOfAyahs} آية
                </p>
                {selectedReciter && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    القارئ: {selectedReciter.name}
                  </p>
                )}
                
                <div className="mt-6 space-y-3">
                  <button
                    onClick={togglePlayPause}
                    className={`px-6 sm:px-8 py-3 rounded-full transition-colors duration-200 text-base sm:text-lg quran-button ${
                      isPlaying
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    {isPlaying ? (
                      <span className="flex items-center justify-center">
                        <Pause className="ml-2" size={20} className="sm:w-6 sm:h-6" />
                        {isPaused ? 'استئناف' : 'إيقاف مؤقت'}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Play className="ml-2" size={20} className="sm:w-6 sm:h-6" />
                        تشغيل السورة
                      </span>
                    )}
                  </button>

                  {/* Progress Bar */}
                  <div className="flex items-center space-x-3 sm:space-x-4 mt-6">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-mono">{formatTime(currentTime)}</span>
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleSliderChange}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      style={{
                        background: `linear-gradient(to left, #2563EB 0%, #2563EB ${progressPercentage}%, #4B5563 ${progressPercentage}%, #4B5563 100%)`,
                      }}
                    />
                    <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-mono">{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="space-y-6 sm:space-y-8">
                  {selectedSurah?.ayahs.map((ayah) => (
                    <span key={ayah.numberInSurah} className="relative group inline">
                      <span className="text-lg sm:text-xl lg:text-2xl font-arabic text-gray-900 dark:text-white leading-loose mr-3 quran-ayah-text quran-text">
                        {ayah.text}
                      </span>
                      <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 text-sm mx-2 rounded-full bg-gray-700 text-yellow-400 font-sans dark:bg-gray-600">
                        {convertToEasternArabicNumerals(ayah.numberInSurah)}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quran;