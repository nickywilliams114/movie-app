import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../components/Spinner';
import SearchButton from '../components/SearchButton';



const SearchMovie = () => {
  const [ isLoading, setLoading ] = useState(false);


  return (
    <div>
      <div className="input__container">
        <input type="text" placeholder="Search by Title, Genre or IMDb"></input>
        <SearchButton />
      </div>
    </div>
    
  )
}
      

export default SearchMovie
