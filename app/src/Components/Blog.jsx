import React from "react";
import Rasm10 from "../Imges/IMAGE11.png";
import Rasm11 from "../Imges/IMAGE12.png";
import Rasm12 from "../Imges/IMAGE13.png";
import Rasm13 from "../Imges/IMAGE14.png";
import Rasm14 from "../Imges/IMAGE.png";
import Rasm15 from "../Imges/IMAGE88.png";

const Blog = () => {
  return (
    <div className="blog">
      <div className="bloc_flex2">
        <h4>BLOG</h4>
        <h1>CMS Pages</h1>
      </div>
      <div className="maxw_one">
        <div className="bloc_flex4">
          <div className="card_3">
            <h2>Blog One</h2>
            <img src={Rasm10} alt="404" />
          </div>
          <div className="card_3">
            <h2>Blog Two</h2>
            <img src={Rasm11} alt="404" />
          </div>
          <div className="card_3">
            <h2>Blog Article (CMS)</h2>
            <img src={Rasm12} alt="404" />
          </div>
          <div className="card_3">
            <h2>Customer Stories</h2>
            <img src={Rasm13} alt="404" />
          </div>
          <div className="card_3">
            <h2>Customer Stories Article (CMS)</h2>
            <img src={Rasm14} alt="404" />
          </div>
          <div className="card_3">
            <h2>Team Member (CMS)</h2>
            <img src={Rasm15} alt="404" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
