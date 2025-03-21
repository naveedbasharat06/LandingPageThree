import React from "react";

import v2BgImg from "../../images/v2.png";
const WeAreQalzy: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-16 flex flex-col items-center">
      <div className="text-center max-w-2xl font-[Open_Sans]">
        <h2 className="text-[#171923] leading-[120%] tracking-[0%] text-2xl md:text-3xl font-bold mb-4">
          We Are Qalzy
        </h2>
        <p className="text-[#171923] text-base leading-6  px-2 md:px-16">
          Hey, we’re team Qalzy. A team of former Microsoft engineers with over
          10 years of experience building award-winning AI products. We calorie
          track ourselves and are now solving one of the biggest challenges in
          calorie tracking: the oh-so tedious task of manual input.
        </p>
        <p className="text-[#171923] text-base leading-6 py-6 px-3 md:px-14">
          With a shared passion for health and technology, we designed Qalzy to
          make nutrition tracking effortless, accurate, and intuitive. Together,
          we’re redefining how the world tracks their food intake, and this is
          just the beginning.
        </p>
        <h4 className="font-bold text-base px-3 md:px-0">
          Join us on this journey toward smarter, healthier living.
        </h4>
      </div>
      <div className="flex flex-row mt-4 md:mt-8 w-full max-w-5xl gap-4 px-2">
        <img src={v2BgImg} alt="Alexa Preview" className="rounded-lg  w-full" />
      </div>
    </div>
  );
};
export default WeAreQalzy;
