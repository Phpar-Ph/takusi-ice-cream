import { useState, useEffect } from "react";
import { aboutImages } from "../data/About-pic";
// Add more image imports here

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
      {aboutImages.map((image, index) => (
        <img
          key={index}
          src={image.link}
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
