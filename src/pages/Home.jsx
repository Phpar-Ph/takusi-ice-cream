import React from "react";
import Image from "../assets/Icre-cream-hero.png";
import Strawberry1 from "../assets/strawberry1.png";
import Strawberry2 from "../assets/Strawberry2.png";

function Home() {
  return (
    <div className=" h-full w-full bg-yellow">
      <section className="container ">
        <div className="h-fit ">
          {/* HERO IMAGE ICE CREAM*/}
          <div className="flex-center flex-col pt-10 relative top-10 mt-10 mb-2">
            <img src={Image} alt="Ice cream" className=" w-[40rem] h-auto " />
          </div>
          <div className="flex-center flex-col relative bottom-5">
            <div className="h-20 bg-pink w-screen justify-center items-center flex">
              <div>
                {/* HEADING */}
                <h1 className="text-2xl leading-normal text-center  font-pacifico text-white">
                  Fresh, Healthy, Naturally Delicious.
                </h1>
              </div>
            </div>
            <div className="flex b">
              <div className="m-2">
                {/* STRAWBERRY IMAGE */}
                <img
                  src={Strawberry1}
                  alt="Strawberry"
                  className="w-10 h-auto"
                />
              </div>
              <p className="text-xs font-light w-[16rem] text-center font-neuton text-brown pt-2 pb-2">
                Discover the joy of ice cream crafted with natural flavors,
                delivering a fresh, healthy, and irresistibly delicious treat in
                every scoop.
              </p>
              <div className="m-2">
                <img
                  src={Strawberry2}
                  alt="Strawberry"
                  className="w-8 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
