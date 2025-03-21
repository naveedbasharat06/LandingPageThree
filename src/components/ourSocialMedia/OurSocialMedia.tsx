import React, { useState } from "react";
import tiktokpost1 from "../../images/Imagetiktok.png";
import tiktokpost2 from "../../images/tiktok-post2.png";
import tiktokpost3 from "../../images/titokpost3.png";
import tiktokpost4 from "../../images/tiktok2.jpeg";
import tiktokpost5 from "../../images/tiktok-post02.png";
import tiktokpost6 from "../../images/tiktok-post03.png";
import tiktokpost7 from "../../images/tiktok2.jpeg";
import tiktokNextSlideIcon from "../../images/ep_arrow-up-bold2.png";
import tiktokprevSlideIcon from "../../images/ep_arrow-up-bold.png";
import playIcon from "../../images/Polygon02.png";
import pauseIcon from "../../images/pauseTikTok.png";

import "./OurSocialMedia.css";

const slides = [
  tiktokpost3,
  tiktokpost2,
  tiktokpost1,
  tiktokpost4,
  tiktokpost5,
  tiktokpost6,
  tiktokpost7,
];

const OurSocialMedia: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [playVideoIcon, SetPlayVideoIcon] = useState(playIcon);
  const handleChangeIcon = (e: any) => {
    e.preventDefault();
    SetPlayVideoIcon((prevIcon: any) =>
      prevIcon === playIcon ? pauseIcon : playIcon
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Touch event handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      if (deltaX > 50) {
        prevSlide(); // Swipe right
      } else if (deltaX < -50) {
        nextSlide(); // Swipe left
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="pb-2 lg:pb-16 bg-[#FFFFFF] relative w-full flex flex-col items-center">
      <h2 className="font-[Inter] text-3xl md:text-5xl font-normal my-0 md:my-10 text-center">
        From Our Socials
      </h2>
      <div
        className=" relative w-[60%] md:w-[760px] lg:w-[85%] h-[500px] md:h-[800px] flex justify-center items-center overflow-hidden mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;
          return (
            <div
              key={index}
              className={`absolute  transition-transform duration-500 ease-in-out rounded-2xl ${
                isActive
                  ? "h-[500px] md:h-[750px] scale-105 z-20"
                  : isPrev || isNext
                  ? "scale-90 opacity-90 z-10"
                  : "opacity-0"
              }`}
              style={{
                transform: `translateX(${
                  (index - currentIndex) * (isActive ? 0 : 180)
                }px)`,
              }}
            >
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="w-[425px] md:w-[404px] h-[490px] md:h-[720px] rounded-[2rem] object-contain"
              />
              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    className="w-8 md:w-12 lg:w-16 cursor-pointer mb-5"
                    src={playVideoIcon}
                    onClick={handleChangeIcon}
                    alt="playIcon"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Hidden on small screens) */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute z-30 left-4 top-1/2 transform -translate-y-1/2 p-2"
      >
        <img src={tiktokprevSlideIcon} alt="prev slide" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute z-30 right-4 top-1/2 transform -translate-y-1/2 p-2"
      >
        <img src={tiktokNextSlideIcon} alt="next slide" />
      </button>
    </div>
  );
};

export default OurSocialMedia;
