import MDComponent from 'react-markdown';
import styles from './styles.module.scss';
import clsx from 'clsx';

const Markdown = ({ children, className }) => {
  return (
    <MDComponent className={clsx(styles.markdown, className)}>
      {children}
    </MDComponent>
  );
};

export default Markdown;
