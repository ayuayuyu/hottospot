import { useState } from "react";
import { IconButton } from "./IconButton";
import styles from "./Meter.module.scss";

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
      <IconButton
        onClick={increment}
        color="white"
        url="https://api.iconify.design/heroicons:plus-16-solid.svg?color=%23ff6085"
      />

      <div>{likes}/10</div>

      {/* マイナスボタン */}
      <IconButton
        onClick={decrement}
        color="white"
        url="https://api.iconify.design/heroicons:minus-16-solid.svg?color=%23ff6085"
      />
    </div>
  );
};
