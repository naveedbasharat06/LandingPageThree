import React from "react";

import AlexaGetStartedQalzyAppImg from "../../images/Image cation.png";

const AlexaGetStartedQalzy: React.FC = () => {
  return (
    <div>
      <div className="text-center max-w-2xl">
        <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">
          Alexa, Log This.
        </h2>
        <p className="text-black text-base opacity-90 leading-6 px-3">
          Busy cooking? No need to stop and grab your phone. Qalzy integrates
          with Alexa, so you can track calories with just your voice, and have
          it logged right into the app.
        </p>
      </div>
      <div className="mt-4 md:mt-8 w-full max-w-3xl">
        <img
          src={AlexaGetStartedQalzyAppImg}
          alt="App Preview"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};
export default AlexaGetStartedQalzy;
