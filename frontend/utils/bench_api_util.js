
const _startBounds = {bounds: {
    bot: 37.74187133792972,
    left: -122.47791534423828,
    right: 37.809713098290686,
    top: 37.809713098290686
}};

export const fetchBenches = (filters = _startBounds) => {
  return $.ajax({
    url: "/api/benches",
    method: "GET",
    data: {
      bounds: filters.bounds,
      minSeating: filters.minSeating,
      maxSeating: filters.maxSeating
    },
    error: (err) => console.log(err)
  })
};

export const createBench = (bench) => {
  return $.ajax({
    url: "/api/benches",
    method: "POST",
    data: {
      bench: bench
    }
  })
}
