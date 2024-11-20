import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../services/request';
import InputSearch from './../../components/box/InputSearch';
import CartPost from './../../components/card/CartPost';
import PaginationComponent from './../../components/pagination/PaginationComponent';
import { LIMIT } from './../../utils/constants';

const CategoryPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [categories, setCategories] = useState([]);
   const [infoCategory, setInfoCategory] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPosts, setTotalPosts] = useState(0);
   const [searchQuery, setSearchQuery] = useState('');

   const getCategory = async (page, query = '') => {
      try {
         setLoading(true);
         const response = await request.get(
            `post?category=${id}&page=${page}&limit=${LIMIT}&search=${query}`
         );
         setCategories(response.data.data);
         setTotalPosts(response.data.pagination.total);
      } finally {
         setLoading(false);
      }
   };

   const getInfoCategory = async () => {
      try {
         setLoading(true);
         const response = await request.get(`category/${id}`);
         setInfoCategory(response.data);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getInfoCategory();
      getCategory(currentPage, searchQuery);
   }, [currentPage, searchQuery]);

   const handleSearch = query => {
      setSearchQuery(query);
      setCurrentPage(1); // Reset to the first page when a new search is made
   };

   const totalPages = Math.ceil(totalPosts / LIMIT);

   return (
      <Fragment>
         {/* top-block */}
         <div className='bg-primary-500'>
            <div className='container'>
               <div className='flex h-[348px] flex-col items-center justify-center'>
                  <div className='mb-5 text-4xl font-bold text-primary-600'>
                     {infoCategory?.name}
                  </div>
                  <div className='mb-5 text-center opacity-50 text-primary-600'>
                     {infoCategory?.description}
                  </div>
                  <div className='text-2xl text-primary-600'>
                     Blog / {infoCategory?.name}
                  </div>
               </div>
            </div>
         </div>

         <div className='container mt-8'>
            <InputSearch onSearch={handleSearch} />
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
