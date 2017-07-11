import React from 'react'
import './Homework.css'

function Homework(props) {
  return (
    <div className="homework">
      <h2>And now... <em>your</em> turn!</h2>
      <p>You've seen a couple examples of how to Route to new pages and fetch data from an API.</p>
      <p>Your assignment, should you choose to accept it (and you should), is to add some more routes to the API Party and fetch data from your favorite APIs.  The API you choose is up to you, but be sure to get some data and try to display it in a visually-pleasing way.</p>
      <p>In case you don't have a favorite API, here are some suggestions:</p>

      <ul>
        <li><a href="https://developers.google.com/maps/">Google Maps (https://developers.google.com/maps)</a></li>
        <li><a href="https://pokeapi.co">The Pokéapi (https://pokeapi.co)</a></li>
        <li><a href="https://openweathermap.org/api">OpenWeatherMap (https://openweathermap.org/api)</a></li>
        <li><a href="https://developer.spotify.com/web-api/">Spotify (https://developer.spotify.com/web-api/)</a></li>
      </ul>

    </div>
  )
}

export default Homework