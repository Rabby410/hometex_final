import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaTimes,  FaUsersCog, FaCloudDownloadAlt } from 'react-icons/fa';
import { BsBox2HeartFill } from 'react-icons/bs';
import { GiNotebook, GiSpeedometer } from 'react-icons/gi';
import { MdAddHomeWork } from 'react-icons/md';
import Image from 'next/image';

const User = () => {
    const [isStickyUserOpen, setIsStickyUserOpen] = useState(false);
    const ref = useRef(null);

    const handleStickyCartClick = () => {
        setIsStickyUserOpen(prevIsOpen => !prevIsOpen);
    };

    const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsStickyUserOpen(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsStickyUserOpen(false);
        }
    };

    useEffect(() => {
        if (isStickyUserOpen) {
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
    }, [isStickyUserOpen]);

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
                        <FaUser />
                    </span>
                </a>

                {isStickyUserOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 z-50">
                        <div className="w-full max-w-lg bg-white rounded shadow-lg" ref={ref}>
                            <div className="bg-[#009688] hover:bg-[#19574c] text-white mb-4">
                                <div className="flex justify-between items-center mx-5">
                                    <h2 className="flex justify-between items-center text-lg font-medium">
                                        <FaUser className="mr-5 my-5" /> Shopping Cart
                                    </h2>
                                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={handleStickyCartClick}>
                                        <FaTimes className="text-white" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 m-5 border-b-2 border-black pb-10">
                                <div className="col-span-1">
                                    <label className="label-top" htmlFor="input-language">
                                        <span>Currency</span>
                                    </label>
                                    <div className="relative">
                                        <select name="select-currency" id="input-currency" className="field icon dark arrow appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-300 border-black border-2 mt-2">
                                            <option value="BDT" selected>TK BDT TAKA</option>
                                        </select>
                                    </div>

                                    <input type="hidden" name="code" value="" />
                                    <input
                                        type="hidden"
                                        name="redirect"
                                        value="http://bd.hometex.ltd/"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="label-top" htmlFor="input-language">
                                        <span>Language</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="select-language"
                                            id="input-language"
                                            className="field icon dark arrow appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-300 border-black border-2 mt-2"
                                        >
                                            <option value="lng" >
                                                English
                                            </option>
                                        </select>
                                    </div>
                                    <input type="hidden" name="code" value="" />
                                    <input
                                        type="hidden"
                                        name="redirect"
                                        value="http://bd.hometex.ltd/"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 m-10">
                                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center">
                                    <GiSpeedometer size={32} className='text-orange-600' /> <br /><span className='text-sm whitespace-nowrap'>History</span>
                                </div>
                                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center">
                                    <BsBox2HeartFill size={32} className='text-orange-600' /> <br /><span className='text-sm whitespace-nowrap'>SHOPPING CART</span> 
                                </div>
                                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center">
                                    <GiNotebook size={32} className='text-orange-600' /> <br /><span className='text-sm whitespace-nowrap'>REGISTER</span>
                                </div>
                                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center">
                                    <FaUsersCog size={32} className='text-orange-600' /> <br /><span className='text-sm whitespace-nowrap'>Account</span>
                                </div>
                                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center">
                                    <FaCloudDownloadAlt size={32} className='text-orange-600' /> <br /><span className='text-sm whitespace-nowrap'>Download</span>
                                </div>
                                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center">
                                    <MdAddHomeWork size={32} className='text-orange-600' /> <br /><span className='text-sm whitespace-nowrap'>Login</span>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div >
        </>
    );
};

export default User;
