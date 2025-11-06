import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const NAV_LINKS = [
    { name: t('navHome'), path: '/' },
    { name: t('navGenerator'), path: '/generator' },
    { name: t('navGallery'), path: '/gallery' },
    { name: t('navAbout'), path: '/about' },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'ku');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-secondary">
              Rosha AI
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="ml-10 flex items-baseline space-x-4" dir={language === 'ku' ? 'rtl' : 'ltr'}>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary-dark'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="ml-4">
               <select onChange={handleLanguageChange} value={language} className="bg-gray-100 border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light">
                 <option value="en">English</option>
                 <option value="ku">کوردی</option>
               </select>
            </div>
            <div className="ml-4">
                <Link to="/generator">
                    <Button>{t('startNow')}</Button>
                </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary-dark'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 px-2 border-t border-gray-200">
                <div className="mb-4">
                    <label htmlFor="lang-select-mobile" className="sr-only">Select Language</label>
                    <select id="lang-select-mobile" onChange={handleLanguageChange} value={language} className="w-full bg-gray-100 border-gray-300 rounded-md py-2 px-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-light">
                        <option value="en">English</option>
                        <option value="ku">کوردی</option>
                    </select>
                </div>
                <Link to="/generator">
                    <Button fullWidth onClick={() => setIsMenuOpen(false)}>{t('startNow')}</Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
