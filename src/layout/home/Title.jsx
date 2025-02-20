import React from "react";
import icon from "../../../public/img/icon.png"
import "./Title.css"

function Title() {
  return (
    <div>
      <div className="title">
        <img src={icon} className="image" />
        <div className="hottospot">Hottospot</div>
      </div>
    </div>
  );
}

export default Title;
