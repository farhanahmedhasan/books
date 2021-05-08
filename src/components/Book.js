import React from 'react';

let i = 0;
const Book = (props) => {
  const { author, title, imgSrc, desc } = props;
  return (
    <article className='booklist__article card card-body h-100'>
      <img className='booklist__img mb-2' src={imgSrc} alt='' />
      <h4 className='booklist__titles' data-title={++i}>
        {title}
      </h4>
      <h5 className='booklist__author'>{author}</h5>
      <p className='booklist__desc'>{desc}</p>
      <button className='btn btn-primary'>Buy Now</button>
    </article>
  );
};

export default Book;
