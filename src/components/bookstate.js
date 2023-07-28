import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { addBook, removeBook } from '../redux/books/booksSlice';
import BookForm from './bookForm';

const Bookstate = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const handleAddBook = (title, author) => {
    const newBook = {
      itemId: `item${books.length + 1}`,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };
  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="bookcard-container">
      {books.map((book) => (
        <Book
          key={book.itemId}
          title={book.title}
          author={book.author}
          category={book.category}
          onRemove={() => handleRemoveBook(book.itemId)}
        />
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default Bookstate;
