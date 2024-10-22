import Markdown from '@/app/components/Markdown';

import styles from './styles.module.scss';

export default function SectionKeySectors({ title, spheres }) {
  return (
    <section className={styles.sectionKeySectors}>
      <header>
        <h5>
          <Markdown>{title}</Markdown>
        </h5>
      </header>

      {spheres.data.map((item) => (
        <a
          href={`/spheres/${item.attributes.slug}`}
          className={styles.cartSectorItem}
          key={item.id}
        >
          <h5>{item.attributes.name}</h5>
        </a>
      ))}
    </section>
  );
}
