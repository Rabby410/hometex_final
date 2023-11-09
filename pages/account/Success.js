import Link from 'next/link'
import React from 'react'
import { AiFillHome, AiFillCaretRight } from 'react-icons/ai'

const Forgotten = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-3 mb-10">
                <div>
                    <ul className="breadcrumb flex items-center">
                        <li><a href="/"><AiFillHome /></a></li><span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">Account</a></li> <span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/Forgotten">Forgotten Password</a></li>
                    </ul>
                </div>
                {/* Left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-5">
                    <div className="col-span-4">
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='text-4xl'>Your Account Has Been Created!</h5>
                                <p className='py-3 text-sm'>You can now take advantage of member privileges to enhance your online shopping experience with us.</p>
                                <p className='py-3 text-sm'>If you have ANY questions about the operation of this online shop, please e-mail the store owner.</p>
                                <p className='py-3 text-sm'>A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please contact us.</p>
                            </div>


                                <div className="flex items-center justify-end mr-10">
                                    <Link href="/"><button className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded shadow">
                                        CONTINUE
                                    </button></Link>
                                </div>

                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="col-span-1">
                        <div className='card'>
                            <div className="card-header">
                                <h5 className='text-xl'>Account</h5>
                            </div>
                            <div className='card-body'>
                                <ul className="list-disc my-2">
                                    <li>My Account</li>
                                    <li className='my-2'>Edit Account</li>
                                    <li>Password</li>
                                    <li className='my-2'>Address Book</li>
                                    <li>Wish List</li>
                                    <Link href="/myorder/index"><li className='my-2'>Order History</li></Link>
                                    <li>Downloads</li>
                                    <li className='my-2'>Recurring payments</li>
                                    <li>Reward Points</li>
                                    <Link href="/account/Returns"><li className='my-2'>Returns</li></Link>
                                    <li>Transactions</li>
                                    <li className='my-2'>Newsletter</li>
                                </ul>

                            </div>
                        </div>
                        {/* Content for the right column (20% width) */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Forgotten