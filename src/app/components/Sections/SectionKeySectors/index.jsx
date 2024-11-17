import Markdown from '@/app/components/Markdown';

import styles from './styles.module.scss';

export default function SectionKeySectors({ title, sectors }) {
  return (
    <section className={styles.sectionKeySectors}>
      <header>
        <h3>
          <Markdown>{title}</Markdown>
        </h3>
      </header>

      {sectors.map((item) => (
        <div className={styles.cartSectorItem} key={item.id}>
          <h5>{item.name}</h5>
        </div>
      ))}
    </section>
  );
}
