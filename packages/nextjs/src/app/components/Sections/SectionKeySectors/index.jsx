import Markdown from 'react-markdown';

import styles from './styles.module.scss';

export default function SectionKeySectors({ title, sectors }) {
  return (
    <section className={styles.sectionKeySectors}>
      <header>
        <h5>
          <Markdown>{title}</Markdown>
        </h5>
      </header>

      {sectors.map((item) => (
        <div className={styles.cartSectorItem} key={item.id}>
          <h5>{item.name}</h5>
        </div>
      ))}
    </section>
  );
}
