import { useContext, useEffect, useState } from "react";
import WishListContext from "@/context/WishListContext";
import CartContext from "@/context/CartContext";
import { getCookie } from "cookies-next";
import RecentView from "@/components/home/sticky/RecentView";
import Constants from "@/ults/Constant";
import { CiStar } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import ProductModal from "@/components/common/ProductModal";

export async function getServerSideProps(context) {
  let id = context.query.id;
  const res = await fetch(
    `${Constants.BASE_URL}/api/products-details-web/` + id
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

const Product = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    product.primary_photo?.photo
  );
  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const image_URL = `${Constants.BASE_URL}/images/uploads/product`;

  const { addItemToCart } = useContext(CartContext);

  const [product_qty, setProductQty] = useState(1);

  const handleAttributeChange = (selectedValue) => {
    const selectedAttribute = product.product_attributes.find(
      (attribute) => attribute.attribute_value.name === selectedValue
    );

    setSelectedAttribute(selectedAttribute);
  };

  const getPrice = () => {
    if (selectedAttribute) {
      const { attribute_math_sign, attribute_number } = selectedAttribute;

      switch (attribute_math_sign) {
        case "+":
          return product.price + attribute_number;
        case "-":
          return product.price - attribute_number;
        case "*":
          return product.price * attribute_number;
        case "/":
          return product.price / attribute_number;
        default:
          return product.price;
      }
    }

    return product.price;
  };

  // Recent view items
  useEffect(() => {
    let recentitems = localStorage.getItem("recentview")
      ? JSON.parse(localStorage.getItem("recentview"))
      : [];

    let is_exist = false;
    let obj_key = [];
    for (let x in recentitems) {
      let txt = recentitems[x];
      if (txt?.id == product?.id) {
        is_exist = true;
        obj_key.push(x);
      }
    }

    // let obj_length = Object.keys(product).length;
    if (is_exist) {
      // console.log(obj_length, 'have_rmove', obj_key)
    } else {
      recentitems.push(product);
    }
    localStorage.setItem("recentview", JSON.stringify(recentitems));
  }, [product?.id]);

  // Shopping cart
  const addToCartHandler = () => {
    addItemToCart({
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.primary_photo,
      in_stock: product.stock,
      supplier_id: product.supplier_id,
      quantity: product_qty,
      sku: product.sku,
      total_price: getPrice() * product_qty,
    });
  };

  // add to wish list
  const { addRemoveWishList } = useContext(WishListContext);
  const attToWishList = (productId) => {
    let user_token = getCookie("home_text_token");
    if (typeof user_token == "undefined") {
      alert("Please Login");
      return false;
    } else {
      addRemoveWishList({
        product_id: productId,
      });
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 py-10">
          <div className="flex flex-row col-span-5">
            <div className="space-y-4">
              {/* Dynamically generate thumbnail images */}
              {product?.photos?.length > 0 ? (
                product.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={`${image_URL}_thumb/${photo}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 md:w-24 lg:w-36 border cursor-pointer"
                    onClick={() => setSelectedImage(photo)}
                  />
                ))
              ) : (
                <img
                  src={`${image_URL}_thumb/${product.primary_photo?.photo}`}
                  alt="Primary Image"
                  className="w-20 md:w-24 lg:w-28 border cursor-pointer"
                  onClick={() => setSelectedImage(product.primary_photo?.photo)}
                />
              )}
            </div>
            <div>
              {/* Main image without magnify effect */}
              <img
                alt="Primary Product Image"
                src={`${image_URL}/${
                  selectedImage || product.primary_photo?.photo
                }`}
                style={{ width: "100%" }} // This ensures the image is responsive and fits the container
              />
            </div>
          </div>

          <div className="col-span-5 mx-2">
            <h1 className="text-2xl">{product.name}</h1>

            <div>
              <div className="flex items-center mt-5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <CiStar key={i} className="text-yellow-800" size={20} />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-6">
                0 reviews / Write a review
              </p>
            </div>
            <hr className="border-t my-1" />
            <p className="text-lg font-semibold mb-4">
              Price: <span className="text-xl font-extrabold">৳</span>{" "}
              {getPrice()}
            </p>
            <hr className="border-t my-1" />
            <div className="mt-2">
              <p className="text-gray-700">
                <span className="font-semibold">Product Code:</span>{" "}
                {product.sku}
              </p>
              <label className="flex items-center cursor-pointer mt-2">
                <input
                  type="checkbox"
                  checked
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2 text-gray-700">
                  In Stock {product.stock}
                </span>
              </label>
              <p className="mt-2">Size Chart</p>
            </div>

            <hr className="border-t my-1" />

            <div className="mb-2">
              <p className="font-semibold mb-2">Overview</p>
              <p className="text-gray-700">
                Premium Quality {product.category?.name} Product
              </p>
            </div>

            <hr className="border-t my-1" />

            <div className="mb-2">
              <p className="font-semibold mb-2">Available Options</p>
              <p>{product.sub_category?.name} Size</p>
              {product.product_attributes.length > 0 && (
                <select
                  className="border w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline-gray"
                  onChange={(e) => handleAttributeChange(e.target.value)}
                >
                  <option value="default">Select an option</option>
                  {product.product_attributes.map((attribute) => (
                    <option
                      key={attribute.id}
                      value={attribute.attribute_value.name}
                    >
                      {attribute.attribute_value.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="flex pt-2 gap-2">
              <div>
                <input
                  type="number"
                  className="block w-full px-4 py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline-gray"
                  min="1"
                  max="100"
                  step="1"
                  defaultValue="1"
                  onChange={(e) => {
                    setProductQty(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  onClick={addToCartHandler}
                  className="flex items-center justify-center px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
                >
                  <FaShoppingBasket className="mr-2" />
                  Buy Now
                </button>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    attToWishList(product.id);
                  }}
                  className="flex items-center justify-center px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
                >
                  <FaShoppingBasket className="mr-2" />
                  Add to Wish list
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/images/productPage/deal.png" className="w-{90}" />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/productPage/Genuine product.jpg"
                className="w-28 p-3"
              />
              <img
                src="/images/productPage/BUYER-SHIELD-Protectioin-.png"
                className="w-28 p-3"
              />
              <img src="/images/productPage/100 c2.png" className="w-28 p-3" />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col">
              <ProductModal/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
