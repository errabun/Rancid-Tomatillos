import React, { Component } from 'react'
import './searchBar.css'

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
      <form>
        <input
          type='text'
          placeholder='Search title or genre'
          name='query'
          value={this.state.query}
          onChange={event => this.filterSearch(event)} >  // need to write functionality for this function
        </input>
        <button onClick={event => this.submitSearch(event)}>SEARCH</button>
      </form>
    )
  }
}

export default Search
