import CartContext from "@/context/CartContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import { RiCloseLine } from "react-icons/ri"; // Adjust the import path to where your CartContext is defined

const ProductModal = ({ product, onClose }) => {
  const { addItemToCart } = useContext(CartContext);
  const [productQty, setProductQty] = useState(0);
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addToCartHandler = () => {
    addItemToCart({
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.primary_photo,
      quantity: parseInt(productQty, 10),
      in_stock: product.stock,
      supplier_id: product.supplier_id,
      sku: product.sku,
      total_price: parseFloat(product.price) * parseInt(productQty, 10),
    });
    onClose(); // Optionally close the modal on adding to cart
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 py-6 sm:px-0 z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full"
      >
        <div className="px-4 py-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={product.primary_photo}
              alt={product.name}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Price: {product.price}
              </p>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={product.stock > 0}
                  readOnly
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2 text-gray-700">
                  In Stock {product.stock}
                </span>
              </div>
            </div>
            <div className="mb-2">
              <p className="font-semibold mb-2">Overview</p>
              <p className="text-gray-700">
                Premium Quality {product.category?.name} Product
              </p>
            </div>
            <div className="flex flex-col pt-2 gap-2 items-center">
              <input
                type="number"
                className="block w-full px-4 py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline-gray"
                min="1"
                max={product.stock} // Limit the max quantity to the stock available
                step="1"
                value={productQty}
                onChange={(e) =>
                  setProductQty(Math.min(e.target.value, product.stock))
                } // Ensure the quantity does not exceed stock
              />
              <button
                onClick={addToCartHandler}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button
            onClick={onClose}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <RiCloseLine size="24" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
