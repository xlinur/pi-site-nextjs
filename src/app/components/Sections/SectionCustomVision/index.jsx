import Image from 'next/image';
import Button from '@/app/components/Button';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import visionSVG from '@/app/assets/icons/vision.svg';
import styles from './styles.module.scss';
import Markdown from '@/app/components/Markdown';
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

        {openModal ? (
          <OpenModalFormButton withIcon name={moreInfo?.name} />
        ) : (
          <Button withIcon name={moreInfo?.name} url={url} />
        )}
      </div>
    </section>
  );
}
