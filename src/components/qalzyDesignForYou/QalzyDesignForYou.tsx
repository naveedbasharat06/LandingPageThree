import React from "react";

// import logMealwithOutPhone from "../../images/Main Container 1140px.png";
import Frame12884 from "../../images/Frame 12884.png";
import Frame12885 from "../../images/Frame 12885.png";
import Frame12886 from "../../images/Frame 12886.png";

const QalzyDesignForYou: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] py-11 flex flex-col items-center">
      <div className="text-center max-w-[546px]">
        <h2 className="text-[#171923] leading-[120%] tracking-[0%] text-2xl font-bold mb-4 font-[Open_Sans]">
          Designed for You
        </h2>
        <p className="text-[#171923] text-base px-2 md:px-auto leading-6  font-[Open_Sans]">
          With a sleek tempered glass surface, splash-proof design, and
          rechargeable battery, Qalzy is built for everyday use. It integrates
          seamlessly into your kitchen, making tracking fast, simple, and
          stress-free.
        </p>
      </div>
      <div className="flex flex-row mt-4 md:mt-8 w-full max-w-5xl gap-4 px-2">
        <span className="flex flex-col gap-2 md:gap-4">
          <img
            src={Frame12884}
            alt="Alexa Preview"
            className="rounded-lg  w-full"
          />
          <img
            src={Frame12885}
            alt="Alexa Preview"
            className="rounded-lg  w-full"
          />
        </span>
        <span>
          <img
            src={Frame12886}
            alt="Alexa Preview"
            className="rounded-lg  w-full"
          />
        </span>
      </div>
    </div>
  );
};
export default QalzyDesignForYou;
