import React, { useState, useEffect } from 'react';

const textOptions = [
  "Eid Collection | Bed Set | Duvet | Duvet Cover",
  "Happy Shopping | 100 + Designs Added",
  "Luxury Bedding | Available in Stores & Online",
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % textOptions.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="transition-opacity duration-500 ease-in-out">{textOptions[currentIndex]}</p>
  );
};

export default DynamicText;
