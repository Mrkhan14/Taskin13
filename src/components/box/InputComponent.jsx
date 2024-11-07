// import React from 'react';

// const InputComponent = ({ label, name, placeholder, register, required, type }) => {
//   return (
//     <div className="mb-4">
//       <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor={name}>
//         {label}
//       </label>
//       <input
//         className="w-full h-16 p-6 leading-tight text-gray-700 border appearance-none focus:outline-none focus:shadow-outline"
//         id={name}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         {...(register ? register(name, { required }) : {})}
//       />
//     </div>
//   );
// };

// export default InputComponent;

import React from 'react';

const InputComponent = ({label, name, type = 'text', placeholder, register, required }) => {
   return (
     <div className='mb-4'>
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor={name}>
          {label}
        </label>
         <input
            className="w-full h-16 p-6 leading-tight text-gray-700 border appearance-none focus:outline-none focus:shadow-outline"
            name={name}
            type={type}
            placeholder={placeholder}
            // {...register(name, { required })}
            {...(register ? register(name, { required }) : {})}
         />
      </div>
   );
};

export default InputComponent;