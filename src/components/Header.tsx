import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Sun, Moon, Globe, Trash2 } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: () => void;
  onClearShipper?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, onClearShipper }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-dhl-yellow shadow-md py-4 px-6 md:px-10 flex justify-between items-center relative z-20 w-full transition-all duration-300">
      <div
        onClick={onNavigateHome}
        className="flex items-center gap-3 group cursor-pointer"
      >
        <div className="p-1 rounded transition-transform group-hover:scale-105 flex items-center justify-center">
          <img
            src="/icon/DHL_Logo.png"
            alt="DHL Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        <span className="text-xl md:text-2xl font-black text-dhl-red uppercase tracking-tighter flex flex-col leading-tight">
          Backup Solution
          <span className="text-[10px] font-bold text-dhl-dark-red tracking-normal -mt-1 opacity-80">(Test Environment)</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex items-center space-x-4">
        <button
          onClick={onClearShipper || onNavigateHome}
          className="utility-button bg-white/50 px-3 flex items-center gap-2 font-bold text-dhl-red"
        >
          <Trash2 className="w-4 h-4" />
          {t('clearHistory')}
        </button>
        <div className="relative">
          <button
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            className="utility-button px-4 py-2 flex items-center gap-2 bg-white/50 backdrop-blur-sm"
          >
            <Globe className="w-4 h-4 text-dhl-red" />
            <span className="font-bold">{language.toUpperCase()}</span>
            <svg className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isLangDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-30 border border-gray-100 dark:border-gray-700">
              <button onClick={() => { setLanguage('th'); setIsLangDropdownOpen(false); }} className="w-full px-4 py-2 text-left hover:bg-dhl-yellow/10 font-medium">ภาษาไทย</button>
              <button onClick={() => { setLanguage('en'); setIsLangDropdownOpen(false); }} className="w-full px-4 py-2 text-left hover:bg-dhl-yellow/10 font-medium">English</button>
            </div>
          )}
        </div>

        <button onClick={toggleTheme} className="utility-button bg-white/50 backdrop-blur-sm">
          {isDarkMode ? <Sun className="w-5 h-5 text-dhl-red" /> : <Moon className="w-5 h-5 text-dhl-red" />}
        </button>
      </nav>

      {/* Mobile Nav Button */}
      <div className="sm:hidden">
        <button onClick={() => setIsMenuOpen(true)} className="utility-button bg-white/50">
          <Menu className="w-6 h-6 text-dhl-red" />
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          <nav className="absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white dark:bg-gray-900 shadow-2xl p-8 flex flex-col space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-dhl-red uppercase">{t('menu')}</h2>
              <button onClick={() => setIsMenuOpen(false)} className="utility-button">
                <X className="w-6 h-6" />
              </button>
            </div>

            <button onClick={() => { (onClearShipper || onNavigateHome)(); setIsMenuOpen(false); }} className="w-full p-4 rounded-xl text-left border flex items-center gap-3 bg-dhl-yellow/10 border-dhl-yellow font-bold">
              <Trash2 className="w-5 h-5" />
              {t('clearHistory')}
            </button>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase text-gray-500 mb-2">Language / ภาษา</p>
              <button onClick={() => { setLanguage('th'); setIsMenuOpen(false); }} className={`w-full p-4 rounded-xl text-left border ${language === 'th' ? 'bg-dhl-yellow/20 border-dhl-yellow font-bold' : 'border-gray-100 dark:border-gray-800'}`}>ภาษาไทย</button>
              <button onClick={() => { setLanguage('en'); setIsMenuOpen(false); }} className={`w-full p-4 rounded-xl text-left border ${language === 'en' ? 'bg-dhl-yellow/20 border-dhl-yellow font-bold' : 'border-gray-100 dark:border-gray-800'}`}>English</button>
            </div>

            <button onClick={() => { toggleTheme(); setIsMenuOpen(false); }} className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-xl font-semibold">
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
