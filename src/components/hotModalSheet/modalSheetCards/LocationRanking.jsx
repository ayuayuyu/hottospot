import styles from "./LocationRanking.module.scss";
import { Icon } from "@iconify/react";
import { ReactSVG } from "react-svg";
import { locationPositionAtom } from "../../../atoms/locationPositionAtom";
import { useNavigate } from "react-router-dom";
import { locationDataAtom } from "../../../atoms/locationDataAtom";
import { useAtomValue } from "jotai";

export const LocationRanking = () => {
  const navigate = useNavigate();
  const positionAtom = useAtomValue(locationPositionAtom);
  const locationData = useAtomValue(locationDataAtom);

  const filteredDataWithIndex = locationData
    .map((location, index) => ({ location, index }))
    .filter((item) => `${item.location.name}` === `${positionAtom.name}`);

  const rankingIndex =
    filteredDataWithIndex.length > 0
      ? filteredDataWithIndex[0].index + 1
      : "圏外";

  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate("/ranking");
      }}
    >
      <div className={styles.title}>現在の順位</div>
      <span className={styles.ranking}>{rankingIndex}位</span>
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
