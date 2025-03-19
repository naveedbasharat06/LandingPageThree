import React from "react";

// import logMealwithOutPhone from "../../images/Main Container 1140px.png";
import largestkcalCountGroupImg from "../../images/Frame 2147223219.png";

const LargestCaloriesCountingGroup: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] py-12 flex flex-col items-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-black font-[Open_Sans] leading-[120%] tracking-[0%] text-2xl md:text-3xl font-bold mb-4">
          Largest Calorie Counting Group
        </h2>
        <p className="text-black text-base opacity-90 leading-6 px-auto px-4 md:px-20">
          We built “Low Calorie Recipes & Calorie Counting Support” - the
          largest calorie-counting facebook group, with 316k members and
          growing. We’ve helped thousands of people lose weight, share recipes,
          and stay on track. We know what works and what doesn’t.
        </p>
      </div>
      <div className="flex flex-row mt-4 md:mt-8 w-full gap-4">
        <img
          src={largestkcalCountGroupImg}
          alt="kcal counting Preview"
          className="rounded-lg  w-full"
        />
      </div>
      {/* <span className="relative left-[20%] bottom-[30%] z-20">
        🧔🏻🙋🏻‍♂️👦🏻👩🏻🤵🏻👩😎👨🏾‍🦱
      </span> */}
    </div>
  );
};
export default LargestCaloriesCountingGroup;
