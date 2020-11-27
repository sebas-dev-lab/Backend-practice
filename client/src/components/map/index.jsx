import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Circle, CircleMarker, LayerGroup, Popup } from "react-leaflet";

import Markers from "./utils_map/markers";
import "./styles.css";
import "leaflet/dist/leaflet.css";

const Map = ({ loc, centers }) => {
  /* General José de San Martín, Chaco, Argentina- Location start */
  const [state, setState] = useState({
    lat: -26.5411793,
    log: -59.3570054,
    zoom: 13,
  });
  //TODO: center debe ser un array de objetos de centros donde se deben extraer los datos para mostrar en el mapa.

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
      {loc &&
        loc.map((bike) => {
          return <Markers lat={bike.location[0]} log={bike.location[1]} />;
        })}
      {/* <CircleMarker center={centers} radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker> */}
    </MapContainer>
  );
};

export default Map;
