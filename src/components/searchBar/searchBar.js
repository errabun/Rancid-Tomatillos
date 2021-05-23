import React, { Component } from 'react'
import './SearchBar.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state= {
      query: ''
    }
  }

  searchInput = event => {
    this.setState({ query: event.target.value })
  }

  clearInput = () => {
    this.setState({ query: '' })
  }

  getQuery = event => {
    event.preventDefault()
    const inputData = this.state.query
    this.props.submitSearch(inputData)
    this.clearInput()
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
            onChange={event => this.searchInput(event)} >
          </input>
          <button className='submit-search' onClick={event => this.getQuery(event)}>SEARCH</button>
        </form>
      </div>
    )
  }
}

export default Search
