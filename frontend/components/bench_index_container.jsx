import {connect} from "react-redux";
import BenchIndex from "./bench_index.jsx";
import {fetchBenches} from "../actions/bench_actions.js";


const mapStateToProps = (state) => ({
  benches: state.entities.benches,
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches())
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
