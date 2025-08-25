function Movie({ title, year, imdbId, type, poster }) {
 return (
  <div>
   <div>{title}</div>
   <div>{year}</div>
   <div>{imdbId}</div>
   <div>{type}</div>
   <div>{poster}</div>
  </div>
 )
}

export default Movie;