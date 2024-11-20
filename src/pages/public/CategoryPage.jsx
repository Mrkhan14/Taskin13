import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../services/request';
import InputComponent from './../../components/box/InputComponent';
import CartPost from './../../components/card/CartPost';
import PaginationComponent from './../../components/pagination/PaginationComponent';
import { LIMIT } from './../../utils/constants';

const CategoryPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [categories, setCategories] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPosts, setTotalPosts] = useState(0);

   const getCategory = async page => {
      try {
         setLoading(true);
         const response = await request.get(
            `post?category=${id}&page=${page}&limit=${LIMIT}`
         );
         setCategories(response.data.data);
         setTotalPosts(response.data.pagination.total);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getCategory(currentPage);
   }, [currentPage]);

   const totalPages = Math.ceil(totalPosts / LIMIT);

   return (
      <Fragment>
         {/* top-block */}
         <div className='bg-primary-500'>
            <div className='container'>
               <div className='flex h-[348px] flex-col items-center justify-center'>
                  <div className='mb-5 text-4xl font-bold text-primary-600'>
                     Business
                  </div>
                  <div className='mb-5 text-center opacity-50 text-primary-600'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do <br /> eiusmod tempor incididunt ut labore.
                  </div>
                  <div className='text-2xl text-primary-600'>
                     Blog / Business
                  </div>
               </div>
            </div>
         </div>

         {/* InputComponent for Searching */}
         <div className='container mt-8'>
            <InputComponent name='search' placeholder='Search...' />
         </div>

         <div className='pb-20'>
            <div className='container'>
               <h1 className='my-8 text-4xl font-bold'>All posts</h1>

               {loading ? (
                  <p>Loading...</p>
               ) : (
                  categories.map((item, index) => (
                     <CartPost {...item} key={index} />
                  ))
               )}
            </div>
         </div>

         <div className='container mb-20'>
            <PaginationComponent
               currentPage={currentPage}
               totalPages={totalPages}
               onPageChange={setCurrentPage}
            />
         </div>
      </Fragment>
   );
};

export default CategoryPage;
