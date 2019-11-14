import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import CATEGORIES from '../lib/category';

const CATEGORY_FILTER = ['All', ...CATEGORIES];

const CategoryFilter = ({ onFilterChange }) => (
  <select
    onChange={(e) => onFilterChange(e.target.value)}
  >
    {CATEGORY_FILTER.map(c => (
      <option
        key={c}
        value={c === 'All' ? '' : c}
      >
        {c}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(CategoryFilter);
