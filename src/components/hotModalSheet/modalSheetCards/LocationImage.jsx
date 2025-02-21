import { GradationIconButton } from "../../../layout/GradationIconButton";
import styles from "./LocationImage.module.scss";
import { Icon } from "@iconify/react";

export const LocationImage = () => {
  const address = "〒460-0031 愛知県名古屋市中区本丸１−１";

  const copyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      console.log("コピー成功しました！！");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.leftContents}>
      <img className={styles.image} src="/img/image1.png" alt="fire" />
      <div className={styles.textContainer}>
        <div className={styles.locationName}>名古屋城</div>
        <div className={styles.locationDetails}>
          1612 年建造の城を復元したもの。江戸時代の道具や工芸品も展示。
        </div>
        <div className={styles.address} onClick={copyClipboard}>
          {address}
        </div>
      </div>
    </div>
  );
};
