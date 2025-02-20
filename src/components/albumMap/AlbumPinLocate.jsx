import L from "leaflet";
import { Marker } from "react-leaflet";
import icon from "/public/img/Group 17 (1).png";
import locations from '../../../api/locations'

function AlbumPinLocate({setIsOpen,setPosition}) {
  const location = locations;
  const locationArr =  Object.values(location.locations)

    //defaultMarker
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: icon,
    });
  
  function Icon(location) {

    return L.divIcon({
      className: "custom-marker",
      iconSize: [50, 50],
      iconAnchor: [25, 25],
    });
  }



  const handleOpen = (location) => {
    setIsOpen(true);
    setPosition({latitude:location.latitude,longitude:location.longitude,name:location.name})
  };

  return (
    <div>
      {locationArr.map((location) => {
          //setPosition({latitude:location.latitude,longitude:location.longitude})
          return (
            <Marker position={[location.latitude, location.longitude]} icon={Icon(location)} key={location.name} eventHandlers={{click: () => handleOpen(location)}}/>
          );
        })}
    </div>
  )
}

export default AlbumPinLocate
