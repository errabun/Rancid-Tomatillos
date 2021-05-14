import React, { Component } from 'react'
import AllMovies from '../AllMovies/AllMovies'
import './App.css'
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      currentCard: null
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log(Number(event.target.id))
    this.setState({ currentCard: Number(event.target.id) })
  }

  

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <h1>Rotten Tomatillos</h1>
          <h2>Profile</h2>
        </nav>
        <p>landing img</p>
        { !this.state.currentCard &&
          <AllMovies movieData={this.state.movies} handleClick={this.handleClick}/>
        }
        { this.state.currentCard &&

        }

      </main>
    )
  }
}

export default App
