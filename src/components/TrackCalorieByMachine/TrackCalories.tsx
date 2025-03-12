import React from "react";

import "./TrackCalories.css";
const TrackCalories: React.FC = () => {
  return (
    <div className="TrackCaloriesBy_pressBtn mx-auto">
      <div className="TrackCaloriesBy_wrapper">
        <div className="TrackCalorie_text text-center">
          <h2 className="text-2xl font-bold">Faster than Cracking an Egg</h2>
          <p className="text-black opacity-80 mt-2 md:mt-4 font-normal text-base leading-[150%] tracking-0">
            No more manual typing and searching for ingredients in confusing
            databases. Tracking calories with Qalzy takes just 4 seconds of your
            time. One quick press of a button. That’s 5x faster than trying to
            find an ingredient in an app, and 5x more time to spend on things
            that matter.
          </p>
        </div>
        <div className="trackCalories_bgImg">
          <span className="inline-block relative top-[4%] md:top-[4%] left-[-5%] md:left-[-4%] lg:left-[-7%] text-base md:text-lg lg:text-3xl text-black font-[Inter] bg-white shadow-md rounded-2xl md:rounded-3xl p-2 md:p-5 font-normal transition-transform duration-300 ease-in-out  hover:-rotate-3">
            Track with <b className="font-bold!">one button press</b>
          </span>
        </div>
      </div>
    </div>
  );
};
export default TrackCalories;
