import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center flex-1 select-none">
      <span className="bg-[#E8E8F5] text-[#5B5FE6] px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-3 whitespace-nowrap">
        {label}
      </span>
      <span className="text-2xl md:text-4xl font-bold text-gray-900">{value}</span>
    </div>
  );
};

export default StatCard;
