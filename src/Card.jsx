import React from 'react';

const Card = ({ imageUrl, imageAlt, buttonText, onButtonClick }) => {
  return (
    <div className="border-4 border-white p-4 sm:p-6 flex flex-col justify-between bg-primary w-full max-w-[400px]" role="article">
      <div className="flex items-center justify-center flex-grow">
        <div className="h-100 w-full flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="max-h-60 max-w-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button 
          onClick={onButtonClick}
          className="border-2 border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          aria-label={`Gå till ${buttonText}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};


export default Card;