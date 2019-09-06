import {UPDATE_BOUNDS, UPDATE_RANGE} from "../actions/filter_actions.js";


const filtersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UPDATE_BOUNDS:
      return Object.assign({}, state, {bounds: action.bounds});
    case UPDATE_RANGE:
      return Object.assign({}, state, {minSeating: action.ranges.minSeating, maxSeating: action.ranges.maxSeating});
    default:
      return state;
  }
}

export default filtersReducer;
