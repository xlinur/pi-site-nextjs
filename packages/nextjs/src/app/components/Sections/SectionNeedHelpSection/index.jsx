import Markdown from 'react-markdown';
import Button from '@/app/components/Button';

import chatSVG from '@/app/assets/icons/chat-white.svg';
import styles from './styles.module.scss';
import Image from 'next/image';

export default async function SectionNeedHelpSection(props) {
  const { helpText, helpBtn } = props;

  return (
    <section className={styles.sectionDieFillWidth}>
      <Image
        className={styles.bgImage}
        src={chatSVG}
        alt="Chat icon"
        width={226}
        height={226}
      />
      <h5>
        <Markdown>{helpText}</Markdown>
      </h5>

      <div className="actions">
        <Button size="lg" name={helpBtn?.name} openModal />
      </div>
    </section>
  );
}
