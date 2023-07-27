import React from 'react';
import BookList from './bookList';
import BookForm from './addForm';

import './Bookstate.css';

const Bookstate = () => {
  const books = [
    {
      id: 1,
      genres: 'Action',
      title: 'Book Title 1',
      author: 'Author1',
      circle: 'circle',
      itemLayer: 'item layer-1',
      filldata: 'fill',
      percentage: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      genres: 'Science',
      title: 'Book Title 2',
      author: 'Author2',
      circle: 'circle',
      itemLayer: 'item layer-1',
      filldata: 'fill',
      percentage: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 3,
      genres: 'Economy',
      title: 'Book Title 3',
      author: 'Author3',
      circle: 'circle',
      itemLayer: 'item layer-1',
      filldata: 'fill',
      percentage: '64%',
      chapter: 'Chapter 17',
    },
  ];

  return (
    <div className="bookcard-container">
      <BookList books={books} />
      <BookForm />
    </div>
  );
};

export default Bookstate;
