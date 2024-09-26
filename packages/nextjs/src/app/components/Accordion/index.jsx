'use client';

import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';

const ArrowItemSvg = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.1421 27.1421C26.6944 27.1421 27.1421 26.6944 27.1421 26.1421L27.1421 17.1421C27.1421 16.5899 26.6944 16.1421 26.1421 16.1421C25.5899 16.1421 25.1421 16.5899 25.1421 17.1421L25.1421 25.1421L17.1421 25.1421C16.5899 25.1421 16.1421 25.5899 16.1421 26.1421C16.1421 26.6944 16.5899 27.1421 17.1421 27.1421L26.1421 27.1421ZM11.2929 12.7071L25.435 26.8492L26.8492 25.435L12.7071 11.2929L11.2929 12.7071Z"
      fill="#797979"
    />
  </svg>
);

const CheckMarkSvg = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11.5799V12.4999C21.9988 14.6563 21.3005 16.7545 20.0093 18.4817C18.7182 20.2088 16.9033 21.4723 14.8354 22.0838C12.7674 22.6952 10.5573 22.6218 8.53447 21.8744C6.51168 21.1271 4.78465 19.746 3.61096 17.9369C2.43727 16.1279 1.87979 13.9879 2.02168 11.8362C2.16356 9.68443 2.99721 7.63619 4.39828 5.99694C5.79935 4.35768 7.69279 3.21525 9.79619 2.74001C11.8996 2.26477 14.1003 2.4822 16.07 3.35986"
      stroke="#2DA5D9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 4.5L12 14.51L9 11.51"
      stroke="#2DA5D9"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const AccordionItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null); // Реф для измерения высоты контента
  const { label, title, items } = item;

  return (
    <div className={styles.accordionItem}>
      <h5 onClick={onClick} style={{ cursor: 'pointer' }}>
        <span>
          <ArrowItemSvg />
        </span>

        {label}
      </h5>

      <div
        className={styles.accordionContent}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
          marginTop: isOpen ? '30px' : '0px',
        }}
      >
        <span>
          <CheckMarkSvg />
        </span>

        <div ref={contentRef}>
          <h5 className="h5">{title}</h5>

          <ul className={styles.accordionContentList}>
            {items.map((contentItem, index) => (
              <li key={index}>
                <strong className="h5">{contentItem.title}</strong>
                <p>{contentItem.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
