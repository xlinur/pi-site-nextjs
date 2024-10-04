import styles from './styles.module.scss';

export default function SectionCompleteTask({ title, subtitle, items }) {
  return (
    <section className={styles.completeTaskSection}>
      <header>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </header>

      <div className={styles.list}>
        {items.map((item, idx) => (
          <div className={styles.listItem} key={idx}>
            <span className="h5">{idx + 1}</span>
            <h5 className={styles.title}>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
