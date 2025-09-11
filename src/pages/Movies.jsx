import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../index.css";
import Movie from "../components/Movie";
import SearchButton from '../components/SearchButton';
import axios from 'axios';


const Movies = () => {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ searchTitle, setSearchTitle ] = useState([]);  
  
  

  
  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=fast`
    );
    setMovies(data); 
    setLoading(false);
    console.log(data);
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
          <label className="movie__search--label">Search Movies</label>
          <input
            type="text"
            value={searchTitle}            
            placeholder="Search by Title, Genre, Year, or Imdb"
            onChange={(event) => setSearchTitle(event.target.value)}
            onKeyDown={(event) => onKeyDown(event.key)} />
          <SearchButton fetchMovies={fetchMovies} />
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
        : movies.Search && movies.Search.slice(0, 6).map(movie => (           
          <Movie key={movie.imdbID} movie={movie} />
        ))}
    </>          
  );
};


export default Movies;
