import React from "react";

const DesignOne = () => {
  return (
    <div className="bg-[#d9614e42]">
      <div className="max-w-screen-xl mx-auto px-3 mb-5 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6  relative">
          <div className="p-4 mx-5">
            <h2 className="text-xl font-bold mb-2">Quality</h2>
            <p>
              Fast-growing columnar cactus native to the western slope of the
              Andes in Peru. Between about 2,000-3,000 m.
            </p>
          </div>

          <div className="p-4 mx-5">
            <h2 className="text-xl font-bold mb-2">Range</h2>
            <p>
              Fast-growing columnar cactus native to the western slope of the
              Andes in Peru. Between about 2,000-3,000 m.
            </p>
          </div>

          <div className="p-4 mx-5 relative">
            <h2 className="text-xl font-bold mb-2">Delivery service</h2>
            <p>
              Fast-growing columnar cactus native to the western slope of the
              Andes in Peru. Between about 2,000-3,000 m.
            </p>

            {/* Image like stamp or chop */}
            <div className="absolute bottom-0 right-0 -mb-24 md:-mb-12 mr-0 md:-mr-24">
              <img src="images/bestql.png" alt="Stamp" className="w-28 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignOne;
