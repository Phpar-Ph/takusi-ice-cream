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
      <IoIosArrowForward
        style={{
          ...style,
          color: "#e31c79",
          fontSize: "2rem",
          display: "block",
          position: "absolute",
          right: "0",
          width: "3rem",
          height: "3rem",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack
        style={{
          ...style,
          color: "#e31c79",
          fontSize: "2rem",
          display: "block",
          position: "absolute",
          left: "0",
          width: "3rem",
          height: "3rem",
        }}
      />
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings} className=" m-4 pl-4 pr-4">
        <div className="mb-5">
          <div className="bg-white card-h rounded-3xl flex flex-col ">
            <div
              style={{ backgroundImage: `url(${Mango})` }}
              className="w-full h-[60%] bg-cover bg-center rounded-t-3xl"
            ></div>
            <div className="w-full  bg-pink text-center   text-white h-15 flex-center">
              <h1 className="text-4xl font-neuton">MANGO</h1>
            </div>
            <div className="flex-center">
              <h1 className=" text-center p-4 text-l font-light font-inter">
                Sweet, tropical, and juicy, made from ripe Philippine mangoes.
              </h1>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="pl-2 pr-2">
          <div className="bg-white card-h rounded-3xl relative">
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
          <div className="bg-white card-h rounded-3xl relative">
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
          <div className="bg-white card-h rounded-3xl relative">
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
