import React from 'react';
import BookList from './bookList';
import BookForm from './addForm';

const Bookstate = () => {
  const books = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'Author1',
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Author2',
    },
    {
      id: 3,
      title: 'Book Title 3',
      author: 'Author3',
    },
  ];

  return (
    <div>
      <BookList books={books} />
      <BookForm />
    </div>
  );
};

export default Bookstate;
