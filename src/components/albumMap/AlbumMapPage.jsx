import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../pages/Map.css";
import { useEffect } from "react";
import { modalWindowAtom } from "../../atoms/modalWindowAtom";
import { useAtom } from "jotai";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import AlbumModalSheet from "./AlbumModalSheet";
import AlbumPinLocate from "./AlbumPinLocate";
import getAllLocation from "../../firebase/getTable/getAllLocation";
import ModalSheet from "../../layout/ModalSheet";
import FriendsModalSheet from "../friendsModalSheet/FriendsModalSheet";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers";
import { useRef } from "react";
import { useMapEvent } from "react-leaflet";
import { isHotModalAtom } from "../../atoms/isHotModalAtom";

function SetViewOnClick() {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
  });

  return null;
}

const AlbumMapPage = ({ latitude, longitude, name }) => {
  const animateRef = useRef(true);
  const [locationData, setLocationData] = useState([]);

  const [isVisited, setIsVisited] = useState(true); //訪れたページに遷移するかどうか
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    name: null,
  }); //選択したマーカーの緯度と経度
  const [modalWindowIsOpen, setModalWindowIsOpen] = useAtom(modalWindowAtom); //マーカー選択
  const [isHotModal, setIsHotModalAtom] = useAtom(isHotModalAtom);
  
  console.log("isHotModal",isHotModal)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllLocation();
        console.log("locationData:", data); // デバッグ用
        setLocationData(data || []);
      } catch (error) {
        console.error("Error fetching location data:", error);
        setLocationData([]);
      }
    };

    fetchData();
  }, []); // 初回のみ取得

  latitude = 35.1848185;
  longitude = 137.1148651;

  if (latitude === null || longitude === null) {
    return <p>現在地を取得中...</p>;
  }

  const center = [latitude, longitude];

  return (
    <div>
      <div style={{ zIndex: "10", position: "absolute" }}>
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
          />
          <SetViewOnClick animateRef={animateRef} />
          <Marker position={center} />

          {locationData && (
            <AlbumPinLocate
              setIsOpen={setIsHotModalAtom}
              setPosition={setPosition}
              locationData={locationData}
              position={position}
            />
          )}
        </MapContainer>
      </div>
      <div style={{ zIndex: "80", position: "absolute" }}>
        <ModalSheet
          isOpen={isHotModal}
          setIsOpen={setIsHotModalAtom}
          height={520}
        >
          {isVisited ? (
            <AlbumModalSheet
              setPosition={setPosition}
              position={position}
              setIsVisited={setIsVisited}
              isVisited={isVisited}
            />
          ) : (
            <FriendsModalSheet
              setIsVisited={setIsVisited}
              isVisited={isVisited}
              position={position}
            />
          )}
        </ModalSheet>
      </div>
    </div>
  );
};

export default AlbumMapPage;
