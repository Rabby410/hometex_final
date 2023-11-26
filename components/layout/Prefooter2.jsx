import Link from "next/link";
import React from "react";
import { FaAngleLeft, FaAngleRight, FaUser, FaComments} from "react-icons/fa";

const Prefooter2 = () => {
  return (
    <>
      <div className="bg-yellow-300">
        <div className="max-w-screen-xl mx-auto px-3 mb-5">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-[60%_40%] lg:grid-cols-[60%_40%] px-2 sm:px-4 py-2.5 w-full z-20 left-0">
            <div className="bg-slate-50">
              <div className="bg-black m-5 text-white">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 px-2 sm:px-4 py-2.5 w-full">
                  <div className="flex justify-start items-center">
                    Latest From the Blog
                  </div>
                  <div className="flex justify-end items-center">
                    <FaAngleLeft /> <FaAngleRight />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 px-2 sm:px-4 py-2.5 w-full">
                <div>
                  <img src="https://static-01.daraz.com.bd/p/63ed98f8f1c39bd6bffc8f72c1534172.jpg" alt="Hometex Blog" />
                </div>
                <div className="relative justify-center items-center text-center">
                    <h3 className="text-xl font-extrabold p-3">DAILY OUTFITS</h3>
                    <p className="text-sm p-3">Hey guys, many of you ask us about the details on everyday outfits, so we thought we would collect them here with a few bonus pics. We hope you will like the idea! There are so many e...</p>
                    <button className="bg-yellow-500 mt-5 text-black px-5 py-2 rounded-sm justify-items-center">Read More</button>
                    <div className="flex border-t-2 justify-between absolute inset-x-0 bottom-0">
                        <div className="flex items-center justify-start gap-2 mt-3">
                            <span><FaComments /></span>
                            <span>COMMENTS</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-3">
                            <span><FaUser /></span>
                            <span>EDNA BARTON</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-black p-2 rounded text-white"> ABOUT OUR STORE</div>
              <div className="text-justify py-3">
                {" "}
                Our store is more than jsut another average online retailer. We
                sell not only top quality products, but give our customer a
                positive online shopping experience. <br />
                <br /> Forget about struggling to do everything at once: taking
                care of the family, running your business, walking you dog,
                cleaning the house, doing the shopping, etc. Purchase the goods
                you need every day or just like in a few clicks or taps,
                depending on the device you use to access the internet. We work
                to make your life more enjoyable.
              </div>
              <div className="bg-black p-2 rounded text-white">GET CONNECTED</div>
              <div className="mt-5">Like, Share, or follow for exclusive info!</div>
              <div>
              <ul>
                    <li className="flex pt-5 justify-left space-x-4 text-gray-700">
                      <Link
                        href="https://www.facebook.com/hometex.ltd"
                        className=""
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="w-5 h-5 hover:text-[#0000ff]"
                        >
                          <path
                            fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                      </Link>
                      <Link href="https://twitter.com/HometexBD" className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 hover:text-[#0000ff]"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </Link>
                      <Link
                        href="https://www.instagram.com/hometex_bangladesh"
                        className=""
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-5 h-5 hover:text-[#0000ff]"
                        >
                          <path
                            fill="currentColor"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          />
                        </svg>
                      </Link>

                      <Link href="https://www.youtube.com" className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-5 h-5 hover:text-[#0000ff]"
                        >
                          <path
                            fill="currentColor"
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                          />
                        </svg>
                      </Link>

                      <Link href="https://www.pinterest.com" className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="w-5 h-5 hover:text-[#0000ff]"
                        >
                          <path
                            fill="currentColor"
                            d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                          />
                        </svg>
                      </Link>

                      <Link href="#" className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 hover:text-[#0000ff]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prefooter2;
