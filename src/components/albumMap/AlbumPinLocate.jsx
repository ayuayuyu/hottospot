import L from 'leaflet';

import { Marker } from 'react-leaflet';
import icon from '/public/img/Group 17 (1).png';
import { useState, useEffect } from 'react';
// import locations from '../../../api/locations'
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers';

function AlbumPinLocate({ setIsOpen, setPosition, locationData }) {
  
    const locationArr = Object.values(locationData);
  
    const handleOpen = (location) => {
      setIsOpen(true);
      setPosition({
        latitude: location.latitude,
        longitude: location.longitude,
        name: location.name,
      });
      
    };
  
    function Icon(location) {
      return L.divIcon({
        className: 'custom-marker',
        html: `
               <div style="position: relative; text-align: center;">
                <img src=${icon} style="width: 45px; height: 55px;" />
              </div>
              `,
        iconAnchor: [25, 25],
      });
    }
  
    return (
      <div>
        {locationArr.map((location) => (
          <Marker
            position={[location.latitude, location.longitude]}
            icon={Icon(location)}
            key={location.locationId}
            eventHandlers={{ click: () => handleOpen(location) }}
          />
        ))}
      </div>
    );
}

export default AlbumPinLocate;
