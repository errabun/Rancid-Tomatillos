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
    const id = parseInt(event.target.id)
    return this.fetchSingleMovie(id)
  }

  fetchSingleMovie = (id) => {
    fetchMovieId(id)
      .then(data => {
        this.setState({ currentMovie: data.movie })
      })
      .catch((error) => this.setState({ error: "Couldn't fetch the movie you selected, please try again!" }))
  }

  componentDidMount() {
    fetchAllMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch((error) => this.setState({ error: "Couldn't load any movies, please try again!" }))
  }

  render() {
    return (
      <main>
        <Header />
        <div className="landing-img">
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="movie icon" />
        </div>
        {!this.state.movies.length &&
          !this.state.error &&
          <h1>Loading...</h1>
        }
        <Switch>
          <Route
          exact path='/movieInfo/:id'
          render={({ match }) => {
            const { id } = match.params
            this.fetchSingleMovie(id)
            return this.state.currentMovie ?
               <MovieInfo currentMovieInfo={this.state.currentMovie} /> :
               <h1>{this.state.error}</h1>
          }}
          />
          <Route
            exact path='/'
            render={() => {
              return !this.state.error ?
                <AllMovies movieData={this.state.movies} handleClick={this.handleClick} /> :
                <h1>{this.state.error}</h1>
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App
