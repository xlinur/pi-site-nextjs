import { routes } from '@/config/routes';
import Button from '@/app/components/Button';
import styles from './styles.module.scss';

const arrowIcon = (
  <svg
    width="13"
    height="16"
    viewBox="0 0 13 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7L0 7L0 9Z"
      fill="currentColor"
    />
  </svg>
);

const CardVacancy = ({ id, title, type, location }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h5>{title}</h5>

        <ul className={styles.info}>
          <li>{location?.join(', ')}</li>
          <li>{type?.join(', ')}</li>
        </ul>
      </div>

      <Button theme="transparent" url={routes.vacancy(id)}>
        {arrowIcon}
      </Button>
    </div>
  );
};

export default CardVacancy;
