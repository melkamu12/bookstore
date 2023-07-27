import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './bookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    const ItemId = `item${Math.random().toString(36).substr(2, 9)}`;

    dispatch(
      addBook({
        item_id: ItemId,
        title,
        author,
        category: 'Fiction',
      }),
    );

    setTitle('');
    setAuthor('');
  };

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author-inp"
          type="text"
          name="Book-Author"
          id="bookAuthor"
          placeholder="book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          className="submit-btn"
          type="button"
          name="Add-Book"
          id="AddBook"
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
