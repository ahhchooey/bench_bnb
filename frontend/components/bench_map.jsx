import React from "react";
import MarkerManager from "../utils/marker_manager.js";
import {withRouter} from "react-router-dom";


class BenchMap extends React.Component {

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    });
  }

  componentDidMount() {
    this.initMap();
    google.maps.event.addListener(this.map, "idle", () => {
      let allBounds = this.map.getBounds();
      let bounds = {
        top: allBounds.getNorthEast().lat(),
        bot: allBounds.getSouthWest().lat(),
        left: allBounds.getSouthWest().lng(),
        right: allBounds.getNorthEast().lat()
      };
      this.props.fetchBenches({bounds: bounds});
      this.props.updateBounds(bounds);
    });
    google.maps.event.addListener(this.map, "click", (event) => {
      let lat = event.latLng.lat();
      let lng = event.latLng.lng();
      this.props.history.push({
        pathname: "benches/new",
        search: `lat=${lat}&lng=${lng}`
      });
    });
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id="map" ref="map">
        map
      </div>
    )
  }
}

export default withRouter(BenchMap);
