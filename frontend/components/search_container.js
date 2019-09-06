import {connect} from "react-redux";
import Search from "./search.jsx";
import {updateBounds, updateRange} from "../actions/filter_actions.js";
import {fetchBenches} from "../actions/bench_actions.js";


const mapStateToProps = (state, ownProps) => ({
  benches: state.entities.benches
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  fetchBenches: (benches) => dispatch(fetchBenches(benches)),
  updateRange: (ranges) => dispatch(updateRange(ranges))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
