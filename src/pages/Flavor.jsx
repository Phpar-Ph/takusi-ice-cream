import React from "react";
import Hand from "../assets/flavor/Ice_cream_flavor.png";

import Carousel from "../components/Carousel";

function Flavor() {
  return (
    <div>
      <section className="h-fit w-full pb-20" id="flavor">
        {/* FLAVOR HEADING */}
        <div className="h-20 lg:h-30 bg-brown  flex items-end">
          <div className="container flex items-center justify-around max-w-[768px]">
            {/* IMAGE */}
            <div className=" ">
              <img src={Hand} alt="Takusi Ice Cream Logo" className="h-18" />
            </div>
            {/* HEADING OUR FLAVORS*/}
            <div className="font-neuton text-white text-right ">
              <h1 className=" text-3xl lg:text-7xl md:text-4xl">OUR FLAVORS</h1>
            </div>
          </div>
        </div>
        <div className="container max-w-[1280px]">
          {/* IAMGE GRID GALLERRY */}
          <Carousel />
        </div>
      </section>
    </div>
  );
}

export default Flavor;
