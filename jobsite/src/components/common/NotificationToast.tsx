import React from 'react';

interface NotificationToastProps {
  message: string;
  isVisible: boolean;
  isExiting: boolean;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ 
  message, 
  isVisible, 
  isExiting 
}) => {
  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-3 md:gap-4 ${
        isExiting ? 'animate-slide-down' : 'animate-slide-up'
      }`}
    >
      <div className="bg-[#5B5FE6] text-white px-5 md:px-8 py-4 md:py-5 rounded-full text-base md:text-xl font-medium shadow-2xl flex items-center gap-3 md:gap-4">
        {message}
        <div className="bg-white/20 p-2 rounded-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;
