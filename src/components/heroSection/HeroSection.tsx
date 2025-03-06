import React from "react";
import "./HeroSection.css";
const HeroSection: React.FC = () => {
  return (
    <div className="HeroSection Hero HeroSection_mobileBgImg">
      <div className="relative px-[5%] py-[100px] md:py-[150px] lg:py-[175px] pl-30 md:pl-32 lg:pl-40 md:pr-6 lg:pr-10 flex flex-col w-[100%] md:w-[620px] lg:w-[815px] items-center">
        <h2 className="font-[inter] font-normal text-[40px] md:leading-[52px] leading-[43px] text-white">
          The only kitchen scale that auto-tracks calories
        </h2>
        <p className="text-white font-[Helvetica] mt-4">
          Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
          Scelerisque in et molestie eget in auctor bibendum feugiat.
        </p>
        <h3 className="font-[Helvetica] text-white text-[36px] leading-[41px] mt-4">
          Get 50% discount
        </h3>
        <div className="flex gap-4 mt-4 text-white">
          <p className="font-xl">★ ★ ★ ★ ★</p>
          <p className="font-xl">5,128+ early bird pre-orders</p>
        </div>
        <button className="text-white rounded-full bg-[#4AD769] font-xl font-semibold w-[263px] py-2 mt-10">
          PREORDER NOW
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
