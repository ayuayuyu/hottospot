import { useState } from "react";
import { GradationIconButton } from "./../../../layout/GradationIconButton";
import styles from "./Meter.module.scss";
import { Icon } from "@iconify/react";

export const Meter = () => {
  const [likes, setLikes] = useState(0);

  const increment = () => {
    if (likes >= 10) return;
    setLikes(likes + 1);
  };

  const decrement = () => {
    if (likes <= 0) return;
    setLikes(likes - 1);
  };

  return (
    <div className={styles.container}>
      <div>場所の評価をつけよう！</div>
      {/* プラスボタン */}
      <GradationIconButton
        onClick={increment}
        color="white"
        url="https://api.iconify.design/heroicons:plus-16-solid.svg?color=%23ff6085"
      >
        <Icon
          icon="heroicons:plus-16-solid"
          style={{
            fontSize: "24px",
            color: "#FF6085",
          }}
        />
      </GradationIconButton>

      <div>{likes}/10</div>

      {/* マイナスボタン */}
      <GradationIconButton
        onClick={decrement}
        color="white"
        url="https://api.iconify.design/heroicons:minus-16-solid.svg?color=%23ff6085"
      >
        <Icon
          icon="heroicons:minus-16-solid"
          style={{
            fontSize: "24px",
            color: "#FF6085",
          }}
        />
      </GradationIconButton>
    </div>
  );
};
