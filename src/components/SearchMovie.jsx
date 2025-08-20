import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []); /// Empty dependency array ensures this runs once on mount
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=fast&type=movie`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search.slice(0, 6));
      } else {
        console.error(response.data.Error);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // function onSearch() {
  //   fetchMovies();
  //   console.log("Search button clicked");
  // };

  function onSearchKeyPress(key) {
    if (key === "Enter") {
      onSearchKeyPress();
    }
  }

  return (
    <>
      <div className="movie__search">
        <div className="input__container">
          <input
            type="text"
            value={searchId}
            onChande={(event) => setSearchId(event.target.value)}
            onKeyPress={(event) => onSearchKeyPress(event.key)}
          />
          <SearchButton />
        </div>
      </div>
      <div className="movie-container">
        <h2>First 6 Movies with "Fast" in the Title</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/200x300"
                }
                alt={movie.Title}
                className="movie-poster"
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchMovie;
