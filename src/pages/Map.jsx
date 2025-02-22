import { useEffect, useState } from "react";
import HotMap from "../components/hotMap/HotMap";
import RouteButtons from "../layout/RouteButtons";
import { useAtomValue } from "jotai";
import { motion } from "framer-motion";
import { isHotModalAtom } from "../atoms/isHotModalAtom";

function Map() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const isHotModal = useAtomValue(isHotModalAtom);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  }, []);

  const RouteButtonsAnimation = () => {
    return (
      <motion.div
        inset={{
          scale: 0,
          opacity: 0,
        }}
        animation={{
          scale: "100%",
          opacity: "100%",
        }}
      >
        <RouteButtons />
      </motion.div>
    );
  };

  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <HotMap latitude={position.latitude} longitude={position.longitude} />
      {isHotModal ? <></> : <RouteButtonsAnimation />}
    </div>
  );
}

export default Map;
