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

const AlbumMap = ({ latitude, longitude, name }) => {
  const [locationData, setLocationData] = useState([]);
  const [isOpen, setIsOpen] = useState(false); //マーカー選択
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

  if (latitude === null || longitude === null) {
    return <p>現在地を取得中...</p>;
  }

  const center = [latitude, longitude];

  const handleClick = () => {
    setIsOpen((open) => !open);
    console.log("open", isOpen);
  };

  return (
    <div>
      <ModalWindow
        setIsOpen={setModalWindowIsOpen}
        isOpen={modalWindowIsOpen}
      />
      <GradationButton color="blue" onClick={handleClick}>
        skdfja
      </GradationButton>
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
            <HotPinLocate
              setIsOpen={setIsOpen}
              setPosition={setPosition}
              locationData={locationData}
            />
          )}
        </MapContainer>
      </div>
      {/* ここをAlbumModalSheetにしたらアルバムの画面に */}
      <div style={{ zIndex: "80", position: "absolute" }}>
        <ModalSheet isOpen={isOpen} setIsOpen={setIsOpen}>
          <HotModalSheet setPosition={setPosition} position={position} />
        </ModalSheet>
      </div>
    </div>
  );
};

export default AlbumMap;
