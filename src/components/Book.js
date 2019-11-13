import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ data, removeBook }) => (
  <tr>
    <td>{data.id}</td>
    <td>{data.title}</td>
    <td>{data.category}</td>
    <td>
      <button
        onClick={() => removeBook(data)}
        type="button"
      >
        Delete
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  removeBook: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
