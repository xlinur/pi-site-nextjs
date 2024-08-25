"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import CardFeedback from "@/app/core/components/Cards/CardFeedback";

export const SliderFeedback = () => {
    const config = {
        slidesPerView: 2,
        spaceBetween: 24,
        centeredSlides: true,
    };

    return (
        <Swiper {...config}>
            <SwiperSlide>
                <CardFeedback bgWhite />
            </SwiperSlide>
            <SwiperSlide>
                <CardFeedback />
            </SwiperSlide>
            <SwiperSlide>
                <CardFeedback />
            </SwiperSlide>
            <SwiperSlide>
                <CardFeedback />
            </SwiperSlide>
            <SwiperSlide>
                <CardFeedback />
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderFeedback;
