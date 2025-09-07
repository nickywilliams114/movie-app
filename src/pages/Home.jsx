import React from "react";
import { useNavigate } from 'react-router-dom';
import Landing from "../components/Landing";
import MovieFind from "../assets/MovieFind.svg";



const Home = () => {
  const navigate = useNavigate();

  return (
      <div>
        <Landing />       
        <figure className="img__wrapper">
          <img src={MovieFind} alt="MovieFind Logo" onClick={() => navigate('/search')}/>
        </figure>
      </div>
  );
}

export default Home;

   
      


