import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormattedDate from '../../components/box/FormattedDate';
import Truncate from '../../components/box/Truncate';
import CategoryCarousel from '../../components/card/CategoryCarousel';
import request from '../../services/request';

const HomePage = () => {
   const [loading, setLoading] = useState(false);
   const [lastOne, setLastOne] = useState(null);
   const [categories, setCategories] = useState([]);

   const getLastOne = async () => {
      try {
         setLoading(true);
         const res = await request.get('post/lastone');
         setLastOne(res.data);
      } finally {
         setLoading(false);
      }
   };

   const getCategory = async () => {
      try {
         setLoading(true);
         const res = await request.get('category');
         setCategories(res.data.data);
      } finally {
         setLoading(false);
      }
   };
   useEffect(() => {
      getLastOne();
      getCategory();
   }, []);

   return (
      <Fragment>
         {/* Existing content */}
         <div className='relative top-block w-full h-[calc(100vh-80px)]'>
            <img
               src='homeSlider.png'
               className='w-full h-[calc(100vh-80px)] object-cover absolute z-10 -scale-x-100'
               alt=''
            />

            <div className='absolute inset-0 z-20 bg-black opacity-40 '></div>

            <div className='relative z-30 pt-36'>
               <div className='container'>
                  <div className='text-white'>Posted on startup</div>
                  <div className='text-white text-[56px] font-bold w-[800px] my-8'>
                     {lastOne?.title}
                  </div>
                  <div className='my-8 text-white flex items-center'>
                     By
                     <span className='text-yellow-400 mx-3'>
                        {lastOne?.user?.first_name} {lastOne?.user?.last_name}
                     </span>
                     |
                     <FormattedDate
                        className='!mt-0'
                        data={lastOne?.createdAt}
                     ></FormattedDate>
                  </div>
                  <div className='mb-8 text-white'>
                     {lastOne?.description && (
                        <Truncate
                           text={lastOne.description}
                           wordLimit={20}
                        ></Truncate>
                     )}
                  </div>
                  <Link
                     className='bg-[#FFD050] text-2xl font-medium p-4 w-[204px] text-primary-600'
                     to={`/blogs/${lastOne?._id}`}
                  >
                     Read More
                  </Link>
               </div>
            </div>
         </div>

         {/* Popular blogs */}
         <div className='pt-20 home-cart'>
            <div className='container'>
               <h1 className='pb-8 text-3xl font-bold'>Popular blogs</h1>
               <div className='grid grid-cols-3 gap-6 pb-16 border-b border-neutral-200'>
                  <div>
                     <img
                        src='cart1.png'
                        className='w-full object-cover  h-[310px]'
                        alt=''
                     />
                     <div className='mt-5'>By John Doe l Aug 23, 2021 </div>
                     <div className='mt-5 text-3xl font-bold text-primary-600'>
                        A UX Case Study Creating a Studious Environment for
                        Students:{' '}
                     </div>
                     <div className='mt-5'>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                     </div>
                  </div>
                  <div>
                     <img
                        src='cart2.png'
                        className=' object-cover w-full h-[310px]'
                        alt=''
                     />
                     <div className='mt-5'>By John Doe l Aug 23, 2021 </div>
                     <div className='mt-5 text-3xl font-bold text-primary-600'>
                        A UX Case Study Creating a Studious Environment for
                        Students:{' '}
                     </div>
                     <div className='mt-5'>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                     </div>
                  </div>
                  <div>
                     <img
                        src='cart3.png'
                        className=' object-cover w-full h-[310px]'
                        alt=''
                     />
                     <div className='mt-5'>By John Doe l Aug 23, 2021 </div>
                     <div className='mt-5 text-3xl font-bold text-primary-600'>
                        A UX Case Study Creating a Studious Environment for
                        Students:{' '}
                     </div>
                     <div className='mt-5'>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Category */}
         <div className='py-20 home-Catagory'>
            <div className='container'>
               <h1 className='pb-10 text-3xl font-bold text-center'>
                  Choose A Category
               </h1>
               <CategoryCarousel categories={categories} />
            </div>
         </div>
      </Fragment>
   );
};

export default HomePage;
