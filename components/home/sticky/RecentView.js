import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Constants from '@/ults/Constant';

const RecentView = () => {
    const [isStickyRvOpen, setIsStickyRVOpen] = useState(false);
    const ref = useRef(null);

    const handleStickyCartClick = () => {
        setIsStickyRVOpen(prevIsOpen => !prevIsOpen);
    };

    const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsStickyRVOpen(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsStickyRVOpen(false);
        }
    };

    useEffect(() => {
        if (isStickyRvOpen) {
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
    }, [isStickyRvOpen]);


    const [recentView, setRecentView] = useState([]);
    useEffect(() => {
        let recentitems = localStorage.getItem("recentview") ? JSON.parse(localStorage.getItem("recentview")) : []
        setRecentView(recentitems)
    }, [])

    let products = recentView;
    const [page, setPage] = useState(1);
    const productsPerPage = 2;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleClickPrev = () => {
        setPage((prev) => prev - 1);
    };

    const handleClickNext = () => {
        setPage((prev) => prev + 1);
    };

    const startIndex = (page - 1) * productsPerPage;
    const visibleProducts = products.slice(
        startIndex,
        startIndex + productsPerPage
    );

    const image_URL = `${Constants.BASE_URL}/images/uploads/product`;

    // console.log(products.length, 'Hello___')
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
                        <FaEye />
                    </span>
                </a>

                {isStickyRvOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 z-50">
                        <div className="w-full max-w-lg bg-white rounded shadow-lg" ref={ref}>
                            <div className="bg-[#009688] hover:bg-[#19574c] text-white mb-4">
                                <div className="flex justify-between items-center mx-5">
                                    <h2 className="flex justify-between items-center text-lg font-medium">
                                        <FaEye className="mr-5 my-5" /> RECENT VIEW PRODUCTS
                                    </h2>
                                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleStickyCartClick}>
                                        <FaTimes className="text-white" />
                                    </button>
                                </div>
                            </div>

                            {/*  */}

                            <div className="flex flex-col items-center">
                                <h2 className="text-lg font-medium mb-4">Recent Viewed Products</h2>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    {/* {visibleProducts.map((product) => (
                                        <div key={product.id} className="flex flex-col items-center">
                                            <img src={product.image} alt={product.name} className="mb-2" />
                                            <p className="text-center">{product.name}</p>
                                        </div>
                                    ))} */}

                                    {visibleProducts.map((product) => (
                                        <div key={product.id} className="flex flex-col items-center">
                                            <img src={image_URL+'/'+product.primary_photo['photo']} alt={product.name} className="mb-2" />
                                            <p className="text-center">{product.name}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center mb-5">
                                    <button
                                        onClick={handleClickPrev}
                                        disabled={page === 1}
                                        className="mr-2 disabled:opacity-50"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button
                                        onClick={handleClickNext}
                                        disabled={page === totalPages}
                                        className="disabled:opacity-50"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>
                            </div>

                            {/*  */}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default RecentView