import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie__body">
        <img
          className="movie__poster"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/100x200"
          }
          alt={movie.Poster}
        />
      </div>
      <h3 className="movie__title">{movie.Title}</h3>
      <p className="movie__year">{movie.Year}</p>
    </div>
  );
};

export default Movie;
