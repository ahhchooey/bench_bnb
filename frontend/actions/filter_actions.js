import * as APIUtil from "../utils/bench_api_util.js";


export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_RANGE = "UPDATE_RANGE";

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds: bounds
});

export const updateRange = (ranges) => ({
  type: UPDATE_RANGE,
  ranges: ranges
})


