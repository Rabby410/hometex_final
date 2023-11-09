import { useRouter } from "next/router";
import { CiStar } from "react-icons/ci";

import ReactStars from "react-rating-stars-component";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaShoppingBasket,
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";
import VerticalTabs from "@/components/VerticalTabs";

import CartContext from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";
import RecentViews from "@/components/RecentViews";
import Constants from "../../ults/Constant";
import WishListContext from "@/context/WishListContext";
import { getCookie } from "cookies-next";
import RecentView from "@/components/home/sticky/RecentView";

export async function getServerSideProps(context) {
  let id = context.query.id;
  const res = await fetch(
    `${Constants.BASE_URL}/api/products-details-web/` + id
  );
  const product = await res.json();

  // console.log(product, 'product')
  return {
    props: {
      product,
    },
  };
}

const Product = ({ product }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      comment,
      product: product.name,
    };

    // Send form data to backend API or email service
    fetch("https://example.com/send-email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      // console.log('Form submitted successfully:', data);
    });
  };

  const image_URL = `${Constants.BASE_URL}/images/uploads/product`;

  const { addItemToCart } = useContext(CartContext);

  const [product_qty, setProductQty] = useState(1);

  // Recent view items
  useEffect(() => {
    let recentitems = localStorage.getItem("recentview")
      ? JSON.parse(localStorage.getItem("recentview"))
      : [];

    let is_exist = false;
    let obj_key = [];
    for (let x in recentitems) {
      let txt = recentitems[x];
      if (txt.id == product.id) {
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
  }, [product.id]);

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
      total_price: product.price * product_qty,
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

  const tabs = [
    {
      label: "Description",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">Product Description</h2>
          <p>{product.description}</p>
        </div>
      ),
    },
    {
      label: "Review",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">Product Review</h2>
          <div className="py-4">
            <h2 className="text-2xl font-medium mb-4">Leave a Review</h2>
            <form>
              <div className="flex mb-4">
                <label htmlFor="rating" className="mr-4 self-center">
                  Rating:
                </label>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name="rating"
                        value={i + 1}
                        className="sr-only"
                      />
                      <FaStar
                        className="text-yellow-500 cursor-pointer"
                        size={25}
                        color={i + 1 <= 3 ? "#fbbf24" : "#d1d5db"}
                      />
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  className="border-gray-400 border w-full p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="block">
                  Review:
                </label>
                <textarea
                  name="review"
                  rows={4}
                  className="border-gray-400 border w-full p-2 rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      ),
    },
    {
      label: "Comment",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">Product Comment</h2>
          <p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:gap-4">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FaUser className="text-gray-500" />
                  </span>
                  <input
                    id="name"
                    type="text"
                    className="block w-full pl-10 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FaEnvelope className="text-gray-500" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    className="block w-full pl-10 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="comment" className="sr-only">
                Comment
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaComment className="text-gray-500" />
                </span>
                <textarea
                  id="comment"
                  className="block w-full pl-10 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Post Comment
              </button>
            </form>
          </p>
        </div>
      ),
    },
  ];
  const router = useRouter();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const { id } = router.query;
  //   if (!id) return;

  //   fetch(`${Constants.BASE_URL}/api/products-details-web/${id}`)
  //     .then(response => response.json())
  //     .then(responseData => setProduct(responseData.data))
  //     .catch(error => console.error(error));
  // }, [router.query.id]);

  // console.log(product)
  if (!product) return <div>Loading...</div>;

  // Price formula
  const formulaInitValue = {
    width: "",
    widthError: "",
    length: "",
    lengthError: "",
    height: "1",
  };
  const [formulaValue, setFormulaValue] = useState(formulaInitValue);
  // Price formula

  // console.log(product, 'product')

  // ((l*w)/h) * 500  formula
  // l:1-50;w:20-50 field limit

  let showPriceFormul = false;
  let showPriceHeight = false;
  let minLength = 1,
    maxLenght = 5000,
    minWidth = 1,
    maxWidth = 5000;

  let priceFormulaSum = 0;

  if (
    Number(product.price) === 0 &&
    product.price_formula != "" &&
    product.field_limit != ""
  ) {
    showPriceFormul = true;
    //let fieldLimit = `l:1-50;w:20-50`.toLowerCase().trim(); // product.field_limit;
    let fieldLimit = product.field_limit.toLowerCase().trim(); // product.field_limit;
    let splitFieldLimit = fieldLimit.split(";");
    if (typeof splitFieldLimit[0] != "undefined") {
      if (splitFieldLimit[0].startsWith("l")) {
        let splitLenght = splitFieldLimit[0].split(":");
        if (typeof splitLenght[1] != "undefined") {
          splitLenght = splitLenght[1].split("-");
          if (typeof splitLenght[0] != "undefined")
            minLength = Number(splitLenght[0]);
          if (typeof splitLenght[1] != "undefined")
            maxLenght = Number(splitLenght[1]);
        }
      }
    }
    if (typeof splitFieldLimit[1] != "undefined") {
      if (splitFieldLimit[1].startsWith("w")) {
        let splitWidth = splitFieldLimit[1].split(":");
        if (typeof splitWidth[1] != "undefined") {
          splitWidth = splitWidth[1].split("-");
          if (typeof splitWidth[0] != "undefined")
            minWidth = Number(splitWidth[0]);
          if (typeof splitWidth[1] != "undefined")
            maxWidth = Number(splitWidth[1]);
        }
      }
    }

    // let formulaRaw = '((l*w)/h)*500'
    //let formula = formulaRaw.toLowerCase() //product.price_formula.toLowerCase();
    // let formulaRaw =  '(((l*h)*100)+80)/(w*500)';
    let formulaRaw = product.price_formula;
    let formula = product.price_formula.toLowerCase();
    if (formula.includes(`h`)) showPriceHeight = true;

    // console.log(formulaValue, '____formulaValue')
    if (formula.includes("l") && formulaValue.length) {
      formulaRaw = formulaRaw.replace("l", formulaValue.length);
    }
    if (formula.includes("w") && formulaValue.width) {
      formulaRaw = formulaRaw.replace("w", formulaValue.width);
    }
    if (formula.includes("h") && formulaValue.height) {
      formulaRaw = formulaRaw.replace("h", formulaValue.height);
    }
    if (formulaValue.length && formulaValue.width && formulaValue.height) {
      priceFormulaSum = eval(formulaRaw);
    }
  }

  const handleChange = (e) => {
    setFormulaValue({
      ...formulaValue,
      [e.target.name]: e.target.value,
      widthError: "",
    });
  };
  const handleBlur = (e) => {
    let thisValue = Number(e.target.value);
    if (thisValue >= 0) {
      if (e.target.name == "width") {
        if (thisValue >= minWidth && thisValue <= maxWidth)
          setFormulaValue({
            ...formulaValue,
            [e.target.name]: e.target.value,
            widthError: "",
          });
        else if (thisValue > maxWidth)
          setFormulaValue({
            ...formulaValue,
            widthError: `Width must be in ${minWidth} to ${maxWidth}`,
            [e.target.name]: "",
          });
        else if (thisValue < minWidth)
          setFormulaValue({
            ...formulaValue,
            widthError: `Width must be in ${minWidth} to ${maxWidth}`,
            [e.target.name]: "",
          });
      } else if (e.target.name == "length") {
        if (thisValue >= minLength && thisValue <= maxLenght)
          setFormulaValue({
            ...formulaValue,
            [e.target.name]: e.target.value,
            lengthError: "",
          });
        else if (thisValue > maxLenght)
          setFormulaValue({
            ...formulaValue,
            lengthError: `Length must be in ${minLength} to ${maxLenght}`,
            [e.target.name]: "",
          });
        else if (thisValue < minLength)
          setFormulaValue({
            ...formulaValue,
            lengthError: `Length must be in ${minLength} to ${maxLenght}`,
            [e.target.name]: "",
          });
      }
    } else {
      if (e.target.name == "width")
        setFormulaValue({
          ...formulaValue,
          widthError: `Width must be number`,
        });
      else if (e.target.name == "length")
        setFormulaValue({
          ...formulaValue,
          lengthError: `Lenth must be number`,
        });
    }
  };

  // console.log(formulaValue.width)
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
    <div>
      <div className="max-w-screen-2xl mx-auto px-3">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex flex-wrap items-start">
          {/* Image section*/}
          <div>
            <div className="mb-2">
              <img
                src={`${image_URL}/${product.primary_photo?.photo}`}
                className="w-full md:w-auto border"
              />
            </div>
            <div className="">
              <img
                src={`${image_URL}_thumb/${product.primary_photo?.photo}`}
                className="w-16 md:w-32 lg:w-48 border"
              />
            </div>
          </div>
          {/* Image section end*/}
          {/* Details Section Start */}
          <div>
            <h1 className="text-2xl">{product.name}</h1>
            <div>
              <div className="flex items-center mt-5 mb-2">
              <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
              </div>
              <p> 0 reviews / Write a review</p>
            </div>
            <hr />
            <p className="my-5 mx-2">
              Price:
              {product.price > 0 ? `${product.price}৳` : `${priceFormulaSum}৳`}
            </p>

            {showPriceFormul && (
              <>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="width"
                    id="input-length"
                    placeholder="Width"
                    value={formulaValue.width}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="flex-1 border border-gray-400 rounded-l py-2 px-3 focus:outline-none w-full focus:border-blue-500"
                  />

                  {formulaValue.widthError.length > 0 && (
                    <>
                      {" "}
                      <p>{formulaValue.widthError}</p>
                    </>
                  )}

                  <input
                    type="text"
                    name="length"
                    id="input-length"
                    placeholder="Length"
                    value={formulaValue.length}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="flex-1 border border-gray-400 rounded-l py-2 px-3 focus:outline-none w-full focus:border-blue-500"
                  />
                  {formulaValue.lengthError.length > 0 && (
                    <>
                      {" "}
                      <p>{formulaValue.lengthError}</p>
                    </>
                  )}
                  <input
                    type="text"
                    name="height"
                    id="input-length"
                    placeholder="Height"
                    value={formulaValue.height}
                    onChange={handleChange}
                    className="flex-1 border border-gray-400 rounded-l py-2 px-3 focus:outline-none w-full focus:border-blue-500"
                  />
                </div>
              </>
            )}

            {/* <button>Add to cart</button> */}
            <hr />
            <div className="mt-5">
              Product Code: {product.sku} <br />
              <span>
                Availability:
                <input
                  type="checkbox"
                  checked
                  className="checked:bg-blue-500 "
                />{" "}
                In Stock {product.stock}
              </span>{" "}
              <br />
              Size Chart <br />
            </div>
            <hr />
            <div className="mt-5">
              OVERVIEW <br />
              Premium Quality Bed Sheet
            </div>
            <hr />
            <div>
              AVAILABLE OPTIONS <br />
            </div>
            <hr />
            <div>
              Bed Sheet Size <br />
              Premium Quality Bed Sheet <br />
              {/* <select className="border block w-full px-4 py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline-gray">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select> */}
<<<<<<< HEAD
                        </div>
                        <div className='flex pt-2'>
                            <div>
                                <input
                                    type="number"
                                    className="block w-full px-4 py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline-gray"
                                    min="1"
                                    max="100"
                                    step="1"
                                    defaultValue="1"
                                    onChange={(e) => { setProductQty(e.target.value) }}
                                />
                            </div>
                            <div>
                                <button
                                    onClick={addToCartHandler}
                                    className="flex items-center justify-center px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
                                    <FaShoppingBasket className="mr-2" />
                                    Buy Now
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={(e) => { attToWishList(product.id) }}
                                    className="flex items-center justify-center px-4 py-2 font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
                                    <FaShoppingBasket className="mr-2" />
                                    Add to Wish list
                                </button>                                
                            </div>
                          
                        </div>
                        <div className='flex justify-center'>
                            <img src='/images/productPage/deal.png' className='w-{90}' />
                        </div>
                        <div className='flex justify-center'>
                            <img src='/images/productPage/Genuine product.jpg' className='w-28 p-3' />
                            <img src='/images/productPage/BUYER-SHIELD-Protectioin-.png' className='w-28 p-3' />
                            <img src='/images/productPage/100 c2.png' className='w-28 p-3' />
                        </div>
                    </div>
                    {/* Details Section End */}

                    {/* button Section Start */}
                    <div className='flex '>
                        <div className='bg-blue-800 p-2 rounded m-2 shadow-lg shadow-gray-500/60'>
                            <FaFacebookF className='m-1 text-white text-[40px]' />
                        </div>
                        <div className='bg-[#259bca] p-2 rounded m-2 shadow-lg shadow-gray-500/60'>
                            <FaTwitter className='m-1 text-white text-[40px]' />
                        </div>
                        <div className='bg-[#1FD363] p-2 rounded m-2 shadow-lg shadow-gray-500/60' >
                            <FaShareAlt className='m-1 text-white text-[40px]' />
                        </div>
                    </div>
                    {/* button Section End */}

                </div>
                <div className="container mx-auto my-8 border-2 border-solid border-indigo-500">
                    <VerticalTabs tabs={tabs} />
                </div>
=======
>>>>>>> 9f31fbb27e47b20ccc684432c06aaae7b2bb88b1
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
          {/* Details Section End */}

          {/* button Section Start */}
          <div className="flex ">
            <div className="bg-blue-800 p-2 rounded m-2 shadow-lg shadow-gray-500/60">
              <FaFacebookF className="m-1 text-white text-[40px]" />
            </div>
            <div className="bg-[#259bca] p-2 rounded m-2 shadow-lg shadow-gray-500/60">
              <FaTwitter className="m-1 text-white text-[40px]" />
            </div>
            <div className="bg-[#1FD363] p-2 rounded m-2 shadow-lg shadow-gray-500/60">
              <FaShareAlt className="m-1 text-white text-[40px]" />
            </div>
          </div>
          {/* button Section End */}
        </div>
        <div className="container mx-auto my-8 border-2 border-solid border-indigo-500">
          <VerticalTabs tabs={tabs} />
        </div>
      </div>
      <RecentView></RecentView>
    </div>
  );
};

export default Product;
