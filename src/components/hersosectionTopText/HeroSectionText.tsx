import React from "react";

import "./HerosectionTopText.css";
const HeroSectionTopText: React.FC = () => {
  return (
    <div className="heroSection_top_text bg-[#DFF1DC] text-center py-4 md:py-6">
      <p
        className="text-base px-[10%] md:px-auto md:text-xl font-normal"
        style={{
          fontFamily: "Aeonik TRIAL",
          fontWeight: 400,
        }}
      >
        Use AI to identify and record the food you weigh and log calories
        automatically. World's First Launch!
      </p>
    </div>
  );
};
export default HeroSectionTopText;
