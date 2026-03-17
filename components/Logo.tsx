
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant }) => {
  // We apply a CSS filter to turn the logo white for the light variant (dark background)
  // Assuming the uploaded logo.png is the dark/forest color.
  const filterStyle = variant === 'light' 
    ? { filter: 'brightness(0) invert(1)' } 
    : undefined;
  
  return (
    <div className={`${className} inline-block select-none`}>
      <img 
        src="/logo.png" 
        alt="Portland Picture Co." 
        className="w-full h-full object-contain"
        style={filterStyle}
        onError={(e) => {
          // Fallback text if image fails to load
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'border', 'border-dashed', 'border-forest');
          if (e.currentTarget.parentElement) {
            e.currentTarget.parentElement.innerText = 'Upload logo.png';
          }
        }}
      />
    </div>
  );
};
