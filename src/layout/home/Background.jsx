import React from "react";
import fire from "../../../public/img/Vector.png";
import "./Background.css"

function Background() {
  return (
    <div>
      <div>
        <img className="fire-img" src={fire} />
      </div>
    </div>
  );
}

export default Background;
