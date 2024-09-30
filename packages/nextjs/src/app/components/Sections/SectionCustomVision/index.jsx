import Image from 'next/image';
import Button from '@/app/components/Button';
import visionSVG from '@/app/assets/icons/vision.svg';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';
import { routes } from '@/config/routes';
import clsx from 'clsx';

export default function SectionCustomVision({
  title,
  description,
  moreInfo,
  rtl,
  url,
  openModal = false,
}) {
  return (
    <section className={clsx(styles.sectionCustomVision, rtl && styles.rtl)}>
      <div className={styles.imageWrapper}>
        <Image src={visionSVG} alt="Image" fill />
      </div>

      <div className={styles.sectionCustomVisionContent}>
        <h2>
          <Markdown>{title}</Markdown>
        </h2>

        <div className={styles.mdWrapper}>
          <Markdown>{description}</Markdown>
        </div>

        <Button
          withIcon
          name={moreInfo?.name}
          url={url}
          openModal={openModal}
        />
      </div>
    </section>
  );
}
