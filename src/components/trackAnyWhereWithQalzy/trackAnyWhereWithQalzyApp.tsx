import React from "react";
import GirleScaningFoodImg from "../../images/Frame 2147223145.png";
import TotalCaloriesMobileScreen from "../../images/totalkcalMObile.png";
// import GreenBgImg from "../../images/Frame 2147223146.png";
import "./trackAnyWhereWithQalzyApp.css";
import ScanBarcodeIcon from "../../images/scanBarcode.png";
import takePhotoOfMealIcon from "../../images/takePhoto.png";
import voiceCommandsIcon from "../../images/voiceCommand.png";
import AppStoreLogo from "../../images/image 63.png";
import GooglePlayLogo from "../../images/image 64.png";
// import { twMerge } from "tailwind-merge";
// interface QALZY_APP_FUNCTIONALITYT :{
// }
const QALZY_APP_FUNCTIONALITY = [
  {
    Id: 1,
    icon: ScanBarcodeIcon,
    title: "Scan Barcode",
  },
  {
    Id: 2,
    icon: takePhotoOfMealIcon,
    title: "Take Photos of meals",
  },
  {
    Id: 3,
    icon: voiceCommandsIcon,
    title: "Voice Commands",
  },
];
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
        <div className="TrackAnywhere_withQalzyApp_flexMobile flex justify-center mx-auto pb-6 md:pb-7 lg:pb-14 gap-6">
          <img
            className="GirleScaningFoodImg"
            src={GirleScaningFoodImg}
            alt="scan kcal"
          />
          {/* <span className="TrackAnyWhere_GreenBgImg"> */}
          <img
            className="TotalCaloriesMobileScreen"
            src={TotalCaloriesMobileScreen}
            alt="total kcal mobile view"
          />
          {/* </span> */}
          {/* <img
            className="TrackAnyWhere_GreenBgImg"
            src={GreenBgImg}
            alt="green bg"
          /> */}
        </div>
        <div className="qalzy_app_features flex flex-row justify-center mx-auto items-center gap-1 md:gap-3">
          {QALZY_APP_FUNCTIONALITY.map((item, indx) => (
            <div
              key={indx}
              className="card relative bg-[#F5F5F5] hover:bg-white rounded-[30px] gap-4 hover:shadow-lg transition delay-150 duration-00 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              <img
                className="relative mx-auto items-center"
                src={item.icon}
                alt={item.title}
              />
              <h2
                className={`${
                  item.Id === 2
                    ? "whitespace-normal lg:px-[10%] md:px-[14%]"
                    : "whitespace-nowrap"
                } font-[Inter] mt-2 md:mt-3 lg:mt-4 text-center leading-[100%] tracking-[0%] font-normal text-[#0E1318]`}
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="GetQalzyApp_forFree relative flex flex-col mx-auto items-center py-8 md:py-14 lg:py-20">
          <h2 className="font-normal font-[Inter] text-black opacity-60 text-xl md:text-2xl lg:text-[27px]">
            Get Qalzy app for free!
          </h2>
          <span className="flex flex-row mt-3 md:mt-4 gap-2 md:gap-3 ">
            <img
              className="w-[130px] md:w-[160px] lg:w-[209px] cursor-pointer transition-transform duration-300 ease-in-out  hover:-rotate-3"
              src={AppStoreLogo}
              alt=""
            />
            <img
              className="w-[130px] md:w-[160px] lg:w-[209px] cursor-pointer transition-transform duration-300 ease-in-out  hover:-rotate-3"
              src={GooglePlayLogo}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default TrackAnyWhereWithQalzyApp;
