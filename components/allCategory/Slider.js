import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
    <div className="item-center object-fill mb-5">
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
                        <img className="rounded-t-lg" src="/images/allCategorySliders/H-870x260.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className="rounded-t-lg" src="/images/allCategorySliders/S-870x260.webp" alt="product image" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#">
                        <img className=" rounded-t-lg" src="/images/allCategorySliders/T-870x260.webp" alt="product image" />
                    </a>
                </SwiperSlide>
            </Swiper>
    </div>
    
    
    </>
  )
}

export default Slider