import { useEffect, useState } from "react";
import HotMap from "../components/hotMap/HotMap";
import RouteButtons from "../layout/RouteButtons";

function Map() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <HotMap latitude={position.latitude} longitude={position.longitude} />
      <RouteButtons />
    </div>
  );
}

export default Map;
