import React, { Component } from 'react'
import Github from './Github';

class GithubUser extends Component {
  render() {
    return (
      <div className="GithubUser">
        { this.props.match.params.username }
      </div>
    )
  }
}

export default GithubUser
