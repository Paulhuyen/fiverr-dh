import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

type Props = {};

export default function ReactCarousel({}: Props) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50%",
          color: "#fff",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    // swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="mt-4">
      <Slider {...settings}>
        <div>
          <img className="w-100 " src="./img/crs1.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs2.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs3.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs4.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs5.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs6.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs7.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs8.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs9.png" alt="..." />
        </div>
        <div>
          <img className="w-100" src="./img/crs10.png" alt="..." />
        </div>
      </Slider>
    </div>
  );
}
