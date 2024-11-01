"use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { EffectFade } from "swiper/modules";
import {
  Navigation,
  Pagination,
  // Scrollbar,
  // A11y,
  Autoplay,
} from "swiper/modules";

export default function MySwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Enable required modules
      spaceBetween={20} // Space between slides
      slidesPerView={2} // Number of slides visible at a time
      navigation // Enable navigation
      pagination={{ clickable: true }} // Enable pagination
      autoplay={false} // Enable autoplay
    >
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>6</SwiperSlide>
    </Swiper>
  );
}
