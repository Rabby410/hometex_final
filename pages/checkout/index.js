import CartContext from "@/context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaRegCreditCard,
  FaLocationArrow,
  FaUser,
  FaUserPlus,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Constants from "@/ults/Constant";

const Checkout = () => {
  let is_loged_in = getCookie("home_text_token") ? true : false;

  const router = useRouter();
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const { cart, addItemToCart, deleteItemFromCart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  const [showContentCertificate, setShowContentCertificate] = useState(false);
  const [showContentVoucher, setShowContentVoucher] = useState(false);

  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  // click shipping method
  const [shippingType, setShippingType] = useState(1);
  const [deliveryCharge, setDeliveryCharge] = useState(80);
  // click payment type
  const [paymentType, setPaymentType] = useState(1);
  const [processingCharge, setProcessingCharge] = useState(0);
  // Discount
  const [discount, setDiscount] = useState(0);

  const toggleContentCertificate = () => {
    setShowContentCertificate(!showContentCertificate);
  };
  const toggleContentVoucher = () => {
    setShowContentVoucher(!showContentVoucher);
  };

  // Total amount
  let sumTotal = 0;
  cart?.cartItems?.map((cartItem) => (sumTotal += cartItem.total_price));

  const initialvalues = {
    user_type: "1",
    pd_first_name: "",
    pd_last_name: "",
    pd_email: "",
    pd_phone: "",
    pd_fax: "",
    username: "",
    password: "",
    billing_company: "",
    billing_address_1: "",
    billing_address_2: "",
    billing_city: "",
    billing_district: "",
    billing_country: "",
    billing_post_code: "",
    delivary_chage: 0,
    discount: 0,
    payment_method: 0,
    shipping_method: 0,
    total_payable_amount: 0,
    cartData: {},
  };

  const [data, setData] = useState(initialvalues);
  const [err, setErr] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const shippingMethod = (method) => {
    if (Number(method) == 1) setDeliveryCharge(80);
    else setDeliveryCharge(150);

    setShippingType(Number(method));
  };

  const paymentMethod = (type, amount) => {
    if (Number(type) == 2) {
      amount = (Number(amount) * 2) / 100;
      setProcessingCharge(amount);
    } else setProcessingCharge(0);

    setPaymentType(Number(type));
  };
  // click payment type
  const [accountType, setAccountType] = useState(1);
  const accountTypeHandeler = (type) => {
    setAccountType(Number(type));
  };

  // function placeOrder(e) {
  //     e.preventDefault();
  const placeOrder = async (e) => {
    e.preventDefault();
    // if (privacyChecked && termsChecked) {
    setIsSubmit(true);
    setData({
      ...data,
      cartData: JSON.stringify(cartItems),
    });

    data.delivary_chage = deliveryCharge;
    data.payment_method = paymentType;
    data.shipping_method = shippingType;
    data.total_payable_amount = sumTotal + deliveryCharge + processingCharge;
    // if user loged in

    let res = {};
    if (is_loged_in) {
      const response = await fetch(
        `${Constants.BASE_URL}/api/check-out-logein-user`,
        {
          method: "POST",
          // mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("home_text_token"),
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      );
      res = await response.json();
    } else {
      const response = await fetch(`${Constants.BASE_URL}/api/check-out`, {
        method: "POST",
        // mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      res = await response.json();
    }

    if (res.status == "400") {
      let err_list = {};
      for (const [key, value] of Object.entries(res.error)) {
        err_list[key] = value[0];
      }
      setErr(err_list);
      // console.log(data, 'post_data')
      setIsSubmit(false);
    } else if (res.status == "200") {
      setErr({});
      setIsSubmit(false);
      if (!is_loged_in)
        setCookie("home_text_token", res?.success?.authorisation?.token);
      setCookie("order_id", res?.success?.order_id);
      localStorage.removeItem("cart");
      // return_payment_page

      if (res?.success?.payment_method == 1)
        // cash on delivary
        window.location.href = "/myorder/orderlist";
      // online
      else window.location.href = "/onlinepayment/verify";
    }

    // // let delivary_chage = deliveryCharge;
    // let total_payable_amount = sumTotal + deliveryCharge + processingCharge;

    //  console.log(data)
    // // console.log(total_payable_amount)
    // console.log(deliveryCharge,'delivary charge');
    // console.log(processingCharge,'processing ');
    // console.log(total_payable_amount,'Sub_total');
    // console.log(discount,'discount');
    // console.log(deliveryCharge,'D_ch');
    // return false ;
    // http://localhost/hometext_Api/public/
    // http://htbapi.hometexbd.ltd
  };

  let delivary_chage = deliveryCharge;
  let payable_amount = sumTotal + delivary_chage + processingCharge;

  // initialvalues.delivary_charge = deliveryCharge;
  // initialvalues.processing_amount = processingCharge;
  // initialvalues.payable_amount = Number(payable_amount);

  // console.log(initialvalues.processing_amount, 'Process/...')
  // console.log(sumTotal, 'Validation Error')
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
    <>
      <div className="px-4 py-2 mx-auto max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl xl:max-w-screen-2xl">
        <h1 className="text-[50px]">Hometex Checkout</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 flex flex-wrap items-start">
          <div className="rounded mt-5">
            {!is_loged_in && (
              <>
                <div className="card border col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full sm:w-40%">
                  <div className="card-header grid grid-flow-col auto-cols-max items-center border">
                    <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                      <FaUser className="" />
                    </div>
                    <div className="pl-2">
                      <h5>CREATE AN ACCOUNT OR LOGIN</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-4 ml-5">
                      <label class="flex items-center m-3">
                        <input
                          type="radio"
                          name="account_type"
                          value="1"
                          checked={accountType == 1 ? "checked" : ""}
                          onClick={(e) => {
                            accountTypeHandeler("1");
                          }}
                          class="form-radio rounded-full h-5 w-5 text-gray-600"
                        />
                        <span class="ml-2 text-gray-700">Register Account</span>
                      </label>
                      {/* <label class="flex items-center m-3">
                                        <input type="radio" name="account_type" value='2' checked={ accountType ==2 ? 'checked' : ''}  onClick={(e)=>{accountTypeHandeler('2')}} class="form-radio rounded-full h-5 w-5 text-gray-600" />
                                        <span class="ml-2 text-gray-700">Guest Checkout</span>
                                    </label>
                                    <label class="flex items-center m-3">
                                        <input type="radio" name="account_type" value='3' checked={ accountType ==3 ? 'checked' : ''}  onClick={(e)=>{accountTypeHandeler('3')}} class="form-radio rounded-full h-5 w-5 text-gray-600" />
                                        <span class="ml-2 text-gray-700">Returning Customer</span>
                                    </label> */}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="card border mt-5">
              <div className="card-header grid grid-flow-col auto-cols-max items-center border">
                <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                  <FaUserPlus className="" />
                </div>
                <div className="pl-2">
                  <h5>YOUR PERSONAL DETAILS</h5>
                </div>
              </div>
              <div className="card-body">
                {!is_loged_in && (
                  <>
                    <div className="ml-5 mb-4 m-2 ">
                      <div class="flex flex-wrap mt-4">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="first-name"
                            type="text"
                            placeholder="First Name *"
                            value={data.pd_first_name}
                            name="pd_first_name"
                            onChange={handleChange}
                          />
                          <p className="has_error text-red-500">
                            {" "}
                            {err?.pd_first_name}{" "}
                          </p>
                        </div>
                        <div class="w-full md:w-1/2">
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="last-name"
                            type="text"
                            placeholder="Last Name *"
                            value={data.pd_last_name}
                            name="pd_last_name"
                            onChange={handleChange}
                          />
                          <p className="has_error text-red-500">
                            {" "}
                            {err?.pd_last_name}{" "}
                          </p>
                        </div>
                        <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2 pt-2">
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="E-mail *"
                            value={data.pd_email}
                            name="pd_email"
                            onChange={handleChange}
                          />
                          <p className="has_error text-red-500">
                            {" "}
                            {err?.pd_email}{" "}
                          </p>
                        </div>
                        <div class="w-full md:w-1/2 pt-2">
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="text"
                            placeholder="Telephone *"
                            value={data.pd_phone}
                            name="pd_phone"
                            onChange={handleChange}
                          />
                          <p className="has_error text-red-500">
                            {" "}
                            {err?.pd_phone}{" "}
                          </p>
                        </div>
                        <div class="w-full md:w-1/2 mb-4 md:mb-0 pt-2 pr-2">
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fax"
                            type="text"
                            placeholder="Fax "
                            value={data.pd_fax}
                            name="pd_fax"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="ml-5 mb-4 m-2 ">
                      <div class="flex flex-wrap mt-4 ">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="first-name"
                            type="text"
                            placeholder="Username *"
                            value={data.username}
                            name="username"
                            onChange={handleChange}
                          />
                          <p className="has_error text-red-500">
                            {" "}
                            {err?.username}{" "}
                          </p>
                        </div>
                        <div class="w-full md:w-1/2">
                          <input
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="last-name"
                            type="password"
                            placeholder="Password *"
                            value={data.password}
                            name="password"
                            onChange={handleChange}
                          />
                          <p className="has_error text-red-500">
                            {" "}
                            {err?.password}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                )}

                <div className="ml-5 mb-4 m-2 ">
                  <div className="card-header grid grid-flow-col auto-cols-max items-center border">
                    <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                      <FaMapMarkerAlt className="" />
                    </div>
                    <div className="pl-2">
                      <h5>YOUR ADDRESS</h5>
                    </div>
                  </div>
                  <div class="flex flex-wrap mt-4">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2">
                      <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="company"
                        type="text"
                        placeholder="Company"
                        value={data.billing_company}
                        name="billing_company"
                        onChange={handleChange}
                      />
                      <p className="has_error text-red-500">
                        {" "}
                        {err?.billing_company}{" "}
                      </p>
                    </div>
                    <div class="w-full md:w-1/2">
                      <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="text"
                        placeholder="Address 1 *"
                        value={data.billing_address_1}
                        name="billing_address_1"
                        onChange={handleChange}
                      />
                      <p className="has_error text-red-500">
                        {" "}
                        {err?.billing_address_1}{" "}
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2 pt-2">
                      <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="landmark"
                        type="text"
                        placeholder="Address 2 *"
                        value={data.billing_address_2}
                        name="billing_address_2"
                        onChange={handleChange}
                      />
                      <p className="has_error text-red-500">
                        {" "}
                        {err?.billing_address_2}{" "}
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 pt-2">
                      <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        placeholder="City *"
                        value={data.billing_city}
                        name="billing_city"
                        onChange={handleChange}
                      />
                      <p className="has_error text-red-500">
                        {" "}
                        {err?.billing_city}{" "}
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 mb-4 md:mb-0 pr-2 pt-2">
                      <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="area"
                        type="text"
                        placeholder="Postcode *"
                        value={data.billing_post_code}
                        name="billing_post_code"
                        onChange={handleChange}
                      />
                      <p className="has_error text-red-500">
                        {" "}
                        {err?.billing_post_code}{" "}
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 pt-2">
                      <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="country"
                        type="text"
                        placeholder="Country *"
                        value={data.billing_country}
                        name="billing_country"
                        onChange={handleChange}
                      />
                      <p className="has_error text-red-500">
                        {" "}
                        {err?.billing_country}{" "}
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 pt-2">
                      <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="district"
                        type="text"
                        placeholder="District *"
                        value={data.billing_district}
                        name="billing_district"
                        onChange={handleChange}
                      />
                      <p className="has_error text-red-500">
                        {" "}
                        {err?.billing_district}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="ml-5 mb-4 m-2 ">
                  <div class="flex flex-wrap mt-4 ">
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        checked
                        class="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span class="ml-2 text-gray-700">
                        My delivery and billing addresses are the same.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full sm:w-60% mt-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 flex flex-wrap items-start">
              <div>
                <div className="border">
                  <div className="card-header grid grid-flow-col auto-cols-max items-center border ">
                    <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                      <FaRegCreditCard className="" />
                    </div>
                    <div className="pl-2">
                      <h5>PAYMENT METHOD</h5>
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center m-3">
                      <input
                        type="radio"
                        name="payment"
                        value="1"
                        checked={paymentType == 1 ? "checked" : ""}
                        onClick={(e) => {
                          paymentMethod("1", payable_amount);
                        }}
                        class="form-radio rounded-full h-5 w-5 text-gray-600"
                      />
                      <span class="ml-2 text-gray-700">Cash on deliver</span>
                    </label>
                    <label class="flex items-center m-3">
                      <input
                        type="radio"
                        name="payment"
                        value="2"
                        checked={paymentType == 2 ? "checked" : ""}
                        onClick={(e) => {
                          paymentMethod("2", payable_amount);
                        }}
                        class="form-radio rounded-full h-5 w-5 text-gray-600"
                      />
                      <span class="ml-2 text-gray-700">
                        Online Payment (2% processing fee will be include)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="border">
                <div className="rounded">
                  <div className="card-header grid grid-flow-col auto-cols-max items-center border">
                    <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                      <FaLocationArrow className="" />
                    </div>
                    <div className="pl-2">
                      <h5>SHIPPING METHOD</h5>
                    </div>
                  </div>
                  <div>
                    <label class="flex items-center m-3">
                      <input
                        type="radio"
                        name="location"
                        value="1"
                        checked={shippingType == 1 ? "checked" : ""}
                        onClick={(e) => {
                          shippingMethod("1");
                        }}
                        class="form-radio rounded-full h-5 w-5 text-gray-600"
                      />
                      <span class="ml-2 text-gray-700">
                        Inside Dhaka metro area -TK80
                      </span>
                    </label>
                    <label class="flex items-center m-3">
                      <input
                        type="radio"
                        name="location"
                        value="2"
                        checked={shippingType == 2 ? "checked" : ""}
                        onClick={(e) => {
                          shippingMethod("2");
                        }}
                        class="form-radio rounded-full h-5 w-5 text-gray-600"
                      />
                      <span class="ml-2 text-gray-700">
                        Outside Dhaka metro area -TK150
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* cuppon Code start */}
            <div className="border p-4 my-4">
              <div className="justify-between items-center cursor-pointer mb-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={toggleContentCertificate}
                >
                  <h2 className="text-lg font-medium">Use Coupon Code</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 transform TK{showContentCertificate ? 'rotate-180' : ''
                                } transition-transform duration-300`}
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                </div>
                {showContentCertificate && (
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      name="coupon"
                      id="input-coupon"
                      placeholder="Enter coupon code"
                      className="flex-1 border border-gray-400 rounded-l py-2 px-3 focus:outline-none w-full focus:border-blue-500"
                    />
                    <button
                      id="button-coupon"
                      className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-2 px-4 rounded-r"
                      data-loading-text="Loading..."
                    >
                      Apply Coupon
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="border p-4 mb-4">
              <div className="justify-between items-center cursor-pointer mb-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={toggleContentVoucher}
                >
                  <h2 className="text-lg font-medium">Enter Voucher Code</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 transform TK{showContentVoucher ? 'rotate-180' : ''
                                } transition-transform duration-300`}
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                </div>
                {showContentVoucher && (
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      name="voucher"
                      id="input-voucher"
                      placeholder="Enter voucher code"
                      className="flex-1 border border-gray-400 rounded-l py-2 px-3 focus:outline-none w-full focus:border-blue-500"
                    />
                    <button
                      id="button-voucher"
                      className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-2 px-4 rounded-r"
                      data-loading-text="Loading..."
                    >
                      Apply Vouher
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* cart section */}
            <div className="border p-4 mb-4">
              <div className="card">
                <div className="card-header">
                  <div className="card-header grid grid-flow-col auto-cols-max items-center border">
                    <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                      <FaShoppingCart className="" />
                    </div>
                    <div className="pl-2">
                      <h5>SHOPPING CART</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body"></div>
              </div>
              {/* table */}
              <table className="w-full sm:w-auto sm:min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unit price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* example row */}

                  {/* add more rows for each product */}

                  {cart?.cartItems?.map((cartItem) => (
                    <>
                      <tr className="text-sm text-gray-900">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {cartItem.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {cartItem.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          TK {cartItem.price}{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          TK {cartItem.total_price}{" "}
                        </td>
                      </tr>
                    </>
                  ))}

                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider"
                    >
                      SUB-TOTAL:
                    </td>
                    <td className="whitespace-nowrap px-6">Tk {sumTotal}</td>
                  </tr>
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider"
                    >
                      {delivary_chage === 80
                        ? "INSIDE DHAKA METRO AREA"
                        : "Outside Dhaka metro area"}
                    </td>
                    <td className="whitespace-nowrap px-6">
                      Tk {delivary_chage}
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider"
                    >
                      Processing Charge:
                    </td>
                    <td className="whitespace-nowrap px-6">
                      Tk {processingCharge}
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap tracking-wider"
                    >
                      TOTAL:
                    </td>
                    <td className="whitespace-nowrap px-6">
                      Tk {payable_amount}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="card-header grid grid-flow-col auto-cols-max items-center border">
                <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                  <FaRegCreditCard className="" />
                </div>
                <div className="pl-2">
                  <h5>PAYMENT DETAILS</h5>
                </div>
              </div>
            </div>
            <div className="border p-4 mb-4">
              <div className="card">
                <div className="card-header">
                  <div className="card-header grid grid-flow-col auto-cols-max items-center border">
                    <div className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4  h-12 cursor-pointer flex justify-center items-center border">
                      <FaShoppingCart className="" />
                    </div>
                    <div className="pl-2">
                      <h5>ADD COMMENTS ABOUT YOUR ORDER</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div class="flex flex-col">
                    <textarea
                      id="comment"
                      name="comment"
                      class="border rounded-lg mt-5 py-2 px-3 resize-none"
                      rows="3"
                      placeholder="Enter your comment"
                    ></textarea>
                  </div>
                  <div className="checkbox check-privacy">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="privacy"
                        value="1"
                        className="form-checkbox h-5 w-5 text-gray-600"
                        checked={privacyChecked}
                        onChange={(e) => setPrivacyChecked(e.target.checked)}
                      />
                      <span className="ml-2 text-gray-700">
                        I have read and agree to the{" "}
                        <a
                          href="/PrivacyPolicy"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <b>Privacy Policy</b>
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox check-terms">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="agree"
                        value="1"
                        className="form-checkbox h-5 w-5 text-gray-600"
                        // checked={termsChecked}
                        onChange={(e) => setTermsChecked(e.target.checked)}
                      />
                      <span className="ml-2 text-gray-700">
                        I have read and agree to the{" "}
                        <a
                          href="/Tac"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <b>Terms &amp; Conditions</b>
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="confirm-order float-right">
                    <button
                      onClick={placeOrder}
                      id="so-checkout-confirm-button"
                      data-loading-text="Loading..."
                      // disabled={!privacyChecked || !termsChecked}
                      className="px-4 py-2 bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                    >
                      {isSubmit ? "Processing.." : "Confirm Order"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
