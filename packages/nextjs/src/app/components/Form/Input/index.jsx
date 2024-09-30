'use client';
import styles from './styles.module.scss';
import clsx from 'clsx';

const InputField = ({ type = 'text', label, isEmpty, required, ...props }) => {
  const classes = clsx(styles.input, type === 'textarea' && styles.textarea);

  return (
    <label data-empty={isEmpty} className={styles.container}>
      <input type={type} required={required} className={classes} {...props} />
      <div className={styles.label}>{label}</div>
    </label>
  );
};

export default InputField;
