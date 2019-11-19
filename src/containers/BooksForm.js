import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createBook } from '../actions';
import idGen from '../utils/idGenerator';
import CATEGORIES from '../lib/category';


class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: CATEGORIES[0],
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }


  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  handleSelect(e) {
    this.setState({ category: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const book = {
      id: idGen(),
      ...this.state,
    };
    this.setState({
      title: '',
      category: CATEGORIES[0],
    });
    createBook(book);
  }

  render() {
    const { title, author, category } = this.state;

    return (
      <div className="center form-wrapper">
        <h2
          className="form-title"
        >
          ADD NEW BOOK
        </h2>
        <form
          onSubmit={this.handleSubmit}
          className="flex align-center center"
        >
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={this.handleTitleChange}
          />

          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={this.handleAuthorChange}
          />

          <select
            value={category}
            onChange={this.handleSelect}
            className="categories"
          >
            {CATEGORIES.map(c => (
              <option
                key={c}
                value={c}
              >
                {c}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="blue"
          >
            Save Book
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { createBook };

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
