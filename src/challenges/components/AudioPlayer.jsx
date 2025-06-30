import React, { useRef } from 'react';

const getAudioUrl = (sura, ayah, reciter) => {
  // مثال: استخدم MP3Quran API أو روابط ثابتة حسب القارئ
  // هذا مثال توضيحي ويجب تعديله حسب القارئ الحقيقي
  const reciters = {
    alafasy: 'https://server8.mp3quran.net/afs/',
    minshawi: 'https://server10.mp3quran.net/minsh/',
    ajmy: 'https://server12.mp3quran.net/ajm/'
  };
  const suraStr = sura.toString().padStart(3, '0');
  const ayahStr = ayah.toString().padStart(3, '0');
  return `${reciters[reciter]}${suraStr}${ayahStr}.mp3`;
};

const AudioPlayer = ({ sura, ayah, reciter }) => {
  const audioRef = useRef();
  return (
    <button
      className="btn btn-sm btn-primary ml-2"
      onClick={() => audioRef.current && audioRef.current.play()}
      title="تشغيل التلاوة"
    >
      <audio ref={audioRef} src={getAudioUrl(sura, ayah, reciter)} preload="none" />
      ▶️ استمع
    </button>
  );
};

export default AudioPlayer; 