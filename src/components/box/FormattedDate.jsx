import React from 'react';

const FormattedDate = ({ createdAt, label }) => {
   const formattedDate = new Date(createdAt).toLocaleDateString();
   return (
      <div className='flex text-primary-600 font-bold mt-5'>
         <p className='mr-2'>{label}:</p>
         <div className='opacity-80'> {formattedDate}</div>
      </div>
   );
};

export default FormattedDate;
