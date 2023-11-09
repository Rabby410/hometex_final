import React from "react";

const DesignThree = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-5">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Recently Listed Vehicles
        </h1>
        <p className="mt-2">
          <span className="mx-2 md:mx-4 lg:mx-6 text-lg">
            <a href="#" className="text-blue-500 hover:underline">All</a>
          </span>
          <span className="mx-2 md:mx-4 lg:mx-6 text-lg">
            <a href="#" className="text-blue-500 hover:underline">Car</a>
          </span>
          <span className="mx-2 md:mx-4 lg:mx-6 text-lg">
            <a href="#" className="text-blue-500 hover:underline">Parts</a>
          </span>
          <span className="mx-2 md:mx-4 lg:mx-6 text-lg">
            <a href="#" className="text-blue-500 hover:underline">Luxury goods</a>
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <div className="box p-4 rounded shadow-lg flex flex-col transition-transform transform hover:scale-105">
          <img
            src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg"
            alt="Ferrari"
            className="w-full h-full object-cover"
          />
          <p>
            <span className="text-2xl">Ferrari</span>
            <br />
            <span className="text-3xl">2014 Ferrari Laferrari</span>
          </p>
          <div className="flex justify-between mt-3">
            <div>
              $82,000 <br />
              Current Bid
            </div>
            <div>
              07 : 33 : 01 <br />
              Ends Today
            </div>
            <div>
              20 <br />
              Bid
            </div>
          </div>
        </div>
        <div className="box p-4 rounded shadow-lg flex flex-col transition-transform transform hover:scale-105">
          <img
            src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais"
            alt="Ferrari"
            className="w-full h-full object-cover"
          />
          <p>
            <span className="text-2xl">Ferrari</span>
            <br />
            <span className="text-3xl">2014 Ferrari Laferrari</span>
          </p>
          <div className="flex justify-between mt-3">
            <div>
              $82,000 <br />
              Current Bid
            </div>
            <div>
              07 : 33 : 01 <br />
              Ends Today
            </div>
            <div>
              20 <br />
              Bid
            </div>
          </div>
        </div>
        <div className="box p-4 rounded shadow-lg flex flex-col transition-transform transform hover:scale-105">
          <img
            src="https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-92902,msid-96559100/the-rimac-nevera-is-now-the-fastest-electric-car-in-the-world-image-rimac.jpg?from=mdr"
            alt="Ferrari"
            className="w-full h-full object-cover"
          />
          <p>
            <span className="text-2xl">Ferrari</span>
            <br />
            <span className="text-3xl">2014 Ferrari Laferrari</span>
          </p>
          <div className="flex justify-between mt-3">
            <div>
              $82,000 <br />
              Current Bid
            </div>
            <div>
              07 : 33 : 01 <br />
              Ends Today
            </div>
            <div>
              20 <br />
              Bid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignThree;
