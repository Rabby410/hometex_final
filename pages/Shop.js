import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import Slider from "components/allCategory/Slider";
import { MdFavorite } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { RiShoppingBasketFill, RiExchangeFill } from "react-icons/ri";
import { Sticky } from "@/components/home/Sticky";
import Constants from "../ults/Constant";
import ReactStars from "react-rating-stars-component";

const categories = [
  "All",
  "Hotel Linen",
  "Bedding",
  "Living Decor",
  "Bath Support",
  "Kitchen || Dining",
  "Home Decor",
];

const Shop = () => {
    const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch(`${Constants.BASE_URL}/api/products-web`)
      .then((response) => response.json())
      .then((responseData) => setProducts(responseData.data))
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <img src="/images/hometex-logo.png" alt="Logo" className="w-32 h-32" />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-10">
      <Sticky />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h2 className="font-bold text-xl mb-3">Categories</h2>
          <ul className="mb-6">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer ${
                  selectedCategory === category ? "text-blue-500 font-bold" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <Slider />
          <h2 className="font-bold text-xl mb-3">Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/Shop/${product.id}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 relative">
                  <img
                    src={product.primary_photo}
                    alt={product.name}
                    className="w-full object-fit rounded-t-lg"
                  />
                  <div className="absolute top-10 right-0 p-2 opacity-0 hover:opacity-100 transition duration-300 bg-[#999]">
                    <RiShoppingBasketFill
                      size={34}
                      color="#fff"
                      className="bg-[#999] hover:bg-[#009688] m-2 p-2"
                    />
                    <MdFavorite
                      size={34}
                      color="#fff"
                      className="bg-[#999] hover:bg-[#009688] m-2 p-2"
                    />
                    <RiExchangeFill
                      size={34}
                      color="#fff"
                      className="bg-[#999] hover:bg-[#009688] m-2 p-2"
                    />
                  </div>
                  <div className="p-4">
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <div className="flex justify-between mt-2">
                      <p className="text-gray-700">${product.price}</p>
                      <p className="text-gray-700">{product.color}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
