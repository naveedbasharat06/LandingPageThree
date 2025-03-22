import React from "react";
import TickIcons from "../../images/tickVector.png";
import "./MoreUseSmarterGet.css";
import moreuseSmarterGetImg from "../../images/Frame 2147223156.png";
const tickCard = [
  { id: 1, tickIcon: TickIcons, title: "Adapts to your diet" },
  { id: 2, tickIcon: TickIcons, title: "Learns your favorites" },
  { id: 3, tickIcon: TickIcons, title: "Tracks smarter over time" },
];

const MoreUseSmarterGetByQalzyApp: React.FC = () => {
  return (
    <div className="more_use_smarter_get px-2 md:px-4 py-12 lg:py-16 flex flex-col items-center">
      <div className="text-center max-w-[546px]">
        <h2 className="text-[#171923] text-2xl px-2 md:px-0  font-bold mb-4 font-[Open_Sans]">
          The More You Use It, The Smarter It Gets.
        </h2>
        <p className="text-[#171923] text-base  leading-6 font-[Open_Sans]">
          Qalzy’s AI learns from your food choices, recognizing your custom
          recipes and favorite ingredients with just one photo. It adapts to
          your diet and preferences over time, making logging and tracking even
          easier over time.
        </p>
      </div>

      <div className="flex flex-row gap-4 md:gap-2 lg:gap-3 mt-5">
        {tickCard.map((item) => (
          <div
            key={item.id}
            className="moreUserGetSmater_tick_card flex items-center shadow-[0_0_40px_rgba(0,0,0,0.25)] bg-white rounded-xl px-1 md:px-3 lg:px-6 py-1 md:py-1.5 lg:py-2.5"
          >
            <img
              src={item.tickIcon}
              alt="Tick Icon"
              className="w-2 md:w-4 lg:w-6 h-2 md:h-4 lg:h-6 mr-2"
            />
            <h2 className="text-[80%] md:text-xl font-medium flex-nowrap">
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-8 px-2 w-full max-w-3xl">
        <img
          src={moreuseSmarterGetImg}
          alt="App Preview"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default MoreUseSmarterGetByQalzyApp;
