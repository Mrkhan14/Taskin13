import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import useAuth from '../../hooks/useAuth';
import InputComponent from './../../components/box/InputComponent';

const RegisterPage = () => {
   const { registerFun, loading } = useAuth();
   const navigate = useNavigate(); // Initialize useNavigate hook
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = data => {
      // data = {}
      // const { first_name, last_name, username, password, role } = data;
      // const formData = new FormData();
      // formData.append('first_name', first_name);
      // formData.append('last_name', last_name);
      // formData.append('username', username);
      // formData.append('password', password);
      // formData.append('role', role);
      // registerFun(formData, navigate);
      registerFun(data, navigate);
      console.log('Form Data:', data);
   };

   return (
      <div className='flex items-center justify-center min-h-[calc(100vh-220px)]'>
         <div className='w-full max-w-3xl'>
            <h1 className='mb-16 text-5xl font-semibold text-center text-primary-600'>
               Register
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <InputComponent
                  // label="FirstName"
                  name='first_name'
                  placeholder='First name'
                  register={register}
                  required
               />
               {errors.first_name && (
                  <p className='text-xs italic text-red-500'>
                     FirstName is required.
                  </p>
               )}

               <InputComponent
                  // label="LastName"
                  name='last_name'
                  placeholder='Last name'
                  register={register}
                  required
               />
               {errors.last_name && (
                  <p className='text-xs italic text-red-500'>
                     Last name is required.
                  </p>
               )}

               <InputComponent
                  // label="Username"
                  name='username'
                  placeholder='Username'
                  register={register}
                  required
               />
               {errors.username && (
                  <p className='text-xs italic text-red-500'>
                     Username is required.
                  </p>
               )}

               <InputComponent
                  // label="Password"
                  name='password'
                  type='password'
                  placeholder='Password'
                  register={register}
                  required
               />
               {errors.password && (
                  <p className='text-xs italic text-red-500'>
                     Password is required.
                  </p>
               )}

               <InputComponent
                  // label="Password"
                  name='passwordConfirm'
                  type='password'
                  placeholder='PasswordConfirm'
                  register={register}
                  required
               />
               {errors.passwordConfirm && (
                  <p className='text-xs italic text-red-500'>
                     PasswordConfirm is required.
                  </p>
               )}

               <InputComponent
                  // label="role"
                  name='role'
                  type='text'
                  placeholder='Role'
                  register={register}
                  required
               />
               {errors.role && (
                  <p className='text-xs italic text-red-500'>
                     Role is required.
                  </p>
               )}

               <button
                  className='bg-[#FFD050] text-2xl font-medium p-4 w-full text-primary-600'
                  type='submit'
                  disabled={loading} // Disable button while loading
               >
                  {loading ? 'Registering...' : 'Register'}
               </button>
            </form>
         </div>
      </div>
   );
};

export default RegisterPage;
