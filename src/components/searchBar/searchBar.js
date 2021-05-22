import React from 'react'
import './searchBar.css' 

const Search = () => {
  return (
    <form>
      <input
        type='text'
        placeholder='Search title or genre'
        name='query'
        value={}
        onChange={event => filterSearch(event)} >  // need to write functionality for this function
      </input>
      <button onClick={event => submitSeach(event)}>SEARCH</button>
    </form>
  )
}

export default Search
