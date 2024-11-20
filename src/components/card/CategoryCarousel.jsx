import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const CategoryCarousel = ({ categories }) => {
   const responsive = {
      superLargeDesktop: {
         // screens larger than 1920px
         breakpoint: { max: 4000, min: 1920 },
         items: 4,
      },
      desktop: {
         // screens larger than 1024px
         breakpoint: { max: 1920, min: 1024 },
         items: 4,
      },
      tablet: {
         // screens larger than 464px
         breakpoint: { max: 1024, min: 464 },
         items: 2,
      },
      mobile: {
         // screens larger than 0px
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
               <div>{category?.description}</div>
            </Link>
         ))}
      </Carousel>
   );
};

export default CategoryCarousel;
