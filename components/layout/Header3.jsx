import React from 'react'
import { HiOutlineMail, HiOutlineTicket, HiOutlineGift, HiShoppingCart } from "react-icons/hi"
import { AiTwotoneDelete } from "react-icons/ai"
import { BsFillPersonVcardFill } from "react-icons/bs"
import {
    FaShippingFast,
    FaPhoneSquareAlt,
    FaMoneyCheckAlt,
    FaSearch,
    FaKey,
    FaHome,
    FaUserAlt,
    FaMapMarkerAlt,
    FaCheck,
    FaLeaf,
    FaTimes,
    FaHeart,
    FaBars,
    FaUser
} from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import Link from 'next/link';
import Bedding from '../home/menus/Bedding';
import LivingDecor from '../home/menus/LivingDecor';
import BathSupport from '../home/menus/BathSupport';
import KitchenDinning from '../home/menus/KitchenDinning';
import { API_BASE_URL } from "@/ults/Constant";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import Constants from "../../ults/Constant";
import WishListContext from "@/context/WishListContext";
import CartContext from "@/context/CartContext";
import Modal from "./Modal";
import Swal from 'sweetalert2';
import DynamicText, { textOptions } from './DynamicText';

const Header3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const products = [
        // Example product data; you would fetch this from your backend or service
        { name: 'Product 1', image: 'https://htbapi.hometexbd.ltd/images/uploads/product_thumb/rosario-thu-nov-2-2023-650-pm-87312.jpeg', price: '20.00', originalPrice: '40.00', discount: '50' },
        { name: 'Product 2', image: 'https://htbapi.hometexbd.ltd/images/uploads/product_thumb/burbot-thu-nov-2-2023-744-pm-57895.jpeg', price: '20.00', originalPrice: '40.00', discount: '50' },
        { name: 'Product 3', image: 'https://htbapi.hometexbd.ltd/images/uploads/product_thumb/beboon-thu-nov-2-2023-758-pm-30205.jpeg', price: '20.00', originalPrice: '40.00', discount: '50' },
        { name: 'Product 4', image: 'https://htbapi.hometexbd.ltd/images/uploads/product_thumb/brownie-thu-nov-2-2023-808-pm-85665.jpeg', price: '20.00', originalPrice: '40.00', discount: '50' },
        { name: 'Product 5', image: 'https://htbapi.hometexbd.ltd/images/uploads/product_thumb/unicorn-thu-nov-2-2023-821-pm-91981.jpeg', price: '20.00', originalPrice: '40.00', discount: '50' },
        { name: 'Product 6', image: 'https://htbapi.hometexbd.ltd/images/uploads/product_thumb/mogra-thu-nov-2-2023-835-pm-92146.jpeg', price: '20.00', originalPrice: '40.00', discount: '50' },
        // Add more product objects here
    ];

    const saleEndTime = '2024-04-30T23:59:59';
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        const togglePopup = () => {
            // handle popup toggle logic
        };
    };
    // add an event listener to detect clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.keyCode === 27) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [dropdownRef]);
    //

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // popup for login
    const [showPopup, setShowPopup] = useState(false);

    function togglePopup() {
        setShowPopup(!showPopup);
    }
    // Finish login

    const { cart, deleteItemFromCart } = useContext(CartContext);

    const cartItems = cart?.cartItems;

    const { wlist } = useContext(WishListContext);

    const handleButtonClick = () => {
        if (!auth_token) {
            Swal.fire({
                title: 'Access Denied',
                text: 'You must be logged in to view your wishlist.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const cartRef = useRef(null);

    const handleCartClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleKeyPress = (event) => {
            if (event.keyCode === 27) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [cartRef]);

    //
    const handleSearchClick = () => {
        // Perform the search based on the input value
        const inputValue = document.getElementById("searchInput").value;
        console.log(`Searching for: ${inputValue}`);
        // Add your logic to navigate or display search results here
    };

    const handleKeyDown = (event) => {
        // Trigger the search when the user presses Enter
        if (event.key === "Enter") {
            handleSearchClick();
        }
    };

    //

    const [isSubmit, setIsSubmit] = useState(false);
    // sign in process
    const signInInitValue = {
        username: "",
        password: "",
    };
    const [signInData, setSignInData] = useState(signInInitValue);
    const [signInErr, setSignInErr] = useState({});
    // input handeler
    const handleSignIn = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };
    // submit handeler
    const signInSubmitHandler = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        const response = await fetch(Constants.BASE_URL + "/api/user-signup", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(signInData),
        });
        let res = await response.json();

        if (res.status == "400") {
            let err_list = {};
            for (const [key, value] of Object.entries(res.error))
                err_list[key] = value[0];
            setSignInErr(err_list);
            setIsSubmit(false);
        } else if (res.status == "200") {
            setIsSubmit(false);
            setSignInErr({});
            setCookie("home_text_token", res?.token);
            window.location.href = "/";
        }
    };

    // signout handeler
    const signOutSubmitHandler = async (e) => {
        e.preventDefault();
        // setIsSubmit(true)
        deleteCookie("home_text_token");
        window.location.href = "/";
    };
    let auth_token = getCookie("home_text_token");
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState({});

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSubMenu = (menuKey) => {
        setSubMenuOpen((prev) => ({ ...prev, [menuKey]: !prev[menuKey] }));
    };

    const [visitUsText, setVisitUsText] = useState(textOptions ? textOptions[0].visitUs : '');
    const handleTextChange = (newVisitUsText) => {
        setVisitUsText(newVisitUsText);

    };
    return (
        <>
            <div className="pt-2 hidden md:block">
                <div className="container mx-auto pb-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center px-2">
                            <span className="mx-3 px-3 py-1 cursor-pointer text-white font-medium
                                bg-gradient-to-r from-purple-500 to-pink-500
                                hover:from-pink-500 hover:to-purple-500
                                border-0 rounded-lg shadow-md
                                transition-all duration-300 ease-in-out">
                                {visitUsText}
                            </span>
                            <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500
                                hover:from-blue-500 hover:to-green-400
                                transition-all duration-300 ease-in-out">
                                <DynamicText onTextChange={handleTextChange} />
                            </div>
                        </div>


                        <div className="flex items-center gap-3 mr-8"> {/* Adjusted gap size for overall spacing */}
                            <Link href="/GetAQuote" className="flex items-center hover:text-blue-500">
                                <HiOutlineMail className="mr-2 text-pink-500" style={{ width: "22px", height: "22px" }} /> Corporate Inquiries {/* Added mr-2 for margin right */}
                            </Link>
                            <div className="flex items-center hover:text-blue-500">
                                <HiOutlineTicket className="mr-2 text-pink-500" style={{ width: "22px", height: "22px" }} /> Order Tracking
                            </div>
                            <div className="relative bg-black text-white px-2 pt-2 pb-3 flex items-center">
                                <HiOutlineGift className="mr-2 text-pink-500" style={{ width: "22px", height: "22px" }} />
                                My Rewards
                                <div className="absolute bottom-0 left-0 right-0 h-2 bg-repeat-x" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 10 10\'%3E%3Cpolygon points=\'0,10 5,0 10,10\' style=\'fill:%23ffffff;\'/%3E%3C/svg%3E")', backgroundSize: 'auto 100%' }}></div>
                            </div>

                            <div className="flex items-center hover:text-blue-500">
                                <FaShippingFast className="mr-2 text-pink-500" style={{ width: "22px", height: "22px" }} /> Shipping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pre Header end */}

            <div className='pt-1 hidden md:block sticky top-0 z-20' style={{ background: "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" }}>
                <div className='container mx-auto px-5'>
                    {/* Mid Header */}
                    <div className='flex flex-auto gap-2 justify-between items-center mt-3 container mx-auto' >
                        <div className='flex flex-row'>
                            <div className='px-2 flex flex-col items-center text-center'>
                                <FaMapMarkerAlt className="h-6 w-6 text-red-600" aria-hidden="true" />
                                <span className="text-sm mt-2 font-semibold text-gray-800">Find A Store</span>
                            </div>

                            <Link href="/Contact">
                                <div className='px-2 flex flex-col items-center text-center'>
                                    <FaPhoneSquareAlt className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                    <span className="text-sm mt-2 font-semibold text-gray-800">Customer Service</span>
                                </div>
                            </Link>

                            <div className='px-2 flex flex-col items-center text-center'>
                                <HiOutlineGift className="h-6 w-6 text-red-500" aria-hidden="true" />
                                <span className="text-sm mt-2 font-semibold text-gray-800">Gift Someone!</span>
                            </div>

                            <button onClick={() => setIsModalOpen(true)}>
                                <div className='px-2 flex flex-col items-center text-center'>
                                    <FaMoneyCheckAlt className="h-6 w-6 text-green-500" aria-hidden="true" />
                                    <span className="text-sm mt-2 font-semibold text-gray-800">Daily Deals</span>
                                </div>
                            </button>
                            <Modal
                                isOpen={isModalOpen}
                                closeModal={() => setIsModalOpen(false)}
                                saleEndTime={saleEndTime}
                                products={products}
                            />

                        </div>
                        <div className='justify-center w-full md:w-24'>
                            <Link href="/" className="flex justify-center">
                                <img src="/images/hometex-logo.png" alt="Hometex Bangladesh" />
                            </Link>
                        </div>
                        <div>
                            <div className='flex flex-row gap-8'>
                                <div className='px-2 flex flex-col items-center text-center'>
                                    <FaSearch className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                    <span className="text-sm mt-2 font-semibold text-gray-800">Search</span>
                                </div>


                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        type="button"
                                        className="flex items-center text-black  focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center mb-2 sm:mb-0 sm:mr-3 md:mr-0 dark:bg-[#15803d] dark:hover:bg-[#15803d] dark:focus:ring-green-800"
                                        onClick={toggleDropdown}
                                    >
                                        <div className='px-2 flex flex-col items-center text-center'>
                                            <FaUserAlt className="h-6 w-6 text-gray-600" aria-hidden="true" />
                                            <span className="text-sm mt-2 font-semibold text-gray-800">My Account</span>
                                        </div>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute z-50 top-full right-0 bg-white bg-opacity-95 backdrop-filter backdrop-blur-md border border-gray-300 rounded-lg shadow-md py-2">
                                            {!auth_token && (
                                                <>
                                                    <button
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                                        onClick={togglePopup}
                                                    >
                                                        Log In
                                                    </button>

                                                    <Link href="/account/Register">
                                                        {" "}
                                                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                                                            Register
                                                        </button>
                                                    </Link>
                                                </>
                                            )}

                                            {auth_token && (
                                                <>
                                                    <Link href="../account/MyAccount">
                                                        {" "}
                                                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                                                            Profile
                                                        </button>
                                                    </Link>

                                                    <button
                                                        onClick={signOutSubmitHandler}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                                    >
                                                        Signout
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleButtonClick}
                                    className=""
                                >
                                    <div className='px-2 flex flex-col items-center text-center'>
                                        <FaHeart className="h-6 w-6 text-red-500" aria-hidden="true" />
                                        <span className="text-sm mt-2 font-semibold text-gray-700">Wishlist</span>
                                    </div>
                                    {auth_token && <span>{wlist?.length || 0}</span>}
                                </button>

                                <div className="relative" ref={cartRef}>
                                    <div className="relative">
                                        <button
                                            onClick={handleCartClick}
                                            type="button"
                                        >
                                            <div className='px-2 flex flex-col items-center text-center'>
                                                <HiShoppingCart className="h-6 w-6 text-blue-500" aria-hidden="true" />
                                                <span className="text-sm mt-2 font-semibold text-gray-700">Cart</span>
                                            </div>
                                        </button>
                                        {cartItems?.length > 0 && (
                                            <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white w-4 h-4 text-xs flex items-center justify-center">
                                                {cartItems.length}
                                            </span>
                                        )}
                                    </div>

                                    {isOpen && (
                                        <div className="absolute container whitespace-nowrap flex justify-center items-center right-0 z-50 w-auto bg-gray-500 bg-opacity-75 rounded shadow-lg ">
                                            <div className="bg-white rounded shadow-lg">
                                                <table className="w-full">
                                                    <tbody>
                                                        {cart?.cartItems?.map((cartItem) => (
                                                            <tr
                                                                key={cartItem.product_id}
                                                                className="border-b border-gray-300"
                                                            >
                                                                <td className="py-2 pl-4">
                                                                    <img
                                                                        src={`${Constants.BASE_URL}/images/uploads/product_thumb/${cartItem.image.photo}`}
                                                                        alt={cartItem.name}
                                                                        className="w-16 h-16 object-cover rounded"
                                                                    />
                                                                </td>
                                                                <td className="p-2">{cartItem.name}</td>
                                                                <td className="p-2">{cartItem.quantity}</td>
                                                                <td className="p-2">
                                                                    BDT {cartItem.total_price}{" "}
                                                                </td>
                                                                <td className="p-2">
                                                                    <button
                                                                        className="text-gray-500 hover:text-red-500"
                                                                        onClick={() =>
                                                                            deleteItemFromCart(cartItem.product_id)
                                                                        }
                                                                    >
                                                                        <AiTwotoneDelete
                                                                            className="text-red-600"
                                                                            size={24}
                                                                        />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        <tr className="border-b border-gray-300">
                                                            <td
                                                                colSpan="5"
                                                                className="p-2 pt-3 flex justify-between items-center"
                                                            >
                                                                <Link href="/cart">
                                                                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2">
                                                                        View Cart
                                                                    </button>
                                                                </Link>
                                                                <Link href="/checkout">
                                                                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                                                                        Checkout
                                                                    </button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Mid Header end */}
                    {/* menu */}
                    <div className='flex flex-auto gap-2 container mx-auto justify-end items-center'>
                        <nav className="">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-0">
                                <div className="flex items-center justify-between h-16 " style={{ marginRight: "240px" }}>
                                    <div className="hidden md:block">
                                        <div className="flex items-center place-content-center relative">
                                            <Link
                                                href="/"
                                                className=" inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                <FaHome className="text-xl" />
                                            </Link>
                                            <Bedding />
                                            <LivingDecor />
                                            <BathSupport />
                                            <KitchenDinning />
                                            <Link
                                                href="/Shop"
                                                className="inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                <FaLeaf className="mr-2" />
                                                Home Decor
                                            </Link>

                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        <button
                                            onClick={handleMenuClick}
                                            type="button"
                                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                                        >
                                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {isMenuOpen && (
                                <div className="md:hidden">
                                    <div className="px-2 pt-2 pb-3 sm:px-3">
                                        <Link
                                            href="/"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            <FaHome className="text-xl" />
                                        </Link>
                                        <Link
                                            href="/Shop"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Bedding
                                        </Link>
                                        <Link
                                            href="/Shop"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Living Decor
                                        </Link>
                                        <Link
                                            href="/Shop"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Bath Support
                                        </Link>
                                        <Link
                                            href="/Shop"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Kitchen | Dining
                                        </Link>
                                        <Link
                                            href="/"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Home Decor
                                        </Link>
                                        <Link
                                            href="/Contact"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Contact Us
                                        </Link>
                                        <Link
                                            href="/GetAQuote"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Get a Quote
                                        </Link>
                                        <Link
                                            href="/"
                                            className="text-black-300 hover:text-white hover:bg-black block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            Find A Store
                                        </Link>
                                        <div className="relative" ref={cartRef}>
                                            <div className="relative">
                                                <button
                                                    onClick={handleCartClick}
                                                    type="button"
                                                    className="ml-3 text-white bg-[#009688] hover:bg-[#86efac] focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#15803d] dark:hover:bg-[#15803d] dark:focus:ring-green-800"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                                        />
                                                    </svg>
                                                </button>
                                                {cartItems?.length > 0 && (
                                                    <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white w-4 h-4 text-xs flex items-center justify-center">
                                                        {cartItems.length}
                                                    </span>
                                                )}
                                            </div>

                                            {isOpen && (
                                                <div className="absolute whitespace-nowrap flex justify-center items-center right-150 z-50 w-full bg-gray-500 bg-opacity-75 rounded shadow-lg ">
                                                    <div className="bg-white rounded shadow-lg">
                                                        <table className="w-full">
                                                            <tbody>
                                                                {cart?.cartItems?.map((cartItem) => (
                                                                    <tr
                                                                        key={cartItem.product_id}
                                                                        className="border-b border-gray-300"
                                                                    >
                                                                        <td className="py-2 pl-4">
                                                                            <img
                                                                                src={`${Constants.BASE_URL}/images/uploads/product_thumb/${cartItem.image.photo}`}
                                                                                alt={cartItem.name}
                                                                                className="w-16 h-16 object-cover rounded"
                                                                            />
                                                                        </td>
                                                                        <td className="p-2">{cartItem.name}</td>
                                                                        <td className="p-2">{cartItem.quantity}</td>
                                                                        <td className="p-2">
                                                                            BDT {cartItem.total_price}{" "}
                                                                        </td>
                                                                        <td className="p-2">
                                                                            <button
                                                                                className="text-gray-500 hover:text-red-500"
                                                                                onClick={() =>
                                                                                    deleteItemFromCart(cartItem.product_id)
                                                                                }
                                                                            >
                                                                                <AiTwotoneDelete
                                                                                    className="text-red-600"
                                                                                    size={24}
                                                                                />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                                <tr className="border-b border-gray-300">
                                                                    <td
                                                                        colSpan="5"
                                                                        className="p-2 pt-3 flex justify-between items-center"
                                                                    >
                                                                        <Link href="/cart">
                                                                            <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2">
                                                                                View Cart
                                                                            </button>
                                                                        </Link>
                                                                        <Link href="/checkout">
                                                                            <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
                                                                                Checkout
                                                                            </button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </nav>
                        <a href="tel:+8801616101090" class="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 cursor-pointer">Contact Us</a>

                    </div>
                    {/* menu end */}
                </div>
            </div>

            {showPopup ? (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                        <div className="relative bg-white rounded-lg max-w-2xl flex flex-col">
                            <div className="flex items-center justify-between bg-[#009688] px-6 py-4">
                                <h2 className="text-2xl flex items-center font-bold text-white">
                                    <BsFillPersonVcardFill className="mr-2" />
                                    SIGN IN OR REGISTER
                                </h2>
                                <button
                                    className="flex items-center bg-[#000] rounded-[100%] p-2"
                                    onClick={togglePopup}
                                >
                                    <FaTimes className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                                </button>
                            </div>
                            <div className="p-6 bg-[#fdffe1] flex-1 flex flex-col">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-1/2 p-8">
                                        {/* <form className="form form-login" action="" method="post" id="login-form"> */}
                                        <fieldset
                                            className="fieldset login"
                                            data-hasrequired="* Required Fields"
                                        >
                                            <div className="field email required email-input">
                                                <div className="control mb-3 flex items-center border bg-[#8e9d9d]">
                                                    <FaUserAlt className="mx-2 bg-[#8e9d9d] justify-center" />
                                                    <input
                                                        name="username"
                                                        value={signInData.username}
                                                        autoComplete="off"
                                                        id="username"
                                                        type="text"
                                                        // className="input-text bg-[#fff] text-white w-full"
                                                        title="Username"
                                                        placeholder="Username"
                                                        onChange={handleSignIn}
                                                    />

                                                    <div
                                                        data-lastpass-icon-root="true"
                                                        style={{
                                                            position: "relative !important",
                                                            height: "0px !important",
                                                            width: "0px !important",
                                                            float: "left !important",
                                                        }}
                                                    ></div>
                                                </div>
                                                <p className="has_error"> {signInErr?.username} </p>
                                            </div>
                                            <div className="field password required pass-input">
                                                <div className="control flex items-center border bg-[#8e9d9d]">
                                                    <FaKey className="mx-2 bg-[#8e9d9d] justify-center" />
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        value={signInData.password}
                                                        autoComplete="off"
                                                        // className="input-text bg-[#fff] text-white w-full"
                                                        id="pass"
                                                        title="Password"
                                                        placeholder="Password"
                                                        onChange={handleSignIn}
                                                    />

                                                    <div
                                                        data-lastpass-icon-root="true"
                                                        style={{
                                                            position: "relative !important",
                                                            height: "0px !important",
                                                            width: "0px !important",
                                                            float: "left !important",
                                                        }}
                                                    ></div>
                                                </div>
                                                <p className="has_error"> {signInErr?.password} </p>
                                            </div>
                                            {/* <div className="form-group">
                                                  <label className="control-label">
                                                      Login with your social account
                                                  </label>
                                                  <div className="flex items-center m-2">
                                                      <a href="" className="btn btn-social-icon btn-sm btn-google-plus mr-3">
                                                          <FaGoogle size={42} className="p-2 fa-fw bg-[#e92121] text-[#fff]" aria-hidden="true" />
                                                      </a>
                                                      <a href="" className="btn btn-social-icon btn-sm btn-facebook">
                                                          <FaFacebook size={42} className="p-2 fa-fw bg-[#3b5998] text-[#fff]" aria-hidden="true" />
                                                      </a>
                                                  </div>
                                              </div> */}
                                            <div className="secondary ft-link-p">
                                                <a className="action remind" href="">
                                                    <span>Forgot Your Password?</span>
                                                </a>
                                            </div>
                                            <div className="actions-toolbar">
                                                <div className="primary">
                                                    <button
                                                        onClick={signInSubmitHandler}
                                                        type="submit"
                                                        className="action login primary bg-[#009688] p-2 mt-2 text-white"
                                                        name="send"
                                                        id="send2"
                                                    >
                                                        <span> {isSubmit ? "Processing.." : "Login"}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </fieldset>
                                        {/* </form> */}
                                    </div>
                                    <div className="w-max lg:w-1/2 p-8 border-l-4 border-gray-500">
                                        <h2 className="text-2xl font-bold mb-2">NEW HERE?</h2>
                                        <p className="text-gray-600 mb-4">
                                            Registration is free and easy!
                                        </p>
                                        <ul className="list-disc list-inside mb-4">
                                            <li>Faster checkout</li>
                                            <li>Save multiple shipping addresses</li>
                                            <li>View and track orders and more</li>
                                        </ul>
                                        <Link
                                            href="/account/Register"
                                            className="bg-[#009688] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Create an account
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            <div>
                <button
                    onClick={toggleMenu}
                    className="md:hidden fixed z-50 flex flex-col items-center justify-center w-12 h-12 bg-transparent border-none cursor-pointer focus:outline-none top-5 right-5"
                >
                    <div className={`block w-8 h-0.5 bg-black transform transition duration-500 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                    <div className={`block w-8 h-0.5 bg-black my-2 transition-opacity duration-500 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`block w-8 h-0.5 bg-black transform transition duration-500 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
                </button>
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}
                >
                    <div className="p-5">
                        <img src="/images/hometex-logo.png" alt="Hometex Bangladesh" className="w-24 h-auto" />
                    </div>
                    <nav className="flex-grow overflow-y-auto px-3">
                        <ul className="text-left">
                            <li className="my-8">
                                <a href="/" className="text-2xl text-black hover:text-gray-700">Home</a>
                            </li>
                            <li className="my-4 flex flex-col justify-between items-center">
                                <div className='w-full flex justify-between items-center text-2xl'>
                                    <button
                                        onClick={() => toggleSubMenu('services')}
                                        className="flex-grow text-left"
                                    >
                                        Categories
                                    </button>
                                    <button
                                        onClick={() => toggleSubMenu('services')}
                                        className="pl-4"
                                    >
                                        <span className="text-3xl">
                                            {subMenuOpen['services'] ? "-" : "+"}
                                        </span>
                                    </button>
                                </div>
                                <div className='w-full flex flex-col'>
                                    <ul className={`text-2xl pl-4 mt-2 ${subMenuOpen['services'] ? 'block' : 'hidden'}`}>
                                        <li><a href="/Shop" className="text-black hover:text-gray-700 block">Bedding</a></li>
                                        <li><a href="/Shop" className="text-black hover:text-gray-700 block">Living Decor</a></li>
                                        <li><a href="/Shop" className="text-black hover:text-gray-700 block">Bath Support</a></li>
                                        <li><a href="/Shop" className="text-black hover:text-gray-700 block">Kitchen|Dining</a></li>
                                        <li><a href="/Shop" className="text-black hover:text-gray-700 block">Home Decor</a></li>
                                        {/* More submenu items can be added here */}
                                    </ul>
                                </div>
                            </li>

                            <li className="my-8">
                                <a href="/GetAQuote" className="text-2xl text-black hover:text-gray-700">Get A Quote</a>
                            </li>

                            <li className="my-8">
                                <a href="/Contact" className="text-2xl text-black hover:text-gray-700">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header3