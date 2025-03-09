import React from "react";
import CarouselAbout from "../components/CarouselAbout";

function About() {
  return (
    <div className="h-full w-full bg-blue relative pt-20 pb-20" id="about">
      <div className="container  flex justify-center ">
        <div className=" md:relative ">
          <div className=" rounded-2xl  border-2 md:border-none md:pt-6  mt-4 mb-4 relative md:static pb-10 md:flex md:flex-row-reverse ">
            <div className="h-64 lg:h-[45rem] xs:h-72 sm:h-80 w-full md:w-[60%] m-2 md:mt-4 relative">
              <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-1"></div>
              <CarouselAbout />
            </div>
            <div className="md:w-[40%] border-2 z-1 md:mt-4 md:ml-0 md:mb-4 md:mr-0  md:p-6 ">
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
