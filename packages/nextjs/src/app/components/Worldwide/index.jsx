import styles from './styles.module.scss';

const Worldwide = () => {
  return (
    <div className={styles.worldwide}>
      {Array.from(Array(6)).map((_, index) => (
        <h4 key={index}>Worldwide</h4>
      ))}
    </div>
  );
};

export default Worldwide;
