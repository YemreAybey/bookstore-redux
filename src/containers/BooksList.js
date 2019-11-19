import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBooks, removeBook } from '../actions';
import Book from '../components/Book';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  componentDidMount() {
    const { setBooks } = this.props;
    setBooks();
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }


  render() {
    const { books, filter } = this.props;

    const filterBooks = (books, filter) => (
      filter ? books.filter(b => filter === b.category) : books
    );

    const filteredBooks = filterBooks(books, filter);

    if (filteredBooks.length === 0) {
      return (
        <div className="no_book flex justify-center align-center">
          No Book
          <i className="fa fa-book fa-2x" />
        </div>
      );
    }
    return (
      <div className="booklist">
        {filteredBooks.map(book => (
          <Book
            key={book.id}
            data={book}
            removeBook={this.handleRemoveBook}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ books, filter }) => ({ books, filter });

const mapDispatchToProps = { setBooks, removeBook };

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string.isRequired,
  setBooks: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [{}],
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
