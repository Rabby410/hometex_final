import React, { useState } from 'react';

const DesignFourteen = () => {
  // State to manage the toggle for showing full text
  const [showFullTextPartOne, setShowFullTextPartOne] = useState(false);
  const [showFullTextPartTwo, setShowFullTextPartTwo] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-5 space-y-10">
      {/* Part 1: Image Left, Content Right */}
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <img src="https://st2.depositphotos.com/3591429/10464/i/450/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg" alt="Description" className="w-full h-auto" />
        </div>
        <div className="w-1/2 pl-5">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-2">
            {showFullTextPartOne
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            onClick={() => setShowFullTextPartOne(!showFullTextPartOne)}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Part 2: Content Left, Image Right */}
      <div className="flex items-center justify-between">
        <div className="w-1/2 pr-5">
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mt-2">
            {showFullTextPartTwo
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            onClick={() => setShowFullTextPartTwo(!showFullTextPartTwo)}
          >
            Read More
          </button>
        </div>
        <div className="w-1/2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfeasbHKaIcsSvLzPMjUV_p_OFfWdZwp5RjnmIx_eGg&s" alt="Description" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default DesignFourteen;
