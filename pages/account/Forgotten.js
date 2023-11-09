import AccountRight from '@/components/layout/AccountRight'
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
                                <h5 className='text-4xl'>Hometex</h5>
                                <p className='py-3 text-sm'>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</p>
                            </div>
                            {/* personal Details */}
                            <div className='card-body m-5 border'>
                                <div className='border m-5'>
                                    <h5 className='pl-3'>Your E-Mail Address</h5><hr />
                                    <div className='flex m-5 items-center'>
                                        <label className='w-1/5 pr-3 text-end'>E-Mail Address</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email *"
                                        />
                                    </div>
                                </div>


                                <div className="flex items-center justify-between m-4">
                                    <Link href="/account/Register"><button className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded shadow">
                                        Back
                                    </button></Link>
                                    <input type="submit" value="Submit" className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow ml-auto" />
                                </div>
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

export default Forgotten