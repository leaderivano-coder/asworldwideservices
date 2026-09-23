import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenInquiry }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Automatically show when scrolled past 350px
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position in case page was reloaded midway
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Blue Circular Back to Top Button (directly above Let's Talk, as in reference) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className={`pointer-events-auto w-11 h-11 rounded-full bg-[#1865F2] hover:bg-[#1253C9] text-white shadow-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 text-white stroke-[2.5]" />
      </button>

      {/* Vibrant Green "Let's Talk" Floating Pill with White Speech Bubble & Red '1' Notification Badge */}
      <button
        type="button"
        onClick={() => onOpenInquiry()}
        aria-label="Let's Talk with A'S Worldwide team"
        className="pointer-events-auto group inline-flex items-center gap-2.5 bg-[#00D26A] hover:bg-[#00BD5E] active:bg-[#00A853] text-white pl-3.5 pr-4.5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,210,106,0.45)] hover:shadow-[0_6px_20px_rgba(0,210,106,0.55)] transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
      >
        {/* Solid white speech bubble icon with red circular '1' badge */}
        <div className="relative flex items-center justify-center">
          <svg
            className="w-5 h-5 fill-white text-white drop-shadow-xs"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3c-4.97 0-9 3.58-9 8 0 1.68.59 3.23 1.62 4.51L3.5 20.5l5.22-1.3c1.02.51 2.12.8 3.28.8 4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
          </svg>

          {/* Red notification badge with number '1' */}
          <span className="absolute -top-1.5 -right-1.5 min-w-[17px] h-[17px] px-1 bg-[#E60021] text-white text-[10px] font-black rounded-full flex items-center justify-center ring-2 ring-white shadow-xs leading-none">
            1
          </span>
        </div>

        {/* Text */}
        <span className="text-[15px] font-bold tracking-tight text-white select-none">
          Let’s Talk
        </span>
      </button>
    </div>
  );
};

