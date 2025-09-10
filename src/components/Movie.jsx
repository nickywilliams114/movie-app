import { Link } from "react-router-dom";

const Movie = (movie) => {
  return (
    <div className="movie">
      <div className="movie__body">
        <img className="movie__poster" src={movie.poster !== "N/A" ? movie.poster
          : "https://via.placeholder.com/100x200"} alt={movie.title} /> 
        <h2 className="movie__title">{movie.title}</h2>
        <p>{movie.year}</p>
      </div>
      <Link to={`/movies/${movie.plot}`}>
      <div className="btn__plot">View More Details</div>
      </Link>
    </div>
  );
};

export default Movie
      
        
          
        
      

    
      
    
    

      
