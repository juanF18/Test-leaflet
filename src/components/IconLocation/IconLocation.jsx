import { IconPin } from "../../assets";
import L from "leaflet";

export function IconLocation() {
  return L.icon({
    iconUrl: IconPin,
    iconRetinaUrl: IconPin,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });
}
