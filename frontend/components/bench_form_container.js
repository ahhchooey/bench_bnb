import {connect} from "react-redux";
import BenchForm from "./bench_form.jsx";
import {createBench} from "../actions/bench_actions.js";

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng")
});

const mapDispatchToProps = (dispatch) => ({
  createBench: (bench) => dispatch(createBench(bench))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);
