'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from './styles.module.scss';

export const SliderInfinityLogos = ({ data = [] }) => {
  const config = {
    autoplay: {
      enabled: true,
      delay: 0.5,
      pauseOnMouseEnter: false,
      disableOnInteraction: true,
    },
    centeredSlides: true,
    freeMode: true,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 5000,
    modules: [Autoplay],
  };

  return (
    <>
      <Swiper {...config} className={styles.slider}>
        {data.map((image, index) => (
          <SwiperSlide key={index} className={styles['swiper-slide']}>
            <Image
              src={image.src}
              alt={`Partner Logo ${index + 1}`}
              width={290}
              height={50}
              className={styles[`image-${index + 1}`]}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper {...config} dir="rtl" initialSlide={5} className={styles.slider}>
        {data.map((image, index) => (
          <SwiperSlide key={index} className={styles['swiper-slide']}>
            <Image
              src={image.src}
              alt={`Partner Logo ${index + 1}`}
              width={290}
              height={50}
              className={styles[`image-${index + 1}`]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderInfinityLogos;
