'use client';

import styles from './styles.module.scss';

const CloseIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1075 25.8925L25.8926 14.1074"
      stroke="#0B0B0C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.1075 14.1075L25.8926 25.8926"
      stroke="#0B0B0C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function ModalComponent({ children }) {
  const closeModal = (event, fromOutside) => {
    const dialogElement = event.target.closest('dialog#layoutModal');
    const contentWrapper = document.getElementById('layoutModalContentWrapper');

    if (!contentWrapper.contains(event.target)) {
      dialogElement?.close();
      document.querySelector('body').style.overflow = 'initial';
    } else if (!fromOutside) {
      dialogElement?.close();
      document.querySelector('body').style.overflow = 'initial';
    }
  };

  return (
    <dialog
      id="layoutModal"
      className={styles.dialog}
      type="button"
      tabIndex={0}
      onClick={(event) => closeModal(event, true)}
    >
      <div id="layoutModalContentWrapper" className={styles.dialogWrapper}>
        <div className={styles.dialogContent}>{children}</div>

        <button
          className={styles.closeButton}
          onClick={(event) => closeModal(event, false)}
        >
          <CloseIcon />
        </button>
      </div>
    </dialog>
  );
}
