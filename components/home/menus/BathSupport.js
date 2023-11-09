import Link from "next/link";
import { useState } from "react";
import { FaCaretDown, FaBath } from "react-icons/fa";

const BathSupport = () => {
  return (
    <>
      <div className="">
        <Link
          href="/Shop"
          className="inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium group"
        >
          <FaBath className="mr-2" />
          Bath Support <FaCaretDown />
          <div className="w-full absolute  z-50 top-full left-0 transform rounded-md justify-center items-center p-2 group-hover:flex hidden border-teal-500 ">
            <div className="flex flex-wrap justify-between bg-[#fff] text-black w-full whitespace-nowrap">
              <div className="w-full md:w-1/4 px-4">
                <h5 className="text-xl uppercase">Towels | Bathmats</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Basin Towel</li>
                  <li className="py-1 text-gray-500">Basin Mat</li>
                  <li className="py-1 text-gray-500">Bath Sheet</li>
                  <li className="py-1 text-gray-500">Bath Towel</li>
                  <li className="py-1 text-gray-500">Hand Towel</li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <h5 className="text-xl uppercase">Bathrobes</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Adult Size</li>
                  <li className="py-1 text-gray-500">Kids Size</li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <h5 className="text-xl uppercase">Bath Decor</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Bathroom Rugs</li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <h5 className="text-xl uppercase">Bath Accessories</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Bathroom Bin</li>
                  <li className="py-1 text-gray-500">Shower Curtain</li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BathSupport;
