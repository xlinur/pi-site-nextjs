'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const config = {
  slidesPerView: 1.5,
  spaceBetween: 12,
  centeredSlides: false,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
};

const btnTextConfig = (idx) => {
  if (idx !== 0) {
    return {
      theme: 'text',
      withIcon: true,
      iconRight: true,
    };
  }

  return {};
};

export const SliderPricing = ({ data, altComponent }) => {
  const [isClient, setIsClient] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowSlider(screenWidth > 540 && screenWidth < 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return showSlider ? (
    <Swiper {...config} className={styles.slider}>
      {data.map((item, idx) => (
        <SwiperSlide key={item.id}>
          <div
            className={clsx(
              idx === 0 && styles.specialCard,
              styles.cardPricing,
            )}
            key={item.id}
          >
            <div>
              <h5>{item.title}</h5>
              <Markdown>{item.description}</Markdown>
            </div>

            <Button {...btnTextConfig(idx)} name={item.btnName} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    altComponent
  );
};

export default SliderPricing;
