import React from "react";
import Carousel from "../components/Carousel"; // Assuming you have a Carousel component
import falling from "../assets/falling_icecream.png";
import icecream from "../assets/3_icecream.png";

import CarouselAbout from "../components/CarouselAbout";

function About() {
  return (
    <div className="h-full w-full bg-blue relative">
      <div className="w-full h-20 bg-brown">
        <div className="flex justify-center items-center h-full container">
          <h1 className="text-4xl text-white">About Us</h1>
        </div>
      </div>
      <div className="container ">
        <div className=" w-full h-full">
          <div className=" rounded-2xl p-2 border-2 mt-4 mb-4">
            <div className="h-50 w-full p-2">
              <CarouselAbout />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">Our Story</h2>
            <p className="text-xl text-center leading-normal">
              Since the 1990s, we have been dedicated to crafting high-quality
              ice cream that brings joy to every occasion. Whether you're
              hosting a grand celebration, sharing sweet moments with loved
              ones, or simply treating yourself, our ice cream is the perfect
              indulgence. We take pride in blending premium ingredients with
              time-tested recipes to create flavors that are both delightful and
              affordable. Experience the perfect scoop—rich, creamy, and made to
              make every moment special!
            </p>
            <div className="absolute bottom-0 right-4">
              <img src={icecream} alt="3 ice cream" className="w-full h-10" />
            </div>
          </div>
          <div className=" hidden ">
            <CarouselAbout />
          </div>
        </div>
      </div>
      <div className="absolute top-0">
        <img src={falling} alt="falling" className="w-full h-20" />
      </div>
    </div>
  );
}

export default About;
