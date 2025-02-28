import { SVGOverlay, useMap, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers";
function AlbumPinLocate({ setIsOpen, setPosition, locationData }) {
  const locationArr = Object.values(locationData);
  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(map.getZoom());


  useMapEvents({
    zoomend: () => {
      setZoomLevel(map.getZoom());
    },
  });

  const getBounds = (latitude, longitude) => {
    let baseSize = 0.04;

    const scaleFactor = 13 / zoomLevel;
    const size = baseSize * scaleFactor;

    console.log("zoomLevel", zoomLevel);

    return [
      [latitude - size / 4, longitude - size / 4],
      [latitude + size / 4, longitude + size / 4],
    ];
  };
  return (
    <div>
      {locationArr.map((location, index) => {
        return (
          <div key={index}>
            <SVGOverlay
              key={index}
              bounds={getBounds(location.latitude, location.longitude)}
            >
              <svg
                pointerEvents="none"
                viewBox="-25 0 160 100" //円の場所
              >
                <defs>
                  <mask id={`mask-${index}`}>
                    <circle cx="50" cy="50" r="50" fill="white" />
                  </mask>
                </defs>
                <rect
                  width="100"
                  height="100"
                  fill="none"
                  stroke="#F54A4C"
                  strokeWidth="5"
                  rx="50"
                />
                <image
                  href={location.photo}
                  mask={`url(#mask-${index})`}
                  preserveAspectRatio="none"
                  style={{
                    pointerEvents: "visiblePainted",
                    borderRadius: "50%",
                    width: "80%",
                    height: "100%",
                  }} //width->写真の中の場所
                  onClick={() => {
                    setIsOpen(true);
                    setPosition({
                      latitude: location.latitude,
                      longitude: location.longitude,
                      name: location.name,
                    });
                    map.setView([location.latitude, location.longitude], 13, {
                      animate: true,
                    });
                  }}
                />
              </svg>
            </SVGOverlay>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumPinLocate;
