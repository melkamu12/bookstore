import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Bjm1JK8ZmRBQR95Y74et';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (AsyncAPI) => {
    try {
      const response = await axios.get(`${dataUrl}/books`);
      return response.data;
    } catch (error) {
      return AsyncAPI.rejectWithValue(`There was an error: ${error}`);
    }
  },
);
export const AddBookAPI = createAsyncThunk(
  'book/AddBookAPI',
  async (bookDetail) => axios
    .post(`${dataUrl}/books`, bookDetail, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err)),
);

export const removeBookAPI = createAsyncThunk(
  'book/removeBookAPI',
  async (itemId) => axios
    .delete(`${dataUrl}/books/${itemId}`, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(() => itemId)
    .catch((err) => console.log(err)),
);

const initialState = {
  books: [],
  isLoading: true,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
