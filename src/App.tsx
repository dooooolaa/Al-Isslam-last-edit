import React from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { ArrowRight } from 'lucide-react';
import { ChallengeProvider } from './context/ChallengeContext';

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname === '/') return null;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-md text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors duration-200 focus:outline-none"
        aria-label="رجوع للخلف"
      >
        <ArrowRight className="rtl:rotate-180" size={20} />
        <span className="font-arabic">رجوع</span>
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ChallengeProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300" dir="rtl">
              <Navbar />
              <BackButton />
              <main>
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </Router>
        </ChallengeProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;