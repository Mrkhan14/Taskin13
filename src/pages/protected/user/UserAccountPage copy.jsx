import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InputComponent from './../../../components/box/InputComponent';
import request from '../../../services/request'; 
// import { CloudUploadIcon } from '@heroicons/react/24/solid'
// import { CloudUploadIcon } from "@heroicons/react/solid";
import { UPLOAD_URL } from '../../../utils/constants';

const UserAccountPage = () => {
   const [loading, setLoading] = useState(false); // Correctly initialize loading and setLoading
   const [btnLoading, setBtnLoading] = useState(false);
   const [photo, setPhoto] = useState(null)
   const [userName, setUserName] = useState([])
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   useEffect(() => {
      const getUserData = async () => {
         try {
            setLoading(true);
            const { data } = await request.get('auth/me');
            reset({ ...data, birthday: data.birthday.split('T')[0] });
            setUserName(data)
            setPhoto( data.photo)
         } catch (error) {
            console.error(error,);
         } finally {
            setLoading(false);
         }
      };
      getUserData();
   }, [reset]);

   const onSubmit =  async (data) => {
      console.log('Form Data:', data);
      
      try {
         setBtnLoading(true)
         await request.put('auth/details', data)
      } catch (error) {
         console.log(error);
      }finally {
            setBtnLoading(false);
         } 
   };
   
   const deletePhoto = async () => {
      await request.delete(`auth/upload/${photo}`)
      setPhoto(null)
   }

   const handlePhotoChange = async (e) => {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      
      const { data } = await request.post('auth/upload', formData);
      
      setPhoto(data)
   }

   return (
      <div className='flex items-center justify-center min-h-[calc(100vh-220px)] py-20'>
         <div className='w-full max-w-3xl'>
            <h1 className='mb-16 text-5xl font-semibold text-center text-primary-600'>
               Account: {userName?.first_name} {userName?.last_name}
            </h1>
            <div className='relative flex flex-col items-center justify-center m-auto mb-10 w-60'>
               {photo ?
                  <img src={`${UPLOAD_URL}${photo}`} alt="" className='w-40 h-40 m-auto rounded-full' />
                  :
                  <label htmlFor='file-upload' className='flex flex-col items-center cursor-pointer'>
                     <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-primary-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                     </svg>

                     <span className='font-medium text-gray-600'>Upload Image</span>
                     <span className='text-sm gray-500 text-'>Upload PNG, JPG, up to 5mg</span>
                     <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className='hidden'
                     />
                  </label>
               }
               
               {photo ?
                  <button
                     onClick={deletePhoto}
                     className='absolute p-1 text-2xl font-medium text-white rounded-full bg-primary-700 top-1 right-10'
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path   strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                     </svg>
                  </button>
               : null}
               
               
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <InputComponent
                  name='first_name'
                  placeholder='First name'
                  register={register}
                  required
               />
               {errors.first_name && (
                  <p className='text-xs italic text-red-500'>
                     First name is required.
                  </p>
               )}

               <InputComponent
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
                  name='info'
                  placeholder='Info'
                  register={register}
               />
               {errors.info && (
                  <p className='text-xs italic text-red-500'>
                     Info is required.
                  </p>
               )}

               <InputComponent
                  name='phoneNumber'
                  placeholder='Phone Number'
                  register={register}
                  required
               />
               {errors.phoneNumber && (
                  <p className='text-xs italic text-red-500'>
                     Phone Number is required.
                  </p>
               )}

               <InputComponent
                  name='birthday'
                  type='date'
                  placeholder='Birthday'
                  register={register}
                  required
               />
               {errors.birthday && (
                  <p className='text-xs italic text-red-500'>
                     Birthday is required.
                  </p>
               )}

               <InputComponent
                  name='address'
                  placeholder='Address'
                  register={register}
                  required
               />
               {errors.address && (
                  <p className='text-xs italic text-red-500'>
                     Address is required.
                  </p>
               )}

               <InputComponent
                  name='email'
                  type='email'
                  placeholder='Email'
                  register={register}
                  required
               />
               {errors.email && (
                  <p className='text-xs italic text-red-500'>
                     Email is required.
                  </p>
               )}

               <button
                  className='bg-[#FFD050] text-2xl font-medium p-4 w-full text-primary-600'
                  type='submit'
                  disabled={btnLoading}
               >
                  {btnLoading ? 'Loading...' : 'Save'}
               </button>
            </form>
         </div>
      </div>
   );
};

export default UserAccountPage;
