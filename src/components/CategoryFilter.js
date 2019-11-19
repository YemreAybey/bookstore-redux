import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import CATEGORIES from '../lib/category';

const CATEGORY_FILTER = ['All', ...CATEGORIES];

const CategoryFilter = ({ changeFilter }) => (
  <select
    onChange={(e) => changeFilter(e.target.value)}
    className="categories center"
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
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(CategoryFilter);
