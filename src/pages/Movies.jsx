import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import SearchMovie from "../components/SearchMovie";

const Movies = () => {
  const [movies, setMovies] = useState([]);


  return (
    <>
      <h2 className="search--results">Search Results</h2>
      <div className="movie-container">
        <div className="movie-grid">
          console.log(movies)
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster !== "N/A" ? movie.Poster
                  : "https://via.placeholder.com/200x300"}
                  alt={movie.Title} className="movie-poster"
                  />
              <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Movies;
