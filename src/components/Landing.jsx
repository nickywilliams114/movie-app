import React from "react";
import MovieFind from '../assets/MovieFind.svg';
import SearchMovie from "./SearchMovie";

const Landing = () => {
  return (
    <>
    <section id="landing">
      <header>
        <h1>Global Movie Platform</h1>
          <h2>
            Discover tons of movies at your fingertips with{" "}
            <span style={{ color: "#0e4f74" }}>MOVIEFIND</span>
          </h2>
        <SearchMovie />
        <figure className="img__wrapper">
          <img src={MovieFind} alt="" />
        </figure>
      </header>
    </section>
    </>
  );
};
      
    

export default Landing;
