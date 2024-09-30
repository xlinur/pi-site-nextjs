import { useState } from 'react';

const FilterItem = ({ title, values }) => {
  const [search, setSearch] = useState('');

  const searchedValues = values.filter((value) => value.includes(search));

  const onSearchChange = (e) => {
    setSearch(e.target.value || '');
  };

  return (
    <div>
      <div>{title}</div>
      <input type="text" value={search} onChange={onSearchChange} />
      {searchedValues.map((value) => (
        <div key={value}>{value}</div>
      ))}
    </div>
  );
};

export default FilterItem;
