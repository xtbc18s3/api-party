import React, { Component } from 'react'

class PokemonDetails extends Component {
  render() {
    return (
      <div className="PokemonUser">
        Hi, {this.props.match.params.pokemon}
      </div>
    )
  }
}

export default PokemonDetails
