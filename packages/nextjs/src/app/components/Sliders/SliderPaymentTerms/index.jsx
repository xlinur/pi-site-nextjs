'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Image from 'next/image';
import dollarsSVG from '@/app/assets/icons/dollars.svg';

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

export const SliderPaymentTerms = ({ data, altComponent, contactBtn }) => {
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
          <div className={styles.cardTerms} key={idx}>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <div className={styles.cardContact}>
          <Image src={dollarsSVG} alt="Icon dollars" width={148} height={148} />

          <Button size="lg" name={contactBtn.name} />
        </div>
      </SwiperSlide>
    </Swiper>
  ) : (
    altComponent
  );
};

export default SliderPaymentTerms;
