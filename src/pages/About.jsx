import React from "react";
import Carousel from "../components/Carousel"; // Assuming you have a Carousel component
import falling from "../assets/falling_icecream.png";
import icecream from "../assets/3_icecream.png";

import CarouselAbout from "../components/CarouselAbout";

function About() {
  return (
    <div className="h-full w-full bg-blue relative">
      <div className="w-full h-40 bg-brown">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl text-white">About Us</h1>
        </div>
      </div>
      <div className="max-w-[1920px] mx-auto h-[90%]  px-[142px] flex ">
        <div className="flex justify-center items-center w-full h-[800px] relative mt-20">
          <div className="w-1/2 p-8 rounded-2xl  mr-5 border-2">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Story</h2>
            <p className="text-3xl text-center leading-15">
              Since the 1990s, we have been dedicated to crafting high-quality
              ice cream that brings joy to every occasion. Whether you're
              hosting a grand celebration, sharing sweet moments with loved
              ones, or simply treating yourself, our ice cream is the perfect
              indulgence. We take pride in blending premium ingredients with
              time-tested recipes to create flavors that are both delightful and
              affordable. Experience the perfect scoop—rich, creamy, and made to
              make every moment special!
            </p>
          </div>
          <div className="w-1/2 h-[80%] ">
            <CarouselAbout />
            <div
              className="absolute bottom-0
          right-0"
            >
              <img src={icecream} alt="3 ice cream" className="w-full h-96" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0
        "
      >
        <img src={falling} alt="falling" className="w-full h-96" />
      </div>
    </div>
  );
}

export default About;
