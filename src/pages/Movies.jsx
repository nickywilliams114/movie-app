import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import SearchButton from "./SearchButton";
import MovieCard from "./MovieCard";

const Movies = () => {
  const { title } = useParams();
  console.log(useParams);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTitle, setSearchTitle] = useState(title);
  let navigate = useNavigate();

  function onSearch() {
    fetchMovies(searchTitle);
  }

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`
    );
    setMovies(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [searchTitle]);

  function onSearchKeyPress(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  return (
    <>
      <div className="search">
        <div className="input__container">
          <input
            type="text"
            value={searchTitle}
            placeholder="Search by Title, Genre, Year, or Imdb"
            onChange={(event) => setSearchTitle(event.target.value)}
            onKeyDown={(event) => onSearchKeyPress(event.key)}
          />
          <SearchButton />
        </div>
      </div>
      <div>
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
              <div className="movie-list" key={movie.imdbID}>
                <div className="movie__title">{movie.Title}</div>
                <p className="movie__body">
                  {movie.Year} - {movie.Type}
                </p>
              </div>
            ))}
      </div>
      <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imbID} onClick={() => navigate(`${movie.imdbID}`)} />
      ))} 
      </div>
    </>
  );
};




export default Movies;
