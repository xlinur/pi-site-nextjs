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

const GdprMessage = ({ globalDictionary }) => {
  const [showModal, setShowModal] = useState(false);

  const { gdprMessage, gdprAcceptBtn } = globalDictionary;

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
        <Markdown>{gdprMessage}</Markdown>
      </div>

      <Button
        theme="transparent"
        onClick={onAccept}
        name={gdprAcceptBtn?.name}
      />
    </div>
  ) : null;
};

export default GdprMessage;
