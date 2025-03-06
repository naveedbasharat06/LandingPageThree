import React from "react";
import Navbar from "./components/navbar/navbar";
import HeroSectionTopText from "./components/hersosectionTopText/HeroSectionText";
import HeroSection from "./components/heroSection/HeroSection";
import RouterBackground from "./components/routerSection/RouterBg";
import MeasureSalidkcal from "./components/salidKcal/salidkcal";
import CaloriesMeasureByAI from "./components/calorieMeasureByAI/kcalMeasurebyAI";

const MyComponents: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionTopText />
      <HeroSection />
      <RouterBackground />
      <MeasureSalidkcal />
      <CaloriesMeasureByAI />
    </div>
  );
};
export default MyComponents;
