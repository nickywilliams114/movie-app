import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SearchButton from "./SearchButton";

const SearchMovie = () => {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
  // const navigate = useNavigate();

  
  
  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=fast`
    );
    setMovies(data);
    setLoading(false);
  }

  function onSearch() {
    fetchMovies(searchTitle);
  }

  // async function fetchMovies() {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=fast&type=movie`
  //     );

  //     if (response.data.Response === "True") {
  //       setMovies(response.data.Search.slice(0, 6));
  //     } else {
  //       console.error(response.data.Error);
  //     }
  //   } catch (err) {
  //     console.error("Error fetching movies:", err);
  //   }
  //   setLoading(false);
  // };

  function onSearchKeyPress(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []); /// Empty dependency array ensures this runs once on mount

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
              <div className="movie-list" key={movie.imdbID}>
                <div className="movie__title">{movie.Title}</div>
                  <p className="movie__body">{movie.Year} - {movie.Type}</p>
              </div>
            ))
        }
      </div>
    </>
  );
};

export default SearchMovie;
