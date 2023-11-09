import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Categories = () => {
  const [isStickyOpen, setIsStickyOpen] = useState(false);
  const ref = useRef(null);

  const handleStickyCartClick = () => {
    setIsStickyOpen(prevIsOpen => !prevIsOpen);
  };

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsStickyOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsStickyOpen(false);
    }
  };

  useEffect(() => {
    if (isStickyOpen) {
      window.addEventListener('mousedown', handleOutsideClick);
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isStickyOpen]);

  return (
    <>
      <div className="relative z-50">
        <a
          onClick={handleStickyCartClick}
          className="sticky-mycart bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 h-12 cursor-pointer flex justify-center items-center border border-white"
          data-target="popup"
          data-popup="#popup-mycart"
        >
          <span className="text-xl">
            <FaBars />
          </span>
        </a>

        {isStickyOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 z-50">
            <div className="w-full max-w-lg bg-white rounded shadow-lg" ref={ref}>
              <div className="bg-[#009688] hover:bg-[#19574c] text-white mb-4">
                <div className="flex justify-between items-center mx-5">
                  <h2 className="flex justify-between items-center text-lg font-medium">
                    <FaBars className="mr-5 my-5" /> ALL CATEGORIES
                  </h2>
                  <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleStickyCartClick}>
                    <FaTimes className="text-white" />
                  </button>
                </div>
              </div>
              <ul>
                <li className="flex items-center justify-between border-b border-gray-300 py-2">
                  <span className="uppercase text-lg pl-3">Hotel Linen</span>
                  <span className="text-gray-600 text-2xl pr-3">+</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-300 py-2">
                  <span className="uppercase text-lg pl-3">Bedding</span>
                  <span className="text-gray-600 text-2xl pr-3">+</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-300 py-2">
                  <span className="uppercase text-lg pl-3">Living Decor</span>
                  <span className="text-gray-600 text-2xl pr-3">+</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-300 py-2">
                  <span className="uppercase text-lg pl-3">Bath Support</span>
                  <span className="text-gray-600 text-2xl pr-3">+</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-300 py-2">
                  <span className="uppercase text-lg pl-3">Kitchen || Dining</span>
                  <span className="text-gray-600 text-2xl pr-3">+</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-300 py-2">
                  <span className="uppercase text-lg pl-3">Home Decor</span>
                  <span className="text-gray-600 text-2xl pr-3">+</span>
                </li>
              </ul>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories