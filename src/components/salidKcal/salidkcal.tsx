// import React, { useEffect, useState } from "react";
import salid_kcalImg from "../../images/salidkcal-Img.png";
const MeasureSalidkcal: React.FC = () => {
  // const kcal_data = [
  //   {
  //     Id: 1,
  //     salidName: "Tomato",
  //     kcalQty: 33,
  //   },
  //   {
  //     Id: 2,
  //     salidName: "Avocado",
  //     kcalQty: 160,
  //   },
  //   {
  //     Id: 3,
  //     salidName: "Lemon",
  //     kcalQty: 56,
  //   },
  // ];
  // const [salidkcal, setSalidkcal] = useState(kcal_data);
  // const OnhoversalidContent = () => {
  //   useEffect(() => {
  //     setSalidkcal(salidkcal);
  //   });
  // };
  return (
    <div className="mx-auto pt-3">
      <div>
        <h1 className="meet_qalzy_title text-5xl md:text-[82px] text-center font-[Inter] font-bold leading-[110%] tracking-[0%]">
          MEET QALZY
        </h1>
        <h2 className="meet_qalzy_tagLine text-black opacity-50 text-2xl md:text-4xl leading-[40px] tracking-[0%] text-center mt-2 md:mt-4 mb-4  md:mb-10">
          One-Tap Calorie Counting <br /> Fast. Precise. Easy.
        </h2>

        <img
          className="relative items-center mx-auto w-full"
          src={salid_kcalImg}
          alt="salid kcal"
          // onMouseEnter={OnhoversalidContent}
        />
      </div>
    </div>
  );
};
export default MeasureSalidkcal;
