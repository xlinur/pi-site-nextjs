'use client';

import { useState, useEffect } from 'react';
import Button from '@/app/components/Button';

import styles from './styles.module.scss';
import Markdown from '@/app/components/Markdown';

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

const checkNeedShow = () => {
  try {
    const data = JSON.parse(localStorage.getItem(gdprKey));

    return data?.date ? true : false;
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

const disableAnalytics = () => {
  window['ga-disable-' + process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID] = true;
}

const decline = () => {
  disableAnalytics();
  try {
    localStorage.setItem(
      gdprKey,
      JSON.stringify({
        accepted: false,
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
      if (!checkNeedShow()) {
        setShowModal(true);
      }
      
      if (!checkIfAccepted()) {
        disableAnalytics();
      }
    }
  }, []);

  const onAccept = () => {
    accept();
    setShowModal(false);
  };

  const onDecline = () => {
    decline();
    setShowModal(false);
  };

  return showModal ? (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        <Markdown>{gdprMessage}</Markdown>
      </div>

      <div className={styles.buttons}>
        <Button
          theme="primary"
          onClick={onAccept}
          name="Yes, I accept all cookies"
        />
        <Button
          theme="transparent"
          onClick={onDecline}
          name='No, thanks. Accept only essential cookies'
        />
      </div>
    </div>
  ) : null;
};

export default GdprMessage;
