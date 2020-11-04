import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./markers";
import "./styles.css";
import "leaflet/dist/leaflet.css";

const MapBike = () => {
  const [marker, setMarker] = useState({
    lat: -26.537704,
    log: -59.340762,
  });
  const [state, setState] = useState({
    lat: -26.5411793,
    log: -59.3570054,
    zoom: 13,
  });

  return (
    <MapContainer
      className="leaftlet-container"
      center={[state.lat, state.log]}
      zoom={state.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers lat={marker.lat} log={marker.log} />
    </MapContainer>
  );
};

export default MapBike;
