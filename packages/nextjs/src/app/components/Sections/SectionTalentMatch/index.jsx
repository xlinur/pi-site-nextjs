import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';
import Image from 'next/image';
import peopleSVG from '@/app/assets/icons/people-1-white.svg';

export default function SectionTalentMatch({ content, hireNowBtn }) {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image src={peopleSVG} alt="icon" width={401} height={354} />
      </div>
      <div className={styles.content}>
        <Markdown className="h5">{content}</Markdown>

        <Button withIcon name={hireNowBtn.name} />
      </div>
    </section>
  );
}
