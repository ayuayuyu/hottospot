import { useState } from "react";
import { GradationIconButton } from "./../../../layout/GradationIconButton";
import styles from "./Meter.module.scss";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";

export const Meter = ({ likes, setLikes }) => {
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
      <div>場所の評価をつけよう</div>
      {/* マイナスボタン */}
      <GradationIconButton onClick={decrement} color="white">
        <Icon
          icon="heroicons:minus-16-solid"
          style={{
            fontSize: "24px",
            color: "#FF6085",
          }}
        />
      </GradationIconButton>
      <Icon
        icon="heroicons:heart-16-solid"
        style={{
          fontSize: "24px",
          color: "#ffffff",
        }}
      />

      <div className={styles.likes}>{likes}/10</div>

      {/* プラスボタン */}
      <GradationIconButton
        onClick={() => {
          increment();
        }}
        color="white"
      >
        <Icon
          icon="heroicons:plus-16-solid"
          style={{
            fontSize: "24px",
            color: "#FF6085",
          }}
        />
      </GradationIconButton>
    </div>
  );
};
