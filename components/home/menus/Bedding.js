import Link from "next/link";
import { useState } from "react";
import { FaCaretDown, FaBed } from "react-icons/fa";

const Bedding = () => {
  const sections = [
    {
      id: 1,
      imageUrl:
        "/images/menuCategories/Bed Sheet Category-100x100.webp",
      title: "Bed Sheet",
      listItems: ["King", "Extra King", "Semi Double", "Single"],
    },
    {
      id: 2,
      imageUrl:
        "/images/menuCategories/Bed Cover Category-100x100.webp",
      title: "Bed Cover",
      listItems: ["Extra King size", "King Size"],
    },
    {
      id: 3,
      imageUrl: "/images/menuCategories/Bed Runner Category-100x100.webp",
      title: "Bed Runner",
      listItems: [""],
    },
    {
      id: 4,
      imageUrl: "/images/menuCategories/p01-500x500-100x100.webp",
      title: "Pillow||Pillow Protector",
      listItems: ["Pillow Potector", "Sleeping Pillow"],
    },
    {
      id: 5,
      imageUrl: "/images/menuCategories/Fitted Sheet Category-100x100.webp",
      title: "FittedSheet | Sheet Set",
      listItems: [""],
    },
    {
      id: 6,
      imageUrl: "/images/menuCategories/Mattress-100x100.webp",
      title: "Mattress | Mattress Potector",
      listItems: ["Mattres Topper", "Premium Mattress"],
    },
  ];
  return (
    <>
      <div className="">
        <Link
          href="/Shop"
          className="inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium group"
        >
          <FaBed className="mr-1 text-xl" />
          Bedding <FaCaretDown />
          <div className="w-full absolute pb-6  z-50 top-full left-0 transform rounded-md justify-center items-center p-2 group-hover:flex hidden">
          <div className="max-w-screen-xl mx-auto px-3 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
        {/* Map over sections array */}
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white p-2 relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          >
            <div className="flex">
              <img
                src={section.imageUrl}
                alt={`Left Image ${section.id}`}
                className="w-1/2 h-auto object-cover"
              />
              <div className="w-1/2 ml-4 text-black">
                <h2 className="text-lg font-bold mb-2 overflow-ellipsis">{section.title}</h2>
                <ul>
                  {section.listItems.map((item, index) => (
                    <li key={index} className="overflow-ellipsis whitespace-nowrap">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Popup Box */}
            <div className="hidden absolute top-0 left-0 right-0 bottom-0 bg-white p-4 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-lg font-bold mb-2">{section.title}</h2>
              <ul>
                {section.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Bedding;
