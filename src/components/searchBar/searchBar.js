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
      <form className='landing-img' style={{
        backgroundImage:'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)'
      }}>
        <input
          type='text'
          placeholder='Search title or genre'
          name='query'
          value={this.state.query}
          onChange={event => this.filterSearch(event)} >
        </input>
        <button onClick={event => this.submitSearch(event)}>SEARCH</button>
      </form>
    )
  }
}

export default Search
