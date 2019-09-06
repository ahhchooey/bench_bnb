

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    Object.values(this.markers).forEach(mar => {
      mar.setMap(null);
    })
    this.markers = {};
    const benchesArray = Object.values(benches);
    for (let i = 0; i < benchesArray.length; i++) {
      let bench = benchesArray[i];
      let latlng = {lat: bench.lat, lng: bench.lng};
      this.markers[bench.id] = new google.maps.Marker({
        position: latlng,
        map: this.map,
        title: bench.description
      });
    }
  }

  createMarkerFromBench(bench) {
    //
  }
}
