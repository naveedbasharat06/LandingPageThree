// import React, { useState } from "react";
// import videoPlayIcon from "../../images/Polygon 1.png";
// import videoPauseIcon from "../../images/palyIcon.jpg";
import mostAccurateTrackBG_Img from "../../images/Frame 48095857.png";
const MostAccurateTrackkcal: React.FC = () => {
  // const [playVideoIcon, SetPlayVideoIcon] = useState(videoPlayIcon);

  // const handleChangeIcon = (e: any) => {
  //   e.preventDefault();
  //   SetPlayVideoIcon((prevIcon: any) =>
  //     prevIcon === videoPlayIcon ? videoPauseIcon : videoPlayIcon
  //   );
  // };
  return (
    <div>
      <div>
        <div className="TrackCalorie_text text-center">
          <h2 className="text-2xl font-bold font-[Open_Sans]">
            The Most Accurate Tracking for Rapid Results
          </h2>
          <p className="text-black opacity-80 mt-2 md:mt-4 font-normal text-base leading-[150%] tracking-0 font-[Open_Sans]">
            Counting calories but not losing weight? AI meal scanner apps only
            estimate portions, Qalzy weighs your food down to the gram, so you
            can lose weight, effectively.
          </p>
        </div>
        <img
          className="relative mx-auto px-5 lg:px-0 items-center pb-10"
          src={mostAccurateTrackBG_Img}
          alt="video"
        />
      </div>
    </div>
  );
};
export default MostAccurateTrackkcal;
