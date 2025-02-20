import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../pages/Map.css";
import { useEffect } from "react";
import { Drawer } from "vaul";

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

const AlbumMap = () => {
  const [isOpen, setIsOpen] = useState(false); //マーカー選択

  const [position, setPosition] = useState({ latitude: null, longitude: null });

  

  const center = [35.1848136, 137.1148777];

  return (
    <div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
        />
        <Marker position={center} />

        {/* ここをAlbumPinLocateにしたらアルバムの画面に */}
        <HotPinLocate setIsOpen={setIsOpen} setPosition={setPosition} />
      </MapContainer>

      {/* ここをAlbumModalSheetにしたらアルバムの画面に */}
      <HotModalSheet
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setPosition={setPosition}
        position={position}
      />
    </div>
  );
};

export default AlbumMap;
