import Link from 'next/link'
import React from 'react'

const AccountRight = () => {
    return (
        <>
            <div className="col-span-1">
                <div className='card'>
                    <div className="card-header">
                        <h5 className='text-xl'>Account</h5>
                    </div>
                    <div className='card-body'>
                        <ul className="list-disc my-2">
                            <Link href="/account/MyAccount"><li>My Account</li></Link>
                            <Link href="/account/MyAccount"><li className='my-2'>Edit Account</li></Link>
                            <Link href="/account/Forgotten"><li>Password</li></Link>
                            <li className='my-2'>Address Book</li>
                            <Link href="/account/Wishlist"><li>Wish List</li></Link>
                            <Link href="/account/OrderHistory"><li className='my-2'>Order History</li></Link>
                            {/* <li>Downloads</li> */}
                            <li className='my-2'>Recurring payments</li>
                            {/* <li>Reward Points</li> */}
                            <Link href="/account/Returns"><li className='my-2'>Returns</li></Link>
                            {/* <li>Transactions</li> */}
                            <li className='my-2'>Newsletter</li>
                        </ul>

                    </div>
                </div>
                {/* Content for the right column (20% width) */}
            </div>
        </>
    )
}

export default AccountRight