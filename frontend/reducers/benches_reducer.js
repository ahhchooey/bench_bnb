import {RECEIVE_ALL_BENCHES, RECEIVE_BENCH} from "../actions/bench_actions.js";
import {UPDATE_BOUNDS} from "../actions/filter_actions.js";


const benchesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BENCHES:
      return Object.assign({}, action.benches);
    case RECEIVE_BENCH:
      return Object.assign({}, state, {[action.bench.id]: action.bench})
    default:
      return state;
  }
};

export default benchesReducer;
