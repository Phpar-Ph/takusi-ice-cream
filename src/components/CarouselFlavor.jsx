//import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Flavor } from "../data/Flavor";
import PropTypes from "prop-types";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
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

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
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
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function CarouselFlavor() {
  const settings = {
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

  //SLIDER
  // const slider = useRef(null);
  // function scroll(e) {
  //   if (slider.current === null) return 0;
  //   e.wheelDelta > 0 ? slider.current.slickNext() : slider.current.slickPrev();
  // }
  // useEffect(() => {
  //   window.addEventListener("wheel", scroll, true);

  //   return () => {
  //     window.removeEventListener("wheel", scroll, true);
  //   };
  // }, []);
  // ref={slider}
  return (
    <div className=" m-auto">
      <div className="mt-20 mb-20">
        <Slider {...settings} className="pl-4 pr-4 ml-2 mr-2 ">
          {Flavor.map((d, i) => (
            <div
              className="bg-blue card-h text-bluePrimary  border-8 border-secondary drop-shadow-lg rounded-lg bg-primary"
              key={i}
            >
              <div className="flex items-center justify-center w-full h-3/4">
                <img
                  src={d.link}
                  alt=""
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>

              <div className="text-left p-2 headingFlavor">
                <h1>{d.flavor}</h1>
              </div>

              <div className="text-center subheadingFlavor mb-2 ml-2 mr-2 mt-0">
                <p>{d.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselFlavor;
