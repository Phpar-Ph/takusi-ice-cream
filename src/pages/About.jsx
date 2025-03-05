import React from "react";
import Carousel from "../components/Carousel"; // Assuming you have a Carousel component
import falling from "../assets/falling_icecream.png";
import icecream from "../assets/3_icecream.png";

import CarouselAbout from "../components/CarouselAbout";

function About() {
  return (
    <div className="h-full w-full bg-blue relative" id="about">
      <div className="w-full h-20 bg-brown">
        <div className="flex justify-center items-center h-full container">
          <h1 className="text-4xl text-white">About Us</h1>
        </div>
      </div>
      <div className="container  flex justify-center">
        <div className=" max-w-[1024px]  md:relative">
          <div className=" rounded-2xl p-6 border-2 md:border-none md:pt-6  mt-4 mb-4 relative md:static pb-10 md:flex md:flex-row-reverse ">
            <div className="h-64 lg:h-96 xs:h-72 sm:h-80 w-full md:w-[60%] p-2 md:mt-4">
              <CarouselAbout />
            </div>
            <div className="md:w-[40%] z-1 md:mt-4 md:ml-0 md:mb-4 md:mr-0 md:border-2 rounded-2xl md:p-6">
              <h2 className="text-2xl  lg:text-4xl font-bold mb-4 text-center">
                Our Story
              </h2>
              <p className="text-lg md:text-sm lg:text-xl  text-center leading-normal">
                Since the 1990s, we have been dedicated to crafting high-quality
                ice cream that brings joy to every occasion. Whether you're
                hosting a grand celebration, sharing sweet moments with loved
                ones, or simply treating yourself, our ice cream is the perfect
                indulgence. We take pride in blending premium ingredients with
                time-tested recipes to create flavors that are both delightful
                and affordable. Experience the perfect scoop—rich, creamy, and
                made to make every moment special!
              </p>
            </div>
            <div className="absolute bottom-0 right-4 ">
              <img
                src={icecream}
                alt="3 ice cream"
                className="w-[10rem] h-auto md:w-lg "
              />
            </div>
          </div>
          {/* <div className="h-full">
            <CarouselAbout />
          </div> */}
        </div>
      </div>
      {/* <div className="absolute top-0">
        <img src={falling} alt="falling" className="w-full h-20" />
      </div> */}
    </div>
  );
}

export default About;
