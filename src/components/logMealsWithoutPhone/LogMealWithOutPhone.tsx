import React from "react";

import logMealwithOutPhone from "../../images/Main Container 1140px.png";

const LogMealWithoutPhone: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-12 flex flex-col items-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-black leading-[120%] tracking-[0%] text-2xl font-bold mb-4 font-[Open_Sans]">
          Log Meals without a phone
        </h2>
        <p className="text-black text-base opacity-90 leading-6 px-auto px-4 md:px-16 font-[Open_Sans]">
          Keep your phone in your pocket. Qalzy connects straight to your Wifi
          so you can cook and log meals at the press of a button, without ever
          having to use your phone. No more typing with dirty hands! When you're
          ready to check your progress, it's already waiting for you in the app.
        </p>
      </div>
      <div className="mt-4 md:mt-8 w-full max-w-5xl ">
        <img
          src={logMealwithOutPhone}
          alt="Alexa Preview"
          className="rounded-lg  w-full"
        />
      </div>
    </div>
  );
};
export default LogMealWithoutPhone;
