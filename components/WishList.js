 
import { useState } from "react";
import { FaHeart } from 'react-icons/fa'

const WishList = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <button type="button" className="flex items-center text-black hover:bg-[#86efac] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1 text-center mb-2 sm:mb-0 sm:mr-3 md:mr-0 dark:bg-[#15803d] dark:hover:bg-[#15803d] dark:focus:ring-green-800">
                            <FaHeart className="w-4 h-4 mr-1" />
                            Wish List
                        </button>
  );
};

export default WishList;
