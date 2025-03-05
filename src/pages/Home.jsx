import React from "react";
import Hero from "../assets/ice-cream-hero.jpg";

function Home() {
  return (
    <div className=" h-auto w-full " id="home">
      <section
        className="flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Hero})`,
          height: "100vh",
          width: "100%",
        }}
      >
        {/* overlay */}
        <div className="bg-black/30 absolute top-0 left-0 right-0 bottom-0"></div>
        <div> </div>
        <div className="flex justify-center items-center absolute flex-col cotainer">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal text-center  font-pacifico text-white">
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
