import React from "react";
import Rasmm from "../Imges/Align.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="maxw_one">
        <div className="bloc_flex6">
          <div className="headfoot">
            <h1>Build a beautiful</h1>
            <h1>product with Align</h1>
            <h4>
              Align contains all the pages and sections needed <br /> to create
              beautiful digital products with ease.
            </h4>
          </div>
          <div className="magicbar">
            <h4>Overview</h4>
            <h3>Overview</h3>
            <h3>Home 1</h3>
            <h3>Home 2</h3>
            <h3>Home 3</h3>
            <h3>Pricing 1</h3>
            <h3>Pricing 2</h3>
          </div>
          <div className="magicbar">
            <h4>Pages</h4>
            <h3>About 1</h3>
            <h3>About 2</h3>
            <h3>About 3</h3>
            <h3>Blog 1</h3>
            <h3>Blog 2</h3>
            <h3>Blog Post</h3>
            <h3>Blog Post</h3>
            <h3>Team Member</h3>
            <h3>404</h3>
            <h3>Password</h3>
          </div>
          <div className="magicbar">
            <h4>Pages</h4>
            <h3>Contact 1</h3>
            <h3>Contact 2</h3>
            <h3>Contact 3</h3>
            <h3>Customer Stories</h3>
            <h3>Customer Story</h3>
            <h3>Login</h3>
            <h3>Register</h3>
            <h3>Style Guide</h3>
            <h3>Changelog</h3>
            <h3>Licence</h3>
          </div>
        </div>
        <div className="footbar">
          <div className="bloc_flex7">
            <div className="footalign">
              <img src={Rasmm} alt="404" />
              <h2>
                | © Template by ShahzodbekDev{" "}
                <a href="https://github.com/ShahzodbekDev">
                  <i class="fa-brands fa-github"></i> GitHib
                </a>
              </h2>
            </div>
            <div className="footnav">
              <h3>Overview</h3>
              <h3>Pages</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
