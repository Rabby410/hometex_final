import AccountRight from '@/components/layout/AccountRight'
import Link from 'next/link'
import React from 'react'
import { AiFillHome, AiFillCaretRight } from 'react-icons/ai'

const Returns = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-10">
                <div>
                    <ul className="breadcrumb flex items-center">
                        <li><a href="/"><AiFillHome /></a></li><span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">Account</a></li> <span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/account/Returns">Product Returns</a></li>
                    </ul>
                </div>
                {/* Left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-5">
                    <div className="col-span-4">
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='text-4xl'>Hometex</h5>
                                <p className='py-3 text-sm'>You have not made any previous returns!</p>
                            </div>


                                <div className="flex items-center justify-end mr-10">
                                    <Link href="/"><button className="py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded shadow">
                                        CONTINUE
                                    </button></Link>
                                </div>

                        </div>
                    </div>
                    {/* Right Section */}
                    <AccountRight />
                </div>
            </div>
  )
}

export default Returns