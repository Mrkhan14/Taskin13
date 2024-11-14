import React, { Fragment, useEffect, useState } from 'react';
import request from '../../../services/request';
import { LIMIT, USER } from '../../../utils/constants';
import InputComponent from './../../../components/box/InputComponent';
import CartPost from './../../../components/card/CartPost';
import PaginationComponent from './../../../components/pagination/PaginationComponent';

const MyPostPage = () => {
   const [loading, setLoading] = useState(false);
   const [myPosts, setMyPosts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [userId, setUserId] = useState(null);
   const [totalPosts, setTotalPosts] = useState(0);

   useEffect(() => {
      const userID = JSON.parse(localStorage.getItem(USER));
      if (userID) {
         setUserId(userID._id);
      }
   }, []);

   const getMyPosts = async page => {
      if (!userId) return;
      try {
         setLoading(true);
         const response = await request.get(
            `post?user=${userId}&page=${page}&limit=${LIMIT}`
         );
         setMyPosts(response.data.data);
         setTotalPosts(response.data.pagination.total);
      } catch (error) {
         console.error(error);
         setMyPosts([]);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getMyPosts(currentPage);
   }, [userId, currentPage]);

   const totalPages = Math.ceil(totalPosts / LIMIT);

   return (
      <Fragment>
         <div className='pt-10 pb-20'>
            <div className='container'>
               <div className='flex items-center justify-between'>
                  <h1 className='text-5xl font-bold'>My posts</h1>
                  <button
                     className='bg-[#FFD050] text-2xl font-medium p-4 w-48 text-primary-600'
                     type='submit'
                  >
                     Add post
                  </button>
               </div>

               <div className='mt-10 border-t py-14 border-neutral-200'>
                  <InputComponent name='search' placeholder='Search...' />
               </div>

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
