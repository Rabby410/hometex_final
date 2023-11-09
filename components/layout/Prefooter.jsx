import Link from 'next/link'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode } from "swiper";

export default function Prefooter() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 mb-5">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          breakpoints={{
            0: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 2,
            },
            639: {
                slidesPerView: 3,
            },
            865: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
            1700: {
                slidesPerView: 6,
            }
        }}
          freeMode={true}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="./images/prefooter/hometexbrand1-350x150.webp"
              className="h-auto max-w-full m-1 sm:h-auto"
              alt="Hometex Bangladesh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/prefooter/Perfetti_Van_Melle_logo-350x150.webp"
              className="h-auto max-w-full m-1 sm:h-auto"
              alt="Hometex Bangladesh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/prefooter/PWD_hometex-350x150.webp"
              className="h-auto max-w-full m-1 sm:h-auto"
              alt="Hometex Bangladesh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/prefooter/vivo-350x150.webp"
              className="h-auto max-w-full m-1 sm:h-auto"
              alt="Hometex Bangladesh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/prefooter/nabil-350x150.webp"
              className="h-2 m-1 sm:h-auto"
              alt="Hometex Bangladesh"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/prefooter/ziska_pharma-350x150.png"
              className="h-auto max-w-full sm:h-auto"
              alt="Hometex Bangladesh"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    
    </>
  )
}
