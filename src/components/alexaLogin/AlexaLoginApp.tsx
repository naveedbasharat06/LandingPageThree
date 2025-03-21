import React from "react";

import AlexaGetStartedQalzyAppImg from "../../images/Image cation.png";

const AlexaGetStartedQalzy: React.FC = () => {
  return (
    <div className="px-4 py-16 flex flex-col items-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-[#171923] leading-[120%] tracking-[0%] text-2xl font-bold mb-4 font-[Open_Sans]">
          Alexa, Log This.
        </h2>
        <p className="text-[#171923] text-base leading-6 px-auto md:px-20">
          Busy cooking? No need to stop and grab your phone. Qalzy integrates
          with Alexa, so you can track calories with just your voice, and have
          it logged right into the app.
        </p>
      </div>
      <div className="mt-4 md:mt-8 w-full max-w-3xl">
        <img
          src={AlexaGetStartedQalzyAppImg}
          alt="Alexa Preview"
          className="rounded-lg  w-full"
        />
      </div>
    </div>
  );
};
export default AlexaGetStartedQalzy;
