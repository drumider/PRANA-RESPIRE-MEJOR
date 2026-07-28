import React, { useState } from 'react';

interface PranaLogoProps {
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const PranaLogo: React.FC<PranaLogoProps> = ({
  variant = 'full',
  size = 'md',
}) => {
  const [logoError, setLogoError] = useState(false);
  const [logoSrcIndex, setLogoSrcIndex] = useState(0);
  const logoSources = [
    '/logo/logo.png',
    '/logo/logo.svg',
    '/logo/logo.jpg',
    '/logo/logo.PNG',
    '/logo/prana-logo.png',
    '/LOGO/logo.png',
    '/LOGO/logo.PNG',
    '/LOGO/logo.jpg',
    '/LOGO/logo.JPG',
    '/LOGO/logo.jpeg',
    '/LOGO/logo.svg',
  ];

  const handleLogoError = () => {
    if (logoSrcIndex < logoSources.length - 1) {
      setLogoSrcIndex((prev) => prev + 1);
    } else {
      setLogoError(true);
    }
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const logoImageSizes = {
    sm: 'h-8 md:h-10 max-w-[160px]',
    md: 'h-10 md:h-12 max-w-[200px]',
    lg: 'h-14 md:h-16 max-w-[260px]',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';

  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Custom Logo Image from /LOGO/ if uploaded, otherwise fallback vector */}
      {!logoError ? (
        <img
          src={logoSources[logoSrcIndex]}
          alt="Prana Logo"
          onError={handleLogoError}
          className={`object-contain ${logoImageSizes[size]} w-auto transition-all duration-300 group-hover:scale-105`}
        />
      ) : (
        <div className="flex items-center gap-3">
          {/* Stylized Lungs SVG with Heart in Center */}
          <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Trachea & Main Bronchi */}
              <path
                d="M50 12V38M50 38C46 44 38 48 28 50M50 38C54 44 62 48 72 50"
                stroke="#29ABE2"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Left Lung Outline */}
              <path
                d="M26 30C16 34 10 45 10 60C10 76 22 88 36 88C42 88 45 82 45 74C45 62 36 52 32 46C28 40 28 32 26 30Z"
                fill="url(#leftLungGrad)"
                opacity="0.9"
              />

              {/* Right Lung Outline */}
              <path
                d="M74 30C84 34 90 45 90 60C90 76 78 88 64 88C58 88 55 82 55 74C55 62 64 52 68 46C72 40 72 32 74 30Z"
                fill="url(#rightLungGrad)"
                opacity="0.9"
              />

              {/* Heart in Center */}
              <path
                d="M50 63C50 63 41 55 41 48.5C41 44.5 44 42 47 42C48.8 42 50 43.5 50 43.5C50 43.5 51.2 42 53 42C56 42 59 44.5 59 48.5C59 55 50 63 50 63Z"
                fill="#E11D48"
                className="animate-pulse"
              />

              {/* Air Flow Accents */}
              <circle cx="50" cy="12" r="3" fill="#1BB5C4" />
              <circle cx="50" cy="22" r="2.5" fill="#29ABE2" />

              {/* Gradients */}
              <defs>
                <linearGradient id="leftLungGrad" x1="10" y1="30" x2="45" y2="88" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1BB5C4" />
                  <stop offset="100%" stopColor="#29ABE2" />
                </linearGradient>
                <linearGradient id="rightLungGrad" x1="90" y1="30" x2="55" y2="88" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#29ABE2" />
                  <stop offset="100%" stopColor="#1BB5C4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Brand Text */}
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-tight ${textSizes[size]} ${textColor} leading-none`}>
              Prana
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
          </div>
        </div>
      )}
    </div>
  );
};

