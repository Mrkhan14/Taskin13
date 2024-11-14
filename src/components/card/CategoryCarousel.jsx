import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const CategoryCarousel = () => {
   const categories = [
      {
         id: 1,
         name: 'Business',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
         id: 2,
         name: 'Startup',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
         id: 3,
         name: 'Economy',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
         id: 4,
         name: 'Technology',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
         id: 5,
         name: 'Health',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
         id: 6,
         name: 'Travel',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
         id: 7,
         name: 'Lifestyle',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
      {
         id: 8,
         name: 'Education',
         description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      },
   ];

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
         {categories.map(category => (
            <Link
               key={category.id}
               to={`/category/${category.id}`}
               className='flex flex-col justify-center p-8 border border-neutral-200 hover:bg-primary-700'
            >
               <div className='pb-4 text-3xl font-bold text-primary-600'>
                  {category.name}
               </div>
               <div>{category.description}</div>
            </Link>
         ))}
      </Carousel>
   );
};

export default CategoryCarousel;
