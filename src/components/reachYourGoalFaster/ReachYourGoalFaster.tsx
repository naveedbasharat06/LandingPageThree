// import { div } from "@/components/ui/card";
// import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import footprint from "../../images/footprint.png";
import AddButton from "../../images/Button.png";
import FireDepartment_icon from "../../images/local_fire_department.png";
import reachYourGoalFaster_mobile from "../../images/reachURGaol-mobile.png";
// import whiteBg_grandiant from "../../images/whiteBGImg.png";
import PartyPopperIcon from "../../images/Party Popper.png";
import "react-circular-progressbar/dist/styles.css";
import "./ReachYRGoalFaster.css";
// import { motion } from "framer-motion";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
import KcalComsumeCardImg from "../../images/Calories Consumed (kcals)_ copy.png";
const data = [
  {
    name: "19-21",
    kcalName: "Protein",
    protein: 400,
    carbs: 300,
    fat: 200,
    alcohol: 100,
  },
  {
    name: "22-24",
    kcalName: "Carbs",
    protein: 200,
    carbs: 180,
    fat: 120,
    alcohol: 60,
  },
  {
    name: "25-27",
    kcalName: "Fat",
    protein: 300,
    carbs: 250,
    fat: 160,
    alcohol: 90,
  },
  {
    name: "28-30",
    kcalName: "Alcohol",
    protein: 500,
    carbs: 350,
    fat: 210,
    alcohol: 120,
  },
  {
    name: "31-02",
    kcalName: "protein",
    protein: 600,
    carbs: 450,
    fat: 260,
    alcohol: 150,
  },
  { name: "03-05", protein: 700, carbs: 500, fat: 300, alcohol: 180 },
  {
    name: "06-08",
    kcalName: "protein",
    protein: 800,
    carbs: 550,
    fat: 350,
    alcohol: 200,
  },
];

const caloriesCosume_Info = [
  {
    Id: 1,
    icon: `🏳️`,
    title: "Goal",
    kcalQty: 1414,
    color: "",
  },
  {
    Id: 1,
    icon: `🍴`,
    title: "Food",
    kcalQty: 1156,
  },
  {
    Id: 1,
    icon: `🔥`,
    title: "Exercise",
    kcalQty: 492,
  },
];
export default function FitnessDashboard() {
  // const [activeSlide, setActiveSlide] = useState(0);
  // const totalSlides = 3;

  // const handleSlideChange = (swiper: any) => {
  //   setActiveSlide(swiper.activeIndex);
  // };
  const percentage1 = 30; // Orange Section
  const percentage2 = 40; // Green Section
  const totalPercentage = percentage1 + percentage2; // Combined filled part

  return (
    <div className="ReacYourGoalFaster">
      <div className="TrackAnywhere_withQalzyApp_content mx-auto py-8 md:py-16 lg:py-24 text-center items-center w-[95%] md:w-[546px] bg-white!">
        <h2 className="text-black text-2xl leading-[120%] font-bold mb-4">
          Reach your goals faster
        </h2>
        <p className="text-black text-base opacity-90 leading-[150%] tracking-0">
          The dashboard is your personal coach. It tracks your weight, calorie
          goals and nutrition targets, helping you stay on track. Visualise
          calories, macros and micronutrients and keep progressing towards your
          goal. 
        </p>
      </div>
      {/* progress charts cards start here */}
      <div className="whiteBGrandiant flex flex-row items-center justify-between px-2 gap-2  ">
        {/* Steps Card */}
        <div className=" md:p-2 lg:p-4 bg-white! rounded-lg shadow-xl ">
          <h2 className="text-[9px] md:text-xs lg:text-lg  font-semibold">
            Steps
          </h2>
          <span className="flex gap-1 py-1">
            <img src={footprint} alt="foot print" />
            <p className="text-blue-600 text-[10px] md:text-xs lg:text-xl font-bold">
              10,000
            </p>
          </span>
          <p className="text-gray-500  text-[8px] lg:text-xs pb-1">
            Goal: 20,000 steps
          </p>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="h-2 bg-blue-500" style={{ width: "50%" }}></div>
          </div>
        </div>

        <span className="">
          <img
            className="rounded-xl shadow-2xl md:w-[75%] lg:w-[80%]"
            src={KcalComsumeCardImg}
            alt="kcal consume chart"
          />
        </span>
        {/* congrate card */}
        <div className="absolute flex gap-0 md:gap-1 lg:gap-2 mt-[44%] md:mt-[50%] lg:mt-[34%] ml-[10%] lg:ml-[5%] rounded-2xl bg-white shadow-2xl md:p-2 lg:p-3 z-10 md:w-auto lg:w-[361px]">
          <img
            className="relative top-0 w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]"
            src={PartyPopperIcon}
            alt=" party popper"
          />
          <span className="flex flex-col gap-0 md:gap-2 md:w-auto lg:w-[240px]">
            <h2 className="font-[Inter] text-xs md:text-xl lg:text-3xl leading-[28px]">
              Congratulations!
            </h2>
            <p className="text-[8px] lg:text-xs font-[Inter] text-black opacity-50 ">
              You have achieved your goal! <br />
              Keep up the good work!{" "}
            </p>
          </span>
        </div>
        <span>
          <img src={reachYourGoalFaster_mobile} alt="mobile" />
        </span>
        {/* Calories Progress div */}
        <div className="ReachURGoalFaster_calorieConsume_Progress_card shadow-amber-300 bg-white">
          <h2 className="text-[6px] mb-[-4px] md:mb-auto text-black md:text-xs font-medium font-[Inter]">
            Calories Consumed (kcal):
          </h2>
          <p className="text-[9px] lg:text-xs font-[Inter] text-black opacity-60">
            Remaining = Goal - Food + Exercise
          </p>
          <div className="caloriesComsumed_progressBar_flex mt-0 lg:mt-3">
            <div className="flex flex-row justify-evenly mx-auto gap-3 lg:gap-5 items-center">
              <div
                style={{ position: "relative" }}
                className="relative w-[65px] h-[65x] md:w-[100px] md:h-[100px] "
              >
                {/* Single Progress Bar with Gradient */}
                <CircularProgressbar
                  value={totalPercentage}
                  strokeWidth={5}
                  styles={buildStyles({
                    pathColor: `url(#progressGradient)`,
                    trailColor: "gray",
                    textSize: "0px", // Hide default text
                  })}
                />

                {/* Define Gradient for Path */}
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="progressGradient">
                      <stop
                        offset={`${(percentage1 / totalPercentage) * 100}%`}
                        stopColor="green"
                      />
                      <stop
                        offset={`${(percentage1 / totalPercentage) * 100}%`}
                        stopColor="orange"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Text Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "41%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    fontWeight: "bold",
                    lineHeight: "0",
                  }}
                >
                  <span className="text-xs md:text-sm text-black mt-1">
                    750
                  </span>{" "}
                  <br />
                  <span className="text-[8px] text-black mb-2">Remaining</span>
                </div>
              </div>
              <span className="flex flex-col gap-0">
                {caloriesCosume_Info.map((item) => (
                  <div
                    key={item.Id}
                    className="flex flex-row items-center gap-1 md:gap-2 "
                  >
                    <p className="text-green-600  lg:text-[9px] md:text-sm">
                      {item.icon}
                    </p>
                    <span className="flex flex-col flex-start">
                      <p className="text-[10px] lg:text-xs">{item.title}</p>
                      <h5 className="text-[10px] lg:text-sm font-semibold">
                        {item.kcalQty}
                      </h5>
                    </span>
                  </div>
                ))}
              </span>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        {/* Exercise div */}
        <div className="p-1 lg:p-3 flex flex-col gap-1 z-10 mb-[13%] rounded-lg shadow-md bg-white w-auto lg:w-[150px]">
          <span className="flex justify-between items-center">
            {" "}
            <h2 className="md:text-[10px] lg:text-base font-semibold">
              Exercise
            </h2>
            <img
              src={AddButton}
              alt="add it"
              className="w-[15px] lg:w-[25px]"
            />
          </span>
          <span className="flex gap-1">
            <img
              className="w-[15px] lg:w-[25px]"
              src={FireDepartment_icon}
              alt="fire icon"
            />
            <p className="text-[#F2BA4C] md:text-sm lg:text-xl font-bold">
              600
            </p>
          </span>
          <p className="text-gray-500 text-[9px] lg:text-xs">Goal: 1200 kcal</p>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="h-2 bg-[#F2BA4C]" style={{ width: "50%" }}></div>
          </div>
        </div>
        {/* get better every day */}
        <div className="absolute flex gap-2 mt-[40%] md:mt-[50%] lg:mt-[34%] ml-[72%] md:ml-[73%] lg:ml-[65%] rounded-2xl bg-white shadow-2xl p-1 md:p-2 lg:p-3 z-10  w-auto lg:w-[355px]">
          <span className="flex flex-col gap-0 md:gap-1 lg:gap-2 ">
            <h2 className="font-[Inter] text-xs md:text-xl lg:text-3xl leading-[28px]">
              Get better every day!
            </h2>
            <p className="text-[8px] md:text-[10px] lg:text-xs font-[Inter] text-black opacity-50 ">
              Set new goals and achieve them at a <br /> comfortable pace and
              efficiently.
            </p>
          </span>
        </div>
        {/* Motivational Messages */}
        {/* <div className="p-4 rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold">🎉 Congratulations!</h2>
        <p className="text-gray-600">
          You have achieved your goal! Keep up the good work!
        </p>
      </div>

      <div className="p-4 rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold">
          Get better <span className="text-blue-600">every day!</span>
        </h2>
        <p className="text-gray-600">
          Set new goals and achieve them at a comfortable pace.
        </p>
      </div> */}
      </div>
      {/* <img
        className="absolut bottom-0 z-20"
        src={whiteBg_grandiant}
        alt="white grandiat"
      /> */}
    </div>
  );
}
