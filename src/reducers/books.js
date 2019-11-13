const bookReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'CREATE_BOOK':
      newState.books = [...newState.books, action.book];
      return newState;
    case 'REMOVE_BOOK':
      newState.books = [...newState.books].filter(
        (book) => book.id !== action.book.id,
      );
      return newState;
    default:
      return state;
  }
};

export default bookReducer;
