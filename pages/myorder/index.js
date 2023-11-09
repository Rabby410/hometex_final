import CartContext from '@/context/CartContext';
import React, { useContext, useState } from 'react'
import Constants from '@/ults/Constant';




export async function getServerSideProps(context) {
  // let id = context.query.id;
  let user_token = context.req.cookies?.home_text_token;
     let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2NoZWNrLW91dCIsImlhdCI6MTY4MTEyOTA3NCwiZXhwIjoxNjgxMTMyNjc0LCJuYmYiOjE2ODExMjkwNzQsImp0aSI6ImxyRENabktEdlRpWXlwbk4iLCJzdWIiOiIxOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.upzVaIWSRTpeQ2qC5vLhv0-rSImHDoimNuVLNBf8EpQ';
  const res = await fetch(

    `${Constants.BASE_URL}/api/my-order`,{
      method: 'GET',
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
   
      headers: {            
        "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token,
        },  
    }
    
    )
  const order = await res.json();

  
  return {
    props: {
      order,
      user_token
    },
  }
}



const Myorder = ({order,user_token}) => {
    
// console.log(user_token)

    return (
        <>
        <p>User Token For auth check :  {user_token}</p>
        <div className="max-w-screen-xl mx-auto px-3 mb-10">
                <div>
                    <ul className="breadcrumb flex items-center">
                        <li><a href="/"><AiFillHome /></a></li><span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">Account</a></li> <span> <AiFillCaretRight className='mx-2' /> </span>
                        <li><a href="/">My Orders</a></li>
                    </ul>
                </div>
                {/* Left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-5">
                    <div className="col-span-4">
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='text-4xl'>HOMETEX BANGLADESH </h5>
                                <p className='py-3 text-sm'>All orders Will be here</p>
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

export default Myorder