"use client";
import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
  };

  // add or update item in cart 
  const addItemToCart = async ({ product_id, name, price, image, in_stock, supplier_id, quantity = 1, sku, total_price }) => {
    const item = {
      product_id, name, price, image, in_stock, supplier_id, quantity, sku, total_price
    };
    // Check item exist or not 
    // if item exist update item or add new item 
    const isItemExist = cart?.cartItems?.find(
      (i) => i.product_id === item.product_id
    );
    let newCartItems;
    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product_id === isItemExist.product_id ? item : i
      );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Updated quantity for ${name}.`,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Added ${name} to your cart.`,
        showConfirmButton: false,
        timer: 1500
      });
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  //  remove item from cart 
  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product_id !== id);
    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart, }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;