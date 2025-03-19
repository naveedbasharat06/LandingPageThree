import React, { useState } from "react";
import "./kcalMeasureByAI.css";
import CalorieMeaureByAiVideo from "../../images/image 50.png";
import videoPlayIcon from "../../images/Polygon 1.png";
import videoPauseIcon from "../../images/palyIcon.jpg";
const CaloriesMeasureByAI: React.FC = () => {
  const [playVideoIcon, SetPlayVideoIcon] = useState(videoPlayIcon);
  const handleChangeIcon = (e: any) => {
    e.preventDefault();
    SetPlayVideoIcon((prevIcon: any) =>
      prevIcon === videoPlayIcon ? videoPauseIcon : videoPlayIcon
    );
  };
  return (
    <div className=" kcal_measureByAI mx-auto">
      <div className="kcal_measureByAI_content relative mx-auto text-center w-[90%] md:w-[546px]">
        <h2 className="text-2xl font-[Open_Sans] leading-[120%] tracking-[0%]">
          Instant AI-powered Calorie Counting
        </h2>
        <p className="text-[16px] leading-[150%] font-[Open_Sans] tracking-[0%] opacity-70">
          Tired of manually tracking your calories? Qalzy’s AI camera instantly
          identifies raw foods, packaged items, and even multiple ingredients on
          a plate with over 90% accuracy, and automatically logs the detected
          calories and macros, all without any effort on your part.
        </p>
      </div>
      <div className=" mt-4 md:mt-10 relative mx-auto">
        {/* <iframe
          className="mx-auto rounded-3xl w-[95%] md:w-[70%] md:h-[450px] h-[300px]"
          //   width="600"
          //   height="340"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube Video"
          allowFullScreen
        ></iframe> */}
        <img
          className=" kcal_measureByAI_PauseVideoIcon z-10 cursor-pointer"
          src={playVideoIcon}
          onClick={handleChangeIcon}
          alt="video"
        />
        <img
          className="kcal_measureByAI_Video mx-auto"
          src={CalorieMeaureByAiVideo}
          alt="video"
        />
      </div>
    </div>
  );
};
export default CaloriesMeasureByAI;
