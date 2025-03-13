import React from "react";
import Vector01 from "../../images/Vector02.png";
import Vector01Mobile from "../../images/MobileVector02.png";
import MasheedGifRectange from "../../images/MASHED_GIF_FINAL 1.png";
import "./TrackMultipleByGIF.css";
const TrackMultipleIngredientsByGIF: React.FC = () => {
  return (
    <div>
      <div className="TrackMultipleGIF relative pt-8 pb-16">
        <img
          className="Destop_TrackMultipleGIF_Vector01"
          src={Vector01}
          data-mobile-src={Vector01Mobile}
          alt=""
        />

        <h1
          className="text-[128px] md:text-[132px] lg:text-[140px] text-white
         z-20 "
        >
          GIF
        </h1>
        <img
          className="TrackMultiGIFFinal z-10 mx-auto items-center relative pt-5 md:py-10"
          src={MasheedGifRectange}
          alt=""
        />
        <span className=" text-black font-[Inter] bg-white shadow-lg rounded-2xl md:rounded-3xl font-normal transition-transform duration-300 ease-in-out  hover:-rotate-3">
          Track multiple ingredients
        </span>
      </div>
    </div>
  );
};
export default TrackMultipleIngredientsByGIF;
