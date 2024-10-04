import { Suspense } from 'react';
import Markdown from 'react-markdown';
import clsx from 'clsx';

import Button from '@/app/components/Button';
import Modal from '@/app/components/Modal';
import { openModalById } from '@/app/components/Modal/utils';

import styles from './styles.module.scss';

function CardFeedback(props) {
  const {
    id,
    essence,
    content,
    company,
    authorName,
    authorPosition,
    firstSlideTheme,
    readAllBtn,
    className,
  } = props;

  const cardClsx = clsx(
    styles.card,
    styles[`bg-${firstSlideTheme}`],
    className,
  );

  const openModal = () => {
    openModalById(id);
  };

  return (
    <>
      <article className={cardClsx}>
        <div className={styles.cardContent}>
          <b className={styles.cardContentEssence}>{essence}</b>

          <Markdown className={styles.text}>{content}</Markdown>
        </div>

        <div className={styles.btnInlineUser}>
          <div className={styles.cardUser}>
            <h5 className={styles.cardUserTitle}>{company}</h5>
            <div className={styles.cardUserAbout}>
              <div className={styles.cardUserName}>{authorName}</div>
              <div className={styles.cardUserPosition}>{authorPosition}</div>
            </div>
          </div>

          <Button
            theme="text"
            withIcon
            iconRight
            className={styles.linkReadMore}
            name={readAllBtn}
            onClick={openModal}
          />
        </div>
      </article>

      <Suspense fallback={null}>
        <Modal id={id}>
          <section className={styles.modalFeedbackBody}>
            <header>
              <div className={styles.cardUser}>
                <h5 className={styles.cardUserTitle}>{company}</h5>
                <div className={styles.cardUserAbout}>
                  <div className={styles.cardUserName}>{authorName}</div>
                  <div className={styles.cardUserPosition}>
                    {authorPosition}
                  </div>
                </div>
              </div>
            </header>

            <div className={styles.modalFeedbackBodyContent}>
              <Markdown>{content}</Markdown>
            </div>
          </section>
        </Modal>
      </Suspense>
    </>
  );
}

export default CardFeedback;
