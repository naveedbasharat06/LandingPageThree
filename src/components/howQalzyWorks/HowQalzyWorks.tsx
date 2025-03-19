import React from "react";

import HowItWorksImg from "../../images/Frame 2147223216.png";

const HowQalzyWorks: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] py-12 flex flex-col items-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-black leading-[120%] tracking-[0%] text-2xl font-bold mb-4 font-[Open_Sans]">
          How It Works
        </h2>
        <p className="text-black text-base opacity-90 leading-6 px-auto md:px-20 font-[Open_Sans]">
          Just place your food on the Qalzy scale, and it will automatically
          identify and log the right ingredients. No typing, no researching.
          Just one press of a button. 
        </p>
      </div>
      <div className="mt-4 md:mt-8 w-full ">
        <img
          src={HowItWorksImg}
          alt="Alexa Preview"
          className="rounded-lg  w-full"
        />
      </div>
    </div>
  );
};
export default HowQalzyWorks;
