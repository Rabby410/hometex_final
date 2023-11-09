import CartContext from '@/context/CartContext';
import React, { useContext, useState } from 'react'

import Constants from '@/ults/Constant'

export async function getServerSideProps(context) {
    // let id = context.query.id;
    let user_token = context.req.cookies?.home_text_token;
    const res = await fetch(  
      Constants.BASE_URL+'/api/my-order',{
        method: 'GET',
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
     
        headers: {            
          "Content-Type": "application/json",
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + user_token,
          },  
      }
      
      )
    const order = await res.json();
    return {
      props: {
         order,
        user_token
      },
    }
  }


const Orderlist = ({ order,user_token}) => {

  let my_order = order?.order;
 console.log(my_order)

    return (
        <>
            <p>User Token For auth check {Constants.BASE_URL}</p>
            <div className="max-w-screen-xl mx-auto px-3 mb-10">
                My Order list  {user_token}
            </div>
        </>
    )
}

export default Orderlist