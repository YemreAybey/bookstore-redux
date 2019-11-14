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
      category: CATEGORIES[0],
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSelect(e) {
    this.setState({ category: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = {
      id: idGen(),
      title,
      category,
    };
    this.setState({
      title: '',
      category: CATEGORIES[0],
    });
    createBook(book);
  }

  render() {
    const { title, category } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex align-center center"
      >
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={this.handleInputChange}
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
        <input type="submit" value="Save the Book" />
      </form>
    );
  }
}

const mapDispatchToProps = { createBook };

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
