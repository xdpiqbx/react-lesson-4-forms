import React from 'react';
import './Filter.scss';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      <span>Filter by name</span>
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
