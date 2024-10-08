'use client';

import clsx from 'clsx';

import styles from './styles.module.scss';

/**
 *
 * @param {string?} props.size lg | default - empty string
 * @param {string?} props.theme primary | secondary | default | text | transparent
 * @return {JSX.Element}
 * @constructor
 */
const Button = (props) => {
  const {
    onClick,
    children,
    className,
    name,
    withIcon = false,
    iconRight = false,
    size = 'lg',
    theme = 'primary',
    disabled = false,
    content,
    type = 'button',
    url,
    isLoading,
  } = props;

  const stylesBtn = [
    styles.btn,
    className,
    size && styles[size],
    styles[theme],
    iconRight ? styles.iconRight : '',
    withIcon ? styles.withIcon : '',
    content === 'center' ? styles.contentCenter : '',
    isLoading ? styles.loading : '',
  ];

  const Link = () => (
    <a href={url} className={clsx(stylesBtn)}>
      {withIcon && ArrowIcon()}
      <span>{name || children}</span>
    </a>
  );

  const Button = () => (
    <button
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
      className={clsx(stylesBtn)}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {withIcon && ArrowIcon()}
          <span>{name || children}</span>
        </>
      )}
    </button>
  );

  return url ? <Link /> : <Button />;
};

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

const LoadingSpinner = () => (
  <svg
    className={styles.spinner}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className={styles.spinnerCircle}
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeDasharray="80"
      strokeDashoffset="60"
    />
  </svg>
);

export default Button;
