import React from 'react';
import PageContainer from '../components/PageContainer';
import { GALLERY_IMAGES } from '../constants';
import { useTranslation } from '../context/LanguageContext';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary">{t('galleryTitle')}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          {t('gallerySubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {GALLERY_IMAGES.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">{t('galleryLabel', image.seconds)}</p>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default GalleryPage;
