import React from "react";
import "./ChanceToWinNutrioScale.css";

const ChanceToWinNutrioScale: React.FC = () => {
  return (
    <div className="NutrioScaleWinningChange_bg NutrioScaleWinningChange_bg_Mobile">
      <div className="relative px-[5%] py-[100px] md:py-[150px] lg:py-[175px] pl-30 md:pl-32 lg:pl-40 md:pr-6 lg:pr-10 flex flex-col w-[100%] md:w-[620px] lg:w-[815px] text-center  md:items-start">
        <h2 className="font-[Inter] font-light md:font-normal text-5xl md:leading-[52px] text-center md:text-start  leading-[100%] px-10 md:px-0 mb-2 text-white tracking-[0%]">
          Join the waiting list
        </h2>
        <h3 className="font-[Inter] px-12 md:px-0 md:text-xl lg:text-2xl font-bold  md:leading-[52px] text-center md:text-start  leading-[120%] text-white tracking-[0%]">
          Enter to win a Nutrioscale and get 25% off
        </h3>
        <p className="text-white font-[Helvetica] md:text-base text-sm px-12 md:px-0 text-center md:text-start">
          Enter for a chance to win a Nutrioscale and get a prelaunch discount
        </p>
        <input
          className="relative items-center md:items-start mx-auto md:mx-0  border-2 border-green-200 rounded-full p-3 bg-amber-50 my-6 w-[280px] placeholder:text-green-200"
          type="email"
          placeholder="Your email address.."
        />

        <button
          className="relative items-center md:items-start mx-auto md:mx-0 text-white h-14 font-[Inter] leading-[100%] rounded-full shadow-lg shadow-green-400/40 bg-[#4AD769] hover:bg-green-400 
        font-xl font-bold w-[263px] transition delay-150 duration-500 ease-in-out hover:-translate-y hover:scale-105 uppercase"
        >
          join waiting list
        </button>
      </div>
    </div>
  );
};
export default ChanceToWinNutrioScale;
