import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";
// import NavOptions from "./NavOptions";

const Navbar = () => {
  return (
    <div className="nv">
      <div className="logo">
        <Link to="/">
          <img
            id="logoImage"
            src="https://i.postimg.cc/KvhcYWvn/mi.png"
            alt="Not"
          />
        </Link>
      </div>

      <div className="nvbr">
        <a href="/miphones">Store</a>

        <a href="/redmiphones">Phone</a>

        <a href="/tv">Tv & Smart Home</a>

        <a href="/laptops">Laptop & Tablet</a>

        <a href="/lifestyle">LifeStyle</a>
      </div>

      <div className="right nvbr">
        <a href="/">Discover</a>
        <a href="/">Support</a>
        <a href="/">
          <i class="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="/">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="/">
          <i class="fa-regular fa-user"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
