import Button from '@/app/components/Button';
import styles from './styles.module.scss';

export default function index() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h5>Teamlead C++</h5>

        <ul className={styles.info}>
          <li>
            <b>Location:</b> Remote
          </li>
          <li>
            <b>Type:</b> Full Time
          </li>
        </ul>
      </div>

      <Button withIcon />
    </div>
  );
}
