import React, { useState, useEffect, useCallback, Suspense } from "react";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import MainSlider from "@/components/home/MainSlider";
import BannerTop from "@/components/home/BannerTop";
import { Policies } from "@/components/home/Policies";
import Prefooter from "@/components/layout/Prefooter";
import ProductsTabs from "@/components/home/ProductsTabs";
import BoxBanner from "@/components/home/BoxBanner";
import ComfortInBag from "@/components/home/ComfortInBag";
import Satranji from "@/components/home/Satranji";
import NewArrivales from "@/components/home/NewArrivales";
import Comfoters from "@/components/home/Comfoters";
import Curtains from "@/components/home/Curtains";
import Exclusive from "@/components/home/Exclusive";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import BathSupport from "@/components/home/BathSupport";
import Blog from "@/components/home/Blog";
import Pillow from "@/components/home/Pillow";
import { Sticky } from "@/components/home/Sticky";
import Constants from "@/ults/Constant";
import DesignSix from "@/components/newDesigns/DesignSix";
import DesignOne from "@/components/newDesigns/DesignOne";
import DesignTwo from "@/components/newDesigns/DesignTwo";
import DesignFifteen from "@/components/newDesigns/DesignFifteen";
import DesignEight from "@/components/newDesigns/DesignEight";
import DesignThree from "@/components/newDesigns/DesignThree";
import DesignFive from "@/components/newDesigns/DesignFive";
import DesignSeven from "@/components/newDesigns/DesignSeven";
import DesignEleven from "@/components/newDesigns/DesignEleven";
import DesignFour from "@/components/newDesigns/DesignFour";
import DesignNine from "@/components/newDesigns/DesignNine";
import DesignTwelve from "@/components/newDesigns/DesignTwilve";
import Prefooter2 from "@/components/layout/Prefooter2";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${Constants.BASE_URL}/api/products-web`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const responseData = await response.json();
        setProducts(responseData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <MainSlider />
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 px-4 py-4 bg-green-500 text-white rounded-full shadow-md transition duration-300 hover:bg-green-600"
          onClick={handleBackToTop}
        >
          <BsFillArrowUpCircleFill size={32} />
        </button>
      )}
      <DesignSix/>
      <DesignOne/>
      {/* <DesignTwo/> */}
      <Suspense fallback={<h1>loading</h1>}>
      <ProductsTabs products={products} />
      <DesignFifteen/>
      <DesignEight/>
      <DesignThree/>
      <DesignFive/>
      <DesignSeven/>
      <DesignEleven/>
      <DesignFour/>
      <DesignNine/>
      <DesignTwelve/>
      <Prefooter2/>
      {/* <BannerTop /> */}
      {/* <Sticky /> */}
      {/* <Policies /> */}
      
      {/* <BoxBanner products={products} /> */}
      {/* <ComfortInBag products={products} /> */}
      {/* <Satranji products={products} /> */}
      {/* <NewArrivales products={products} /> */}
      {/* <Comfoters products={products} /> */}
      {/* <Curtains products={products} /> */}
      {/* <Exclusive products={products} /> */}
      {/* <FeaturedCollection products={products} /> */}
      {/* <BathSupport products={products} /> */}
      {/* <Blog /> */}
      {/* <Pillow products={products} /> */}
      </Suspense>
      {/* <Prefooter /> */}
    </>
  );
};

export default Home;
