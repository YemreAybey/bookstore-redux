import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <BooksList
      books={[{ id: 1, title: 'Yemre and Ebuka', category: 'Fiction' }]}
    />
    <BooksForm />
  </div>
);

export default App;
