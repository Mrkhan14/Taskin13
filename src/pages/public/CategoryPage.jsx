import React, { Fragment, useState } from 'react';
import InputComponent from './../../components/box/InputComponent';
import CartPost from './../../components/card/CartPost';
import PaginationComponent from './../../components/pagination/PaginationComponent'; // Make sure the path is correct
import { LIMIT } from '../../context/index'; 

const CategoryPage = () => {
  const cardData = [
    {
      image: "cart1.png",
      category: "Business",
      title: "Top 6 free website mockup tools 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/1"
    },
    {
      image: "cart1.png",
      category: "Business",
      title: "Top 6 free website mockup tools 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/2"
    },
    {
      image: "cart1.png",
      category: "Business",
      title: "Top 6 free website mockup tools 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/3"
    },
    {
      image: "cart1.png",
      category: "Business",
      title: "Top 6 free website mockup tools 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/4"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardData.length / LIMIT);

  const indexOfLastPost = currentPage * LIMIT;
  const indexOfFirstPost = indexOfLastPost - LIMIT;
  const currentPosts = cardData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Fragment>
      {/* top-block */}
      <div className='bg-primary-500'>
        <div className="container">
          <div className="flex h-[348px] flex-col items-center justify-center">
            <div className='mb-5 text-4xl font-bold text-primary-600'>Business</div>
            <div className='mb-5 text-center opacity-50 text-primary-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.
            </div>
            <div className='text-2xl text-primary-600'>Blog / Business</div>
          </div>
        </div>
      </div>

      {/* InputComponent for Searching */}
      <div className="container mt-8">
        <InputComponent name="search" placeholder="Search..." />
      </div>

      {/* itme posts */}
      <div className="py-20">
        <div className="container">
          {currentPosts.map((card, index) => (
            <CartPost 
              key={index}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="container mb-20">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Fragment>
  );
}

export default CategoryPage;
