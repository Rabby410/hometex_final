import Link from "next/link";
import { useState } from "react";
import { FaCaretDown, FaBed } from "react-icons/fa";

const Bedding = () => {
  return (
    <>
      <div className="">
        <Link
          href="/Shop"
          className="inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium group"
        >
          <FaBed className="mr-1 text-xl" />
          Bedding <FaCaretDown />
          <div className="w-full absolute  z-50 top-full left-0 transform rounded-md justify-center items-center p-2 group-hover:flex hidden">
            <div class="flex flex-wrap justify-between bg-white text-black w-full whitespace-nowrap">
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <h2 className="text-lg font-bold mb-4">Bed Sheet</h2>
                <hr />
                <div className="flex flex-wrap w-max">
                  <div className="w-full md:w-1/2 px-4">
                    <span className="pb-2">King </span>
                    <br />
                    Extra king
                    <br />
                    <img src="/images/menuCategories/Bed Sheet Category-100x100.webp" />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    Semi Double <br />
                    Single
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <h2 className="text-lg font-bold mb-4">Bed Cover</h2>
                <hr />
                <div className="flex flex-wrap w-max">
                  <div className="w-full md:w-1/2 px-4">
                    Extra king size
                    <br />
                    <br />
                    <img src="/images/menuCategories/Bed Cover Category-100x100.webp" />
                  </div>
                  <div className="w-full md:w-1/2 px-4">King Size</div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <h2 className="text-lg font-bold mb-4">Bed Runner</h2>
                <hr />
                <br />
                <br />
                <img src="/images/menuCategories/Bed Runner Category-100x100.webp" />
              </div>
              <div className="w-full md:w-1/3 px-4">
                <h2 className="text-lg font-bold mb-4">
                  Pillow||Pillow Protector
                </h2>
                <hr />
                <span>Pillow Protector</span>
                <span className="pl-2">Sleeping Pillow</span>
                <br />
                <img src="/images/menuCategories/p01-500x500-100x100.webp" />
              </div>
              <div className="w-full md:w-1/3 px-4">
                <h2 className="text-lg font-bold mb-4">
                  Fitted Sheet|Sheet Set
                </h2>
                <hr />
                <br />
                <img src="/images/menuCategories/Fitted Sheet Category-100x100.webp" />
              </div>
              <div className="w-full md:w-1/3 px-4">
                <h2 className="text-lg font-bold mb-4">
                  Mattress|Mattress Protector
                </h2>
                <hr />
                <span>Mattress Topper</span>
                <span className="pl-2">Premium Mattress</span>
                <br />
                <img src="/images/menuCategories/Mattress-100x100.webp" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Bedding;
