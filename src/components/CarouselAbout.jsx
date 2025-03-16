import React, { useState, useEffect } from "react";
import image1 from "../assets/about_slide/image1.jpg";
import image2 from "../assets/about_slide/image2.jpg";
import image3 from "../assets/about_slide/image3.jpg";
import image4 from "../assets/about_slide/image4.jpg";
import image5 from "../assets/about_slide/image5.jpg";
// Add more image imports here

const images = [image1, image2, image3, image4, image5];

function CarouselAbout() {
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
      <div className="bg-black/10 absolute top-0 left-0 right-0 bottom-0 z-1"></div>
    </div>
  );
}

export default CarouselAbout;
