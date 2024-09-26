import Image from 'next/image';
import Button from '@/app/components/Button';
import visionSVG from '@/app/assets/icons/vision.svg';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

export default function SectionCustomVision({ title, description, moreInfo }) {
  return (
    <section className={styles.sectionCustomVision}>
      <div className={styles.imageWrapper}>
        <Image src={visionSVG} alt="Image" />
      </div>

      <div className={styles.sectionCustomVisionContent}>
        <h2>
          <Markdown>{title}</Markdown>
        </h2>

        <div className={styles.mdWrapper}>
          <Markdown>{description}</Markdown>
        </div>

        <Button name={moreInfo?.name}></Button>
      </div>
    </section>
  );
}
