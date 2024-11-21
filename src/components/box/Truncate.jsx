import React from 'react';

// Utility function to truncate text to a specified number of words
const truncateText = (text, wordLimit) => {
   if (!text) return ''; // If text is undefined or empty, return an empty string
   const words = text.split(' ');
   if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + ' ...';
   }
   return text;
};

const Truncate = ({ text, wordLimit, className }) => {
   const truncatedText = truncateText(text, wordLimit);
   return <p className={className}>{truncatedText}</p>;
};

export default Truncate;
