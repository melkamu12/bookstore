import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './book.css';

const Book = ({
  title, author, category, onRemove,
}) => (
  <div className="Book-Card">
    <div className="book">
      <p className="genres">{category}</p>
      <h2>{title}</h2>
      <p>
        Author:
        {author}
      </p>
      <div className="comRemEdit">
        <p className="comment-btn">Comments</p>
        <span className="up-bar">|</span>
        <Button classN="remove-btn" label="Remove" onClick={onRemove} />
        <span className="up-bar">|</span>
        <p className="edit-btn">Edit</p>
      </div>
    </div>
    <div className="stat-section">
      <div className="circle-container">
        <div className="circle">
          <div className="item layer-1">
            <div className="fill" />
          </div>
          <div className="item layer-2">
            <div className="fill" />
          </div>
          <div className="inside-content" />
        </div>
      </div>
      <div className="percent-complete">
        <span className="percent">0%</span>
        <span className="complete">Completed</span>
      </div>
    </div>

    <div className="update-section">
      <span className="current-chapter">CURRENT CHAPTER</span>
      <span className="current-lesson">Chapter 17</span>
      <button type="button" className="update-progress">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.string.isRequired,
};

export default Book;
