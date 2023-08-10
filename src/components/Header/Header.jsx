import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/" className="header__link">
        Home
      </NavLink>
      <NavLink to="/login" className="header__link">
        Login
      </NavLink>
    </nav>
  );
}

export default Header;
