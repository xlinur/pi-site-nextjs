import MDComponent from 'react-markdown';
import styles from './styles.module.scss';
import clsx from 'clsx';

const isHtmlCode = (data) =>
  data.includes('<!--strapi-plugin-rich-text-output-->');

const Markdown = ({ children = '', className }) => {
  const typographyClsx = clsx(styles.markdown, className);

  if (children && isHtmlCode(children)) {
    return (
      <div
        className={typographyClsx}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return <MDComponent className={typographyClsx}>{children}</MDComponent>;
};

export default Markdown;
