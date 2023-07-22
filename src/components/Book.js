import React from 'react';
import PropTypes from 'prop-types'; // Import the propTypes module

const Book = ({ book }) => (
  <div className="book">
    <h2>{book.title}</h2>
    <p>
      Author:
      {book.author}
    </p>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
