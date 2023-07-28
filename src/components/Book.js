import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { removeBookAPI, fetchBooks } from '../redux/books/booksSlice';
import './book.css';

const Book = ({
  itemid, title, author, category,
}) => {
  const [deleteStatus, setDelete] = useState('Delete');
  const dispatch = useDispatch();

  function deleteDispatcher(itemId) {
    dispatch(removeBookAPI(itemId));
    setDelete('...deleting');
    setTimeout(() => {
      dispatch(fetchBooks());
      setDelete('Delete');
    }, 1000);
  }

  return (
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
          <Button
            classN="remove-btn"
            label={deleteStatus}
            onClick={() => deleteDispatcher(itemid)}
          />
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
          <span className="percent">64%</span>
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
};

Book.propTypes = {
  itemid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
