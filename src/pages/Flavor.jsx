import React from "react";

import Carousel from "../components/CarouselFlavor";

function Flavor() {
  return (
    <div id="flavor" className="bg-primary">
      <div className="container max-w-[1536px] pt-20 pb-20">
        {/* IAMGE GRID GALLERRY */}
        <Carousel />
      </div>
    </div>
  );
}

export default Flavor;
