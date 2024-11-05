import React from 'react';
import { Link } from 'react-router-dom';

const CardComponent = ({ image, category, title, description, link }) => {
  return (
    <Link to={link} className="grid grid-cols-3 gap-8 pb-8">
      <img src={image} className='object-cover w-full h-[310px]' alt={title} />
      <div className="col-span-2">
        <div className='mb-5'>{category}</div>
        <div className='mt-5 text-4xl font-bold text-primary-600'>{title}</div>
        <div className='mt-5'>
          {description}
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
