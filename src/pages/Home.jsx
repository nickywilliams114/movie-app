import React from "react";
import Landing from "../components/Landing";
import MovieFind from "../assets/MovieFind.svg";
import SearchMovie from "../components/SearchMovie";


const Home = () => {
  return (
    <div>
      <Landing />
      <SearchMovie />
      <figure className="img__wrapper">
        <img src={MovieFind} alt="MovieFind Logo" />
      </figure>
    </div>
  );
}

export default Home;
   
      


