import React from "react";
import Rasm16 from "../Imges/IMAGE15.png";
import Rasm17 from "../Imges/IMAGE16.png";

const PRICING = () => {
  return (
    <div className="pricing">
      <div className="bloc_flex2">
        <h4>PRICING</h4>
        <h1>Pricing Pages</h1>
      </div>
      <div className="maxw_one">
        <div className="bloc_flex4">
          <div className="card_3">
            <h2>Blog One</h2>
            <img src={Rasm16} alt="404" />
          </div>
          <div className="card_3">
            <h2>Blog Two</h2>
            <img src={Rasm17} alt="404" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRICING;
