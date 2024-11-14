import React from 'react';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
   const handleClick = page => {
      if (page > 0 && page <= totalPages) {
         onPageChange(page);
      }
   };

   const pages = [];
   for (let i = 1; i <= totalPages; i++) {
      pages.push(
         <button
            key={i}
            onClick={() => handleClick(i)}
            className={`px-3 py-1 border ${
               currentPage === i
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-600'
            }`}
         >
            {i}
         </button>
      );
   }

   return (
      <div className='flex items-center justify-center mt-8 space-x-2'>
         <button
            onClick={() => handleClick(currentPage - 1)}
            className='px-3 py-1 border text-primary-600'
         >
            Prev
         </button>
         {pages}
         <button
            onClick={() => handleClick(currentPage + 1)}
            className='px-3 py-1 border text-primary-600'
         >
            Next
         </button>
      </div>
   );
};

export default PaginationComponent;
