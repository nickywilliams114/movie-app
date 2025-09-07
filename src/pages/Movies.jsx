import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../index.css";
import MovieCard from "../components/MovieCard";
import SearchButton from '../components/SearchButton';
import Spinner from "../components/Spinner";
import axios from 'axios';


const Movies = () => {
  
  const [loading, setLoading] = useState(true);
  const [ searchTitle, setSearchTitle ] = useState([]);
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  
  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=fast`
    );
    setMovies(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  function onSearch() {
    fetchMovies(searchTitle);
  }

  function onKeyDown(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  
    

  return (
    <>
      <div className="search">
        <div className="searchInput__container">
          <label for="searchMovies">Search Movies</label>
          <input
            type="text"
            value={searchTitle}
            
            placeholder="Search by Title, Genre, Year, or Imdb"
            onChange={(event) => setSearchTitle(event.target.value)}
            onKeyDown={(event) => onKeyDown(event.key)} />
          <Spinner />
          <SearchButton />
        </div>
      </div>
      {loading
        ? new Array(6).fill(0).slice(0, 6).map((_, index) => (  
          <div className="movie" key={index}>
            <div className="movie__title">
              <div className="movie__title--skeleton"></div>
            </div>
            <div className="movie__body">
              <p className="movie__body--skeleton"></p>
            </div>
          </div>
          ))
        : movies.search && movies.search.slice(0, 6).map((movie) => (            
          <div className="movies" key={movie.title} onClick={() => navigate(`${movie.poster}`)}>
            <MovieCard movie={movie} />
              <div className="movie__title">{movie.title}</div>
                <p className="movie__body">
                  {movie.year} - {movie.type}
                </p>
          </div>                            
        ))}
    </>          
  );
};


export default Movies;
