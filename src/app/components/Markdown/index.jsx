import MDComponent from 'react-markdown';
import styles from './styles.module.scss';

const Markdown = ({ children }) => {
  return <MDComponent className={styles.markdown}>{children}</MDComponent>;
};

export default Markdown;
