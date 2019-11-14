import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions';
import Book from '../components/Book';

const BooksList = ({
  books, filter, removeBook,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const filteredBooks = (books, filter) => (
    filter ? books.filter(b => filter === b.category) : books
  );

  return (
    <div className="booklist">
      {filteredBooks(books, filter).map(book => (
        <Book
          key={book.id}
          data={book}
          removeBook={handleRemoveBook}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ books, filter }) => ({ books, filter });

const mapDispatchToProps = { removeBook };

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [{}],
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
