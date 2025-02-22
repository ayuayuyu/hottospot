import { Marker } from "react-leaflet";
import L from "leaflet";
import blueicon from "../../../public/img/blueIcon.png";
import greenicon from "../../../public/img/greenIcon.png";
import redicon from "../../../public/img/redIcon.png";
import fireicon from "../../../public/img/fireIcon.png";
import PropTypes from "prop-types";

import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers";

function HotPinLocate({ setIsOpen, setPosition, locationData }) {
  const locationArr = Object.values(locationData);

  const handleOpen = (location) => {
    setIsOpen(true);
    setPosition({
      latitude: location.latitude,
      longitude: location.longitude,
      name: location.name,
      address: location.address,
      likeCount: location.likeCount,
      locationId: location.locationId,
      photo: location.photo,
    });
  };

  function Icon(location) {
    const showIcon =
      location.likeCount < 50
        ? blueicon
        : location.likeCount >= 50 && location.likeCount < 100
        ? greenicon
        : location.likeCount >= 100 && location.likeCount < 200
        ? redicon
        : fireicon;

    return L.divIcon({
      className: "custom-marker",
      html: `
            <div style="position: relative; text-align: center;">
              <img src=${showIcon} style="width: 50px; height: 50px;" />
              <div style="
              transform: translateY(-210%);
              color:white;
                display: flex; top:16px; justify-content: center;
                font-weight: bold; font-size: 12px;">
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

HotPinLocate.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  locationData: PropTypes.Object.isRequired,
};

export default HotPinLocate;
