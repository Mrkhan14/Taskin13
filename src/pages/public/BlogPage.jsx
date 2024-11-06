import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
   const { id } = useParams();
   return (
      <Fragment>
         <div className='pt-14 pb-32'>
            <div className='container'>
               <div>Blog Page ID {id}</div>

               <img
                  src='../../../public/cart2.png'
                  className='w-full object-cover h-[512px]'
                  alt=''
               />

               <div className='w-full max-w-3xl m-auto'>
                  <div className='flex mt-14'>
                     <img
                        src='../../../public/avatar.png'
                        alt=''
                        className='w-14 h-14 rounded-full object-cover mr-3'
                     />
                     <div>
                        <span>Andrew Jonson</span>
                        <p>Posted on 27th January 2022</p>
                     </div>
                  </div>

                  <div className='text-6xl font-bold mt-8 text-primary-600'>
                     Step-by-step guide to choosing great font pairs
                  </div>

                  <div className='mt-14 text-primary-600'>
                     Startup (#business, #screen, #life)
                  </div>

                  <p className='mt-8 text-primary-600 opacity-50'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Non blandit massa enim nec. Scelerisque viverra
                     mauris in aliquam sem. At risus viverra adipiscing at in
                     tellus. Sociis natoque penatibus et magnis dis parturient
                     montes. Ridiculus mus mauris vitae ultricies leo. Neque
                     egestas congue quisque egestas diam. Risus in hendrerit
                     gravida rutrum quisque non.
                  </p>

                  <p className='mt-8 text-primary-600 opacity-50'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Non blandit massa enim nec. Scelerisque viverra
                     mauris in aliquam sem. At risus viverra adipiscing at in
                     tellus. Sociis natoque penatibus et magnis dis parturient
                     montes. Ridiculus mus mauris vitae ultricies leo. Neque
                     egestas congue quisque egestas diam. Risus in hendrerit
                     gravida rutrum quisque non.
                  </p>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default BlogPage;
