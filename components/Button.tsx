import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 font-nav text-sm font-medium tracking-[2px] uppercase transition-all duration-300 ease-out cursor-pointer active:transform-none";
  
  const variants = {
    primary: "bg-terracotta text-warmWhite hover:bg-terracotta-dark hover:-translate-y-0.5 hover:shadow-lg border border-transparent",
    secondary: "bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-warmWhite",
    ghost: "bg-transparent text-forest border border-driftwood hover:border-forest hover:bg-forest hover:text-warmWhite",
    light: "bg-warmWhite text-forest hover:bg-cream hover:shadow-md border border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};