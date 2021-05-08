import React from 'react';
import { books } from '../booksData';
import Book from './Book';

const btnBuyBook = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains('btn')) return;

  const card = e.target.closest('.card');
  const titleId = +card.querySelector('.booklist__titles').getAttribute('data-title');
  const bookObj = books.find((book) => book.id === titleId);
  console.log(bookObj.author);
};

const BookList = () => {
  return (
    <section className='booklist'>
      <div className='container'>
        <div className='row' onClick={btnBuyBook}>
          {books.map((book) => {
            return (
              <div className='col-md-4 py-4' key={book.id}>
                <Book {...book}></Book>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
