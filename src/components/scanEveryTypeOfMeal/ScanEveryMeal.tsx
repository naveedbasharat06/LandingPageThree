import React from "react";

const ScanEveryMeal: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="relative mx-auto py-12 md:py-24 items-center w-[97%] md:w-[420px] lg:w-[546px] text-center font-[Open_Sans]">
        <h2 className="text-black text-2xl leading-[120%] font-bold mb-4 font-[Open_Sans]">
          Scan Every Type of Meal
        </h2>
        <p className="text-[#171923] text-base leading-[150%] tracking-0">
          From homemade meals to packaged snacks, Qalzy recognizes multiple
          ingredients on a plate, scans nutrition labels, and even adjusts for
          portion sizes, so you log exactly what you eat.
        </p>
      </div>
    </div>
  );
};
export default ScanEveryMeal;
