import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const MainSlider = () => {
  return (
    <>
    <div className="item-center object-fill">
            <Swiper
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="#">
                        <img className="rounded-t-lg" src="./images/mslider/Slider-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className="rounded-t-lg" src="./images/mslider/Bath Support-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className=" rounded-t-lg" src="./images/mslider/Curtains-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className=" rounded-t-lg" src="./images/mslider/Cushion Cover-1920x601.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide><a href="#">
                        <img className="p-8 rounded-t-lg" src="./images/mslider/2 Double-1920x601.webp" alt="product image" />
                    </a>
                    </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default MainSlider