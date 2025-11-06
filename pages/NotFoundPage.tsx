import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import { useTranslation } from '../context/LanguageContext';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">{t('notFoundTitle')}</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('notFoundSubtitle')}</h2>
        <p className="mt-6 text-base leading-7 text-gray-600">{t('notFoundDesc')}</p>
        <div className="mt-10">
          <Link to="/">
            <Button>{t('notFoundButton')}</Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
