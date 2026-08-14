import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  onBookingClick: () => void;
}

export default function Header({
  activeSection,
  onNavClick,
  lang,
  setLang,
  onBookingClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavClick(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* MAIN NAVBAR */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3 shadow-md border-b border-slate-200/90'
            : 'bg-white py-3 sm:py-4 border-b border-slate-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* 1. LEFT: LOGO BRAND */}
            <div 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group min-w-0 flex-1 lg:flex-initial"
              id="header-logo"
            >
              <img
                src="/baru/logo.avif"
                alt="Nituriu Transport Bajawa Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200 shrink-0"
              />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-display font-black text-xs sm:text-sm md:text-base uppercase tracking-tight truncate">
                  <span className="text-red-600">NITURIU TRANSPORT</span> <span className="text-[#0f2b5c]">BAJAWA</span>
                </span>
                <span className="hidden sm:block font-sans font-bold text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 truncate">
                  {t.topbar_service}
                </span>
              </div>
            </div>

            {/* 2. CENTER: DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-xs font-sans font-bold text-slate-700 flex-1 px-4" id="desktop-nav">
              
              <button
                onClick={() => handleItemClick('home')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'home' ? 'text-red-600 font-black border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_home}
              </button>

              <button
                onClick={() => handleItemClick('about')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'about' ? 'text-red-600 font-black border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_about}
              </button>

              <button
                onClick={() => handleItemClick('destinations')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'destinations' ? 'text-red-600 font-black border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_destinations}
              </button>

              <button
                onClick={() => handleItemClick('cars')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'cars' ? 'text-red-600 font-black border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_rentals}
              </button>

              <button
                onClick={() => handleItemClick('gallery')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'gallery' ? 'text-red-600 font-black border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_gallery}
              </button>

            </nav>

            {/* 3. RIGHT (DESKTOP): LANGUAGE SWITCHER TOGGLE & BOOK A TOUR BUTTON */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              
              {/* Language Switcher Toggle (EN / ID) */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setLang('EN')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'EN'
                      ? 'bg-red-600 text-white shadow-xs font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="English Language"
                >
                  <span>🇬🇧 EN</span>
                </button>
                <button
                  onClick={() => setLang('ID')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'ID'
                      ? 'bg-red-600 text-white shadow-xs font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Bahasa Indonesia"
                >
                  <span>🇮🇩 ID</span>
                </button>
              </div>

              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-[#0f2b5c] via-blue-700 to-[#dc2626] hover:from-red-600 hover:to-[#0f2b5c] text-white font-display font-black text-xs uppercase px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer tracking-wider"
                id="header-book-tour-btn"
              >
                {t.nav_book_btn}
              </button>
            </div>

            {/* 4. RIGHT (MOBILE): COMPACT LANG & HAMBURGER BUTTON (GARIS 3) */}
            <div className="flex lg:hidden items-center gap-1.5 shrink-0">
              <button
                onClick={() => setLang(lang === 'EN' ? 'ID' : 'EN')}
                className="px-2 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[11px] font-extrabold text-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
                title="Ganti Bahasa / Switch Language"
              >
                <span>{lang === 'EN' ? '🇬🇧 EN' : '🇮🇩 ID'}</span>
              </button>

              {/* Mobile Hamburger Button (Garis 3) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all cursor-pointer flex items-center justify-center shadow-xs active:scale-95"
                id="mobile-menu-toggle"
                aria-label="Menu Navigasi"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-red-600 stroke-[2.5]" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-800 stroke-[2.5]" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xl overflow-hidden text-left"
            id="mobile-menu-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <button
                onClick={() => handleItemClick('home')}
                className={`block w-full text-left font-display font-bold text-sm py-2.5 px-3 rounded-xl transition-colors ${
                  activeSection === 'home'
                    ? 'bg-red-50 text-red-600 font-black'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {t.nav_home}
              </button>
              <button
                onClick={() => handleItemClick('about')}
                className={`block w-full text-left font-display font-bold text-sm py-2.5 px-3 rounded-xl transition-colors ${
                  activeSection === 'about'
                    ? 'bg-red-50 text-red-600 font-black'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {t.nav_about}
              </button>
              <button
                onClick={() => handleItemClick('destinations')}
                className={`block w-full text-left font-display font-bold text-sm py-2.5 px-3 rounded-xl transition-colors ${
                  activeSection === 'destinations'
                    ? 'bg-red-50 text-red-600 font-black'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {t.nav_destinations}
              </button>
              <button
                onClick={() => handleItemClick('cars')}
                className={`block w-full text-left font-display font-bold text-sm py-2.5 px-3 rounded-xl transition-colors ${
                  activeSection === 'cars'
                    ? 'bg-red-50 text-red-600 font-black'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {t.nav_rentals}
              </button>
              <button
                onClick={() => handleItemClick('gallery')}
                className={`block w-full text-left font-display font-bold text-sm py-2.5 px-3 rounded-xl transition-colors ${
                  activeSection === 'gallery'
                    ? 'bg-red-50 text-red-600 font-black'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {t.nav_gallery}
              </button>

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between py-2.5 px-3 bg-slate-50 rounded-xl border border-slate-200/80 my-2">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                  {lang === 'EN' ? 'Language / Bahasa:' : 'Pilih Bahasa:'}
                </span>
                <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setLang('EN')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      lang === 'EN'
                        ? 'bg-red-600 text-white font-extrabold shadow-xs'
                        : 'text-slate-600'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                  <button
                    onClick={() => setLang('ID')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      lang === 'ID'
                        ? 'bg-red-600 text-white font-extrabold shadow-xs'
                        : 'text-slate-600'
                    }`}
                  >
                    🇮🇩 ID
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-display font-bold text-xs uppercase py-3 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer tracking-wider"
                >
                  <span>{t.nav_book_btn}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

