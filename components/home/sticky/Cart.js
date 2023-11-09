import CartContext from '@/context/CartContext';
import Link from 'next/link';
import React, { useContext, useState, useRef, useEffect } from 'react'
import { FaTrashAlt, FaTimes, FaShoppingCart } from 'react-icons/fa';
import Constants from "../../../ults/Constant";

import Image from 'next/image';

const Cart = () => {
    const { cart, deleteItemFromCart } = useContext(CartContext);
    const cartItems = cart?.cartItems;


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

    let sumTotal= 0;
    cart?.cartItems?.map((cartItem) => (
        sumTotal +=cartItem.total_price 
        ))
  return (
    <>
    <div className="relative z-50">
                    <a onClick={handleStickyCartClick} className="sticky-mycart bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4  h-12 cursor-pointer flex justify-center items-center border border-white" data-target="popup" data-popup="#popup-mycart"
                    >
                        <span className="text-xl"><FaShoppingCart /></span>
                    </a>

                    {isStickyOpen && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 z-50">
                            <div className="w-full max-w-lg bg-white rounded shadow-lg">
                                <div className="bg-[#009688] hover:bg-[#19574c] text-white mb-4">
                                    <div className="flex justify-between items-center  mx-5">
                                        <h2 className="flex justify-between items-center text-lg font-medium"><FaShoppingCart className="mr-5 my-5" /> Shopping Cart</h2>
                                        <button
                                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                            onClick={handleStickyCartClick}
                                        >
                                            <FaTimes className="text-white" />
                                        </button>
                                    </div>
                                </div>
                                <div className="border m-5 p-5 bg-[#8080803d]">
                                    There are <span className="text-[#991515]"> {cartItems?.length || 0} item(s)</span> in your cart
                                </div>
                                <div className="m-5 p-5">
                                    <table className="w-full">
                                        <tbody>
                                        {cart?.cartItems?.map((cartItem) => (
                                            <>
                                            <tr>
                                                <td>
                                                    <img
                                                        src={`${Constants.BASE_URL}/images/uploads/product_thumb/${cartItem.image.photo}`}
                                                        alt={cartItem.name}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </td>
                                                <td>{cartItem.name}</td>
                                                <td>{cartItem.quantity} </td>
                                                <td className="text-[#ff0000]">TK {cartItem.total_price} </td>
                                                <td><FaTrashAlt  onClick={() =>
                                                    deleteItemFromCart(cartItem?.product_id)
                                                } /></td>
                                            </tr>
                                            <hr className="m-4" />
                                            </>
                                        ))}                                         
                                           
                                            


                                        </tbody>
                                    </table>
                                    <table className="w-full table-fixed table-striped text-center">
                                        <tbody>
                                            <tr>
                                                <td className="w-1/2 py-4 text-left font-medium">Sub-Total</td>
                                                <td className="w-1/2 py-4 text-right font-medium">TK {sumTotal}</td>
                                            </tr>
                                            <tr>
                                                <td className="w-1/2 py-4 text-left font-medium">Total</td>
                                                <td className="w-1/2 py-4 text-right font-medium">TK {sumTotal}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-center mt-5 mb-5">
                                    <Link href="/cart" className="inline-block px-12 py-2 mx-2 font-medium text-white bg-[#000] hover:bg-[#009688]">
                                        View Cart
                                    </Link>
                                    <Link href="/checkout" className="inline-block px-12 py-2 mx-2 font-medium text-white bg-[#009688] hover:bg-[#000]">
                                        Checkout
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
    </>
  )
}

export default Cart