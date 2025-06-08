import React from 'react';

const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`px-4 md:px-8 max-w-7xl mx-auto w-full mb-24 ${className}`}>
      <div className="flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
