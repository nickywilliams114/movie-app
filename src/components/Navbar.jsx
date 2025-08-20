import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
            <Link to="/" className="nav__link">
              Home
            </Link>
            <Link to="/search" className="nav__link">
              Search Movies
            </Link>
            <button onClick={() => window.location.href = 'mailto:nickywadhwani@outlook.com'} className="btn-help">Help</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
