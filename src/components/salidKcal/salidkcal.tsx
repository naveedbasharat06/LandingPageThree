import React, { useState } from "react";
import salid_kcalImg from "../../images/salidkcal-Img.png";
import tomatokcal from "../../images/tomatokcal.png";
import hoverSalidUperCropIconEffect from "../../images/Frame 2147223186 (2).png";
import hoverSalidbelowCropIcon from "../../images/Frame 2147223187.png";
import { motion, AnimatePresence } from "framer-motion";
import tomatokcalArrow from "../../images/Vector 29.png";
import AvacadokcalArrow from "../../images/Vector 30.png";
import MobileViewTomatoKcalArrow from "../../images/Vector 29 (1).png";
import MobileViewAvacatoKcalArrow from "../../images/Vector 30 (1).png";

import "./salidkcal.css";
const MeasureSalidkcal: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const calorieInfo = [
    {
      Id: 1,
      tomato: "Tomato",
      kcalQty: 33,
    },
    {
      Id: 1,
      tomato: "Avocado",
      kcalQty: 160,
    },
    {
      Id: 1,
      tomato: "Lemon",
      kcalQty: 24,
    },
  ];

  return (
    <div className="mx-auto pt-3">
      <div>
        <h1 className="meet_qalzy_title text-5xl md:text-[82px] text-center font-[Inter] font-bold leading-[110%] tracking-[0%]">
          MEET QALZY
        </h1>
        <h2 className="meet_qalzy_tagLine text-black opacity-50 text-xl md:text-[34px] leading-[40px] tracking-[0%] text-center mt-2 md:mt-4 mb-20  md:mb-10">
          One-Tap Calorie Counting <br /> Fast. Precise. Easy.
        </h2>

        <div className="relative items-center mx-auto w-full">
          <AnimatePresence>
            {hoveredItem === "tomato" && (
              <motion.span
                className="salidMeasureKcalEffect_tomato "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={hoverSalidUperCropIconEffect}
                  alt="uper crop hover  effect z-10"
                  className="mobileViewsalidUperCropedEffect w-[120px] md:w-auto z-10"
                />

                <img
                  src={hoverSalidbelowCropIcon}
                  alt="below crop hover effect z-10"
                  className="mobileViewsalidBelowCropedEffect mt-16 w-[120px] md:w-auto md:mt-24 lg:mt-28 z-10"
                />
                <img
                  className="absolute hidden md:block md:w-auto  bottom-5 left-40 z-10"
                  src={tomatokcalArrow}
                  alt="avacado kcal arrow"
                />
                <img
                  className="absolute  md:hidden md:w-auto  bottom-5 left-24 md:left-40 z-10"
                  src={MobileViewTomatoKcalArrow}
                  alt="avacado kcal arrow"
                />
              </motion.span>
            )}
          </AnimatePresence>
          <img
            className="items-center mx-auto"
            src={salid_kcalImg}
            alt="salid kcal"
          />
          <img
            className="hover-area tomato"
            src={tomatokcal}
            alt="tomatokcal"
            onMouseEnter={() => handleMouseEnter("tomato")}
            onMouseLeave={handleMouseLeave}
          />

          <AnimatePresence>
            {hoveredItem === "avocado" && (
              <motion.span
                className="salidMeasureKcalEffect_Avocado"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={hoverSalidUperCropIconEffect}
                  alt=" uper crop hover effect"
                  className="mobileViewsalidUperCropedEffect w-[120px] md:w-auto z-10"
                />
                <img
                  src={hoverSalidbelowCropIcon}
                  alt="below crop hover effect"
                  className="mobileViewsalidBelowCropedEffect mt-16 w-[120px] md:w-auto md:mt-24 lg:mt-28 z-10"
                />
                <img
                  className="hidden md:block absolute top:50 md:top-40 lg:top-60 right-[50%] z-10"
                  src={AvacadokcalArrow}
                  alt="avacado kcal arrow"
                />
                <img
                  className="absolute  md:hidden md:w-auto  top:52 md:top-40 lg:top-60 right-[50%] z-10"
                  src={MobileViewAvacatoKcalArrow}
                  alt="avacado kcal arrow"
                />
              </motion.span>
            )}
          </AnimatePresence>
          <div
            className="hover-area avocado"
            onMouseEnter={() => handleMouseEnter("avocado")}
            onMouseLeave={handleMouseLeave}
          ></div>
          <AnimatePresence>
            {hoveredItem === "avocado" && (
              <motion.div
                className="calorie-box avocado"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-[16px] md:text-lg font-[Inter] text-center">
                  {calorieInfo[1].tomato}
                </h2>
                <p className="text-black text-[12px] md:text-[16px] opacity-50">
                  {calorieInfo[1].kcalQty}kcal
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          {/* <div
            className="hover-area lemon"
            onMouseEnter={() => handleMouseEnter("lemon")}
            onMouseLeave={handleMouseLeave}
          >
          </div> */}
          <AnimatePresence>
            {hoveredItem === "tomato" && (
              <motion.div
                className="calorie-box tomato"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-[16px] md:text-lg font-[Inter] text-center">
                  {calorieInfo[0].tomato}
                </h2>
                <p className="text-black text-[12px] md:text-[16px]  opacity-50">
                  {calorieInfo[0].kcalQty}kcal
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MeasureSalidkcal;
