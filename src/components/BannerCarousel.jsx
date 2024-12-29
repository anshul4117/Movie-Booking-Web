import React, { useState, useEffect } from "react";
import image1 from "../assets/images/1.avif";
import image2 from "../assets/images/2.avif";
import image3 from "../assets/images/3.avif";

const banners = [
  image1,
  image2,
  image3
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className="mt-5 h-72 object-cover ml-2.5 mr-2.5 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
