import styles from './styles.module.scss';
import Button from '@/app/components/Button';

const Pagination = ({
  currentPage,
  pageCount,
  onPrevPageClick,
  onNextPageClick,
  onPageNumberChange,
  disablePrevPaginationBtn,
  disableNextPaginationBtn,
}) => {
  return (
    <div className={styles.pagination}>
      <Button
        theme="transparent"
        disabled={disablePrevPaginationBtn}
        onClick={onPrevPageClick}
      >
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6255 6.7925L13.333 5.5L7.83301 11L13.333 16.5L14.6255 15.2075L10.4272 11L14.6255 6.7925Z"
            fill="currentColor"
          />
        </svg>
      </Button>

      <div className={styles.numbers}>
        {Array.from({ length: pageCount }).map((_, idx) => (
          <Button
            key={idx}
            onClick={onPageNumberChange(idx + 1)}
            theme={currentPage === idx + 1 ? 'primary' : 'secondary'}
          >
            {idx + 1}
          </Button>
        ))}
      </div>

      <Button
        theme="transparent"
        disabled={disableNextPaginationBtn}
        onClick={onNextPageClick}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.87449 6.7925L9.16699 5.5L14.667 11L9.16699 16.5L7.87449 15.2075L12.0728 11L7.87449 6.7925Z"
            fill="currentColor"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Pagination;
