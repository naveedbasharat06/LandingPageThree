import React from "react";
import rouet_Img from "../../images/router.png";
import "./RouterBg.css";
const RouterBackground: React.FC = () => {
  return (
    <div>
      <div className="router_background router_background_mobileView">
        <div className="router">
          <img src={rouet_Img} alt="router" />
        </div>
      </div>
    </div>
  );
};
export default RouterBackground;
