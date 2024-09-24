import Image from 'next/image';
import Button from '@/app/components/Button';
import visionSVG from '@/app/assets/icons/vision.svg';
import styles from './styles.module.scss';

export default function SectionCustomVision({
  title,
  description,
  reversedDirection,
}) {
  return (
    <section className={styles.sectionCustomVision}>
      <div className={styles.imageWrapper}>
        <Image src={visionSVG} alt="Image" />
      </div>

      <div className={styles.sectionCustomVisionContent}>
        <h2>{title}</h2>

        <p>
          PersonalInvest is a global Informational Technology partner for
          GameDev, Blockchain, Fintech and many other companies that are looking
          to gain or retain a competitive advantage by improving recruitment
          processes.
          <br />
          <br />
          Our IT recruitment and consulting agency also has strong experience in{' '}
          <span>
            searching for development teams, opening development centers,
            business consulting, market research and analytics.
          </span>
        </p>

        <Button icon>More industries</Button>
      </div>
    </section>
  );
}
