import React from "react";
import Align from "../Imges/Align.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="maxw_one">

        <div className="bloc_flex1">
          <div className="bloc_one">
            <img src={Align} alt="404" />
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Template</a>
              </li>
            </ul>
          </div>

          <div className="bloc_one">
            <button>Buy Align</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
