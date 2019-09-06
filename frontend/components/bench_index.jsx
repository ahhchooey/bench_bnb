import React from "react";


export default class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches({filters: this.props.filters});
  }

  render() {
    const benchesArray = Object.values(this.props.benches);
    return (
      <div>
        {benchesArray.map(b => <div key={b.id}>{b.description}</div>)} 
      </div>
    )
  }
}
