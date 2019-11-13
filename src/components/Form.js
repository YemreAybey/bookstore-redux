import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      selectedOption: props.options[0],
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSelect(e) {
    this.setState({ selectedOption: e.target.value });
  }

  handleSubmit(e) {
    const { submitHandler } = this.props;

    e.preventDefault();
    submitHandler(this.state);
  }

  render() {
    const { text, selectedOption } = this.state;
    const { placeholder, options } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={this.handleInputChange}
        />

        <select
          value={selectedOption}
          onChange={this.handleSelect}
        >
          {options.map(c => (
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

Form.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
};

Form.defaultProps = {
  options: [],
  placeholder: 'Placeholder',
};

export default Form;
