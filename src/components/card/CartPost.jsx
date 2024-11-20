import { Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from '../box/Truncate';
import { getImage } from './../../utils/getPhotoUrl';
// Import your demo image
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
      <div className='grid grid-cols-3 gap-8 pb-8'>
         <div className='object-cover w-full h-[310px] overflow-hidden img-ant'>
            <Image src={getImage(photo)}></Image>
         </div>
         <div className='col-span-2'>
            <div className='mb-5'>{category?.name}</div>
            <div className='mt-5 text-4xl font-bold text-primary-600'>
               {title}
            </div>

            <Truncate text={description} wordLimit={30}></Truncate>

            <div className='mt-8'>
               <Link
                  className='bg-[#FFD050] text-xl font-medium p-2 w-[204px] text-primary-600 mr-4'
                  to={`/blogs/${_id}`}
               >
                  Read More
               </Link>
            </div>
         </div>
      </div>
   );
};

export default CardComponent;
