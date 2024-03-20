import React, { useState, useEffect } from 'react';

const textOptions = [
  {
    main: "Bed Set | Duvet | Duvet Cover",
    visitUs: "Eid Collection",
  },
  {
    main: "100 + Designs Added",
    visitUs: "Happy Shopping",
  },
  {
    main: "Available in Stores & Online",
    visitUs: "Luxury Bedding",
  },
];

const DynamicText = ({ onTextChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % textOptions.length);
    }, 4000); // Change text every 4 seconds

    // Call the passed function to update parent component state
    onTextChange(textOptions[currentIndex].visitUs);

    return () => clearInterval(intervalId);
  }, [currentIndex, onTextChange]);

  return <p className="transition-opacity duration-500 ease-in-out">{textOptions[currentIndex].main}</p>;
};

export default DynamicText;
