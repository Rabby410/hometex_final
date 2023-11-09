import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
export async function getServerSideProps(context) {
    // let id = context.query.id;
    // let user_token = context.req.cookies?.home_text_token;
   
    let request = context
   
    console.log(request.headers)
    console.log(request)

    const { method, body, headers } = context;
  console.log(`Request method: ${method}`);
  console.log(`Request headers: ${JSON.stringify(headers)}`);
  console.log(`Request body: ${JSON.stringify(body)}`);
 


    return {
        props: {
            
        },
    }
}


const Paysuccess = ({  }) => {

    const router = useRouter()
    console.log(router)

    return (
        <>
            
        </>
    )
}

export default Paysuccess