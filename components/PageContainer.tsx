
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
