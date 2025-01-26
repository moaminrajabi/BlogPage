import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "Linkactive" : "Link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "Linkactive" : "Link")}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "Linkactive" : "Link")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
