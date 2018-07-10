import React, { Component } from 'react'
import Github from './Github';

class GithubUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { username } = this.props.match.params
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    return (
      <div className="GithubUser">
        <img
          src={ this.state.user.avatar_url }
          alt={this.state.user.login}
        />
      </div>
    )
  }
}

export default GithubUser
