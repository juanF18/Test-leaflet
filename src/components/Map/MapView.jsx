import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./MapView.css";
import "leaflet/dist/leaflet.css";

import { Markers } from "../Marker";

/**
 * MapContainer
 * center = cordenadas de inicio
 * zoom = el zooom inicial
 *
 * TitleLayer
 * url = es el estilo del mapa
 * attribution = A quien pertenese
 *
 * @returns El componente del mapa
 */

export function MapView() {
  return (
    <>
      <MapContainer
        center={["5.056823517198582", "-75.48567999269366"]}
        zoom={14}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers />
      </MapContainer>
    </>
  );
}
