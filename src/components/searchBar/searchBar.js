import React, { Component } from 'react'
import './SearchBar.css'

class Search extends Component {
  constructor() {
    super()
    this.state= {
      query: ''
    }
  }

  filterSearch = event => {
    this.setState({ query: event.target.value })
  }

  submitSearch = event => {
    event.preventDefault()

  }

  render() {
    return (
      <div className='search-container'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='Search title or genre'
            name='query'
            value={this.state.query}
            onChange={event => this.filterSearch(event)} >
          </input>
          <button onClick={event => this.submitSearch(event)}>SEARCH</button>
        </form>
      </div>
    )
  }
}

export default Search
