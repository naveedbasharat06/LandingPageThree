import React from "react";

import QalzySpecificationBg from "../../images/Frame 2147223217.png";
const QalzySpecification: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-12 flex flex-col items-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-black leading-[120%] tracking-[0%] text-2xl md:text-3xl font-bold mb-4">
          Specifications
        </h2>
      </div>
      <div className="flex flex-row mt-4 md:mt-8 w-full ">
        <img
          src={QalzySpecificationBg}
          alt="Alexa Preview"
          className="rounded-lg  w-full"
        />
      </div>
    </div>
  );
};
export default QalzySpecification;
