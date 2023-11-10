import React from 'react';

const DesignEight = () => {
  return (
    <>
      {/* White background (80%) */}
      <div
        className="max-w-screen-xl mx-auto px-3 mb-5 relative" // Add relative positioning
        style={{
          background: 'linear-gradient(to bottom, #F3F3F2 80%, #0070f3 20%)',
          marginBottom: '30px',
          padding: '20px', // Add padding for gap on all sides
        }}
      >
        {/* Section with cover image */}
        <div
          className="flex items-center justify-center bg-cover h-96 p-6 md:p-10 lg:p-26 relative" // Add responsive padding
          style={{
            backgroundImage: 'url("https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png")', // Replace with your cover image URL
            backgroundPosition: 'center',
            margin: '20px', // Add margin for gap on left and right
            padding: '40px', // Add padding for gap on top and bottom
          }}
        >
          {/* Text on the left (70%) */}
          <div className="w-full md:w-3/5 text-2xl md:text-4xl lg:text-5xl" 
           style={{
            background: 'linear-gradient(to right, #8E44AD, #F39C12)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
            padding: '10px'
          }}>
            <h1>
              Start Building your
            </h1>
            <p>way with Shogun</p>
          </div>

          {/* Button on the right */}
          <div className="w-full md:w-2/5 flex justify-center items-center absolute md:relative right-0 bottom-0 md:bottom-30 p-4">
            <button className="text-white bg-[#000000] px-4 md:px-6 py-2 md:py-3">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignEight;
