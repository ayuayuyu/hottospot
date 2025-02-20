import React, { useEffect, useState } from "react";
import AlbumMap from "../components/albumMap/AlbumMap";

function Map() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <AlbumMap />
    </div>
  );
}

export default Map;
