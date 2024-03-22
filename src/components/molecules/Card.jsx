import React from 'react';
import { Link } from 'react-router-dom';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

const Card = ({id, imageValue, titleValue, bodyValue }) => {
  const truncatedBody = truncateText(bodyValue, 120); 
  const truncatedTitle = truncateText(titleValue, 20); // Trunca el título a 20 caracteres, puedes ajustar este valor según tus necesidades
  
  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card-compact h-auto">
      <img className="rounded-t-lg w-full h-40" src={imageValue} alt="Article" />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-10 ">{truncatedTitle}</h5>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 h-32">{truncatedBody}</p>
        <Link to={`/articles/${id}`}>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
        </Link>
      </div>
    </div>
  );
}

export default Card;




