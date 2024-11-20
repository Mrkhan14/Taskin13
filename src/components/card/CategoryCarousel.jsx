import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Truncate from '../box/Truncate';

const CategoryCarousel = ({ categories }) => {
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
         {categories.map((category, index) => (
            <Link
               key={category.id || `category-${index}`}
               to={`/category/${category?._id}`}
               className='flex flex-col justify-center p-8 border border-neutral-200 hover:bg-primary-700'
            >
               <div className='pb-4 text-3xl font-bold text-primary-600'>
                  {category?.name}
               </div>
               <Truncate text={category?.description} wordLimit={4}></Truncate>
            </Link>
         ))}
      </Carousel>
   );
};

export default CategoryCarousel;
