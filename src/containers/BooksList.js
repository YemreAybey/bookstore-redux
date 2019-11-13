import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table border="1">
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <Book
          key={book.id}
          data={book}
        />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = ({ books }) => ({ books });

const matDispatchToProps = () => {};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: [{}],
};

export default BooksList;

// export default connect(mapStateToProps, matDispatchToProps)(BooksList);
