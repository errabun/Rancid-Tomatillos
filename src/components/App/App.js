import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import AllMovies from '../AllMovies/AllMovies'
import MovieInfo from '../MovieInfo/MovieInfo'
import Header from '../Header/Header'
import { fetchAllMovies, fetchMovieId } from '../../utilities/ApiCalls'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null
    }
  }

  handleClick = (event) => {
    return fetchMovieId(event);
  }

  componentDidMount() {
    return fetchAllMovies();
  }

  render() {
    return (
      <main>
        <Header />
        <div className="landing-img">
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="movie icon" />
        </div>
        { this.state.error &&
          <h1>{this.state.error}</h1>
        }
        {!this.state.movies.length &&
          !this.state.error &&
          <h1>Loading...</h1>
        }
        <Switch>
          <Route
          exact path='/movieInfo/:id'
          render={() => {
            if (this.state.currentMovie) {
              return (<MovieInfo currentMovieInfo={this.state.currentMovie} />)
            }
          }}
          />
          <Route
            exact path='/'
            render={() => <AllMovies movieData={this.state.movies} handleClick={this.handleClick} />}
          />
        </Switch>
      </main>
    )
  }
}

export default App
