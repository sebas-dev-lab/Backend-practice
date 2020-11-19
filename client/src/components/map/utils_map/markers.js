import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./iconLocation";

const Markers = ({ lat, log }) => {
  return <Marker position={[lat, log]} icon={IconLocation} />;
};

export default Markers;
