import booksApi from '../apis/bookstore';

const SET_BOOKS = 'SET_BOOKS';
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const setBooks = () => async dispatch => {
  const response = await booksApi.get('/books');

  if (response.data.status === 'SUCCESS') dispatch({ type: SET_BOOKS, books: response.data.books });
};

const createBook = book => async dispatch => {
  const response = await booksApi.post('/books', book);

  if (response.data.status === 'SUCCESS') dispatch({ type: CREATE_BOOK, book });
};

const removeBook = book => async dispatch => {
  const response = await booksApi.delete(`/books/${book.id}`);

  if (response.data.status === 'SUCCESS') dispatch({ type: REMOVE_BOOK, book: response.data.book });
};

const changeFilter = filter => (
  {
    type: CHANGE_FILTER,
    filter,
  }
);

export {
  setBooks, createBook, removeBook, changeFilter,
};
