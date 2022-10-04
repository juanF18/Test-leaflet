import React from "react";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "../IconLocation";

export function Markers() {
  return (
    <Marker
      position={[5.057296768809809, -75.489851994261]}
      icon={IconLocation()}
    >
      <Popup>
        Estadio palogrande <br /> Manizales Caldas
      </Popup>
    </Marker>
  );
}
