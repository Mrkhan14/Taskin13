import React, { Fragment, useState } from 'react'
import {useDispatch , useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import useCounter from '../../redux/hooks/counter';
// import { decrease, increase } from '../../redux/actions/counter';

const HomePage = () => {
  // const dispatch = useDispatch();
  // const {value1} = useCounter();

  // const dec = () => {
  //   dispatch(decrease);
  // };

  // const inc = () => {
  //   dispatch(increase);
  // };

  return (
    <Fragment>
      {/* <button onClick={() => dec(7)}>-</button>
      <span>{value1}</span>
      <button onClick={() => inc(7)}>+</button> */}
      
      <div className="relative top-block w-full h-[calc(100vh-80px)]">
        <img src="homeSlider.png" className='w-full h-[calc(100vh-80px)] object-cover absolute z-10 -scale-x-100' alt="" />

        <div className="absolute inset-0 z-20 bg-black opacity-40 "></div>
        
        <div className='relative z-30 pt-36'> 
          <div className="container">
          
            <div className='text-white'>Posted on startup</div>
            
            <div className='text-white text-[56px] font-bold w-[800px] my-8'>Step-by-step guide to choosing great font pairs</div>
            
            <div className='my-8 text-white'>By <span className='text-yellow-400'>James West</span>  |  May 23, 2022 </div>
            
            <div className='mb-8 text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
          
            <button className="bg-[#FFD050] text-2xl font-medium p-4 w-[204px] text-primary-600" 
                type="submit"
              >
                Read More
              </button>
          </div>  
        </div>
      </div>

      {/* Popular blogs */}
      <div className="pt-20 home-cart">
        <div className="container">
          <h1 className='pb-8 text-3xl font-bold'>Popular blogs</h1>
          <div className="grid grid-cols-3 gap-6 pb-16 border-b border-neutral-200">
            <div>
              <img src="cart1.png" className='w-full object-cover  h-[310px]' alt="" />
              
              <div className='mt-5'>By John Doe   l   Aug 23, 2021 </div>

              <div className='mt-5 text-3xl font-bold text-primary-600'>A UX Case Study Creating a Studious Environment for Students: </div>
              
              <div className='mt-5'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </div>
            </div>

            <div>
              <img src="cart2.png" className=' object-cover w-full h-[310px]' alt="" />
              
              <div className='mt-5'>By John Doe   l   Aug 23, 2021 </div>

              <div className='mt-5 text-3xl font-bold text-primary-600'>A UX Case Study Creating a Studious Environment for Students: </div>
              
              <div className='mt-5'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </div>
            </div>

            <div>
              <img src="cart3.png" className=' object-cover w-full h-[310px]' alt="" />
              
              <div className='mt-5'>By John Doe   l   Aug 23, 2021 </div>

              <div className='mt-5 text-3xl font-bold text-primary-600'>A UX Case Study Creating a Studious Environment for Students: </div>
              
              <div className='mt-5'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Catagory */}
      <div className="py-20 home-Catagory">
        <div className="container">

          <h1 className='pb-10 text-3xl font-bold text-center'>Choose A Catagory</h1>

          <div className="grid grid-cols-4 gap-4">
            <Link to='/category' className="flex flex-col justify-center p-8 border border-neutral-200 hover:bg-primary-700">
              <div className='pb-4 text-3xl font-bold text-primary-600'>Business</div>
              <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
            </Link>
            
            <Link to='/category' className="flex flex-col justify-center p-8 border border-neutral-200 hover:bg-primary-700">
              <div className='pb-4 text-3xl font-bold text-primary-600'>Startup</div>
              <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
            </Link>

            <Link to='/category' className="flex flex-col justify-center p-8 border border-neutral-200 hover:bg-primary-700">
              <div className='pb-4 text-3xl font-bold text-primary-600'>Economy</div>
              <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
            </Link>

            <Link to='/category' className="flex flex-col justify-center p-8 border border-neutral-200 hover:bg-primary-700">
              <div className='pb-4 text-3xl font-bold text-primary-600'>Technology</div>
              <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
            </Link>
          </div>
          
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage