import React from "react";
import BenchMap from "./bench_map.jsx";
import BenchIndexContainer from "./bench_index_container.jsx";
import FilterForm from "./filter_form.jsx";


export default class Search extends React.Component {

  render() {
    return (
      <div>
        <BenchIndexContainer />
        <BenchMap benches={this.props.benches} updateBounds={this.props.updateBounds}
        fetchBenches={this.props.fetchBenches} />
        <FilterForm fetchBenches={this.props.fetchBenches} updateRange={this.props.updateRange}/>
      </div>
    )
  }
}
