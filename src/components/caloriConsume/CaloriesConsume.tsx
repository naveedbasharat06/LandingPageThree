import React from "react";
import "./CaloriesConsume.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import calorieMeasureBgImg from "../../images/caloriConsumeBg.png";
// import { FaRegFlag } from "react-icons/fa6";
// import CaloriesConsume_Bgline from "../../images/Vector 1 (3).png";
const CaloriesConsumedMeasure: React.FC = () => {
  const caloriesCosume_Info = [
    {
      Id: 1,
      icon: `🏳️`,
      title: "Goal",
      kcalQty: 1414,
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
  const percentage = 54;
  return (
    <div className="CaloriesCosumed_main">
      <div className="calorieConsumed_wraper">
        <img
          className="calorieMeasureBgImg"
          src={calorieMeasureBgImg}
          alt="kcal bg"
        />
        <div className="calorieConsume_Progress_card">
          <h2 className="text-xl font-[Inter] ">{`Calories Consumed (kcal):`}</h2>
          <p className="text-base font-[Inter] text-black opacity-60 ">
            Remaining = Goal -Food + Excercise
          </p>
          <div className="caloriesComsumed_progressBar_flex flex flex-row mt-4">
            {/* <span className="circular_progressbar_kcal"></span> */}
            <div className="flex flex-row justify-between mx-auto">
              <div style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
              <span className="">
                {caloriesCosume_Info.map((item, idx) => (
                  <div key={item.Id} className="flex flex-row items-center">
                    <p className="text-green-600">{item.icon}</p>
                    <span>
                      <p>{item.title}</p>
                      <h5>{item.kcalQty}</h5>
                    </span>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaloriesConsumedMeasure;
