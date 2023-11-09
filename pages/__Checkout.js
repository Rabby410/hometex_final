import React, { useState } from 'react'
import { FaShoppingCart, FaRegCreditCard, FaLocationArrow, FaUser, FaUserPlus, FaMapMarkerAlt } from 'react-icons/fa'

const Checkout = () => {
  const [showContentCertificate, setShowContentCertificate] = useState(false);
  const [showContentVoucher, setShowContentVoucher] = useState(false);
  const toggleContentCertificate = () => {
    setShowContentCertificate(!showContentCertificate);
  };
  const toggleContentVoucher = () => {
    setShowContentVoucher(!showContentVoucher);
  };
  return (
    <>
      <div className="px-4 py-2 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl xl:max-w-screen-2xl">

        <h1 className='text-[50px]'>Hometex Checkout</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 flex flex-wrap items-start">
          <div className='rounded mt-5'>
            <div className='card border col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full sm:w-40%'>
              <div className='card-header grid grid-flow-col auto-cols-max items-center border'>
                <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                  <FaUser className='' />
                </div>
                <div className='pl-2'><h5>CREATE AN ACCOUNT OR LOGIN</h5></div>
              </div>
              <div className='card-body'>
                <div className='mb-4 ml-5'>
                  <label class="flex items-center m-3">
                    <input type="radio" name="account_type" class="form-radio rounded-full h-5 w-5 text-gray-600" checked />
                    <span class="ml-2 text-gray-700">
                      Register Account</span>
                  </label>
                  <label class="flex items-center m-3">
                    <input type="radio" name="account_type" class="form-radio rounded-full h-5 w-5 text-gray-600" />
                    <span class="ml-2 text-gray-700">Guest Checkout</span>
                  </label>
                  <label class="flex items-center m-3">
                    <input type="radio" name="account_type" class="form-radio rounded-full h-5 w-5 text-gray-600" />
                    <span class="ml-2 text-gray-700">Returning Customer</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='card border mt-5'>
              <div className='card-header grid grid-flow-col auto-cols-max items-center border'>
                <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                  <FaUserPlus className='' />
                </div>
                <div className='pl-2'><h5>YOUR PERSONAL DETAILS</h5></div>
              </div>
              <div className='card-body'>
                <div className="ml-5 mb-4 m-2 ">
                  <div class="flex flex-wrap mt-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="First Name *" />
                    </div>
                    <div class="w-full md:w-1/2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Last Name *" />
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2 pt-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail *" />
                    </div>
                    <div class="w-full md:w-1/2 pt-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Telephone *" />
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pt-2 pr-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fax" type="text" placeholder="Fax " />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="ml-5 mb-4 m-2 ">
                  <div class="flex flex-wrap mt-4 ">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="password" placeholder="Password *" />
                    </div>
                    <div class="w-full md:w-1/2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="password" placeholder="Confirm Password *" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="ml-5 mb-4 m-2 ">
                  <div className='card-header grid grid-flow-col auto-cols-max items-center border'>
                    <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                      <FaMapMarkerAlt className='' />
                    </div>
                    <div className='pl-2'><h5>YOUR ADDRESS</h5></div>
                  </div>
                  <div class="flex flex-wrap mt-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Company" />
                    </div>
                    <div class="w-full md:w-1/2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address 1 *" />
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2 pt-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="landmark" type="text" placeholder="Address 2 *" />
                    </div>
                    <div class="w-full md:w-1/2 pt-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City *" />
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2 pt-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="area" type="text" placeholder="Postcode *" />
                    </div>
                    <div class="w-full md:w-1/2 pt-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Country *" />
                    </div>
                    <div class="w-full md:w-1/2 pt-2">
                      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="district" type="text" placeholder="District *" />
                    </div>

                  </div>

                </div>
                <hr />
                <div className="ml-5 mb-4 m-2 ">
                  <div class="flex flex-wrap mt-4 ">
                    <label class="flex items-center">
                      <input type="checkbox" checked class="form-checkbox h-5 w-5 text-gray-600" />
                      <span class="ml-2 text-gray-700">My delivery and billing addresses are the same.</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full sm:w-60% mt-5'>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 flex flex-wrap items-start">
              <div>
                <div className='border'>
                  <div className='card-header grid grid-flow-col auto-cols-max items-center border '>
                    <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                      <FaRegCreditCard className='' />
                    </div>
                    <div className='pl-2'><h5>PAYMENT METHOD</h5></div>
                  </div>
                  <div>
                    <label class="flex items-center m-3 mb-12">
                      <input type="radio" name="payment" class="form-radio rounded-full h-5 w-5 text-gray-600" checked />
                      <span class="ml-2 text-gray-700">Cash on deliver</span>
                    </label>

                  </div>
                </div>
              </div>
              <div className='border'>
                <div className='rounded'>
                  <div className='card-header grid grid-flow-col auto-cols-max items-center border'>
                    <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                      <FaLocationArrow className='' />
                    </div>
                    <div className='pl-2'><h5>SHIPPING METHOD</h5></div>
                  </div>
                  <div>
                    <label class="flex items-center m-3">
                      <input type="radio" name="location" class="form-radio rounded-full h-5 w-5 text-gray-600" checked />
                      <span class="ml-2 text-gray-700">Inside Dhaka metro area -TK80</span>
                    </label>
                    <label class="flex items-center m-3">
                      <input type="radio" name="location" class="form-radio rounded-full h-5 w-5 text-gray-600" />
                      <span class="ml-2 text-gray-700">Outside Dhaka metro area -TK150</span>
                    </label>
                  </div>


                </div>

              </div>
            </div>
            {/* cuppon Code start */}
            <div className="border p-4 my-4">
              <div className="justify-between items-center cursor-pointer mb-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={toggleContentCertificate}
                >
                  <h2 className="text-lg font-medium">Use Coupon Code</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 transform TK{showContentCertificate ? 'rotate-180' : ''
                                } transition-transform duration-300`}
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                </div>
                {showContentCertificate && (
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      name="coupon"
                      id="input-coupon"
                      placeholder="Enter coupon code"
                      className="flex-1 border border-gray-400 rounded-l py-2 px-3 focus:outline-none w-full focus:border-blue-500"
                    />
                    <button
                      id="button-coupon"
                      className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-2 px-4 rounded-r"
                      data-loading-text="Loading..."
                    >
                      Apply Coupon
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="border p-4 mb-4">
              <div className="justify-between items-center cursor-pointer mb-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={toggleContentVoucher}
                >
                  <h2 className="text-lg font-medium">Enter Voucher Code</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 transform TK{showContentVoucher ? 'rotate-180' : ''
                                } transition-transform duration-300`}
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                </div>
                {showContentVoucher && (
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      name="voucher"
                      id="input-voucher"
                      placeholder="Enter voucher code"
                      className="flex-1 border border-gray-400 rounded-l py-2 px-3 focus:outline-none w-full focus:border-blue-500"
                    />
                    <button
                      id="button-voucher"
                      className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-2 px-4 rounded-r"
                      data-loading-text="Loading..."
                    >
                      Apply Vouher
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* cart section */}
            <div className="border p-4 mb-4">
              <div className='card'>
                <div className='card-header'>
                  <div className='card-header grid grid-flow-col auto-cols-max items-center border'>
                    <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                      <FaShoppingCart className='' />
                    </div>
                    <div className='pl-2'><h5>SHOPPING CART</h5></div>
                  </div>
                </div>
                <div className='card-body'>
                </div>
              </div>
              {/* table */}
              <table className="w-full sm:w-auto sm:min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* example row */}
                  <tr className="text-sm text-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap">Product A</td>
                    <td className="px-6 py-4 whitespace-nowrap">2</td>
                    <td className="px-6 py-4 whitespace-nowrap">TK20.00</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">TK45.00</td>
                  </tr>
                  {/* add more rows for each product */}
                  <tr>
                    <td colSpan="3" className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider'>SUB-TOTAL:</td>
                    <td className='whitespace-nowrap px-6'>Tk1490</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider'>INSIDE DHAKA METRO AREA:</td>
                    <td className='whitespace-nowrap px-6'>Tk80</td>
                  </tr>
                  <tr>
                    <td colSpan="3" className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider'>TOTAL:</td>
                    <td className='whitespace-nowrap px-6'>Tk1490</td>
                  </tr>
                </tbody>
              </table>
              <div className='card-header grid grid-flow-col auto-cols-max items-center border'>
                    <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                      <FaRegCreditCard className='' />
                    </div>
                    <div className='pl-2'><h5>PAYMENT DETAILS</h5></div>
                  </div>

            </div>
            <div className="border p-4 mb-4">
              <div className='card'>
                <div className='card-header'>
                  <div className='card-header grid grid-flow-col auto-cols-max items-center border'>
                    <div className='bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border'>
                      <FaShoppingCart className='' />
                    </div>
                    <div className='pl-2'><h5>ADD COMMENTS ABOUT YOUR ORDER</h5></div>
                  </div>
                </div>
                <div className='card-body'>
                </div>
              </div>
              

            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Checkout