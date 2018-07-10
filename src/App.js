import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </header>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" render={() => <h1>GitHub!</h1>} />
          <Route render={() => (
              <p>To get started, click one of the links above.</p>
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
