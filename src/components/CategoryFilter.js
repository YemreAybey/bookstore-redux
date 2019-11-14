import React from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../actions';
import CATEGORIES from '../utils/category';

const CATEGORY_FILTER = ['All', ...CATEGORIES];

const CategoryFilter = ({ filter }) => (
  <select>
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

export default connect(null, { changeFilter })(CategoryFilter);
