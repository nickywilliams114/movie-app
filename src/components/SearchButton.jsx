import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'; 



function SearchButton({fetchMovies}) {
 const [isLoading, setIsLoading] = useState(false);
 
 async function handleSearchClick() {
    setIsLoading(true);
    await fetchMovies();
    setIsLoading(false);
    console.log('Search completed!');    
  }

 return (
  <button onClick={handleSearchClick} disabled={isLoading}>
   {isLoading ? (
    <>
     <FontAwesomeIcon icon={faSpinner} spin /> Loading...
    </>
  ) : (
    <>
     <FontAwesomeIcon icon={faSearch} /> Search
    </>
  )}
  </button>
 );
}

export default SearchButton;