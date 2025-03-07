
import React, { forwardRef } from 'react';

interface ProductImgCardProps {
  photo: string;
}

const ProductImgCard = forwardRef<HTMLDivElement, ProductImgCardProps>(({ photo }, ref) => {
  return (
    <div ref={ref}  >
      <div className="card h-[80%] w-md bg-amber-400">
        <img className="h-full w-full object-cover" src={photo} alt="" />
      </div>
    </div>
  );
});

export default ProductImgCard;