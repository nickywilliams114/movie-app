import React from "react";
import { Link } from 'react-router-dom';
import SearchButton from './SearchButton';

const Landing = () => {
  return (
    <>
      <h1>Global Movie Platform</h1>
      <h2>
        Discover tons of movies at your fingertips with{" "}
        <span style={{ color: "#0e4f74" }}>MOVIEFIND</span>
      </h2>
      <div className="movie__search">
        <div className="input__container">
          <input type="text" 
          placeholder="Search by Title, Genre, Year, or Imdb"  />
          <SearchButton />
        </div>
      </div>
    </>
  );
};

export default Landing;
