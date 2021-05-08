import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import BookList from './components/BookList';

const Sections = () => {
  return (
    <>
      <BookList />
    </>
  );
};

ReactDom.render(<Sections />, document.getElementById('root'));
