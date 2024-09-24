import styles from './styles.module.scss';

const Worldwide = ({ recorWord }) => {
  return (
    <div className={styles.worldwide}>
      {Array.from(Array(6)).map((_, index) => (
        <h4 key={index}>{recorWord}</h4>
      ))}
    </div>
  );
};

export default Worldwide;
