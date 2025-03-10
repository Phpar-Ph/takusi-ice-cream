import React from "react";
import CarouselAbout from "../components/CarouselAbout";

function About() {
  return (
    <div className="h-full w-full relative pt-40 pb-40" id="about">
      <div className="container ">
        <div className=" md:relative drop-shadow-md md:border-2">
          <div className=" rounded-2xl  border-2 md:border-none md:pt-6  mt-4 p-4 mb-4  md:static pb-10 md:flex md:flex-row-reverse">
            <div className="h-64 lg:h-screen  xs:h-77 sm:h-80 md:w-[60%]  md:mt-4 ">
              <CarouselAbout />
            </div>
            <div className="md:w-[40%] lg:borde-2  z-1 md:mt-4 md:ml-0 md:mb-4 md:mr-0  md:p-6 ">
              <h2 className="text-2xl  lg:text-4xl font-bold mb-4 text-center font-montserrat text-bluePrimary">
                Our Story
              </h2>
              <p className="text-lg md:text-sm lg:text-3xl  text-center leading-normal font-montserrat font-medium text-bluePrimary">
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
            {/* <div className="absolute bottom-0 right-4 ">
              <img
                src={icecream}
                alt="3 ice cream"
                className="w-[10rem] h-auto md:w-lg "
              />
            </div> */}
          </div>
          {/* <div className="h-full">
            <CarouselAbout />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
