'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import CardFeedback from '@/app/components/Cards/CardFeedback';
import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const checkDisable = () => {
      setIsDisabled(swiper.isEnd);
    };
    swiper.on('slideChange', checkDisable);
    checkDisable();

    return () => {
      swiper.off('slideChange', checkDisable);
    };
  }, [swiper]);

  return (
    <Button onClick={() => swiper.slideNext()} disabled={isDisabled}>
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
          d="M9.96967 7.46967C9.67678 7.76256 9.67678 8.23744 9.96967 8.53033L13.4393 12L9.96967 15.4697C9.67678 15.7626 9.67678 16.2374 9.96967 16.5303C10.2626 16.8232 10.7374 16.8232 11.0303 16.5303L15.0303 12.5303C15.3232 12.2374 15.3232 11.7626 15.0303 11.4697L11.0303 7.46967C10.7374 7.17678 10.2626 7.17678 9.96967 7.46967Z"
          fill="currentColor"
        />
      </svg>
    </Button>
  );
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const checkDisable = () => {
      setIsDisabled(swiper.isBeginning);
    };
    swiper.on('slideChange', checkDisable);
    checkDisable(); // Initial check

    return () => {
      swiper.off('slideChange', checkDisable);
    };
  }, [swiper]);

  return (
    <Button onClick={() => swiper.slidePrev()} disabled={isDisabled}>
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
          d="M14.0303 7.46967C14.3232 7.76256 14.3232 8.23744 14.0303 8.53033L10.5607 12L14.0303 15.4697C14.3232 15.7626 14.3232 16.2374 14.0303 16.5303C13.7374 16.8232 13.2626 16.8232 12.9697 16.5303L8.96967 12.5303C8.67678 12.2374 8.67678 11.7626 8.96967 11.4697L12.9697 7.46967C13.2626 7.17678 13.7374 7.17678 14.0303 7.46967Z"
          fill="currentColor"
        />
      </svg>
    </Button>
  );
};

export const SliderFeedback = ({ data, readAllBtn, className }) => {
  const documentWith = () => {
    if (typeof window !== 'undefined') {
      return (window.innerWidth - 1240) / 2;
    } else {
      return 200;
    }
  };

  const config = {
    slidesPerView: 1.5,
    spaceBetween: 12,
    freeMode: true,
    slidesOffsetBefore: 16,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 24,
        slidesOffsetBefore: 24,
      },
      1440: {
        slidesPerView: 2.5,
        slidesOffsetBefore: documentWith(),
      },
      1600: {
        slidesPerView: 3.5,
        slidesOffsetBefore: documentWith(),
      },
    },
  };

  return (
    <Swiper {...config} className={clsx(styles.slider, className)}>
      {data.map((item, idx) => (
        <SwiperSlide key={item.id}>
          <CardFeedback
            readAllBtn={readAllBtn}
            id={`slider-feedbaack-${idx}`}
            {...item.attributes}
          />
        </SwiperSlide>
      ))}

      <div className="container">
        <div className={styles.swiperNavigation}>
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </div>
    </Swiper>
  );
};

export default SliderFeedback;
