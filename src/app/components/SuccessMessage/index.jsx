import Markdown from '@/app/components/Markdown';
import styles from './styles.module.scss';

const SuccessMessage = async (data) => {
  const { title, message } = data;

  return (
    <div className={styles.successMessage}>
      <span className={styles.successMessageIcon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <h5>
        <Markdown>{title}</Markdown>
      </h5>

      <div>
        <Markdown>{message}</Markdown>
      </div>
    </div>
  );
};

export default SuccessMessage;
