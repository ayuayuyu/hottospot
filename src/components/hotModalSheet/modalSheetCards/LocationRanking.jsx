import styles from "./LocationRanking.module.scss";
import { Icon } from "@iconify/react";
import { ReactSVG } from "react-svg";

export const LocationRanking = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>現在の順位</div>
      <span className={styles.ranking}>496位</span>
      <div className={styles.bottom} onClick={() => {}}>
        <span>ランキング</span>
        <Icon
          icon="heroicons:arrow-right-16-solid"
          style={{
            fontSize: "16px",
            color: "#ffffff",
          }}
        />
        <ReactSVG
          className={styles.svg}
          src="/img/backfire.svg"
          wrapper="span"
          alt="icon"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
