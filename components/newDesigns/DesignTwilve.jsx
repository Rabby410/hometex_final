import React, { useRef } from "react";
import { HiOutlineMailOpen, HiOutlinePlay } from "react-icons/hi";

const DesignTwelve = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row">
      {/* Left Side - Video */}
      <div className="w-full md:w-70 h-80 md:h-auto relative overflow-hidden mb-4 md:mb-0">
        <video
          ref={videoRef}
          className="w-full h-full cursor-pointer"
          loop
          controls
        >
          <source src="videos/vv1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="w-12 h-12 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
          onClick={playVideo}
        >
          <span className="text-5xl text-yellow-400">
            <HiOutlinePlay />
          </span>
        </div>
      </div>

      {/* Right Side - Newsletter */}
      <div className="w-full md:w-30 p-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl py-5 font-bold">Newsletter</h2>
          <div className="w-10 h-1 bg-yellow-500 mx-auto my-2"></div>
          <p className="py-5 text-xl md:text-base">
            You may unsubscribe at any moment. For that purpose, please find our
            contact info.
          </p>
          <div
            className="text-yellow-600 py-6 text-4xl md:text-6xl"
            style={{ textAlign: "-webkit-center" }}
          >
            <HiOutlineMailOpen />
          </div>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 mb-4"
            placeholder="Enter your email"
          />
          <button className="w-full bg-yellow-500 text-white py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignTwelve;
