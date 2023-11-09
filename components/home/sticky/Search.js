import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Search = () => {
    const [isStickySearchOpen, setIsStickySearchOpen] = useState(false);
    const ref = useRef(null);

    const handleStickyCartClick = () => {
        setIsStickySearchOpen(prevIsOpen => !prevIsOpen);
    };

    const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsStickySearchOpen(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsStickySearchOpen(false);
        }
    };

    useEffect(() => {
        if (isStickySearchOpen) {
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
    }, [isStickySearchOpen]);

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
                        <FaSearch />
                    </span>
                </a>

                {isStickySearchOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 z-50">
                        <div className="w-full max-w-lg bg-white rounded shadow-lg" ref={ref}>
                            <div className="bg-[#009688] hover:bg-[#19574c] text-white mb-4">
                                <div className="flex justify-between items-center mx-5">
                                    <h2 className="flex justify-between items-center text-lg font-medium">
                                        <FaSearch className="mr-5 my-5" /> SEARCH
                                    </h2>
                                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleStickyCartClick}>
                                        <FaTimes className="text-white" />
                                    </button>
                                </div>
                            </div>
                            <div className="max-w-md mx-auto p-6 bg-white rounded-md flex flex-col items-center">
                                <div className="relative w-full">
                                    <input type="text" className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none" placeholder="Search..." />
                                        <FaSearch className="absolute top-0 left-0 mt-3 ml-3 text-gray-400" />
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#19574c] focus:outline-none">Search</button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
