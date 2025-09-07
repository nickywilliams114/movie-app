import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <>
      <div className="movies__container">
        <div className="movie" key={movie.imdbID}>
          <img className="movie__poster" src={movie.Poster !== "N/A" ? movie.Poster
              : "https://via.placeholder.com/100x200"} alt={movie.Title} /> 
          <h2 className="moviecard__title">{movie.Title}</h2>
          <p>{movie.year}</p>
        </div>
        <Link to={`/movies/${movie.plot}`}>
          <div className="btn__plot">View Details</div>
        </Link>
      </div>
    </>
  );
};
    
export default MovieCard;
      
