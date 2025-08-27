import React from "react";
import { Link, NavLink } from "react-router-dom";
import MovieFind from "../assets/MovieFind.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={MovieFind} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
            <NavLink to="/searchmovie" className="nav__link">
              Search Movies
            </NavLink>
            <button
              onClick={() =>
                (window.location.href = "mailto:nickywadhwani@outlook.com")
              }
              className="btn-help"
            >
              Help
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
