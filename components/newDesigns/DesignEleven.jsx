import React from "react";


const DesignEleven = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-0">
      {/* First Grid */}
      <div className="bg-[#00ffffbf]  border border-solid border-gray-300 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border bg-sky-blue flex items-center">
        
        <div className="w-full h-full">
          <img
            src="images/22L.png" // Replace with the actual image URL
            alt="Right Girl"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 mx-4 whitespace-nowrap text-center">
          <h2 className="text-2xl font-bold mb-2 font-kaushan">Clothes</h2>
          <p className="text-gray-700 bg-[#f3f30ad1] px-2">save to 40% off</p>
          <p className="text-gray-700 mt-2 text-3xl">Big Discount</p>
          <button className="rounded bg-transparent border border-gray-600 text-gray-600 px-5 py-2 mt-5 hover:bg-gray-600">
            Shop Now
          </button>
        </div>
      </div>
      {/* Second Grid */}
      <div className="bg-[#f53c78] p-4 border border-solid border-gray-300 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 flex flex-col items-center">
        <div className="text-center m-8">
        <h2 className="text-1xl font-bold mb-2">End Of Season</h2>
        <p className="text-5xl mb-4">SALE</p>
        <p className="text-lg mb-4 border px-3 text-gray-300">Save to 50% off on First Order</p>
        {/* Border like a button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Shop Now
        </button>
        </div>
      </div>
      {/* Third Grid */}
      <div className="bg-[#f3f30ad1]  border border-solid border-gray-300 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border bg-sky-blue flex items-center">
        <div className="w-1/2 mx-4 whitespace-nowrap text-center">
          <h2 className="text-2xl font-bold mb-2 font-kaushan">Sunglasses</h2>
          <p className="text-gray-700 bg-[#00ffffbf] px-2">Buy 1 get 1 Free</p>
          <p className="text-gray-700 text-3xl mt-2">New Arrivals</p>
          <button className="rounded bg-transparent border border-gray-600 text-gray-600 px-5 py-2 mt-5 hover:bg-gray-600">
            Shop Now
          </button>
        </div>
        <div className="w-full h-full">
          <img
            src="images/11L.png" // Replace with the actual image URL
            alt="Right Girl"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignEleven;
