import Link from "next/link";
import { useState } from "react";
import { FaCaretDown, FaHome } from "react-icons/fa";

const LivingDecor = () => {
  return (
    <>
      <div className="">
        <Link
          href="/Shop"
          className="inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium group"
        >
          <FaHome className=" mr-1 text-lg" />
          Living Decor <FaCaretDown />
          <div
            className="w-full absolute  z-50 top-full left-0 transform rounded-md justify-center items-center p-2 group-hover:flex hidden border-teal-500 "
            style={{ margin: "auto" }}
          >
            <div class="flex flex-wrap justify-between bg-white text-black w-full whitespace-nowrap">
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <h5 className="text-lg uppercase">Carpet | Rugs</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Carpets</li>
                  <li className="py-1 text-gray-500">Handmade Rugs</li>
                  <li className="py-1 text-gray-500">Shataranji</li>
                  <li className="py-1 text-gray-500">
                    <img src="/images/menuCategories/Rugs Category-100x100.webp" />
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <h5 className="text-lg uppercase">Cushion|Cushion Cover</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Cushion Cover</li>
                  <li className="py-1 text-gray-500">Cushion</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <h5 className="text-lg uppercase">Curtain|Blind</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Printed Curtain</li>
                  <li className="py-1 text-gray-500">Solid Curtain</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <hr className="mt-7" />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Vertical Blind</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <h5 className="text-lg uppercase">Quilts|Comforters|Covers</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Comfort In a Bag</li>
                  <li className="py-1 text-gray-500">Comforter Cover</li>
                  <li className="py-1 text-gray-500">Quilts|Comforters</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <h5 className="text-lg uppercase">Mosquito Net</h5>
                <hr />
                <ul className="mb-5">
                  <li className="py-1 text-gray-500">Classic Style</li>
                  <li className="py-1 text-gray-500">Fancy Style</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"></div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"></div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default LivingDecor;
