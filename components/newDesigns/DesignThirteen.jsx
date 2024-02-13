import React from 'react'

const DesignThirteen = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-3 mb-5">
            <div className="text-center text-4xl">Style Your Space</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                <div class="relative">
                    <div class="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $100</div>
                    <img src="https://m.media-amazon.com/images/I/61wH1xK6+0L._AC_.jpg" alt="Background" class="w-full h-48 object-cover" />
                </div>
                <div class="relative">
                    <div class="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $200</div>
                    <img src="https://m.media-amazon.com/images/I/61wH1xK6+0L._AC_.jpg" alt="Background" class="w-full h-48 object-cover" />
                </div>
                <div class="relative">
                    <div class="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $300</div>
                    <img src="https://m.media-amazon.com/images/I/61wH1xK6+0L._AC_.jpg" alt="Background" class="w-full h-48 object-cover" />
                </div>
                <div class="relative">
                    <div class="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $400</div>
                    <img src="https://m.media-amazon.com/images/I/61wH1xK6+0L._AC_.jpg" alt="Background" class="w-full h-48 object-cover" />
                </div>
            </div>
        </div>
    );
};

export default DesignThirteen