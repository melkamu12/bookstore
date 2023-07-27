import React from 'react';
import './addform.css';

const BookForm = () => (
  <div className="FormAdd">
    <span className="formTitle">ADD NEW BOOK</span>
    <form>
      <input
        className="author-inp"
        type="text"
        name="Book-Author"
        id="bookAuthor"
        placeholder="book author"
      />
      <input
        className="booktitle-inp"
        type="text"
        name="Book-title"
        id="bookTitle"
        placeholder="book Title"
      />
      <button className="submit-btn" type="submit" name="Add-Book" id="AddBook">
        Add Book
      </button>
    </form>
  </div>
);
export default BookForm;
