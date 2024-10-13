import { useState } from 'react';
import styles from './styles.module.scss';
import Checkbox from '@/app/components/Form/Checkbox';

const searchIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3854 15.4458C11.7351 17.5685 7.85569 17.4014 5.3989 14.9446C2.76287 12.3086 2.76287 8.0347 5.3989 5.39866C8.03494 2.76262 12.3088 2.76262 14.9448 5.39866C17.4016 7.85544 17.5687 11.7349 15.446 14.3851L20.6017 19.5408C20.8946 19.8337 20.8946 20.3085 20.6017 20.6014C20.3088 20.8943 19.8339 20.8943 19.541 20.6014L14.3854 15.4458ZM6.45956 13.8839C4.40931 11.8337 4.40931 8.50957 6.45956 6.45932C8.50982 4.40907 11.8339 4.40907 13.8842 6.45932C15.9329 8.50807 15.9344 11.8288 13.8887 13.8794C13.8872 13.8809 13.8857 13.8824 13.8842 13.8839C13.8827 13.8854 13.8812 13.8869 13.8797 13.8884C11.8291 15.9342 8.50831 15.9327 6.45956 13.8839Z"
      fill="#BFBFBF"
    />
  </svg>
);

const FilterItem = ({
  title,
  values = [],
  options = [],
  onChange,
  noFilterText,
}) => {
  const [search, setSearch] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const sortedOptions = [
    ...values,
    ...options.filter((o) => !values.includes(o)),
  ];

  const searchedValues = sortedOptions.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  const onSearchChange = (e) => {
    setSearch(e.target.value || '');
  };

  const toggleSearch = () => {
    setIsSearchActive((prev) => !prev);
    if (isSearchActive) setSearch('');
  };

  const closeOnBlur = () => {
    if (search?.length) {
      return;
    } else {
      setIsSearchActive(false);
    }
  };

  const onSelectedValuesToggle = (option) => () => {
    if (values.includes(option)) {
      onChange?.(values.filter((item) => item !== option));
    } else {
      onChange?.([...values, option]);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchWrapperHeader}>
        {isSearchActive ? (
          <input
            type="text"
            value={search}
            onChange={onSearchChange}
            autoFocus
            onBlur={closeOnBlur}
            className={styles.searchInput}
          />
        ) : (
          <div className={styles.title}>{title}</div>
        )}

        <button onClick={toggleSearch} className={styles.searchButton}>
          {searchIcon}
        </button>
      </div>

      <div className={styles.valuesList}>
        {searchedValues.length > 0 ? (
          searchedValues.map((label) => (
            <div key={label} className={styles.valueItem}>
              <Checkbox
                label={label}
                checked={values.includes(label)}
                onChange={onSelectedValuesToggle(label)}
              />
            </div>
          ))
        ) : (
          <div className={styles.noResults}>{noFilterText}</div>
        )}
      </div>
    </div>
  );
};

export default FilterItem;
