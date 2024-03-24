import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import Slider from "components/allCategory/Slider";
import { MdFavorite } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { RiShoppingBasketFill, RiExchangeFill } from "react-icons/ri";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
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
const brands = ["Hometex Bangladesh M.", "Desiattire"];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [metarialsOpen, setIsMetarialsOpen] = useState(false);
  const [spexialOfferOpen, setIsSpecialOfferOpen] = useState(false);
  const [giftingOpen, setIsGiftingOpen] = useState(false);

  useEffect(() => {
    fetch(`${Constants.BASE_URL}/api/products-web`)
      .then((response) => response.json())
      .then((responseData) => setProducts(responseData.data))
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };
  const handlePriceChange = (event, type) => {
    const value = parseInt(event.target.value, 10);
    setPriceRange((prevRange) =>
      type === "min"
        ? [Math.min(value, prevRange[1]), prevRange[1]]
        : [prevRange[0], Math.max(value, prevRange[0])]
    );
  };

  const parsePrice = (priceString) => {
    // Remove commas and currency symbols
    const numericPart = priceString.replace(/[^0-9.-]+/g, "");
    return parseFloat(numericPart);
  };

  const handleColorClick = (color) => {
    if (color === "Not Color") {
      setSelectedColors(["Not Color"]);
    } else {
      setSelectedColors(
        (prevColors) =>
          prevColors.includes(color)
            ? prevColors.filter((c) => c !== color)
            : [...prevColors.filter((c) => c !== "Not Color"), color] // Remove "Not Color" when other colors are selected
      );
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product?.category?.name === selectedCategory;
      const brandMatch =
        selectedBrand === "All" || product?.brand?.name === selectedBrand;
      const priceMatch =
        parsePrice(product?.price) >= priceRange[0] &&
        parsePrice(product?.price) <= priceRange[1];
      const colorMatch =
        selectedColors.length === 0 || selectedColors.includes(product.color);

      return categoryMatch && brandMatch && priceMatch && colorMatch;
    });
  }, [products, selectedCategory, selectedBrand, priceRange, selectedColors]);

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

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleBrands = () => {
    setIsBrandsOpen(!isBrandsOpen);
  };

  const togglePriceFilter = () => {
    setIsPriceOpen(!isPriceOpen);
  };
  const toggleColorFilter = () => {
    setIsColorsOpen(!isColorsOpen);
  };
  const toggleMatarialsFilter = () => {
    setIsMetarialsOpen(!isColorsOpen);
  };
  const toggleSpecialOfferFilter = () => {
    setIsSpecialOfferOpen(!isColorsOpen);
  };
  const toggleGiftingFilter = () => {
    setIsGiftingOpen(!isColorsOpen);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-10">
      <Sticky />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <div className="border-b-2">
            {/* Accordion Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl mb-3">Categories</h2>
              <button onClick={toggleCategories}>
                {isCategoriesOpen ? (
                  <AiOutlineUp size={18} />
                ) : (
                  <AiOutlineDown size={18} />
                )}
              </button>
            </div>
            {/* Accordion Content */}
            {isCategoriesOpen && (
              <ul className="mb-3">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer ${
                      selectedCategory === category
                        ? "text-blue-500 font-bold"
                        : ""
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-b-2">
            {/* Brands Accordion Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl mb-3">Brands</h2>
              <button onClick={toggleBrands}>
                {isBrandsOpen ? (
                  <AiOutlineUp size={18} />
                ) : (
                  <AiOutlineDown size={18} />
                )}
              </button>
            </div>
            {/* Brands Accordion Content */}
            {isBrandsOpen && (
              <ul>
                <li onClick={() => handleBrandChange("All")}>All</li>
                {brands.map((brand) => (
                  <li
                    key={brand}
                    className={`cursor-pointer ${
                      selectedBrand === brand ? "text-blue-500 font-bold" : ""
                    }`}
                    onClick={() => handleBrandChange(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-b-2">
            {/* <!-- Price Filter Accordion Header --> */}
            <div className="flex justify-between items-center my-3">
              <h2 className="font-bold text-xl">Price</h2>
              <button onClick={togglePriceFilter}>
                {isPriceOpen ? (
                  <AiOutlineUp size={18} />
                ) : (
                  <AiOutlineDown size={18} />
                )}
              </button>
            </div>
            {isPriceOpen && (
              <div className="py-4 px-2 bg-white rounded-lg shadow">
                <label
                  htmlFor="price-range"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select price range:
                </label>
                <div className="mt-2 flex justify-between items-center">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, "min")}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, "max")}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="mt-4 flex justify-between text-xs font-medium text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-gray-200 pt-4">
            {/* Accordion Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl">Colors</h2>
              <button onClick={toggleColorFilter}>
                {isColorsOpen ? (
                  <AiOutlineUp size={18} />
                ) : (
                  <AiOutlineDown size={18} />
                )}
              </button>
            </div>

            {/* Accordion Content */}
            {isColorsOpen && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {["Red", "Blue", "Green", "Yellow", "Black", "White"].map(
                    (color) => (
                      <button
                        key={color}
                        className={`h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          selectedColors.includes(color)
                            ? "ring-2 ring-offset-2 ring-blue-500"
                            : ""
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }} // Ensure your colors are in a valid CSS format
                        onClick={() => handleColorClick(color)}
                      ></button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="border-b-2 py-3">
            <div className="flex justify-between items-center mt-2">
              <h2 className="font-bold text-xl">Metarials</h2>
              <button onClick={toggleMatarialsFilter}>
                {isColorsOpen ? (
                  <AiOutlineUp size={18} />
                ) : (
                  <AiOutlineDown size={18} />
                )}
              </button>
            </div>
          </div>
          <div className="border-b-2 py-3">
            <div className="flex justify-between items-center mt-2">
              <h2 className="font-bold text-xl">Spexial Offer</h2>
              <button onClick={toggleSpecialOfferFilter}>
                {isColorsOpen ? (
                  <AiOutlineUp size={18} />
                ) : (
                  <AiOutlineDown size={18} />
                )}
              </button>
            </div>
          </div>
          <div className="border-b-2 py-2">
            <div className="flex justify-between items-center mt-2">
              <h2 className="font-bold text-xl">Gifting</h2>
              <button onClick={toggleGiftingFilter}>
                {isColorsOpen ? (
                  <AiOutlineUp size={18} />
                ) : (
                  <AiOutlineDown size={18} />
                )}
              </button>
            </div>
          </div>
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
