import React, { useState } from 'react';

const InputSearch = ({ onSearch }) => {
   const [value, setValue] = useState('');
   const [typingTimeout, setTypingTimeout] = useState(null);

   const handleChange = event => {
      const newValue = event.target.value;
      setValue(newValue);

      // Clear previous timeout
      if (typingTimeout) {
         clearTimeout(typingTimeout);
      }

      // Set new timeout
      const timeout = setTimeout(() => {
         onSearch(newValue);
      }, 1000);

      setTypingTimeout(timeout);
   };

   return (
      <input
         type='text'
         value={value}
         onChange={handleChange}
         placeholder='Search...'
         className='w-full h-16 p-6 leading-tight text-gray-700 border appearance-none focus:outline-none focus:shadow-outline'
      />
   );
};

export default InputSearch;
