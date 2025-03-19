import React, { useState } from "react";
import tiktokpost1 from "../../images/Imagetiktok.png";
import tiktokpost2 from "../../images/tiktok-post2.png";
import tiktokpost3 from "../../images/titokpost3.png";
import tiktokpost4 from "../../images/tiktok2.jpeg";
// import tiktokpost5 from "../../images/tiktok3.jpeg";

import tiktokNextSlideIcon from "../../images/ep_arrow-up-bold2.png";
import tiktokprevSlideIcon from "../../images/ep_arrow-up-bold.png";
import PuaseIcon from "../../images/Polygon02.png";
import "./OurSocialMedia.css";

const slides = [
  tiktokpost3,
  tiktokpost2,
  tiktokpost1,
  tiktokpost4,
  // tiktokpost5,
];

const OurSocialMedia: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#FFFFFF] relative w-full flex flex-col items-center">
      <h2 className="font-[Inter] text-3xl md:text-5xl font-normal my-4 md:my-10 text-center">
        From Our Socials
      </h2>

      <div className="relative w-[320px] md:w-[760px] lg:w-[1000px] h-[600px] md:h-[733px] flex justify-center items-center overflow-hidden mx-auto">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          return (
            <div
              key={index}
              className={`absolute transition-transform duration-500 ease-in-out rounded-2xl ${
                isActive
                  ? "scale-105 z-20"
                  : isPrev || isNext
                  ? "scale-90 opacity-60 z-10"
                  : "opacity-0"
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 180}px)`,
              }}
            >
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="w-[325px] md:w-[404px] h-[490px] md:h-[720px] rounded-2xl object-contain"
              />
              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl">
                  <img className="w-14 cursor-pointer" src={PuaseIcon} alt="" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-30 left-4 top-1/2 transform -translate-y-1/2 p-2"
      >
        <img src={tiktokprevSlideIcon} alt="prev slide" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-30 right-4 top-1/2 transform -translate-y-1/2 p-2"
      >
        <img src={tiktokNextSlideIcon} alt="next slide" />
      </button>
    </div>
  );
};

export default OurSocialMedia;
