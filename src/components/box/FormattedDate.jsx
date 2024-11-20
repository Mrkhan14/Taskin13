import React from 'react';

const FormattedDate = ({ data, label, className }) => {
   const formattedDate = new Date(data).toLocaleDateString();
   return (
      <div className={className + ' flex text-primary-600 font-bold mt-5'}>
         <p className='mr-2'>{label}</p>
         <div className='opacity-80'> {formattedDate}</div>
      </div>
   );
};

export default FormattedDate;
