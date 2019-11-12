import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book.id}>
          <td>book.id</td>
          <td>books.title</td>
          <td>book.category</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const mapStateToProps = ({ books }) => ({ books });

const matDispatchToProps = () => {};

BooksList.prototype = {
  book: PropTypes.array,
};

export default connect(mapStateToProps, matDispatchToProps)(BooksList);
