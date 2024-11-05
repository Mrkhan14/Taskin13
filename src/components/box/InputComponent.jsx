import React from 'react';

const InputComponent = ({ label, name, placeholder, register, required }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full h-16 p-6 leading-tight text-gray-700 border appearance-none focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        {...(register ? register(name, { required }) : {})}
      />
    </div>
  );
};

export default InputComponent;
