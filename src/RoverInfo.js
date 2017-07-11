import React, { Component } from 'react'
import './RoverInfo.css'

const photoDates = {
  curiosity: '2015-05-30',
  opportunity: '2015-04-30',
  spirit: '2004-01-10'
}

class RoverInfo extends Component {
  state = {
    rover: {}
  }

  componentWillMount = () => {
    this.fetchRoverData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged) {
      this.fetchRoverData(nextProps);
    }
  }

  fetchRoverData(props) {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.match.params.rover}/photos?earth_date=${photoDates[props.match.params.rover]}&camera=fhaz&api_key=DEMO_KEY`)
      .then(res => res.json())
      .then(data => {
        const rover = {
          name: data.photos[0].rover.name,
          imageUrl: data.photos[0].img_src,
          earthDate: data.photos[0].earth_date
        }
        this.setState({rover})
      })
      .catch(err => console.warn(err))
  }

  render = () => {
    const { name, imageUrl, earthDate } = this.state.rover
    return (
      <div className="rover-info">
        <h2>Mars Rover Name: {name}</h2>
        <h3>Earth Date: {earthDate}</h3>
        <img src={imageUrl} alt="rover" />
      </div>
    )
  }
}

export default RoverInfo