import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = movie.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }      
      }, 300);    
    };
    return () => {
      mountedRef.current = false;
    };
  });

  return (
    <div className="movie">
      {img ? (
        <>
          <Link to={`/movies/${movie.title}`}>
            <figure className="movie__img--wrapper">
              <img src={img.src} alt="" className="movie__img" />
            </figure>
          </Link>
          <div className="movie__body">
            <img className="movie__poster" src={movie.Poster !== "N/A" ? movie.Poster
              : "https://via.placeholder.com/100x200"} alt={movie.title} /> 
            <h2 className="movie__title">{movie.title}</h2>
            <p>{movie.year}</p>
          </div>
          <Link to={`/movies/${movie.plot}`}>
          <div className="btn__plot">View More Details</div>
          </Link>
        </>
      ) : (
        <>
          <div className="movie__img--skeleton"></div>
          <div className="movie__title--skeleton"></div>
          <div className="movie__body--skeleton"></div>
        </>
      )}
    </div>
  );
};

    
      
    
    
export default Movie;
      
