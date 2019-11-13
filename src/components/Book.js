import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ data }) => (
  <tr>
    <td>{data.id}</td>
    <td>{data.title}</td>
    <td>{data.category}</td>
  </tr>
);

Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
