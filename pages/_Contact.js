import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 items-center">

      <div className="w-[80%] text-center pb-5 ">
        <div className="h-[300px] border-[5px] border-[#f3f3f3]"><Link href="/"> <img src="/images/hometex-logo.png" className="h-auto max-w-lg m-5" alt="Hometex Bangladesh Logo" /></Link></div>
        <div className="h-[300px] border-[5px] border-[#f3f3f3] hidden sm:block">
      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1725629727916!2d90.41184076541465!3d23.741225045042654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7785667deaf%3A0x126b0ec64bae353c!2sHometex%20Bangladesh!5e0!3m2!1sen!2sbd!4v1674559444494!5m2!1sen!2sbd" width="500px" height="280px"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="w-[80%] border-[#000] border-l-2 border-b-2 justify-center p-5">
        <h2 className="text-[45px] font-semibold">Contact Us</h2>
        {/* form start */}

        <input type="email" id="email" aria-describedby="helper-text-explanation" className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name *" />
        <input type="email" id="email" aria-describedby="helper-text-explanation" className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-Mail Address *" />
        <textarea id="message" rows="10" className="my-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enquiry"></textarea>
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Submit
        </button>

        {/* form End */}
      </div>
    </div>
    </div>
  )
}

export default Contact