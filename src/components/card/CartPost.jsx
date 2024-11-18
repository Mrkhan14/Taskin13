import React from 'react';
import { Link } from 'react-router-dom';
import { UPLOAD_URL } from '../../utils/constants';
import demoImage from '../../../public/cart1.png';
import { getImage } from './../../utils/getPhotoUrl';// Import your demo image
import {
   Image,
} from 'antd';
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
      <div className="object-cover w-full h-[310px] overflow-hidden img-ant">
        <Image  src={getImage(photo)}></Image>
      </div>
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
