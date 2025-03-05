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
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings} className="p-4 m-4 pt-20">
        {/* SLIDE 1 */}
        <div className="pl-2 pr-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Mango})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="text-md lg:text-2xl font-inter font-medium">
                  MANGO
                </h1>
                <h1 className=" text-xs lg:text-lg leading-tight font-thin font-comic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur at totam exercitationem, mollitia dolorum quas
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="pl-2 pr-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Choco})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="text-md font-inter font-medium">CHOCO</h1>
                <h1 className=" text-xs leading-tight font-thin font-comic">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  obcaecati voluptates
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 3 */}
        <div className="pl-2 pr-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Ube})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="text-md font-inter font-medium">UBE</h1>
                <h1 className=" text-xs leading-tight font-thin font-comic">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem dolore dicta consequuntur deleniti quisquam natus
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 4 */}
        <div className="pl-2 pr-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Coconut})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="text-md font-inter font-medium">BUKO</h1>
                <h1 className=" text-xs leading-tight font-thin font-comic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, alias vitae. Sit iusto eum totam culpa tempore
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* slide 5 */}
        <div className="pl-2 pr-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Strawberry})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="text-md font-inter font-medium">STRAWBERRY</h1>
                <h1 className=" text-xs leading-tight font-thin font-comic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, alias vitae. Sit iusto eum totam culpa tempore
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 6 */}
        <div className="pl-2 pr-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Pandan})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="text-md font-inter font-medium">PANDAN</h1>
                <h1 className=" text-xs leading-tight font-thin font-comic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, alias vitae. Sit iusto eum totam culpa tempore
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
