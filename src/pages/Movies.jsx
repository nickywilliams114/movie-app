import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

const Movies = () => {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=fast`
    );
    setMovies(data);
    setLoading(false);
  }

  useEffect(() => {
    
    fetchMovies();
  }, []);


  return (
    <>
      
      {loading 
        ? new Array(6).fill(0).map((_, index) => (
            <div className="movie" key={index}>
              <div className="movie__title">
                <div className="movie__title--skeleton"></div>
              </div>
              <div className="movie__body">
                <p className="movie__body--skeleton"></p>
              </div>
            </div>
          )) 
        : movies.Search && movies.Search.map(movie => (
            <div className="movie" key={movie.imdbID}>
              <div className="movie__title">{movie.Title}</div>
              <p className="movie__body">{movie.Year} - {movie.Type}</p>
              <img className="movie__poster" src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
    </>
  );
};
        
        
        
        
          
      

// <p>{ movie.title}</p>
// <p>{ movie.year}</p>
// <p>{ movie.imdbId}</p>
// <p>{ movie.type}</p>
// <p>{ movie.poster}</p>

export default Movies;
