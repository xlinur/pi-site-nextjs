'use client';
import styles from './styles.module.scss';
import clsx from 'clsx';

const InputField = ({ type = 'text', label, isEmpty, ...props }) => {
  // const [value, setValue] = useState("");
  // const [isEmpty, setIsEmpty] = useState(true);
  //
  // const onChange = ($event) => {
  //     const value = $event.target.value;
  //
  //     if (value?.length > 0) {
  //         setIsEmpty(false);
  //     } else {
  //         setIsEmpty(true);
  //     }
  //
  //     setValue(value);
  // };

  const classes = clsx(styles.input, type === 'textarea' && styles.textarea);

  return (
    <label data-empty={isEmpty} className={styles.container}>
      <input type={type} className={classes} {...props} />
      <div className={styles.label}>{label}</div>
    </label>
  );
};

export default InputField;