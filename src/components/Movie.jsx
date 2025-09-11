import { Link } from "react-router-dom";

const Movie = ({movie}) => {
  return (
    <div className="movie">
      <div className="movie__body">
        <img className="movie__poster" src={movie.Poster !== "N/A" ? movie.Poster
          : "https://via.placeholder.com/100x200"} alt={movie.Title} /> 
        <h2 className="movie__title">{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
      <Link to={`/movies/${movie.Plot}`}>
      <div className="btn__plot">View More Details</div>
      </Link>
    </div>
  );
};

export default Movie
      
        
          
        
      

    
      
    
    

      
