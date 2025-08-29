import { useParams, useNavigate, } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import MovieCard from "../components/MovieCard";


const Movies = () => {
  const { title } = useParams();
  
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();



  return (
    <>
      <h2>Search Results</h2>
        {loading
          ? new Array(6)
              .fill(0)
              .slice(0, 6)
              .map((_, index) => (
                <div className="movie" key={index}>
                  <div className="movie__title">
                    <div className="movie__title--skeleton"></div>
                  </div>
                  <div className="movie__body">
                    <p className="movie__body--skeleton"></p>
                  </div>
                </div>
              ))
          : movies.Search &&
            movies.Search.slice(0, 6).map((movie) => (
              <div className="movie__list" key={movie.imdbID} onClick={() => navigate(`${movie.imdbID}`)}>
                <MovieCard movie={movie} />
                <div className="movie__title">{movie.Title}</div>
                <p className="movie__body">
                  {movie.Year} - {movie.Type}
                </p>
              </div>
            ))}
      
    </>
  );
};
      
      




export default Movies;
