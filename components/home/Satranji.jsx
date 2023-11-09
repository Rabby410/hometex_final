import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import { CiStar } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { RiShoppingBasketFill, RiExchangeFill } from "react-icons/ri";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";

const Satranji = ({ products }) => {
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      639: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      865: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1700: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    freeMode: true,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, FreeMode],
    className: "mySwiper",
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 mb-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src="./images/SATRANJI/Rugs Carpet-601x855.webp"
                alt="product image"
              />
            </a>
          </div>
          <div className="col-span-2">
            <h3 className="font-bold pt-7">SATRANJI</h3>
            <hr className="border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-2 after:content-none" />
            {/* Slider Start */}
            <div className="flex flex-wrap">
              {products &&
                products.length > 0 &&
                [...Array(2)].map((_, rowIndex) => (
                  <Swiper {...params} key={`row-${rowIndex}`}>
                    <div className="flex flex-wrap">
                      {products.length > 0 &&
                        products
                          .slice(
                            rowIndex * Math.ceil(products.length / 2),
                            (rowIndex + 1) * Math.ceil(products.length / 2)
                          )
                          .map((product, i) => (
                            <div className="w-1/2" key={`product-${i}`}>
                              <SwiperSlide>
                                <Link href={`/Shop/${product.id}`}>
                                  <div className="relative w-60 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border mt-5">
                                    <img
                                      className="w-60 p-8 rounded-t-lg"
                                      src={product.primary_photo}
                                      alt={product.name}
                                    />
                                    <div className="absolute top-0 right-0 p-2 opacity-0 hover:opacity-100 transition duration-300 ">
                                      <RiShoppingBasketFill
                                        size={34}
                                        color="#fff"
                                        className="bg-[#999] hover:bg-[#009688] m-2 p-2"
                                      />
                                      <MdFavorite
                                        size={34}
                                        color="#fff"
                                        className="bg-[#999] hover:bg-[#009688] m-2 p-2"
                                      />
                                      <RiExchangeFill
                                        size={34}
                                        color="#fff"
                                        className="bg-[#999] hover:bg-[#009688] m-2 p-2"
                                      />
                                    </div>
                                    <div className="px-5 pb-5">
                                      <ReactStars
                                        count={5}
                                        size={24}
                                        value={5}
                                        edit={false}
                                        activeColor="#ffd700"
                                      />
                                      <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {product.name}
                                      </h5>
                                      <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-red-900 dark:text-white">
                                          Price: TK {product.price}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </SwiperSlide>
                            </div>
                          ))}
                    </div>
                  </Swiper>
                ))}
            </div>
            {/* Slider End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Satranji;
