import React from "react";


export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rating: 1,
      body: "",
      bench_id:
    }
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
    thing.rating = parseInt(this.rating);
    //submit to server
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={this.state.title} onChange={this.handleChange("title")} />

        <label htmlFor="rating">Rating:</label>
        <input type="text" id="rating" value={this.state.rating} onChange={this.handleChange("rating")} />

        <label htmlFor="body">Body:</label>
        <input type="text" id="body" value={this.state.body} onChange={this.handleChange("body")} />

        <button onclick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

