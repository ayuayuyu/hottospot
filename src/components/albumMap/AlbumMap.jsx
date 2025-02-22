import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../pages/Map.css";
import { useEffect } from "react";
import { Drawer } from "vaul";
import ModalWindow from "./../../layout/ModalWindow";
import { modalWindowAtom } from "../../atoms/modalWindowAtom";
import { useAtom } from "jotai";

import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { Box, Modal, Typography } from "@mui/material";
import AlbumModalSheet from "./AlbumModalSheet";
import HotPinLocate from "../hotMap/HotPinLocate";
import AlbumPinLocate from "./AlbumPinLocate";
import HotModalSheet from "../hotModalSheet/HotModalSheet";
import getAllLocation from "../../firebase/getTable/getAllLocation";
import ModalSheet from "../../layout/ModalSheet";
import { GradationButton } from "../../layout/GradationButton";
import RouteButtons from "../../layout/RouteButtons";
import Profile from "../../pages/Profile";
import FriendsModalSheet from "../friendsModalSheet/FriendsModalSheet";
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import 'leaflet.awesome-markers';

const AlbumMap = ({ latitude, longitude, name }) => {
  const [locationData, setLocationData] = useState([]);
  const [isOpen, setIsOpen] = useState(false); //マーカー選択
  const [isVisited,setIsVisited] = useState(true); //訪れたページに遷移するかどうか
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    name: null,
  }); //選択したマーカーの緯度と経度
  const [modalWindowIsOpen, setModalWindowIsOpen] = useAtom(modalWindowAtom); //マーカー選択

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
      <div style={{ zIndex: "50", position: "absolute" }}>
        <RouteButtons />
      </div>
      <div style={{ zIndex: "10", position: "absolute" }}>
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
          />
          <Marker position={center} />

          {/* ここをAlbumPinLocateにしたらアルバムの画面に */}
          {locationData && (
            <AlbumPinLocate
              setIsOpen={setIsOpen}
              setPosition={setPosition}
              locationData={locationData}
            />
          )}
        </MapContainer>
      </div>
      {/* ここをAlbumModalSheetにしたらアルバムの画面に */}
      <div style={{ zIndex: "80", position: "absolute" }}>
        <ModalSheet isOpen={isOpen} setIsOpen={setIsOpen} >
          {
            isVisited ? <AlbumModalSheet setPosition={setPosition} position={position} setIsVisited={setIsVisited} isVisited={isVisited}/> :
            <FriendsModalSheet setIsVisited={setIsVisited} isVisited={isVisited}  position={position}/>
          }
           {/* <HotModalSheet setPosition={setPosition} position={position} /> */}
        </ModalSheet>
      </div>
    </div>
  );
};

export default AlbumMap;
