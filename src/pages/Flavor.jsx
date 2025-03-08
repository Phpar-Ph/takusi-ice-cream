import React from "react";

import Carousel from "../components/CarouselFlavor";

function Flavor() {
  return (
    <div>
      <section className=" w-full " id="flavor">
        <div className="container max-w-[1536px] pt-20 pb-20">
          {/* IAMGE GRID GALLERRY */}
          <Carousel />
        </div>
      </section>
    </div>
  );
}

export default Flavor;
