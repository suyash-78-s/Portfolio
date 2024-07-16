import { useState } from "react";

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home-section">Suyash Rokade</a>
        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className={`collapse navbar-collapse ${toggle ? "show" : ""}  justify-content-end` } id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto bg-red-500">
            <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
            <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
            <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
            <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
            <li className="nav-item"><a href="#message-section" className="nav-link"><span>Message me</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
