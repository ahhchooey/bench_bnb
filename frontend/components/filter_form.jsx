import React from "react";


export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value})    
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let thing = Object.assign({}, this.state);
    thing.min = parseInt(thing.min);
    thing.max = parseInt(thing.max);
    this.props.updateRange({minSeating: thing.min, maxSeating: thing.max})
    this.props.fetchBenches({minSeating: thing.min, maxSeating: thing.max});
  }

  render() {
    return (
      <div>
        <label htmlFor="min">Min Seating:</label>
        <input type="text" id="min" value={this.state.min} onChange={this.handleChange("min")} />
        <label htmlFor="max">Max Seating:</label>
        <input type="text" id="max" value={this.state.max} onChange={this.handleChange("max")} />
        <button onClick={this.handleSubmit}>Filter</button>
      </div>
    )
  }
}
