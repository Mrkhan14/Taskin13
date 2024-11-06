import { Fragment } from 'react';

const AboutPage = () => {
   return (
      <Fragment>
         <div className='pt-14 pb-22'>
            <div className='container'>
               <div className='bg-primary-500 p-12 grid grid-cols-2 gap-6 mb-32'>
                  <div>
                     <div className='text-primary-600 mb-6'>Our mision</div>

                     <div className='text-primary-600 mb-6 font-bold text-3xl'>
                        Creating valuable content for creatives all around the
                        world
                     </div>

                     <div className='text-primary-600 opacity-50'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec. Scelerisque
                        viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus.
                     </div>
                  </div>

                  <div>
                     <div className='text-primary-600 mb-6'>Our Vision</div>

                     <div className='text-primary-600 mb-6 font-bold text-3xl'>
                        A platform that empowers individuals to improve
                     </div>

                     <div className='text-primary-600 opacity-50'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec. Scelerisque
                        viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus.
                     </div>
                  </div>
               </div>

               <div className='grid grid-cols-2 gap-6  mb-32'>
                  <div className='flex justify-center flex-col'>
                     <div className='text-primary-600 mb-6 font-bold text-3xl'>
                        Our team of creatives
                     </div>

                     <div className='text-primary-600 mb-6 text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                     </div>

                     <div className='text-primary-600 opacity-50'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec. Scelerisque
                        viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus.
                     </div>
                  </div>

                  <div className='after:absolute  after:block after:left-[-40px] after:bottom-[45%]  after:w-20 after:h-20 after:rounded-tl-3xl after:bg-primary-700 relative'>
                     <img
                        src='../../../public/About1.png'
                        className='w-full object-cover h-[480px]'
                        alt=''
                     />
                  </div>
               </div>

               <div className='grid grid-cols-2 gap-6  mb-32'>
                  <div className='after:absolute  after:block after:left-[100px] after:bottom-[-40px]  after:w-20 after:h-20 after:rounded-full after:bg-primary-600 relative'>
                     <img
                        src='../../../public/About2.png'
                        className='w-full object-cover h-[480px]'
                        alt=''
                     />
                  </div>

                  <div className='flex justify-center flex-col'>
                     <div className='text-primary-600 mb-6 font-bold text-3xl'>
                        Our team of creatives
                     </div>

                     <div className='text-primary-600 mb-6 text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                     </div>

                     <div className='text-primary-600 opacity-50'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec. Scelerisque
                        viverra mauris in aliquam sem. At risus viverra
                        adipiscing at in tellus.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default AboutPage;
