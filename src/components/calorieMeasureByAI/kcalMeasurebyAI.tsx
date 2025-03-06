import React from "react";
import "./kcalMeasureByAI.css";
const CaloriesMeasureByAI: React.FC = () => {
  return (
    <div className=" kcal_measureByAI mx-auto">
      <div className="kcal_measureByAI_content relative mx-auto text-center w-[320px] md:w-[546px]">
        <h2 className="text-2xl leading-[120%] tracking-[0%]">
          Instant AI-powered Calorie Counting
        </h2>
        <p className="text-[16px] leading-[150%] tracking-[0%]">
          Tired of manually tracking your calories? Qalzy’s AI camera instantly
          identifies raw foods, packaged items, and even multiple ingredients on
          a plate with over 90% accuracy, and automatically logs the detected
          calories and macros, all without any effort on your part.
        </p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};
export default CaloriesMeasureByAI;
