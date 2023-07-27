import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      itemLayer: PropTypes.string.isRequired,
      filldata: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
      chapter: PropTypes.string.isRequired,
      circle: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
