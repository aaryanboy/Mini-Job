import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, variant = 'outline', className = '' }) => {
  const variants = {
    primary: 'bg-[#E8E8F5] text-[#5B5FE6]',
    outline: 'bg-[#3D57DA]/10 text-[#3D57DA] border-none',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-s font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
