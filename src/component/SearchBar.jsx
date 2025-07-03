import React from 'react';
import { useState } from 'react';

 const SearchBar = ({ city, setCity, fetchWeather}) => {
  return (
     <>
        <div>SearchBar</div>
        <form onSubmit={(e)=> {e.preventDefault(); fetchWeather()}}>
            <input type="text" placeholder="Type City Name" Vlaue={city} onChange={(e)=>{
                setCity(e.target.value)
            }} />
            <button type="submit">Search</button>
        </form>
     </>
    
  )
}

export default SearchBar