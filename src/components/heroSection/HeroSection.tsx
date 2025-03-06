import React from "react";
import "./HeroSection.css";
const HeroSection: React.FC = () => {
  return (
    <div className="HeroSection HeroSection_mobileBgImg HeroSection_mobileBgImg">
      <div className="relative px-[5%] py-[100px] md:py-[150px] lg:py-[175px] pl-30 md:pl-32 lg:pl-40 md:pr-6 lg:pr-10 flex flex-col w-[100%] md:w-[620px] lg:w-[815px] text-center  md:items-start">
        <h2 className="font-[inter] font-light md:font-normal text-4xl md:text-[40px] md:leading-[52px] text-center md:text-start  leading-[43px] px-10 md:px-0 text-white tracking-[0%]">
          The only kitchen scale that auto-tracks calories
        </h2>
        <p className="text-white font-[Helvetica] text-xl mt-4 text-center md:text-start px-8 md:px-0">
          Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
          Scelerisque in et molestie eget in auctor bibendum feugiat.
        </p>
        <h3 className="relative font-[Helvetica] text-white text-[36px] text-center md:text-start leading-[100%] mt-4">
          Get 50% discount
        </h3>
        <div className=" flex flex-col md:flex-row gap-4 mt-4 text-white items-center justify-center md:justify-start">
          <p className="text-2xl text-center md:text-star">★ ★ ★ ★ ★</p>
          <p className="text-xl mt-2 md:mt-0 font-[Helvetica] leading-[100%] tracking-[0%] text-center md:text-star">
            5,128+ early bird pre-orders
          </p>
        </div>
        <button
          className="text-white h-14 font-[Inter] leading-[100%] rounded-full shadow-lg shadow-green-400/40 bg-[#4AD769] hover:bg-green-400 
        font-xl font-bold w-[263px] py-3 mt-10  mx-auto md:mx-0  transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110"
        >
          PREORDER NOW
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
