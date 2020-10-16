import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="https://github.com/iamsam14">GitHub</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/chefsrobles/">LinkedIn</a>
      </div>
      <div>
        <a
          href="https://www.dropbox.com/s/mkv1kc3lru0skrd/Sam-resume-ATS.pages?dl=0"
          download
        >
          Resume
        </a>
      </div>
      <div>
        <a href="mailto:sam.robles.199@gmail.com" rel="noopener noreferrer">
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
