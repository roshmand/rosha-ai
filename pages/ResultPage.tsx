import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import { useTranslation } from '../context/LanguageContext';

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const imageUrl = location.state?.imageUrl;

  useEffect(() => {
    if (!imageUrl) {
      navigate('/generator');
    }
  }, [imageUrl, navigate]);

  if (!imageUrl) {
    return null; // or a loading spinner
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'rosha-ai-result.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t('resultTitle')}</h1>
        <p className="text-gray-600 mb-8">{t('resultSubtitle')}</p>
        
        <div className="bg-white p-4 rounded-lg shadow-lg inline-block">
          <img src={imageUrl} alt="Generated ad" className="max-w-full h-auto rounded-md" />
        </div>

        <p className="text-xs text-gray-500 mt-4 italic">{t('resultNote')}</p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button onClick={handleDownload}>{t('downloadButton')}</Button>
          <Link to="/generator">
            <Button variant="secondary">{t('regenerateButton')}</Button>
          </Link>
          <Button variant="secondary" onClick={() => alert(t('shareAlert'))}>{t('shareButton')}</Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default ResultPage;
