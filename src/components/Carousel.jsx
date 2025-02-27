import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mango from "../assets/flavor/mango.jpg";
import Choco from "../assets/flavor/choco.jpg";
import Coconut from "../assets/flavor/coconut.jpg";
import Ube from "../assets/flavor/ube.jpg";
import Strawberry from "../assets/flavor/strawberry.jpg";
import Pandan from "../assets/flavor/pandan.jpg";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward style={{ ...style, color: "red", fontSize: "30px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack style={{ ...style, color: "red", fontSize: "30px" }} />
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings} className="p-10">
        <div className="pl-2 pr-2">
          <div className="bg-white h-[500px] rounded-3xl relative">
            <div
              style={{ backgroundImage: `url(${Mango})` }}
              className="w-full h-[60%] bg-cover bg-center rounded-t-3xl"
            >
              {" "}
            </div>
            <div>
              <h1 className=" text-center p-4 text-2xl font-inter">
                Sweet, tropical, and juicy, made from ripe Philippine mangoes.
              </h1>
            </div>
            <div className="w-full bg-amber-50 text-center absolute bottom-0 h-[4em] rounded-b-3xl">
              <h1 className="p-4 text-2xl font-neuton">MANGO</h1>
            </div>
          </div>
        </div>
        <div className="pl-2 pr-2">
          <div className="bg-white h-[500px] rounded-3xl relative">
            <div
              style={{ backgroundImage: `url(${Choco})` }}
              className="w-full h-[60%] bg-cover bg-center rounded-t-3xl"
            >
              {" "}
            </div>
            <div>
              <h1 className=" text-center p-4 text-2xl font-inter">
                Sweet, tropical, and juicy, made from ripe Philippine mangoes.
              </h1>
            </div>
            <div className="w-full bg-amber-50 text-center absolute bottom-0 h-[4em] rounded-b-3xl">
              <h1 className="p-4 text-2xl font-neuton">CHOCO</h1>
            </div>
          </div>
        </div>
        <div className="pl-2 pr-2">
          <div className="bg-white h-[500px] rounded-3xl relative">
            <div
              style={{ backgroundImage: `url(${Ube})` }}
              className="w-full h-[60%] bg-cover bg-center rounded-t-3xl"
            >
              {" "}
            </div>
            <div>
              <h1 className=" text-center p-4 text-2xl font-inter">
                Sweet, tropical, and juicy, made from ripe Philippine mangoes.
              </h1>
            </div>
            <div className="w-full bg-amber-50 text-center absolute bottom-0 h-[4em] rounded-b-3xl">
              <h1 className="p-4 text-2xl font-neuton">UBE</h1>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="pl-2 pr-2">
          <div className="bg-white h-[500px] rounded-3xl relative">
            <div
              style={{ backgroundImage: `url(${Pandan})` }}
              className="w-full h-[60%] bg-cover bg-center rounded-t-3xl"
            >
              {" "}
            </div>
            <div>
              <h1 className=" text-center p-4 text-2xl font-inter">
                Sweet, tropical, and juicy, made from ripe Philippine mangoes.
              </h1>
            </div>
            <div className="w-full bg-amber-50 text-center absolute bottom-0 h-[4em] rounded-b-3xl">
              <h1 className="p-4 text-2xl font-neuton">UBE</h1>
            </div>
          </div>
        </div>

        <div className="pl-2 pr-2">
          <div className="bg-white h-[500px] rounded-3xl relative">
            <div
              style={{ backgroundImage: `url(${Coconut})` }}
              className="w-full h-[60%] bg-cover bg-center rounded-t-3xl"
            >
              {" "}
            </div>
            <div>
              <h1 className=" text-center p-4 text-2xl font-inter">
                Sweet, tropical, and juicy, made from ripe Philippine mangoes.
              </h1>
            </div>
            <div className="w-full bg-amber-50 text-center absolute bottom-0 h-[4em] rounded-b-3xl">
              <h1 className="p-4 text-2xl font-neuton">UBE</h1>
            </div>
          </div>
        </div>

        <div className="pl-2 pr-2">
          <div className="bg-white h-[500px] rounded-3xl relative">
            <div
              style={{ backgroundImage: `url(${Strawberry})` }}
              className="w-full h-[60%] bg-cover bg-center rounded-t-3xl"
            >
              {" "}
            </div>
            <div>
              <h1 className=" text-center p-4 text-2xl font-inter">
                Sweet, tropical, and juicy, made from ripe Philippine mangoes.
              </h1>
            </div>
            <div className="w-full bg-amber-50 text-center absolute bottom-0 h-[4em] rounded-b-3xl">
              <h1 className="p-4 text-2xl font-neuton">UBE</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
