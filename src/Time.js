import React from 'react'
import axios from 'axios'


class Time extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: this.props.lat,
      lon: this.props.lon,
      time: ''
    }
  }


  
  componentWillReceiveProps (nextProps) {

    console.log(nextProps.lat)
    if(nextProps.lat !== this.state.lat || nextProps.lon !== this.state.lon){
      this.setState({
        lat: nextProps.lat,
        lon: nextProps.lon
      })

      const url = 'http://api.timezonedb.com/v2.1/get-time-zone'
      const params = {
        key: `1WS9AV4WHCI4`,
        format: 'json',
        by:'position',
        lat: this.state.lat,
        lng: this.state.lon
      }

      axios.get(url, {params})
      .then(res => {
        console.log(res)
        this.setState({
          time: res.data.formatted
        })
      }).catch(function(err){
        console.log(err)
      })
    }
    console.log(this.state)
  }


  render(){
    return (
      <section>
        <h1>{this.state.time}</h1>
      </section> 
    )  
  }
}


export default Time