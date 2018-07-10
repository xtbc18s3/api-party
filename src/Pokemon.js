import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Pokemon.css'
import PokemonDetails from './PokemonDetails'

class Pokemon extends Component {
  state = {
    pokemon: '',
  }

  handleChange = ev => {
    this.setState({ pokemon: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokemon}`)
  }

  render() {
    return (
      <div className="Pokemon">
        <h1>Pok&eacute;mon</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              autoFocus
              type="text"
              value={this.state.pokemon}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up a Pok&eacute;mon
            </button>
          </div>
        </form>

        <Route
          path="/pokemon/:pokemon"
          component={PokemonDetails}
        />
      </div>
    )
  }
}

export default Pokemon
