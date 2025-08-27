import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <>
      <div key={movie.imdbID} className="movie">
        <img src={movie.Poster !== "N/A" ? movie.Poster
                  : "https://via.placeholder.com/200x300"}
            alt={movie.Title} 
            className="movie-poster"/> 
        <h2 className="movie__title">{movie.Title}</h2>
      
        <p>{movie.year}</p>
      </div>
        <Link to={`/movies/${movie.plot}`}>
          <div className="btn__plot">View Details</div>
        </Link>
    </>
  );
};
    
export default MovieCard;
      
