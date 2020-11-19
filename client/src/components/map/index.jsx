import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./utils_map/markers";
import "./styles.css";
import "leaflet/dist/leaflet.css";

const MapBike = ({ locBikes }) => {
  /* General José de San Martín, Chaco, Argentina- Location start */
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
      {locBikes &&
        locBikes.map((bike) => {
          return <Markers lat={bike.location[0]} log={bike.location[1]} />;
        })}
    </MapContainer>
  );
};

export default MapBike;
