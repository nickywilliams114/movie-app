import React from "react";
import Landing from "../components/Landing";
import MovieFind from "../assets/MovieFind.svg";


const Home = () => {
  return (
    <div>
      <Landing />
      <figure className="img__wrapper">
        <img src={MovieFind} alt="" />
      </figure>
    </div>
  );
}

export default Home;
   
      


