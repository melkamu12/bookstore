import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks, AddBookAPI } from '../redux/books/booksSlice';

import './bookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pending, setPending] = useState('Add Book');

  const AuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  function titleHandler(e) {
    setTitle(e.target.value);
  }
  function postDispatcher() {
    const ItemId = `item${Math.random().toString(36).substr(2, 9)}`;
    const bookDetail = {
      item_id: ItemId,
      title,
      author,
      category: 'Fiction',
    };
    setPending('...Adding');
    dispatch(AddBookAPI(bookDetail));
    setTimeout(() => {
      dispatch(fetchBooks());
      setPending('Add Book');
    }, 1000);
  }
  return (
    <div className="FormAdd">
      <span className="formTitle">ADD NEW BOOK</span>
      <form>
        <input
          className="booktitle-inp"
          type="text"
          name="Book-title"
          id="bookTitle"
          placeholder="book Title"
          onChange={(e) => {
            titleHandler(e);
          }}
        />
        <input
          className="author-inp"
          type="text"
          name="Book-Author"
          id="bookAuthor"
          placeholder="book author"
          onChange={(e) => {
            AuthorHandler(e);
          }}
        />
        <button
          className="submit-btn"
          type="button"
          name="Add-Book"
          id="AddBook"
          onClick={() => {
            postDispatcher();
          }}
        >
          {pending}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
