import React from 'react';
import PropTypes from 'prop-types'; // Import the propTypes module

import './book.css';

const Book = ({ book }) => (
  <div className="Book-Card">
    <div className="book">
      <p className="genres">{book.genres}</p>
      <h2>{book.title}</h2>
      <p>
        Author:
        {book.author}
      </p>
      <div className="comRemEdit">
        <p className="comment-btn">Comments</p>
        <span className="up-bar">|</span>
        <p className="remove-btn">Remove</p>
        <span className="up-bar">|</span>
        <p className="edit-btn">Edit</p>
      </div>
    </div>
    <div className="stat-section">
      <div className="circle-container">
        <div className={book.circle}>
          <div className={book.itemLayer}>
            <div className={book.filldata} />
          </div>
          <div className="item layer-2">
            <div className="fill" />
          </div>
          <div className="inside-content" />
        </div>
      </div>
      <div className="percent-complete">
        <span className="percent">{book.percentage}</span>
        <span className="complete">Completed</span>
      </div>
    </div>

    <div className="update-section">
      <span className="current-chapter">CURRENT CHAPTER</span>
      <span className="current-lesson">{book.chapter}</span>
      <button type="button" className="update-progress">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    itemLayer: PropTypes.string.isRequired,
    filldata: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    circle: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
