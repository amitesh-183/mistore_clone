import React from "react";
import "../styles/nav.css";
import { logo } from "../data/data.json";
import { Link } from "react-router-dom";
// import NavOptions from "./NavOptions";

const Navbar = () => {
  return (
    <div className="nv">
      <div className="logo">
        <Link to="/">
          <img id="logoImage" src={logo} alt="Not" />
        </Link>
      </div>

      <div className="nvbr">
        <a href="/miphones">Xiaomi Phones</a>

        <a href="/redmiphones">Redmi Phones</a>

        <a href="/tv">Tv</a>

        <a href="/laptops">Laptops & Tablets</a>

        <a href="/lifestyle">Fitness</a>

        <a href="/home">Smart Home</a>

        <a href="/audio">Audio</a>
      </div>

      <div className="serch">
        <input placeholder="Search Products"></input>
        <span className="material-symbols-outlined">search</span>
      </div>
    </div>
  );
};

export default Navbar;
