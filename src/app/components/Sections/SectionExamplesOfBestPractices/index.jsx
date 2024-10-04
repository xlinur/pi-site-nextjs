import Image from 'next/image';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import Accordion from '@/app/components/Accordion';
import styles from './styles.module.scss';
import peopleSVG from '@/app/assets/icons/iconPeople.svg';

export default function SectionExamplesOfBestPractices({
  title,
  items,
  contactBtn,
}) {
  return (
    <section className={styles.sectionAccordion}>
      <header>
        <h2>{title}</h2>
      </header>

      <div className={styles.sectionAccordionContent}>
        <Accordion data={items}></Accordion>

        <div className={styles.sectionAccordionContentImage}>
          <Image src={peopleSVG} alt="some" fill />

          <OpenModalFormButton size="lg" name={contactBtn.name} />
        </div>
      </div>
    </section>
  );
}
