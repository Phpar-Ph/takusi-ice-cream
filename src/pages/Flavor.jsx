import React from "react";
import Hand from "../assets/flavor/Ice_cream_flavor.png";
import FlavorGallery from "../components/FlavorGallery";

function Flavor() {
  return (
    <div>
      <section className="h-fit w-full bg-blue">
        {/* FLAVOR HEADING */}
        <div className="h-30  bg-brown">
          <div className="container">
            <div className="flex justify-around items-center flex-row-reverse">
              <div className=" h-full font-neuton text-white  flex flex-col justify-center text-right ">
                {/* HEADING */}
                <h1 className=" text-4xl">Our</h1>
                <h1 className=" text-5xl ">FLAVORS</h1>
              </div>
              {/* IMAGE */}
              <div className=" mt-10">
                <img src={Hand} alt="Takusi Ice Cream Logo" className="h-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* IAMGE GRID GALLERRY */}
          <FlavorGallery />
        </div>
      </section>
    </div>
  );
}

export default Flavor;
