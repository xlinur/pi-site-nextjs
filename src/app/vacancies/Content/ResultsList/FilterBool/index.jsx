'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';

const FilterBool = ({ title }) => {
  let [isOn, setOn] = useState(false);

  const toggle = (e) => {
    if (e.target.checked) {
      setOn(true);
    } else {
      setOn(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p>{title}</p>

      <label className={styles.slider}>
        <input type="checkbox" onChange={toggle} />

        <div className={styles.sort}></div>
      </label>
    </div>
  );
};

export default FilterBool;
