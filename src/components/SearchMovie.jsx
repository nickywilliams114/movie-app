import React, { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';
import SearchButton from './SearchButton';
import Spinner from "../components/Spinner";
import axios from 'axios';
import Movies from '../pages/Movies';

const SearchMovie = () => {
  const { title } = useParams();
  const [ searchTitle, setSearchTitle ] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  

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
    <div className="search">
      <div className="input__container">
          <input
            type="text"
            value={searchTitle}
            placeholder="Search by Title, Genre, Year, or Imdb"
            onChange={(event) => setSearchTitle(event.target.value)}
            onKeyDown={(event) => onKeyDown(event.key)} /> 
          <Spinner />           
          <SearchButton />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default SearchMovie;
