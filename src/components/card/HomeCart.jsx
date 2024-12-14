import { Image } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import FormattedDate from '../box/FormattedDate';
import Truncate from '../box/Truncate';
import { getImage } from './../../utils/getPhotoUrl';

const HomeCart = ({ lastOnes }) => {
   const responsive = {
      superLargeDesktop: {
         breakpoint: { max: 4000, min: 1920 },
         items: 4,
      },
      desktop: {
         breakpoint: { max: 1920, min: 1024 },
         items: 3,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
      },
   };

   return (
      <Carousel
         responsive={responsive}
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={3000}
      >
         {lastOnes.map((item, index) => (
            <Link
               key={item.id || `item-${index}`}
               to={`/blogs/${item?._id}`}
               className='flex flex-col justify-center p-2 mx-3 border border-neutral-200'
            >
               <div>
                  <div className='object-cover h-[310px]'>
                     <Image className='w-full ' src={getImage(item?.photo)} />
                  </div>

                  <div className='flex mt-5'>
                     By
                     <span className='ml-3 text-primary-700'>
                        {item?.user?.first_name} {item?.user?.last_name}
                     </span>
                  </div>
                  <FormattedDate
                     className='!mt-0'
                     data={item?.createdAt}
                  ></FormattedDate>
                  <div className='mt-5 text-3xl font-bold text-primary-600 tex'>
                     <Truncate className='min-h-20' text={item?.title} wordLimit={3}></Truncate>
                  </div>
                  <div className='mt-1'>
                     <Truncate
                        className='min-h-14 '
                        text={item?.description}
                        wordLimit={10}
                     ></Truncate>
                  </div>
               </div>
            </Link>
         ))}
      </Carousel>
   );
};

export default HomeCart;

   
