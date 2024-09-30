'use client';

import { useState, useEffect } from 'react';
import Button from '@/app/components/Button';

import styles from './styles.module.scss';
import Markdown from 'react-markdown';

const gdprKey = 'gdpr';

const checkIfAccepted = () => {
  try {
    const data = JSON.parse(localStorage.getItem(gdprKey));

    return data?.accepted ?? false;
  } catch (err) {
    console.log(err);
  }

  return false;
};

const accept = () => {
  try {
    localStorage.setItem(
      gdprKey,
      JSON.stringify({
        accepted: true,
        date: new Date().toDateString(),
      }),
    );
  } catch (err) {
    console.log(err);
  }

  return false;
};

const GdprMessage = (props) => {
  const [showModal, setShowModal] = useState(false);

  const {
    message = 'This website uses cookies to ensure that you get the best experience. To get more information about these cookies and the processing of your personal data, check our [Privacy Policy](https://google.com) or [Cookie policy](https://google.com).',
    gdprBtn = 'Yes, I Accept',
  } = props;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!checkIfAccepted()) {
        setShowModal(true);
      }
    }
  }, []);

  const onAccept = () => {
    accept();
    setShowModal(false);
  };

  return showModal ? (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        <Markdown>{message}</Markdown>
      </div>

      <Button theme="secondary" onClick={onAccept} name={gdprBtn} />
    </div>
  ) : null;
};

export default GdprMessage;
