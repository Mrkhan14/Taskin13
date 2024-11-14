import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormattedDate from '../../components/box/FormattedDate';
import { UPLOAD_URL } from '../../utils/constants';
import request from './../../services/request';
const BlogPage = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [post, setPost] = useState([]);

   const getBlogPosts = async id => {
      try {
         setLoading(true);
         const response = await request.get(`post/${id}`);
         setPost(response.data);
      } catch (error) {
         console.error(error);
         setPost([]);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getBlogPosts(id);
   }, [id]);

   return (
      <Fragment>
         <div className='pb-32 pt-14'>
            <div className='container'>
               {/* <div>Blog Page IDs {id}</div> */}

               <img
                  src='../../../public/cart2.png'
                  className='w-full object-cover h-[512px]'
                  alt=''
               />

               <div className='w-full max-w-3xl m-auto'>
                  <div className='flex items-center mt-14'>
                     <div className='mr-4 w-14 h-14 rounded-full border border-black'>
                        <img
                           src={`${UPLOAD_URL}${post?.user?.photo}`}
                           // alt={post?.user?.name}
                           className='object-cover mr-3 rounded-full w-14 h-14 border-1 border-black'
                        />
                     </div>

                     <div>
                        <span className='font-bold'>
                           {post?.user?.last_name} {post?.user?.first_name}
                        </span>
                        <p>{post?.user?.email}</p>
                     </div>
                  </div>

                  <div className='mt-8 text-6xl font-bold text-primary-600'>
                     {post?.title}
                  </div>

                  <div className='flex mt-14 text-primary-600'>
                     <b>Startup:</b>
                     <ul className='flex'>
                        {post && post.tags ? (
                           post.tags.map((tag, index) => (
                              <li className='ml-2' key={index}>
                                 #{tag}
                              </li>
                           ))
                        ) : (
                           <li>No tags available</li> // Tags mavjud emas bo'lsa, fallback qism
                        )}
                     </ul>
                  </div>

                  <p className='flex mt-8 text-primary-600'>
                     <b className='font-bold mr-2'>Description:</b>
                     <div className='opacity-80'>{post?.description}</div>
                  </p>

                  <div>
                     <FormattedDate
                        label='Date created'
                        createdAt={post.createdAt}
                     ></FormattedDate>
                  </div>

                  <div className='flex items-center mt-5'>
                     <div className='mr-4  w-8 h-8 rounded-md border border-black'>
                        <img
                           src={`${UPLOAD_URL}${post?.category?.photo}.jpg`}
                           className='object-cover mr-3 rounded-full w-8 h-8 border-1 border-black'
                        />
                     </div>

                     <span className='text-red-500 font-bold'>
                        {post?.category?.name}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default BlogPage;
