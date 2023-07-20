import React from 'react';
import PropTypes from 'prop-types'; // Import the propTypes module
import Book from './Book';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </div>
);

// Add PropTypes validation for the 'books' prop
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      // Add more book details here and their respective PropTypes
    }),
  ).isRequired,
};

export default BookList;
