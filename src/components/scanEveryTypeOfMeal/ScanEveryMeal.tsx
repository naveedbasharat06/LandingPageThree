import React from "react";

const ScanEveryMeal: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="relative mx-auto py-12 md:py-24 items-center w-[92%] md:w-[420px] lg:w-[546px] text-center">
        <h2 className="text-black text-2xl leading-[120%] font-bold mb-4">
          Scan Every Type of Meal
        </h2>
        <p className="text-black opacity-70 leading-[150%] tracking-0">
          From homemade meals to packaged snacks, Qalzy recognizes multiple
          ingredients on a plate, scans nutrition labels, and even adjusts for
          portion sizes, so you log exactly what you eat.
        </p>
      </div>
    </div>
  );
};
export default ScanEveryMeal;
