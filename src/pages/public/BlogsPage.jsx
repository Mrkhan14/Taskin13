import React, { Fragment, useEffect, useState } from 'react';
import request from '../../services/request';
import InputSearch from './../../components/box/InputSearch';
import CartPost from './../../components/card/CartPost';
import PaginationComponent from './../../components/pagination/PaginationComponent';
import { LIMIT } from './../../utils/constants';

const MyPostPage = () => {
   const [loading, setLoading] = useState(false);
   const [myPosts, setMyPosts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPosts, setTotalPosts] = useState(0);
   const [searchQuery, setSearchQuery] = useState('');

   const getMyPosts = async (page, query = '') => {
      try {
         setLoading(true);
         const response = await request.get(
            `post?page=${page}&limit=${LIMIT}&search=${query}`
         );
         setMyPosts(response.data.data);
         setTotalPosts(response.data.pagination.total);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getMyPosts(currentPage, searchQuery);
   }, [currentPage, searchQuery]);

   const handleSearch = query => {
      setSearchQuery(query);
      setCurrentPage(1); // Reset to the first page when a new search is made
   };

   const totalPages = Math.ceil(totalPosts / LIMIT);

   return (
      <Fragment>
         <div className='container'>
            <div className='border-b py-14 border-neutral-200'>
               <InputSearch onSearch={handleSearch} />
            </div>
         </div>

         <div className='pb-20'>
            <div className='container'>
               <h1 className='my-8 text-4xl font-bold'>All posts</h1>

               {loading ? (
                  <p>Loading...</p>
               ) : (
                  myPosts.map((myPost, index) => (
                     <CartPost {...myPost} key={index} />
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

export default MyPostPage;
