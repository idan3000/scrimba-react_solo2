import React from "react";
import mapImg from "../images/mapImg.png";

const NavBar = () => (
  <nav>
    <div className="nav__content">
      <img src={mapImg} alt="mapImg" className="mapImg" />
      <span className="nav__title">my travel journal.</span>
    </div>
  </nav>
);

export default NavBar;
