import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Topics from '../pages/Topics';
import TopicDetail from '../pages/TopicDetail';
import Quran from '../pages/Quran';
import Adhkar from '../pages/Adhkar';
import Hadith from '../pages/Hadith';
import Fatwas from '../pages/Fatwas';
import Seerah from '../pages/Seerah';
import Faq from '../pages/Faq';
import ScientificContent from '../pages/ScientificContent';
import Ramadan from '../pages/events/Ramadan';
import HajjUmrah from '../pages/events/HajjUmrah';
import HijriCalendar from '../pages/events/HijriCalendar';
import BlessedDays from '../pages/events/BlessedDays';
import Events from '../pages/events/Events';
import FamilyLife from '../pages/family/FamilyLife';
import ParentingGuide from '../pages/family/ParentingGuide';
import FamilyIndex from '../pages/family/FamilyIndex';
import KidsContent from '../pages/family/KidsContent';
import InteractiveGames from '../pages/family/InteractiveGames';
import Categories from '../pages/faq/Categories';
import SearchResults from '../pages/faq/SearchResults';
import FatwaDetails from '../pages/faq/FatwaDetails';
import AskQuestionForm from '../pages/faq/AskQuestionForm';
import PopularQuestions from '../pages/faq/PopularQuestions';
// Import new question pages
import RamadanQuestions from '../pages/events/RamadanQuestions';
import HajjUmrahQuestions from '../pages/events/HajjUmrahQuestions';
import HijriCalendarQuestions from '../pages/events/HijriCalendarQuestions';
import BlessedDaysQuestions from '../pages/events/BlessedDaysQuestions';
// Import new Islamic jurisprudence Q&A pages
import AqeedahQA from '../../../src/pages/AqeedahQA';
import IbadatQA from '../../../src/pages/IbadatQA';
import FinancialQA from '../../../src/pages/FinancialQA';
import PersonalStatusQA from '../../../src/pages/PersonalStatusQA';
import EthicsQA from '../../../src/pages/EthicsQA';
import EntertainmentQA from '../../../src/pages/EntertainmentQA';
import ContemporaryQA from '../../../src/pages/ContemporaryQA';
import NonMuslimsQA from '../../../src/pages/NonMuslimsQA';
import MuslimWomenQA from '../../../src/pages/MuslimWomenQA';
// Import support and contact pages
import About from '../pages/About';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import ChallengeDashboard from '../../../src/challenges/ChallengeDashboard';
import WeeklyChallenges from '../../../src/challenges/WeeklyChallenges';
import MemorizationTracker from '../../../src/challenges/MemorizationTracker';
import TafsirQuests from '../../../src/challenges/TafsirQuests';
import ChallengeHistory from '../../../src/challenges/ChallengeHistory';
import IslamicQuiz from '../../../src/challenges/IslamicQuiz';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/:id" element={<TopicDetail />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/worship" element={<Adhkar />} />
      {/* Scientific Content Section */}
      <Route path="/knowledge" element={<ScientificContent />} />
      <Route path="/knowledge/hadith" element={<Hadith />} />
      <Route path="/knowledge/fatwas" element={<Fatwas />} />
      <Route path="/knowledge/seerah" element={<Seerah />} />
      <Route path="/knowledge/faq" element={<Faq />} />
      {/* Islamic Events Section */}
      <Route path="/events" element={<Events />} />
      <Route path="/events/ramadan" element={<Ramadan />} />
      <Route path="/events/hajj-umrah" element={<HajjUmrah />} />
      <Route path="/events/hijri-calendar" element={<HijriCalendar />} />
      <Route path="/events/blessed-days" element={<BlessedDays />} />
      {/* Events Questions Pages */}
      <Route path="/events/ramadan-questions" element={<RamadanQuestions />} />
      <Route path="/events/hajj-umrah-questions" element={<HajjUmrahQuestions />} />
      <Route path="/events/hijri-calendar-questions" element={<HijriCalendarQuestions />} />
      <Route path="/events/blessed-days-questions" element={<BlessedDaysQuestions />} />
      {/* Support and Contact Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      {/* Placeholder routes - سيتم تطويرها لاحقاً */}
      <Route path="/challenges" element={<ChallengeDashboard />} />
      <Route path="/challenges/weekly" element={<WeeklyChallenges />} />
      <Route path="/challenges/memorization" element={<MemorizationTracker />} />
      <Route path="/challenges/tafsir" element={<TafsirQuests />} />
      <Route path="/challenges/history" element={<ChallengeHistory />} />
      <Route path="/challenges/quiz" element={<IslamicQuiz />} />
      <Route path="/family" element={<FamilyIndex />} />
      <Route path="/family/life" element={<FamilyLife />} />
      <Route path="/family/parenting" element={<ParentingGuide />} />
      <Route path="/family/kids" element={<KidsContent />} />
      <Route path="/family/games" element={<InteractiveGames />} />
      <Route path="/profile" element={<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-900 dark:text-white font-arabic">قريباً - الملف الشخصي</h1></div>} />
      <Route path="/favorites" element={<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-900 dark:text-white font-arabic">قريباً - المفضلة</h1></div>} />
      <Route path="/settings" element={<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center"><h1 className="text-2xl font-bold text-gray-900 dark:text-white font-arabic">قريباً - الإعدادات</h1></div>} />
      <Route path="/faq" element={<Categories />} />
      <Route path="/faq/search" element={<SearchResults />} />
      <Route path="/faq/fatwa/:id" element={<FatwaDetails />} />
      <Route path="/faq/ask" element={<AskQuestionForm />} />
      <Route path="/faq/popular" element={<PopularQuestions />} />
      {/* Islamic Jurisprudence Q&A Routes */}
      <Route path="/faq-categories" element={<Categories />} />
      <Route path="/aqeedah-qa" element={<AqeedahQA />} />
      <Route path="/ibadat-qa" element={<IbadatQA />} />
      <Route path="/financial-qa" element={<FinancialQA />} />
      <Route path="/personal-status-qa" element={<PersonalStatusQA />} />
      <Route path="/ethics-qa" element={<EthicsQA />} />
      <Route path="/entertainment-qa" element={<EntertainmentQA />} />
      <Route path="/contemporary-qa" element={<ContemporaryQA />} />
      <Route path="/non-muslims-qa" element={<NonMuslimsQA />} />
      <Route path="/muslim-women-qa" element={<MuslimWomenQA />} />
    </Routes>
  );
};

export default AppRoutes;