import React from 'react';

const BookForm = () => (
  <div>
    <form>
      <input
        type="text"
        name="Book-Author"
        id="bookAuthor"
        placeholder="book author"
      />
      <input
        type="text"
        name="Book-title"
        id="bookTitle"
        placeholder="book Title"
      />
      <button type="submit" name="Add-Book" id="AddBook">
        Add Book
      </button>
    </form>
  </div>
);
export default BookForm;
