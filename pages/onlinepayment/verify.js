import React, { useContext, useState } from 'react'
import Constants from "@/ults/Constant";

export async function getServerSideProps(context) {
    // let id = context.query.id;
     let user_token = context.req.cookies?.home_text_token;
 
    let order_id = context.query?.order_id;
    if (typeof order_id == 'undefined')
        order_id = 'no_order'


    const res = await fetch(
        `${Constants.BASE_URL}/api/get-payment-details?order_id=` + order_id, {
            method: 'GET',
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + user_token,
            },
        }

    )
    const order = await res.json();


    console.log(order)

    // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2NoZWNrLW91dCIsImlhdCI6MTY4MTEyOTA3NCwiZXhwIjoxNjgxMTMyNjc0LCJuYmYiOjE2ODExMjkwNzQsImp0aSI6ImxyRENabktEdlRpWXlwbk4iLCJzdWIiOiIxOSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.upzVaIWSRTpeQ2qC5vLhv0-rSImHDoimNuVLNBf8EpQ';
    // const res = await fetch(
    //     '${Constants.BASE_URL}/api/my-order', {
    //     method: 'GET',
    //     mode: "cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

    //     headers: {
    //         "Content-Type": "application/json",
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': 'Bearer ' + token,
    //     },
    // }

    // )
    // const order = await res.json();


    return {
        props: {
            order,
            order_id
        },
    }
}


const Verify = ({ order, order_id }) => {

    // console.log(order.response)

    if(typeof window !== "undefined" && order?.response?.status== 200){
        // console.log(order.response.response_url)
        window.location.href = order.response.response_url;
    }

    return (
        <>
            {order_id}
        </>
    )
}

export default Verify