import React from "react";
import Vector01 from "../../images/Vector01.png";
import Vector01Mobile from "../../images/MobileVector01.png";
import PizaaGifRectange from "../../images/pizza_gif_rectangle 1.png";
import "./ScanGIF.css";
const ScanGIFPortion: React.FC = () => {
  return (
    <div>
      <div className="ScanGIFPortion relative pb-14">
        <img
          className="Destop_ScanGIF_Vector01"
          src={Vector01}
          data-mobile-src={Vector01Mobile}
          alt=""
        />
        <h1 className="text-[128px] md:text-[132px] lg:text-[140px] text-white z-20 ">
          GIF
        </h1>
        <img
          className="scanGIF_PizaaRectange z-10 mx-auto items-center relative py-20 md:py-10"
          src={PizaaGifRectange}
          alt=""
        />
        <span className=" text-black font-[Inter] bg-white shadow-lg rounded-2xl md:rounded-3xl font-normal transition-transform duration-300 ease-in-out  hover:-rotate-3">
          Scan portions 
        </span>
      </div>
    </div>
  );
};
export default ScanGIFPortion;
