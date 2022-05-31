import React from "react";
import "../styles/PreNavbar.css";
import { Link } from "react-router-dom";

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div className="lnv">
        <Link to="/">XIAOMI INDIA</Link>
        <span>|</span>
        <Link to="/">GET MI STORE APP</Link>
        <span>|</span>
        <Link to="/">ONLINE HELP</Link>
        <span>|</span>
        <Link to="/">RETAIL STORE</Link>
      </div>

      <div className="rnv">
        <Link to="/">SIGN IN</Link>
        <span>|</span>
        <Link to="/">SIGN UP</Link>
        <span>|</span>
        <Link to="/">
          <span className="material-symbols-outlined" id="crticn">
            shopping_cart
          </span>
          CART (0)
        </Link>
      </div>
    </div>
  );
};

export default PreNavbar;
