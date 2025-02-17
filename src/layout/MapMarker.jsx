import React from "react";
import L from "leaflet";
import { Marker } from "react-leaflet";
import icon from "../../public/img/Group 17 (1).png";


function MapMarker({location}) {
  //defaultMarker
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: icon,
  });

  const colorMarker = () => {
    return L.icon({
      iconUrl: icon,
    });
  };


  return (
    <>
      <Marker position={[location.latitude, location.longitude]} icon={colorMarker()} />
    </>
  );
}

export default MapMarker;
