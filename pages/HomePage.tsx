import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import { BrainIcon, ProductIcon, BoltIcon } from '../constants';
import { useTranslation } from '../context/LanguageContext';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center h-full">
    <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight">
          {t('homeHeroTitle1')}
          <span className="block text-primary">{t('homeHeroTitle2')}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          {t('homeHeroSubtitle')}
        </p>
        <div className="mt-8">
          <Link to="/generator">
            <Button className="text-lg px-8 py-4">{t('homeUploadButton')}</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <FeatureCard 
                  icon={<BrainIcon className="w-8 h-8" />}
                  title={t('feature1Title')}
                  description={t('feature1Desc')}
              />
              <FeatureCard 
                  icon={<ProductIcon className="w-8 h-8" />}
                  title={t('feature2Title')}
                  description={t('feature2Desc')}
              />
              <FeatureCard 
                  icon={<BoltIcon className="w-8 h-8" />}
                  title={t('feature3Title')}
                  description={t('feature3Desc')}
              />
          </div>
      </section>
    </PageContainer>
  );
};

export default HomePage;
