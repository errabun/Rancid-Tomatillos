import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import AllMovies from '../AllMovies/AllMovies'
import MovieInfo from '../MovieInfo/MovieInfo'
import Header from '../Header/Header'
import './App.css'

const App = () => {
  return (
    <main>
      <Header />
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
            return (
              <AllMovies /> 
            )
          }}
        />
      </Switch>
    </main>
  )
}

export default App
