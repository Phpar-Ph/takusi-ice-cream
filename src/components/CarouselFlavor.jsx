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
import { BiColumns } from "react-icons/bi";

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

function CarouselFlavor() {
  const settings = {
    dots: false,
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          rows: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          rows: 1,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          rows: 1,
        },
      },
    ],
  };

  return (
    <div c>
      <Slider {...settings} className="p-4 m-2 ">
        {/* SLIDE 1 */}
        <div className="p-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Mango})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="headingFlavor">MANGO</h1>
                <h1 className=" subheadingFlavor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur at totam exercitationem, mollitia dolorum quas
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="p-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Mango})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="headingFlavor">MANGO</h1>
                <h1 className=" subheadingFlavor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur at totam exercitationem, mollitia dolorum quas
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 3 */}
        <div className="p-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Mango})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="headingFlavor">MANGO</h1>
                <h1 className=" subheadingFlavor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur at totam exercitationem, mollitia dolorum quas
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 4 */}
        <div className="p-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Mango})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="headingFlavor">MANGO</h1>
                <h1 className=" subheadingFlavor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur at totam exercitationem, mollitia dolorum quas
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* slide 5 */}
        <div className="p-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Mango})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="headingFlavor">MANGO</h1>
                <h1 className=" subheadingFlavor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur at totam exercitationem, mollitia dolorum quas
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 6 */}
        <div className="p-2">
          <div className=" w-full h-full flex-center ">
            <div className=" card-h rounded-md flex flex-col  bg-blue drop-shadow-md">
              <div
                style={{ backgroundImage: `url(${Mango})` }}
                className="w-full h-[80%] bg-cover bg-center rounded-t-md"
              ></div>

              <div className="w-full text-left   text-brown pr-4 pl-4 pt-2 pb-4">
                <h1 className="headingFlavor">MANGO</h1>
                <h1 className=" subheadingFlavor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur at totam exercitationem, mollitia dolorum quas
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 7 */}
        {/* SLIDE 8 */}
        {/* SLIDE 9 */}
        {/* SLIDE 10 */}
      </Slider>
    </div>
  );
}

export default CarouselFlavor;
