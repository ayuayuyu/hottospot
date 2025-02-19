import L from 'leaflet';
import { Marker } from 'react-leaflet';
import icon from '/public/img/Group 17 (1).png';
import { useState, useEffect } from 'react';
// import locations from '../../../api/locations'

function AlbumPinLocate({ setIsOpen, setPosition, locationData }) {
  //AlbumMap からlocationDataを受け取る
  // const location = locations;
  // const locationArr = Object.values(location);
  const [locationArr, setLocationArr] = useState([]);

  useEffect(() => {
    if (locationData) {
      setLocationArr(Object.values(locationData));
    } else {
      console.warn('locationData が正しく取得できていません:', locationData);
    }
  }, [locationData]);

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

  var greenIcon = L.icon({
    iconUrl: 'Group 17 (1).png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  const handleOpen = (location) => {
    setIsOpen(true);
    setPosition({
      latitude: location.latitude,
      longitude: location.longitude,
      name: location.name,
    });
  };
  const redOptions = { color: 'red' };

  return (
    <div>
      {locationArr.map((location) => {
        //setPosition({latitude:location.latitude,longitude:location.longitude})
        return (
          <Marker
            position={[location.latitude, location.longitude]}
            icon={colorMarker('red')}
            key={location.name}
            eventHandlers={{ click: () => handleOpen(location) }}
          />
        );
      })}
    </div>
  );
}

export default AlbumPinLocate;
