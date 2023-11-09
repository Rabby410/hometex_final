
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, } from "swiper";

function Blog() {
    const params = {
        slidesPerView: 4,
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1700: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
        freeMode: true,
        loop: true,
        centeredSlides: false,
        
        modules: [Autoplay, FreeMode],
        className: "mySwiper",
    };
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-3 mb-5">
                <h3 className="font-bold">FROM OUR BLOG</h3>
                <hr className=" border-gray-800 sm:mx-auto dark:border-gray-700 lg:my-2 after:content-none after:w-full after:h-0.5 after:bg-[#009688]" />
                {/*Blog Section*/}

                <Swiper {...params}>

                    <SwiperSlide className="border-black">

                        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src="./images/FROM OUR BLOG/inside-weather-ej3UoXYMaRI-unsplash-600x390.webp" alt="product image" />
                            </a>

                            <a href="#" className="flex flex-col items-center bg-white  shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <h5 className="py-[20px] px-[13px]  bg-[#eee] mb-2 text-xl font-semibold tracking-tight text-black-500 dark:text-white ">20<br /> APR</h5>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Feather Pillow for sleep-lovers</h5>
                                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Most people think that feather and down pillows
                                        are same; but in reality they are different. Ac..</p>
                                </div>
                            </a>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src="./images/FROM OUR BLOG/softy-600x390.webp" alt="product image" />
                            </a>

                            <a href="#" className="flex flex-col items-center bg-white  shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <h5 className="py-[20px] px-[13px]  bg-[#eee] mb-2 text-xl font-semibold tracking-tight text-black-500 dark:text-white ">20<br /> APR</h5>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Make Your Boring Time Interesting & Productive! Try Rearranging the Furniture!</h5>
                                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">If staying at home 24/7 is making you climb the
                                        walls or just using your creepy devices day & n..</p>
                                </div>
                            </a>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src="./images/FROM OUR BLOG/002 (4)-600x390.webp" alt="product image" />
                            </a>

                            <a href="#" className="flex flex-col items-center bg-white  shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <h5 className="py-[20px] px-[13px]  bg-[#eee] mb-2 text-xl font-semibold tracking-tight text-black-500 dark:text-white ">20<br /> APR</h5>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">One slice of Peace!</h5>
                                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Alhamdulilah, Allah (SWT) has given us the
                                        whole earth as a place of worship! As muslims we are not..</p>
                                </div>
                            </a>

                        </div>


                    </SwiperSlide>
                    <SwiperSlide className="border-black">

                        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src="./images/FROM OUR BLOG/inside-weather-ej3UoXYMaRI-unsplash-600x390.webp" alt="product image" />
                            </a>

                            <a href="#" className="flex flex-col items-center bg-white  shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <h5 className="py-[20px] px-[13px]  bg-[#eee] mb-2 text-xl font-semibold tracking-tight text-black-500 dark:text-white ">20<br /> APR</h5>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Feather Pillow for sleep-lovers</h5>
                                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Most people think that feather and down pillows
                                        are same; but in reality they are different. Ac..</p>
                                </div>
                            </a>

                        </div>

                    </SwiperSlide>
                    
                </Swiper>



            </div>
        </div>
    );
}

export default Blog;