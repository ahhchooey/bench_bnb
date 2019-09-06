import React from "react";
import {withRouter} from "react-router-dom";


class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      lat: this.props.lat,
      lng: this.props.lng,
      occupancy: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let thing = Object.assign({}, this.state)
    thing.lat = parseFloat(thing.lat);
    thing.lng = parseFloat(thing.lng);
    thing.occupancy = parseInt(thing.occupancy);
    this.props.createBench(thing);
    this.setState({
      description: "",
      lat: this.props.lat,
      lng: this.props.lng,
      occupancy: 0
    });
    this.props.history.push({
      pathname: "/"
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={this.state.description} onChange={this.handleInput("description")} />

        <label htmlFor="lat">Latitude:</label>
        <input disabled type="text" id="lat" value={this.state.lat} onChange={this.handleInput("lat")}/>

        <label htmlFor="lng">Longitude:</label>
        <input disabled type="text" id="lng" value={this.state.lng} onChange={this.handleInput("lng")}/>

        <label htmlFor="occupancy">Occupancy:</label>
        <input type="text" id="occupancy" value={this.state.occupancy} onChange={this.handleInput("occupancy")}/>

        <button onClick={this.handleSubmit}>Create New Bench</button>
      </form>
    )
  }
}

export default withRouter(BenchForm);
