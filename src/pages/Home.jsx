import React, { useState, useEffect } from "react";
import HeroSlide, { getCurrentImage } from "../components/HeroSlide";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(getCurrentImage(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Update this if you add more images
    }, 60000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentImage(getCurrentImage(currentIndex));
  }, [currentIndex]);
  return (
    <div className=" h-auto w-full " id="home">
      <section
        className="flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentImage})`,
          height: "100vh",
          width: "100%",
        }}
      >
        {/* overlay */}
        <div className="bg-slate-800/80 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="flex justify-center items-center absolute flex-col cotainer mb-30">
          <h1 className="text-7xl leading-normal glow   text-center  font-coiny text-primary">
            Savor the Joy, One Scoop at a Time.
          </h1>
          {/* <p className="text-xs  font-light  text-center font-neuton text-gray">
            Discover the joy of ice cream crafted with natural flavors,
            delivering a fresh, healthy, and irresistibly delicious treat in
            every scoop.
          </p> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
