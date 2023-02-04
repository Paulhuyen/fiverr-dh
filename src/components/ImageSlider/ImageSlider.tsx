import React, { ReactPropTypes, useState } from "react";
// import { slides } from '../redux/reducers/findJobReducer'

type Props = {
  slides: any;
};

export default function ImageSlider({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="slide-container">
      <span className="left-arrow-style" onClick={prevSlide}>
        <i className="fa-solid fa-angle-left"></i>
      </span>
      <div className="right-arrow-style" onClick={nextSlide}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div
        className="img-slide"
        style={{
          backgroundImage: `url(${slides[currentIndex]?.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="silder-dot-image-container">
        {slides.map((slide: any, index: number) => {
          return (
            <div
              className="slider-dot-image"
              key={index}
              style={{ backgroundImage: `url(${slide.url})` }}
              onClick={() => {
                setCurrentIndex(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
