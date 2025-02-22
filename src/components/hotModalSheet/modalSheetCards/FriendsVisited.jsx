import styles from "./FriendsVisited.module.scss";
import { Icon } from "@iconify/react";
import { GradationIconButton } from "../../../layout/GradationIconButton";

export const FriendsVisited = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>訪れた友達</div>
      <div className={styles.iconContainer}>
        <div className={styles.icons}>
          <GradationIconButton color="red">
            <Icon
              icon="heroicons:ellipsis-horizontal-16-solid"
              style={{
                fontSize: "18px",
                color: "#ffffff",
              }}
            />
          </GradationIconButton>
          <GradationIconButton color="red">
            <Icon
              icon="heroicons:minus-16-solid"
              style={{
                fontSize: "18px",
                color: "#ffffff",
              }}
            />
          </GradationIconButton>
          <GradationIconButton color="gray">
            <Icon
              icon="heroicons:minus-16-solid"
              style={{
                fontSize: "18px",
                color: "#ffffff",
              }}
            />
          </GradationIconButton>
          <GradationIconButton color="red">
            <Icon
              icon="heroicons:minus-16-solid"
              style={{
                fontSize: "18px",
                color: "#ffffff",
              }}
            />
          </GradationIconButton>
          <GradationIconButton color="gray">
            <Icon
              icon="heroicons:minus-16-solid"
              style={{
                fontSize: "18px",
                color: "#ffffff",
              }}
            />
          </GradationIconButton>
        </div>
      </div>
      <div
        className={styles.bottom}
         //onClick={() => handleVisited()}
      >
        <span>詳しく見る</span>
        <Icon
          icon="heroicons:arrow-right-16-solid"
          style={{
            fontSize: "16px",
            color: "#2c3e50",
          }}
        />
      </div>
    </div>
  );
};
