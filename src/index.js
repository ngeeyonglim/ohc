import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Routes,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import NotFound1 from './views/not-found'
import Home from './views/home'
import About from './views/about'
import Event from './views/event'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={Home} exact path="/home" />
        <Route component={About} exact path="/about" />
        <Route component={Event} exact path="/events" />
        <Route component={NotFound1} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
