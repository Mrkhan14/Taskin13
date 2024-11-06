// import React from 'react';

// const MyPostPage = () => {
//    return <div>MyPostPage</div>;
// };

// export default MyPostPage;

import React, { Fragment, useState } from 'react';
import { LIMIT } from '../../../utils/constants';
import InputComponent from './../../../components/box/InputComponent';
import CartPost from './../../../components/card/CartPost';
import PaginationComponent from './../../../components/pagination/PaginationComponent'; // Make sure the path is correct

const MyPostPage = () => {
   const cardData = [
      {
         id: 1,
         image: 'cart1.png',
         category: 'Startup',
         title: 'Design tips for designers that cover everything you need',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
         link: '/post/1',
      },
      {
         id: 2,
         image: 'cart2.png',
         category: 'Business',
         title: 'How to build rapport with your web design clients',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
         link: '/post/2',
      },
      {
         id: 3,
         image: 'cart3.png',
         category: 'Startup',
         title: 'Logo design trends to avoid in 2022',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
         link: '/post/3',
      },
      {
         id: 4,
         image: 'cart4.png',
         category: 'TECHNOLOGY',
         title: '8 Figma design systems you can download for free today',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
         link: '/post/4',
      },
      {
         id: 5,
         image: 'cart1.png',
         category: 'ECONOMY',
         title: 'Font sizes in UI design: The complete guide to follow',
         description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
         link: '/post/4',
      },
   ];

   const [currentPage, setCurrentPage] = useState(1);
   const totalPages = Math.ceil(cardData.length / LIMIT);

   const indexOfLastPost = currentPage * LIMIT;
   const indexOfFirstPost = indexOfLastPost - LIMIT;
   const currentPosts = cardData.slice(indexOfFirstPost, indexOfLastPost);

   return (
      <Fragment>
         {/* itme posts */}
         <div className='pt-10 pb-20'>
            <div className='container'>
               <div className="flex items-center justify-between">
                  <h1 className='text-5xl font-bold '>My posts</h1>
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

               {currentPosts.map((card, index) => (
                  <CartPost {...card} key={index} />
               ))}
            </div>
         </div>

         {/* Pagination */}
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
