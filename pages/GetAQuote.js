import React from 'react'

const GetAQuote = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-3 mb-5 grid justify-items-stretch">
            <div className="flex justify-center items-center w-[90%] justify-self-center text-[#fff]   ">

                <div className="w-[60%]  bg-[#d9c95c] justify-self-auto md:justify-items-center text-center m-5 p-5">
                    <form>
                        <div className="mb-6">
                            <label for="large-input" className="block mb-2 text-sm font-medium  dark:text-white">Name</label>
                            <input type="text" id="large-input" className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label for="large-input" className="block mb-2 text-sm font-medium  dark:text-white">Organization</label>
                            <input type="text" id="large-input" className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label for="large-input" className="block mb-2 text-sm font-medium  dark:text-white">Contact No</label>
                            <input type="text" id="large-input" className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label for="email-address-icon" className="block mb-2 text-sm font-medium  dark:text-white">Your Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
                            </div>
                        </div>
                        <div>
                            <label for="small-input" className="block mb-2 text-sm font-medium  dark:text-white">Quotation For</label>
                            <input type="text" id="small-input" className="block w-full p-2  border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


                        </div>
                        <div>
                            <label for="message" className="block mb-2 text-sm font-medium  dark:text-white">Remarks</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a remark..."></textarea>
                        </div>

                        <button type="submit" className="mt-5 px-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetAQuote