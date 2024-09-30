'use client';

import clsx from 'clsx';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { handleOpenModal } from '@/app/core/helpers/modalHandlers';

const ArrowIcon = () => (
  <svg
    width="var(--icon-width, 38px)"
    height="var(--icon-height, 38px)"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrowIcon}
  >
    <circle cx="19" cy="19" r="19" fill="var(--icon-bg-color, #FFFFFF)" />
    <path
      d="M25.7071 19.7071C26.0976 19.3166 26.0976 18.6834 25.7071 18.2929L19.3431 11.9289C18.9526 11.5384 18.3195 11.5384 17.9289 11.9289C17.5384 12.3195 17.5384 12.9526 17.9289 13.3431L23.5858 19L17.9289 24.6569C17.5384 25.0474 17.5384 25.6805 17.9289 26.0711C18.3195 26.4616 18.9526 26.4616 19.3431 26.0711L25.7071 19.7071ZM13 20L25 20L25 18L13 18L13 20Z"
      fill="var(--icon-arrow-color, #2DA5D9)"
    />
  </svg>
);

const Button = (props) => {
  const {
    onClick,
    openModal,
    children,
    name,
    withIcon = false,
    iconRight = false,
    size = 'lg', // lg | default - empty string
    theme = 'primary', // primary | secondary | default | text | transparent
    disabled = false,
    content,
    type = 'button',
    url,
  } = props;

  const router = useRouter();

  const stylesBtn = [
    styles.btn,
    size && styles[size],
    styles[theme],
    iconRight ? styles.iconRight : '',
    withIcon ? styles.withIcon : '',
    content === 'center' ? styles.contentCenter : '',
  ];

  const handleButton = () => {
    if (url) {
      router.push(url);
      return;
    }

    if (openModal) {
      handleOpenModal();
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleButton}
      className={clsx(stylesBtn)}
    >
      {withIcon && ArrowIcon()}
      <span>{name || children}</span>
    </button>
  );
};

export default Button;
