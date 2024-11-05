import React, { Fragment, useState } from 'react';
import InputComponent from './../../components/box/InputComponent';
import CartPost from './../../components/card/CartPost';
import PaginationComponent from './../../components/pagination/PaginationComponent'; // Make sure the path is correct
import { LIMIT } from '../../context/index'; 

const CategoryPage = () => {
  const cardData = [
    {
      image: "cart1.png",
      category: "Startup",
      title: "Design tips for designers that cover everything you need",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/1"
    },
    {
      image: "cart2.png",
      category: "Business",
      title: "How to build rapport with your web design clients",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/2"
    },
    {
      image: "cart3.png",
      category: "Startup",
      title: "Logo design trends to avoid in 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/3"
    },
    {
      image: "cart4.png",
      category: "TECHNOLOGY",
      title: "8 Figma design systems you can download for free today",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.",
      link: "/post/4"
    },
    {
      image: "cart1.png",
      category: "ECONOMY",
      title: "Font sizes in UI design: The complete guide to follow",
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
      
        <div className="container">
          <div className="border-b py-14 border-neutral-200">
            <InputComponent name="search" placeholder="Search..." />
          </div>
        </div>

      {/* itme posts */}
      <div className="pb-20">
        <div className="container">
          <h1 className='my-8 text-4xl font-bold'>All posts</h1>
          
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
