import { useEffect, useState } from "react";
import CurrentLocateion from "../components/albumMap/AlbumMap";
import AlbumMap from "../components/albumMap/AlbumMap";
import HotModalSheet from "./../components/hotModalSheet/HotModalSheet";
import { GradationButton } from "./../layout/GradationButton";
import RouteButtons from "./../layout/RouteButtons";

function Map() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* <AlbumMap latitude={position.latitude} longitude={position.longitude} /> */}
      <HotModalSheet isOpen={isOpen} setIsOpen={setIsOpen}></HotModalSheet>
      <GradationButton color="blue" onClick={() => setIsOpen((p) => !p)}>
        skdfja
      </GradationButton>
      <RouteButtons />
    </div>
  );
}

export default Map;
