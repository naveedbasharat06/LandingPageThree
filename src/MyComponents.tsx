import React from "react";
import Navbar from "./components/navbar/navbar";
import HeroSectionTopText from "./components/hersosectionTopText/HeroSectionText";
import HeroSection from "./components/heroSection/HeroSection";
import RouterBackground from "./components/routerSection/RouterBg";
import MeasureSalidkcal from "./components/salidKcal/salidkcal";
import CaloriesMeasureByAI from "./components/calorieMeasureByAI/kcalMeasurebyAI";
import CaloriesConsumedMeasure from "./components/caloriConsume/CaloriesConsume";
import TrackCalories from "./components/TrackCalorieByMachine/TrackCalories";
import MostAccurateTrackkcal from "./components/mostAccurateTrackCalories/AccurateTrackKcal";
import ChanceToWinNutrioScale from "./components/winNutrioScale/ChanceToWinNutrioScale";
import ScanEveryMeal from "./components/scanEveryTypeOfMeal/ScanEveryMeal";
import ScanGIFPortion from "./components/scanGIFPortions/ScanGIF";
import TrackMultipleIngredientsByGIF from "./components/TrackMultipleIngredientsGIF/TrackMultipleByGIF";
import TrackAnyWhereWithQalzyApp from "./components/trackAnyWhereWithQalzy/trackAnyWhereWithQalzyApp";
import QalzyForDimLighting from "./components/AccurateForDimLighting/QalzyForDimLighting";
// import CaloriesTracker from "./components/reachYourGoalFaster/ReachYRGoalFaster";
// import FitnessDashboard from "./components/reachYourGoalFaster/ReachYourGoalFaster";
// import chartBGfullImg from "./images/Frame 2147223215.png";
import MoreUseSmarterGetByQalzyApp from "./components/moreUseSmarterGet/MoreUseSmarterGet";
import AlexaGetStartedQalzy from "./components/alexaLogin/AlexaLoginApp";
import HowQalzyWorks from "./components/howQalzyWorks/HowQalzyWorks";
import LogMealWithoutPhone from "./components/logMealsWithoutPhone/LogMealWithOutPhone";
import QalzyDesignForYou from "./components/qalzyDesignForYou/QalzyDesignForYou";
import WeAreQalzy from "./components/weAreQalzy/WeAreQalzy";
import WhatsInTheBox from "./components/whatsInBox/WhatsInTheBox";
import QalzySpecification from "./components/qalzySpecifications/QalzySpecifications";
import OurSocialMedia from "./components/ourSocialMedia/OurSocialMedia";

const MyComponents: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionTopText />
      <HeroSection />
      <RouterBackground />
      <MeasureSalidkcal />
      <CaloriesMeasureByAI />
      <CaloriesConsumedMeasure />
      <TrackCalories />
      <MostAccurateTrackkcal />
      <ChanceToWinNutrioScale />
      <ScanEveryMeal />
      <ScanGIFPortion />
      <TrackMultipleIngredientsByGIF />
      <ChanceToWinNutrioScale />
      <TrackAnyWhereWithQalzyApp />
      <QalzyForDimLighting />
      <ChanceToWinNutrioScale />
      {/* <ReachYRGoalFaster /> */}
      {/* <FitnessDashboard /> */}

      {/* <img src={chartBGfullImg} alt=" full bg" /> */}
      <MoreUseSmarterGetByQalzyApp />
      <AlexaGetStartedQalzy />
      <HowQalzyWorks />
      <LogMealWithoutPhone />
      <QalzyDesignForYou />
      <WeAreQalzy />
      <WhatsInTheBox />
      <QalzySpecification />
      <OurSocialMedia />
    </div>
  );
};
export default MyComponents;
