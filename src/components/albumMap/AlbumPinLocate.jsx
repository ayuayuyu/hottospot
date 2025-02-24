import L from "leaflet";

import {
  Marker,
  SVGOverlay,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import icon from "/public/img/Group 17 (1).png";
import { useState, useEffect, useRef } from "react";
// import locations from '../../../api/locations'
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers";
import { height, width } from "@mui/system";
import { locationPositionAtom } from "../../atoms/locationPositionAtom";
import { useAtom } from "jotai";
import { ReactSVG } from "react-svg/dist";

function AlbumPinLocate({ setIsOpen, setPosition, locationData }) {
  const locationArr = Object.values(locationData);
  const animateRef = useRef(true);
  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(map.getZoom());
  const [isMaker, setIsMarker] = useState(false);
  //const locationData = useAtomValue(locationPositionAtom);

  console.log("photo", locationArr);


  useMapEvents({
    zoomend: () => {
      setZoomLevel(map.getZoom());
    },
  });


  const getIconSidze = () => {
    console.log("zoomLevel", zoomLevel);
    if (zoomLevel < 12) {
      return "100%";
    }

    if (zoomLevel >= 12 && zoomLevel <= 13) {
      return "80%";
    }
    //  else if (zoomLevel == 13) {
    //   return "5%";
    // }
    else if (zoomLevel == 14) {
      return "50%";
    } else if (zoomLevel == 15) {
      return "50%";
    } else if (zoomLevel > 15) {
      return "50%";
    }
    //return zoomLevel > 12 ? "30%" : "80%";
    //return zoomLevel > 12 ? "30%" : "80%";
  };

  const getPhotoSidze = () => {
    console.log("zoomLevel", zoomLevel);
    if (zoomLevel < 12) {
      return "80%";
    }

    if (zoomLevel >= 12 && zoomLevel <= 13) {
      return "60%";
    }
    //  else if (zoomLevel == 13) {
    //   return "5%";
    // }
    else if (zoomLevel == 14) {
      return "50%";
    } else if (zoomLevel == 15) {
      return "50%";
    } else if (zoomLevel > 15) {
      return "50%";
    }
    //return zoomLevel > 12 ? "30%" : "80%";
    //return zoomLevel > 12 ? "30%" : "80%";
  };

  const getBounds = (latitude, longitude) => {
    const size = 0.04;
    return [
      [latitude - size / 2 + 0.01, longitude - size / 2],
      [latitude + size / 2 + 0.01, longitude + size / 2],
    ];
  };


  return (
    <div style={{}}>
      {locationArr.map((location, index) => {
        console.log("photo", location);

        return (
          <SVGOverlay
            key={index}
            bounds={getBounds(location.latitude, location.longitude)}
            onClick={() => {
              setIsOpen(true);
              setPosition({
                latitude: location.latitude,
                longitude: location.longitude,
                name: location.name,
              });
              map.setView([location.latitude, location.longitude], 14, {
                animate: true,
              });
            }}
          >
            <image
              //transform="translate(-15 -5)"
              //href={icon}
              width={getIconSidze()}
              height={getIconSidze()}
              // height={getIconSidze()}
              //transform= "translate3d(0, 0, 0)"
              style={{ cursor: "pointer", pointerEvents: "visiblePainted" }}
              preserveAspectRatio="xMidYMid slice"
              onClick={() => {
                setIsOpen(true);
                setPosition({
                  latitude: location.latitude,
                  longitude: location.longitude,
                  name: location.name,
                });

                // クリック時に地図を拡大
                map.setView([location.latitude, location.longitude], 13, {
                  animate: true,
                });
              }}
            />
            <svg
              width={getPhotoSidze()}
              height={getPhotoSidze()}
              viewBox="0 0 110 120"
            >
              <defs>
                <mask id={`mask-${index}`}>
                  <circle cx="50" cy="50" r="50" fill="white" />
                </mask>
              </defs>

              <rect
                x="5"
                y="10"
                width="100"
                height="100"
                fill="none"
                stroke="#F54A4C"
                strokeWidth="5"
                rx="50" // 角を丸める（オプション）
              />
              <image
                transform="translate(5, 10)" // 一度0,0にリセット
                href={location.photo}
                width="100px" // 100% ではなく明示的なサイズを指定
                height="100"
                mask={`url(#mask-${index})`}
                preserveAspectRatio="xMidYMid slice" // slice → meet へ変更
                onClick={() => {
                  setIsOpen(true);
                  setPosition({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    name: location.name,
                  });

                  map.setView([location.latitude, location.longitude], 14, {
                    animate: true,
                  });
                }}
              />
            </svg>
          </SVGOverlay>
        );
      })}
    </div>
  );
}

export default AlbumPinLocate;
