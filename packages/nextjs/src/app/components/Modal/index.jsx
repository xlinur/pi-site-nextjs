'use client';

import { useRef } from 'react';
import CloseButton from './CloseButton';
import { changeBodyOverflow } from './utils';
import styles from './styles.module.scss';

const Modal = ({ children, id }) => {
  const dialogRef = useRef(null);

  const close = () => {
    dialogRef.current.close();
    changeBodyOverflow('initial');
  };

  const handleClickOutside = () => {
    const contentElement = dialogRef.current.querySelector('[data-content]');

    if (contentElement && !contentElement.contains(event.target)) {
      close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      id={id}
      className={styles.dialog}
      type="button"
      tabIndex={0}
      onClick={handleClickOutside}
    >
      {/* data-content should appear to understend click outside */}
      <div data-content className={styles.dialogWrapper}>
        <div className={styles.closeButton}>
          <CloseButton onClick={close} />
        </div>

        <div className={styles.dialogContent}>{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
