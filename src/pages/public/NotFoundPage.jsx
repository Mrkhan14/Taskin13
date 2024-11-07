import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
   return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
         <div className='text-center'>
            <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
            <p className='text-2xl text-gray-600 mb-8'>Page Not Found</p>
            <div className='flex'>
               <Link
                  to='/'
                  className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'
               >
                  Go to Home
               </Link>

               <Link
                  to='/login'
                  className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ml-4'
               >
                  Go to Login
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NotFoundPage;
