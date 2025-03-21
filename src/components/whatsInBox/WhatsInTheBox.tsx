import React from "react";

import WatsIntheBoxBgImg from "../../images/Frame 2147223201.png";
const WhatsInTheBox: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] py-16 flex flex-col items-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-[#171923] leading-[120%] tracking-[0%] text-2xl font-bold mb-4 font-[Open_Sans]">
          What’s in the Box?
        </h2>
      </div>
      <div className="flex flex-row mt-4 md:mt-8 w-full max-w-5xl px-2">
        <img
          src={WatsIntheBoxBgImg}
          alt="Alexa Preview"
          className="rounded-lg  w-full"
        />
      </div>
    </div>
  );
};
export default WhatsInTheBox;
