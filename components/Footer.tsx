import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/about" className="text-sm hover:text-primary transition-colors">{t('footerAbout')}</Link>
          <a href="#" className="text-sm hover:text-primary transition-colors">{t('footerPrivacy')}</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">{t('footerContact')}</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Rosha AI. {t('footerRights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
