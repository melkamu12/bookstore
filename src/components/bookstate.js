import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './bookForm';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        There is an issue:
        {error}
      </div>
    );
  }

  return (
    <div className="bookcard-container">
      {Object.entries(books).map(([itemId, book]) => (
        <Book
          key={itemId}
          category={book[0].category}
          title={book[0].title}
          author={book[0].author}
          itemid={itemId}
        />
      ))}
      <BookForm />
    </div>
  );
}
