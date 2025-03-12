import React from "react";
import GirleScaningFoodImg from "../../images/Frame 2147223145.png";
import TotalCaloriesMobileScreen from "../../images/totalkcalMObile.png";
import GreenBgImg from "../../images/Frame 2147223146.png";

import "./trackAnyWhereWithQalzyApp.css";
const TrackAnyWhereWithQalzyApp: React.FC = () => {
  return (
    <div className="TrackAnywhere_withQalzyApp">
      <div className="TrackAnywhere_withQalzyApp_content mx-auto py-24 text-center items-center w-[95%] md:w-[546px]">
        <h2 className="text-black text-2xl leading-[120%] font-bold mb-4">
          Track Anywhere With The Qalzy App
        </h2>
        <p className="text-black text-base opacity-90 leading-[150%] tracking-0">
          Can’t bring your scale everywhere? No worries. The Qalzy app lets you
          scan barcodes, take photos of meals, or use voice commands to track
          calories wherever you are. Automatically syncs to your dashboard for a
          complete overview of your daily intake.
        </p>
      </div>
      <div className="">
        <div className="TrackAnywhere_withQalzyApp_flexMobile flex justify-center mx-auto pb-14">
          <img
            className="GirleScaningFoodImg "
            src={GirleScaningFoodImg}
            alt="scan kcal"
          />
          <img
            className="TotalCaloriesMobileScreen absolute"
            src={TotalCaloriesMobileScreen}
            alt="total kcal mobile view"
          />
          <img
            className="TrackAnyWhere_GreenBgImg"
            src={GreenBgImg}
            alt="green bg"
          />
        </div>
      </div>
    </div>
  );
};
export default TrackAnyWhereWithQalzyApp;
