import booksApi from '../apis/bookstore';

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = () => async (dispatch, book) => {
  const response = await booksApi.post('/books', book);
  console.log(book);
  // console.log(response);
  dispatch({ type: CREATE_BOOK, book });
};

const removeBook = book => (
  {
    type: REMOVE_BOOK,
    book,
  }
);

const changeFilter = filter => (
  {
    type: CHANGE_FILTER,
    filter,
  }
);

export { createBook, removeBook, changeFilter };
