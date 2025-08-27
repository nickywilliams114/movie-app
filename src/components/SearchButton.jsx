import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'; 


function SearchButton() {
 const [isLoading, setIsLoading] = useState(false);
 

 const handleSearchClick = () => {
  setIsLoading(true);
    
  setTimeout(() => {
  setIsLoading(false);
      
  console.log('Search completed!');
  }, 2000);
 };

 return (
<button onClick={handleSearchClick}  disabled={isLoading}>
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