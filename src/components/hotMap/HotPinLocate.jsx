import React from "react";
import { CircleMarker, Marker } from "react-leaflet";
import locations from "/api/locations";
import L from "leaflet";
import blueicon from "../../../public/img/blueIcon.png";
import greenicon from "../../../public/img/greenIcon.png";
import redicon from "../../../public/img/redIcon.png";
import fireicon from "../../../public/img/fireIcon.png"

import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers";

function HotPinLocate({ setIsOpen, setPosition }) {
  const location = locations;

  const locationArr = Object.values(location.locations);

  const handleOpen = (location) => {
    setIsOpen(true);
    setPosition({
      latitude: location.latitude,
      longitude: location.longitude,
      name: location.name,
    });
  };



  function Icon(location) {
  
    const showIcon = 
    location.likeCount < 50 ? blueicon:
    location.likeCount >= 50 && location.likeCount < 100 ? greenicon:
    location.likeCount >= 100 && location.likeCount < 200 ? redicon:fireicon;
    
    return L.divIcon({
      className: "custom-marker",
      html: `
            <div style="position: relative; text-align: center;">
              <img src=${showIcon} style="width: 50px; height: 50px;" />
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                display: flex; top:16px; justify-content: center;
                color: white; font-weight: bold; font-size: 12px;">
                ${location.likeCount}
              </div>
            </div>
            `,
      iconSize: [50, 50],
      iconAnchor: [25, 25],
    });
 
  }

  return (
    <div>
      {locationArr.map((location) => {
        //setPosition({latitude:location.latitude,longitude:location.longitude})

        return (
          <>
            <Marker
              position={[location.latitude, location.longitude]}
              icon={Icon(location)}
              key={location.locationId}
              eventHandlers={{ click: () => handleOpen(location) }}
            />
          </>
        );
      })}
    </div>
  );
}

export default HotPinLocate;
