import React, { useState, useEffect } from "react";
// import image1 from "../assets/hero_slide/image1.jpg";
// import image2 from "../assets/hero_slide/image2.jpg";
import image1 from "../assets/hero_slide/hero3.jpg";

// Add more image imports here

const images = [image1];

function HeroSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export const getCurrentImage = (currentIndex) => images[currentIndex];

export default HeroSlide;
