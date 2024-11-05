import React from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from './../../components/box/InputComponent';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-220px)]">
      <div className="w-full max-w-3xl">
        <h1 className='mb-16 text-5xl font-semibold text-center text-primary-600'>Register</h1>
        <form 
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputComponent 
            // label="FirstName" 
            name="firstName" 
            placeholder="Firstname"
            register={register} 
            required
          />
          {errors.firstName && <p className="text-xs italic text-red-500">FirstName is required.</p>}

          <InputComponent 
            // label="LastName" 
            name="Last name" 
            placeholder="lastName"
            register={register} 
            required
          />
          {errors.lastName && <p className="text-xs italic text-red-500">Last name is required.</p>}
          
          <InputComponent 
            // label="Username" 
            name="username" 
            placeholder="Username"
            register={register} 
            required
          />
          {errors.username && <p className="text-xs italic text-red-500">Username is required.</p>}

          <InputComponent 
            // label="Password" 
            name="password" 
            type="password" 
            placeholder="Password"
            register={register} 
            required
          />
          {errors.password && <p className="text-xs italic text-red-500">Password is required.</p>}

          <InputComponent 
            // label="Password" 
            name="passwordConfirm" 
            type="passwordConfirm" 
            placeholder="PasswordConfirm"
            register={register} 
            required
          />
          {errors.passwordConfirm && <p className="text-xs italic text-red-500">PasswordConfirm is required.</p>}

            <button className="bg-[#FFD050] text-2xl font-medium p-4 w-full text-primary-600" 
              type="submit"
            >
              Register
            </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;