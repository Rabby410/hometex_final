import React from "react";
import { TbTruckReturn } from "react-icons/tb";
import { GiPiggyBank } from "react-icons/gi";

const DesignFive = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-5 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {/* Full-cover image */}
        <div className="sm:col-span-1">
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/904393448/photo/woman-making-handicraft-products.jpg?s=612x612&w=0&k=20&c=yqrSlOWje6el0k9bViEc_TNz01Ih4oEzL_cOOHIJmcI="
            alt="Image 1"
          />
        </div>

        {/* Full-cover image with text */}
        <div className="sm:col-span-1 relative">
          <img
            className="w-full h-[650px] object-cover"
            src="https://img.freepik.com/free-vector/yellow-diagonal-geometric-striped-background-with-halftone-detailed_1409-1451.jpg"
            alt="Image 2"
          />

          {/* Overlay text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="text-4xl font-bold">Are you a store</p>
            <p className="text-4xl font-bold">wants to sell holly</p>
            <p className="text-4xl font-bold">oddly goods?</p>

            {/* Custom Box with Shadow, Lines, Icons, and Button */}
            <div className="bg-[#c1c1c1] shadow-md p-5 my-5">
              {/* 3 Lines */}
              <p className="my-2 text-2xl">Order wholesale from</p>
              <p className="my-2">us today</p>
              <p className="my-2">we've partnered with Faire to offer:</p>

              {/* 2 Boxes with Icons and 2 Lines */}
              <div className="flex items-center my-3">
                <div className="flex items-center">
                  <div className="bg-gray-300 p-3 rounded-full text-3xl">
                    <TbTruckReturn />
                  </div>
                  <p className="ml-3">Free Returns</p>
                </div>
              </div>
              <div className="flex items-center my-3">
                <div className="flex items-center">
                  <div className="bg-gray-300 p-3 rounded-full text-3xl">
                    <GiPiggyBank />
                  </div>
                  <p className="ml-3">Net 60 Items</p>
                </div>
              </div>

              {/* Button in the Middle */}
              <button className="bg-[#78789d] text-white py-2 px-4 my-3">
                Shop Wholesale
              </button>

              {/* Again 3 Lines */}
              <p className="my-2 text-xl">New to Hometex?</p>
              <p className="mt-3">
                you will get $100 off your first order,
                <br />
                plus free shipping with us for an entire year
              </p>
              <p className="my-2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignFive;
