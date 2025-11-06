import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdType, AdStyle, UploadedFile } from '../types';
import { generateAdImage } from '../services/geminiService';
import PageContainer from '../components/PageContainer';
import UploadBox from '../components/UploadBox';
import Button from '../components/Button';
import { useTranslation } from '../context/LanguageContext';

const OptionButton: React.FC<{
  label: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ label, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200 w-full
      ${isSelected ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
  >
    {label}
  </button>
);

const GeneratorPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [adType, setAdType] = useState<AdType>(AdType.ProductOnly);
  const [adStyle, setAdStyle] = useState<AdStyle>(AdStyle.Instagram);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGenerate = async () => {
    if (!uploadedFile) {
      setError(t('errorUpload'));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const generatedImageBase64 = await generateAdImage(
        uploadedFile.base64,
        uploadedFile.type,
        adType,
        adStyle
      );
      navigate('/result', { state: { imageUrl: `data:image/png;base64,${generatedImageBase64}` } });
    } catch (err) {
      console.error(err);
      setError(t('errorGenerate'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-2">{t('generatorTitle')}</h1>
        <p className="text-center text-gray-600 mb-8">{t('generatorSubtitle')}</p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Upload & Preview */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-secondary border-b pb-2">{t('step1')}</h2>
            {uploadedFile ? (
              <div className="text-center p-4 border rounded-lg bg-white">
                <img
                  src={`data:${uploadedFile.type};base64,${uploadedFile.base64}`}
                  alt="Product preview"
                  className="max-h-64 mx-auto rounded-md shadow-sm"
                />
                <p className="text-sm text-gray-500 mt-2 truncate">{uploadedFile.name}</p>
                <button
                    onClick={() => setUploadedFile(null)}
                    className="mt-2 text-sm text-red-500 hover:underline"
                >
                    {t('removeImage')}
                </button>
              </div>
            ) : (
              <UploadBox onFileUploaded={setUploadedFile} />
            )}
          </div>

          {/* Right Column: Options & Generate */}
          <div className="space-y-6">
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-secondary border-b pb-2">{t('step2')}</h2>
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-2">{t('adType')}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.values(AdType)).map(type => (
                      <OptionButton key={type} label={t(type)} isSelected={adType === type} onClick={() => setAdType(type)} />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-2">{t('adStyle')}</label>
                  <div className="grid grid-cols-3 gap-2">
                     {(Object.values(AdStyle)).map(style => (
                      <OptionButton key={style} label={t(style)} isSelected={adStyle === style} onClick={() => setAdStyle(style)} />
                    ))}
                  </div>
                </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t">
              <h2 className="text-xl font-semibold text-secondary border-b pb-2">{t('step3')}</h2>
              <Button onClick={handleGenerate} disabled={!uploadedFile || isLoading} fullWidth>
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('generatingButton')}
                  </div>
                ) : t('generateButton')}
              </Button>
              {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default GeneratorPage;
