import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import InputComponent from './../../components/box/InputComponent';

const LoginPage = () => {
   const { login, loading } = useAuth();
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = data => {
      login(data, navigate);
   };

   return (
      <div className='flex items-center justify-center min-h-[calc(100vh-220px)]'>
         <div className='w-full max-w-3xl'>
            <h1 className='mb-16 text-5xl font-semibold text-center text-primary-600'>
               Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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

               <button
                  className='bg-[#FFD050] text-2xl font-medium p-4 w-full text-primary-600'
                  type='submit'
                  disabled={loading}
               >
                  {loading ? '...Loading' : 'Sign In'}
               </button>
            </form>
         </div>
      </div>
   );
};

export default LoginPage;
