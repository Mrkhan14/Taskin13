import React from 'react';
import { Link } from 'react-router-dom';
import { UPLOAD_URL } from '../../utils/constants';
import demoImage from '../../../public/cart1.png'; // Import your demo image

const CardComponent = ({
  image,
  category,
  title,
  description,
  photo,
  user,
  link,
  name,
  _id,
}) => {
  return (
    <Link to={`/blogs/${_id}`} className='grid grid-cols-3 gap-8 pb-8'>
      <img
        src={`${UPLOAD_URL}${user?.photo}`}
        alt={photo?.name}
        className='object-cover w-full h-[310px]'
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = demoImage;
        }}
      />
      <div className='col-span-2'>
        <div className='mb-5'>{category?.name}</div>
        <div className='mt-5 text-4xl font-bold text-primary-600'>
          {title}
        </div>
        <div className='mt-5'>{description}</div>
      </div>
    </Link>
  );
};

export default CardComponent;
