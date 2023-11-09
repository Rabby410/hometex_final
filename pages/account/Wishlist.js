import AccountRight from '@/components/layout/AccountRight'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillHome, AiFillCaretRight } from 'react-icons/ai'

const Wishlist = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
      ]);
    
      const handleRemoveItem = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
      };
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-3 mb-10">
                <div>
                    <ul className="breadcrumb flex items-center">
                        <li><a href="/"><AiFillHome /></a></li><span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">Account</a></li> <span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="">Wish List</a></li>
                    </ul>
                </div>
                {/* Left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-5">
                    <div className="col-span-4">
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='text-4xl'>Hometex</h5>
                            </div>
                            {/* personal Details */}
                            <div className="max-w-md mx-auto bg-white shadow-lg p-8 mt-10">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Wishlist</h2>
                                {items.length > 0 ? (
                                    <ul>
                                        {items.map((item) => (
                                            <li
                                                key={item.id}
                                                className="flex justify-between items-center py-2 border-b"
                                            >
                                                <div>
                                                    <h3 className="text-gray-800 font-semibold">{item.name}</h3>
                                                    <p className="text-gray-600">${item.price}</p>
                                                </div>
                                                <button
                                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-700">Your wishlist is empty.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <AccountRight />
                </div>
            </div>

        </>
    )
}


export default Wishlist