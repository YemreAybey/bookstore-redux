import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions';
import Book from '../components/Book';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book
            key={book.id}
            data={book}
            removeBook={handleRemoveBook}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ books }) => ({ books });

const mapDispatchToProps = { removeBook };

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [{}],
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
