import { CircularProgressbar } from "react-circular-progressbar";
import "./QalzyForDimLighting.css";
import KichenScalImageByDimLight from "../../images/Kitchen_scales_type_1_white_2.png";
import kichenScal_lightEffect from "../../images/Vector 8.png";
const QalzyForDimLighting: React.FC = () => {
  const caloriesCosume_Info = [
    {
      Id: 1,
      title: "Protein (5%)",
      kcalWeight: 2,
      color: "orange-400",
    },
    {
      Id: 2,
      title: "Net Carbs (5%)",
      kcalWeight: 2,
      color: "green-600",
    },
    {
      Id: 3,
      title: "Fat (90%)",
      kcalWeight: 15,
      color: "red-600",
    },
  ];
  const percentages = [20, 15, 30, 35]; // Aqua, Orange, Green, Red sections
  const colors = ["#00FFFF", "#FFA500", "#008000", "#FF0000"]; // Define section colors
  return (
    <div className="QalzyForDimLighting">
      <div className="">
        <div className="TrackAnywhere_withQalzyApp_content mx-auto py-12 text-center items-center w-[95%] md:w-[546px]">
          <h2 className="text-black text-2xl leading-[120%] font-bold mb-4">
            Accurate Even in Dim Lighting
          </h2>
          <p className="text-black text-base opacity-90 leading-[150%] tracking-0">
            Lighting conditions can affect food recognition accuracy. That’s why
            Qalzy is equipped with a kitchen-safe LED flash that ensures clear,
            high-quality images - even in dim lighting. Perfect for when you’re
            prepping a late-night snack.
          </p>
        </div>
        <div className="DimLIghting_grandiantBg_line">
          <div className="">
            <div className="EnerySummary_Progress_card  transition-transform duration-300 ease-in-out  hover:-rotate-3">
              <h2 className="text-[12px] mb-[-4px] md:mb-auto text-black md:text-base font-medium font-[Inter]">
                Energy Summary
              </h2>

              <div className="caloriesComsumed_progressBar_flex mt-0 lg:mt-3">
                <div className="flex flex-row justify-between gap-3 mt-1 mx-auto items-center">
                  <div
                    // style={{ position: "relative" }}
                    className="relative w-[65px] h-[65x] md:w-[100px] md:h-[100px] "
                  >
                    {/* Progress Circle with Gradient */}
                    <svg className="absolute top-0 left-0 w-full h-full">
                      <defs>
                        <linearGradient
                          id="progressGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor={colors[0]} />
                          <stop
                            offset={`${percentages[0]}%`}
                            stopColor={colors[0]}
                          />
                          <stop
                            offset={`${percentages[0]}%`}
                            stopColor={colors[1]}
                          />
                          <stop
                            offset={`${percentages[0] + percentages[1]}%`}
                            stopColor={colors[1]}
                          />
                          <stop
                            offset={`${percentages[0] + percentages[1]}%`}
                            stopColor={colors[2]}
                          />
                          <stop
                            offset={`${
                              percentages[0] + percentages[1] + percentages[2]
                            }%`}
                            stopColor={colors[2]}
                          />
                          <stop offset="100%" stopColor={colors[3]} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <CircularProgressbar
                      value={100} // Full circle
                      strokeWidth={5}
                      styles={{
                        path: { stroke: "url(#progressGradient)" },
                        trail: { stroke: "transparent" },
                      }}
                    />
                    {/* Text Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "41%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        lineHeight: "7px",
                      }}
                    >
                      <span className="text-xs md:text-sm font-semibold text-black ">
                        160
                      </span>{" "}
                      <br />
                      <span className="text-[12px] text-black opacity-80">
                        kcal
                      </span>
                    </div>
                  </div>
                  <span className="relative right-5">
                    {caloriesCosume_Info.map((item) => (
                      <ul key={item.Id} className="">
                        <li className="flex items-center  gap-1">
                          {/* Custom Bullet */}
                          <span
                            className={`w-2 h-2 rounded-full bg-${item.color}`}
                          ></span>

                          {/* Label and Value */}
                          <span className="flex justify-between w-full ">
                            <p className="enerySummary_extraSmall_text text-sm lg:text-base font-[Inter]">
                              {item.title}
                            </p>
                            <h5 className="enerySummary_extraSmall_text text-sm lg:text-base font-[Inter] font-medium relative left-3">
                              {item.kcalWeight}g
                            </h5>
                          </span>
                        </li>
                      </ul>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <img
              className="KichenScal_type"
              src={KichenScalImageByDimLight}
              alt="kichen scale "
            />
            <img
              className="KichenScal_type_lightEffect"
              src={kichenScal_lightEffect}
              alt="light effect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default QalzyForDimLighting;
