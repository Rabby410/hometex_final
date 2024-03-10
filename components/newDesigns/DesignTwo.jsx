import React from "react";
import { FaGift } from "react-icons/fa6";

const DesignTwo = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 relative">
        <div className="p-4 border-t-2 border-b-2">
          <h2 className="text-xl font-bold mb-2 text-center">
            Only on <a href="https://hometex.store">hometex.store</a>
          </h2>
        </div>

        <div className="p-4 flex items-center border-t-2 border-b-2">
          <div className="flex-shrink-0 bg-[#9999b5] text-white pl-8 py-2  mr-2">
            <img src="images/icons/fast-delivary.png" className="w-24" />
          </div>
          <div>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "800" }}>
                FREE SHIPPING
              </span>{" "}
              <br />
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                (on orders over $40)
              </span>
            </p>
          </div>
        </div>

        <div className="p-4 flex items-center border-t-2 border-b-2">
          <div className="flex-shrink-0 bg-[#9999b5] text-white px-6  mr-2">
            <img src="images/icons/samples.png" className="w-20" />
          </div>
          <div>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "800" }}>
                FREE SAMPLES
              </span>{" "}
              <br />
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                (Yes, Please!)
              </span>
            </p>
          </div>
        </div>

        <div className="p-4 flex items-center border-t-2 border-b-2">
          <div className="flex-shrink-0 bg-[#9999b5] text-white px-10 py-3  mr-2">
            <FaGift size={40} color="#00fbf2" />
          </div>
          <div>
            <p>
              <span style={{ fontSize: "16px", fontWeight: "800" }}>
                Surprise
              </span>{" "}
              <br />
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                (You will love. Trust)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTwo;
