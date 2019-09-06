import * as ApiUtil from "../utils/bench_api_util.js";


export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";

const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench: bench
});

const receiveAllBenches = (benches) => ({
  type: RECEIVE_ALL_BENCHES,
  benches: benches
});

export const fetchBenches = (filters) => (dispatch) => {
  return ApiUtil.fetchBenches(filters)
    .then(benches => dispatch(receiveAllBenches(benches)));
};

export const createBench = (bench) => (dispatch) => {
  return ApiUtil.createBench(bench)
    .then(bench => dispatch(receiveBench(bench)));
}
