import React from "react";
import "./Header.scss";
import resumeSvg from "../../assets/resume.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <p className="heading">
            A <span>Resume</span> that stands out!
          </p>
          <p className="heading">
            Make your own resume now <span>It's free...</span>
          </p>
        </div>
        <div className="right">
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
      <div className="button">
        <button >
        <Link className="link" to="/resume-builder">Start Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
