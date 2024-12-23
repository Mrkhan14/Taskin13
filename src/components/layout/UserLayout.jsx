import React, { Fragment } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserLayout = () => {
   const { logout, user } = useAuth();
   const navigate = useNavigate(); // Get the navigate function

   const logoutFon = () => {
      logout(navigate); // Pass the navigate function to logout
   };

   return (
      <Fragment>
         <header className='2 bg-primary-600'>
            <div className='container'>
               <div className='flex items-center py-4'>
                  {user && user.role === 'user' ? (
                     <Link
                        to='/myPost'
                        className='flex-1 text-xl font-bold text-white login'
                     >
                        My Blocks
                     </Link>
                  ) : (
                     <Link
                        to='/'
                        className='flex-1 text-xl font-bold text-white login'
                     >
                        Finsweet
                     </Link>
                  )}

                  <ul className='flex items-center'>
                     <li className='ml-8'>
                        <NavLink
                           to='/'
                           className='text-sm text-white nav-link hover:text-primary-700'
                        >
                           Home
                        </NavLink>
                     </li>
                     <li className='ml-8'>
                        <NavLink
                           to='/blogs'
                           className='text-sm text-white nav-link hover:text-primary-700'
                        >
                           Blog
                        </NavLink>
                     </li>
                     <li className='ml-8'>
                        <NavLink
                           to='/about'
                           className='text-sm text-white nav-link hover:text-primary-700'
                        >
                           About Us
                        </NavLink>
                     </li>
                     <li className='ml-8'>
                        <NavLink
                           to='/register'
                           className='text-sm text-white nav-link hover:text-primary-700'
                        >
                           Register
                        </NavLink>
                     </li>

                     {user && user.role === 'admin' ? (
                        <li className='ml-10'>
                           <NavLink
                              to='/admin-account'
                              className='px-12 py-4 text-sm bg-white text-primary-600'
                           >
                              Account Admin
                           </NavLink>
                        </li>
                     ) : user && user.role === 'user' ? (
                        <Fragment>      
                           <li className='ml-10'>
                              <NavLink
                                 to='/user-account'
                                 className='px-12 py-4 text-sm bg-white text-primary-600'
                              >
                                 Account User
                              </NavLink>
                           </li>
                           
                           <li className='ml-10'>
                              <button
                                 onClick={logoutFon}
                                 className='flex px-3 py-3 text-sm border text-primary-700 border-primary-700'
                              >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 rotate-180 size-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>
                                    Logout

                              </button>
                           </li>
                        </Fragment>
                     ) : (
                        <li className='ml-10'>
                           <NavLink
                              to='/login'
                              className='px-12 py-4 m-0 text-sm bg-white text-primary-600'
                           >
                              Login
                           </NavLink>
                        </li>
                     )}
                  </ul>
               </div>
            </div>
         </header>
         <main className='min-h-[calc(100vh-220px)]'>
            <Outlet />
         </main>
         <footer className='flex flex-col justify-center bg-primary-600 min-h-40 max-h-40'>
            <div className='container'>
               <div className=''>
                  <div className='text-white opacity-50'>
                     Finstreet 118 2561 Fintown
                  </div>
                  <span className='text-white opacity-50'>
                     Hello@finsweet.com 020 7993 2905
                  </span>
               </div>
            </div>
         </footer>
      </Fragment>
   );
};

export default UserLayout;
