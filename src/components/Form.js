import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ title: e.target.value });
  }

  renderOptions() {
    const { options } = this.props;
    return options.map(c => <option key={c}>{c}</option>);
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={this.onInputChange}
        />

        <select>{this.renderOptions()}</select>
        <input type="submit" value="Save the Book" />
      </form>
    );
  }
}

// Form.propTypes = {
//   options: PropTypes.array
// };

export default Form;
