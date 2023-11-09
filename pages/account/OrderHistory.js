import AccountRight from '@/components/layout/AccountRight'
import Link from 'next/link'
import React from 'react'
import { AiFillHome, AiFillCaretRight } from 'react-icons/ai'
import { FaFileInvoice } from 'react-icons/fa'
import Invoice from './Invoice'

const OrderHistory = () => {
    const orders = [
        { id: 1, orderNumber: 'ORD001', date: '2023-05-14', total: 100 },
        { id: 2, orderNumber: 'ORD002', date: '2023-05-15', total: 200 },
        { id: 3, orderNumber: 'ORD003', date: '2023-05-16', total: 150 },
    ];
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-3 mb-10">
                <div>
                    <ul className="breadcrumb flex items-center">
                        <li><a href="/"><AiFillHome /></a></li><span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">Account</a></li> <span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="">Order History</a></li>
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
                            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 mt-10">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order List</h2>
                                {orders.length > 0 ? (
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-left py-2">Order Number</th>
                                                <th className="text-left py-2">Date</th>
                                                <th className="text-left py-2">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order) => (
                                                <tr key={order.id}>
                                                    <td className="border-b py-2">{order.orderNumber}</td>
                                                    <td className="border-b py-2">{order.date}</td>
                                                    <td className="border-b py-2">${order.total}</td>
                                                    <Invoice />
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p className="text-gray-700">There are no orders yet.</p>
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

export default OrderHistory