import React from "react";

const DesignSix = () => {
  const images = [
    {
      url: "https://blog.jpegmini.com/wp-content/uploads/2018/08/Bottle-Advertising-photography.jpg",
      text: "Acqua DIA 1",
    },
    {
      url: "https://www.jackleephotography.com/wp-content/uploads/2021/03/commercial-photography.jpeg",
      text: "Acqua DIA 2",
    },
    {
      url: "https://i0.wp.com/photofocus.com/wp-content/uploads/2021/09/Julie-Powell-Product-Photography-1.jpg?fit=2560%2C1440&ssl=1",
      text: "Acqua DIA 3",
    },
    {
      url: "https://www.seoclerk.com/pics/407226-2eWiCl1471372939.jpg",
      text: "Acqua DIA 4",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-3 mb-5 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group hover:shadow-lg aspect-w-2 aspect-h-3"
          >
            <img
              src={image.url}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute bottom-16 left-0 bg-white text-gray-800 px-12 py-4 transform translate-y-0 transition-transform duration-300 hover:translate-y-[-8px]">
              <p>{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSix;
