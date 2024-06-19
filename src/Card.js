// src/components/Card.js
import React from 'react';

const Card = ({ image, text }) => {
  return (
    <div className="relative w-[200px] h-[280px] border border-black rounded-md bg-cover bg-center" 
         style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute rounded-sm bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 uppercase font-semibold">
        {text}
      </div>
    </div>
  );
};

export default Card;
