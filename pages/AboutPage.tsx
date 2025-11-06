import React from 'react';
import PageContainer from '../components/PageContainer';
import { useTranslation } from '../context/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">{t('aboutTitle')}</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t('aboutP1') }} />
          <p>{t('aboutP2')}</p>
          <p>{t('aboutP3')}</p>
          <p>{t('aboutP4')}</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
