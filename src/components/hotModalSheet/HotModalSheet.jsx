import { motion } from "framer-motion";
import styles from "./HotModalSheet.module.scss";
import PropTypes from "prop-types";
import { Meter } from "./modalSheetCards/Meter";
import { Icon } from "@iconify/react";
import { LocationRanking } from "./modalSheetCards/LocationRanking";
import { FriendsVisited } from "./modalSheetCards/FriendsVisited";
import { LocationImage } from "./modalSheetCards/LocationImage";
import { GradationButton } from "../../layout/GradationButton";
import { modalWindowAtom } from "../../atoms/modalWindowAtom";
import { locationPositionAtom } from "./../../atoms/locationPositionAtom";
import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import setLikesTable from "./../../firebase/setTable/setLikesTable";

function HotModalSheet() {
  // const [disableTransform, setDisableTransform] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const setIsOpen = useSetAtom(modalWindowAtom);
  const position = useAtomValue(locationPositionAtom);

  const [likes, setLikes] = useState(0);

  const backHeart = () => {
    return (
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: "100%", scale: "200%" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setIsTapped(false)}
      >
        <Icon
          icon="heroicons:heart-16-solid"
          style={{
            fontSize: "24px",
            color: "#ffffff50",
          }}
        />
      </motion.div>
    );
  };

  return (
    <>
      <div className={styles.dragHandle} />
      <div className={styles.meinContents}>
        <div className={styles.likesStatus}>
          <div className={styles.hotText}>結構アツい</div>
          <div className={styles.likeCountContainer}>
            <Icon
              icon="heroicons:heart-16-solid"
              style={{
                fontSize: "24px",
                color: "#FF6085",
              }}
            />
            <div className={styles.likeCount}>{position.likeCount}</div>
          </div>
        </div>
        <Meter setLikes={setLikes} likes={likes} />
        <div style={{ display: "flex", gap: "10px" }}>
          <LocationImage />
          <div className={styles.rightContents}>
            <GradationButton
              color="red"
              styles={{
                overflow: "hidden",
                display: "block",
                position: "relative",
              }}
              onClick={() => {
                setIsTapped(true);
                setIsOpen(true);
                if (likes >= 5) {
                  setLikesTable(position, likes);
                }
              }}
            >
              いいね送信
              {isTapped && backHeart()}
            </GradationButton>
            <LocationRanking />
            <FriendsVisited />
          </div>
        </div>
      </div>
    </>
  );
}

HotModalSheet.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default HotModalSheet;
