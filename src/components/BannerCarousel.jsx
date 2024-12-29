import React, { useState, useEffect } from "react";
import image1 from "../assets/images/1.avif";
import image2 from "../assets/images/2.avif";
import image3 from "../assets/images/3.avif";

const banners = [image1, image2, image3];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${banners.length * 100}%`, // Set the width of the container dynamically
          transform: `translateX(-${currentIndex * (100 / banners.length)}%)`, // Adjust translation
        }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            // mt-5 h-72 object-contain ml-2.5 mr-2.5 rounded-lg
            className="w-full mt-5 h-72 ml-2.5 mr-2.5 rounded-lg object-cover flex justify-center"
            style={{ width: `${100 / banners.length}%` }} // Make each image take an equal portion of the total width
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
