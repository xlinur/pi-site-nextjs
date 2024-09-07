import styles from './styles.module.scss';

const SectionUsInNumbers = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.item}>
        <header className={styles.title}>
          <h5>8 500 +</h5>
        </header>

        <p className={styles.text}>job openings filled</p>
      </article>

      <article className={styles.item}>
        <header className={styles.title}>
          <h5>700 +</h5>
        </header>

        <p className={styles.text}>companies we worked with</p>
      </article>

      <article className={styles.item}>
        <header className={styles.title}>
          <h5>55 +</h5>
        </header>

        <p className={styles.text}>
          vacancies we close per month with minimum % of changes
        </p>
      </article>
    </section>
  );
};

export default SectionUsInNumbers;
