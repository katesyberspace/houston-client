import React, { Component } from 'react';
import './App.css';
import Autocomplete from 'react-google-autocomplete'
import Time from './Time'

class App extends Component {
  constructor(){
    super()
    this.state = {
      city: 'Houston',
      country: 'United States',
      lat: 29.7604267,
      lon: -95.3698028
    }
  }

  handleSelected = (location) => {
    this.setState({
      city: location.name,
      country: location.address_components[location.address_components.length - 1].long_name,
      lat: location.geometry.location.lat(),
      lon: location.geometry.location.lng()
    })
  }


  render() {
    const city = this.state.city
    const country = this.state.country
    const lat = this.state.lat
    const lon = this.state.lon

    return (
      <div className="App">
        <h1>{city} {country} {lat} {lon}</h1> 
        <Autocomplete
          style={{width: '90%'}}
          onPlaceSelected={ (place) => { this.handleSelected(place)} }
          types={['(regions)']}
        />
        {console.log(this.state)}
        
        <Time lat={lat} lon={lon}/>
      </div>
    );
  }
}

export default App;
