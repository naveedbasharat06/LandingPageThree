import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CaloriesConsume.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AppleSliceWeight from "../../images/image 57.png";
// import { FaRegFlag } from "react-icons/fa6";
// import CaloriesConsume_Bgline from "../../images/Vector 1 (3).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
const CaloriesConsumedMeasure: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };
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
  const percentage1 = 30; // Orange Section
  const percentage2 = 40; // Green Section
  const totalPercentage = percentage1 + percentage2; // Combined filled part

  return (
    <div className="CaloriesCosumed_main">
      <div className="calorieConsumed_wraper">
        <Swiper
          modules={[Pagination, Navigation, EffectFade]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          effect="fade" // Makes sure only one slide replaces the other
          onSlideChange={handleSlideChange}
          className="mySwiper z-10!"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "visible",
          }} // Ensure it takes full width and height
        >
          {[...Array(totalSlides)].map((_, index) => (
            <SwiperSlide
              key={index}
              className=" "
              // style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: activeSlide > index ? "20px" : "-20px", // Small slide effect instead of full width
                }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="calorieConsume_Progress_card"
              >
                <h2 className="text-[6px] mb-[-4px] md:mb-auto text-black md:text-xs font-medium font-[Inter]">
                  Calories Consumed (kcal):
                </h2>
                <p className="text-[8px] md:text-xs font-[Inter] text-black opacity-60">
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
                              offset={`${
                                (percentage1 / totalPercentage) * 100
                              }%`}
                              stopColor="green"
                            />
                            <stop
                              offset={`${
                                (percentage1 / totalPercentage) * 100
                              }%`}
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
                          {750}
                        </span>{" "}
                        <br />
                        <span className="text-[8px] md:text-[9px] text-black mb-2">
                          Remaining
                        </span>
                      </div>
                    </div>
                    <span className="flex flex-col gap-0">
                      {caloriesCosume_Info.map((item) => (
                        <div
                          key={item.Id}
                          className="flex flex-row items-center gap-2 md:gap-3 space-y-0.5 md:space-y-1"
                        >
                          <p className="text-green-600 text-[9px] md:text-sm">
                            {item.icon}
                          </p>
                          <span className="flex flex-col flex-start">
                            <p className="text-[10px] md:text-xs">
                              {item.title}
                            </p>
                            <h5 className="text-[9px] md:text-sm font-semibold">
                              {item.kcalQty}
                            </h5>
                          </span>
                        </div>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <img
        className="calorieMeasureBgImg"
        src={calorieMeasureBgImg}
        alt="kcal bg"
      /> */}
        <div className="Apple_calorie_card bg-white ">
          <span className="relative top-3 md:top-5 left-2 md:left-3">
            <h3 className="text-sm md:text-lg font-semibold">Apple</h3>
            <p className="text-sm md:text-base text-black opacity-50">175g</p>
          </span>
        </div>
        <img
          className="apple_slice_weight"
          src={AppleSliceWeight}
          alt="apple slice"
        />
      </div>
    </div>
  );
};
export default CaloriesConsumedMeasure;
