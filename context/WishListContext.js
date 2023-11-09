
import Constant from "@/ults/Constant";
import { getCookie } from "cookies-next";
import { createContext, useState, useEffect } from "react";

const WishListContext = createContext();
export const WishListProvider = ({ children }) => {
    const [wlist, setWlist] = useState(0);   
    

    useEffect(() => {
        setWishListToState();
    }, []);

    const setWishListToState = () => {
        setWlist(localStorage.getItem("wishlisttotal") ? JSON.parse(localStorage.getItem("wishlisttotal")) : []);
    };

    const addRemoveWishList = async ({ product_id }) => {
        let user_token = getCookie('home_text_token');
        const item = {
            product_id
        };
        const response = await fetch(Constant.BASE_URL + '/api/wish-list', {
            method: "POST",
            // mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + user_token,
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(item), // body data type must match "Content-Type" header
        });
        let res = await response.json();

        localStorage.setItem("wishlisttotal", res.total_wishlist);
        setWishListToState();      
    };

    return (
        <WishListContext.Provider value={{ wlist, addRemoveWishList }}>
            {children}
        </WishListContext.Provider>
    );
};

export default WishListContext;