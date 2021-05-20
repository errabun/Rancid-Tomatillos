import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import AllMovies from '../AllMovies/AllMovies'
import MovieInfo from '../MovieInfo/MovieInfo'
import Header from '../Header/Header'
import { fetchAllMovies } from '../../utilities/ApiCalls'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
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
            return <MovieInfo currentMovieInfo={id} />
          }}
          />
          <Route
            exact path='/'
            render={() => {
              return !this.state.error ?
                <AllMovies movieData={this.state.movies} /> :
                <h1>{this.state.error}</h1>
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App
