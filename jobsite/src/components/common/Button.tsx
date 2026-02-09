import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'nav' | 'navActive';
  width?: string;
  height?: string;
  text?: string;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  width = 'auto',
  height = 'auto',
  text = 'auto',
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-full font-medium transition-all duration-200 flex items-center justify-center';

  const variants = {
    primary: 'bg-[#5B5FE6] text-white hover:bg-[#E8E8F5] hover:text-[#5B5FE6] active:bg-[#d8d8e5]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-[#5B5FE6] text-[#5B5FE6] hover:bg-[#5B5FE6] hover:text-white',
    nav: 'text-white/80 hover:text-white hover:bg-[#E8E8F5]/20',
    navActive: 'bg-[#E8E8F5]/20 text-white',
  };

  const style = {
    width: width,
    height: height,
    fontSize: text,
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Don't spread ...props here as they are button-specific attributes
    return (
      <Link to={href} className={combinedClassName} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
