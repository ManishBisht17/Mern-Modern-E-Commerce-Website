import React from 'react';

interface OptionImgCardProps {
  photo: string;
  onClick?: () => void;
  isActive?: boolean;
}

const OptionImgCard = ({ photo, onClick, isActive = false }: OptionImgCardProps) => {
  return (
    <div 
      className={`h-28 w-20 cursor-pointer transition-all ${isActive ? 'border-2 border-amber-500 scale-105' : ''}`}
      onClick={onClick}
    >
      <img className="h-full w-full object-cover" src={photo} alt="" />
    </div>
  );
};

export default OptionImgCard;