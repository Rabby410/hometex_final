import React from 'react'

const DesignThirteen = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-3 mb-5">
            <div className="text-center text-4xl">Style Your Space</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
                <div className="relative shadow-lg">
                    <div className="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $100</div>
                    <img src="https://masonhome.in/cdn/shop/files/28-07-20230611copy.jpg?v=1690883585&width=1500" alt="Background" className="w-full h-48 object-cover" />
                    <p className="text-2xl text-center font-[700]">Bath</p>
                </div>
                <div className="relative shadow-lg">
                    <div className="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $200</div>
                    <img src="https://m.media-amazon.com/images/I/61wH1xK6+0L._AC_.jpg" alt="Background" className="w-full h-48 object-cover" />
                    <p className="text-2xl text-center font-[700]">Beading</p>
                </div>
                <div className="relative shadow-lg">
                    <div className="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $300</div>
                    <img src="https://thumbs.dreamstime.com/b/nursery-playschool-equipment-cupboard-storeroom-kindergarten-junior-school-play-group-toys-space-hopper-pram-bean-bags-red-254956244.jpg" alt="Background" className="w-full h-48 object-cover" />
                    <p className="text-2xl text-center font-[700]">Decrative Storage</p>
                </div>
                <div className="relative shadow-lg">
                    <div className="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2">Price: $400</div>
                    <img src="https://media.istockphoto.com/id/1318472213/photo/modern-living-room-interior-with-green-plants-sofa-and-green-wall-background.jpg?s=612x612&w=0&k=20&c=Md2zeuQ7KX_JKjj06JFEZM4aMoLmw45axj_WcvAsBZk=" alt="Background" className="w-full h-48 object-cover" />
                    <p className="text-2xl text-center font-[700]">Here for Spring</p>
                    <p className="text-center text-gray-600 pb-5">Get Inspired with new home arivals to refresh your space</p>
                </div>
            </div>
        </div>
    );
};

export default DesignThirteen