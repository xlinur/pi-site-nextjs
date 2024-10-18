import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from '@/app/components/Markdown';
import Image from 'next/image';
import peopleSVG from '@/app/assets/icons/people-1-white.svg';
import { ANCHORS } from '@/app/core/constants/anchor';

export default function SectionTalentMatch({ content, hireNowBtn }) {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image src={peopleSVG} alt="icon" width={401} height={354} />
      </div>
      <div className={styles.content}>
        <Markdown className="h5">{content}</Markdown>

        <Button
          withIcon
          name={hireNowBtn.name}
          url={ANCHORS.CONTACT_FORM.ANCHOR}
        />
      </div>
    </section>
  );
}
