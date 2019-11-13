import { combineReducers } from 'react-redux';

import bookReducer from './books';


export default combineReducers({
  books: bookReducer,
});
