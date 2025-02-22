import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../pages/Map.css";
import { useEffect } from "react";
import ModalWindow from "./../../layout/ModalWindow";

import { useAtom } from "jotai";
import { modalWindowAtom } from "../../atoms/modalWindowAtom";
import { locationDataAtom } from "../../atoms/locationDataAtom";
import { locationPositionAtom } from "../../atoms/locationPositionAtom";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import HotPinLocate from "./HotPinLocate";
import HotModalSheet from "../hotModalSheet/HotModalSheet";
import getAllLocation from "../../firebase/getTable/getAllLocation";
import ModalSheet from "../../layout/ModalSheet";
import PropTypes from "prop-types";
import { GradationButton } from "../../layout/GradationButton";

import UploadImg from "./../../firebase/uploadPhoto/UploadImg";
import uploadPhoto from "../../firebase/uploadPhoto/uploadPhoto";

const HotMap = ({ latitude, longitude, name }) => {
  const [isOpen, setIsOpen] = useState(false); //マーカー選択
  const [position, setPosition] = useAtom(locationPositionAtom); //選択したマーカーの緯度と経度

  const [modalWindowIsOpen, setModalWindowIsOpen] = useAtom(modalWindowAtom);
  const [locationData, setLocationData] = useAtom(locationDataAtom);

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

  return (
    <div>
      <ModalWindow setIsOpen={setModalWindowIsOpen} isOpen={modalWindowIsOpen}>
        <GradationButton
          color="red"
          onClick={() => {
            console.log(position);
          }}
        >
          ファイルを選択
          <input
            type="file"
            onChange={(e) => uploadPhoto(e, position.locationId)}
            accept=".png, .jpeg, .jpg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </GradationButton>
      </ModalWindow>
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
      <div style={{ zIndex: "80", position: "absolute" }}>
        <ModalSheet isOpen={isOpen} setIsOpen={setIsOpen}>
          <HotModalSheet setPosition={setPosition} position={position} />
        </ModalSheet>
      </div>
    </div>
  );
};

HotMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default HotMap;
