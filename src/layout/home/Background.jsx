import React from "react";
import fire from "../../../public/img/Vector.png";
import style from "./Background.module.scss"

function Background() {
  return (
    <div>
      <div className={style.background}>
        <img className={style.fireImg} src={fire} />
      </div>
    </div>
  );
}

export default Background;
