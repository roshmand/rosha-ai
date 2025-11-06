import React, { useState, useCallback, useRef } from 'react';
import { UploadIcon } from '../constants';
import { UploadedFile } from '../types';
import { useTranslation } from '../context/LanguageContext';

interface UploadBoxProps {
  onFileUploaded: (file: UploadedFile) => void;
}

const UploadBox: React.FC<UploadBoxProps> = ({ onFileUploaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const handleFile = useCallback((file: File) => {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        onFileUploaded({
          base64: base64.split(',')[1],
          name: file.name,
          type: file.type,
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid JPG or PNG image.');
    }
  }, [onFileUploaded]);

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };
  
  const onClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      className={`relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200
        ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300 bg-white hover:border-primary/50 hover:bg-gray-50'}`}
    >
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/jpeg, image/png"
        onChange={onFileChange}
      />
      <UploadIcon className="w-12 h-12 text-gray-400 mb-4" />
      <p className="text-lg font-semibold text-gray-700">{t('uploadBoxTitle')}</p>
      <p className="text-sm text-gray-500">{t('uploadBoxSubtitle')}</p>
      <p className="text-xs text-gray-400 mt-2">{t('uploadBoxSupports')}</p>
    </div>
  );
};

export default UploadBox;
