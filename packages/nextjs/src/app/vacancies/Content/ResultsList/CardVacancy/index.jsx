import Button from '@/app/components/Button';
import styles from './styles.module.scss';

const CardVacancy = ({ title, type, location }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h5>{title}</h5>

        <ul className={styles.info}>
          <li>{location}</li>
          <li>{type}</li>
        </ul>
      </div>

      <Button withIcon />
    </div>
  );
};

export default CardVacancy;
