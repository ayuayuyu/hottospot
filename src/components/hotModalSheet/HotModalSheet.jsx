import { motion } from "framer-motion";
import styles from "./HotModalSheet.module.scss";
import PropTypes from "prop-types";
import { Meter } from "./modalSheetCards/Meter";
import { Icon } from "@iconify/react";
import { LocationRanking } from "./modalSheetCards/LocationRanking";
import { FriendsVisited } from "./modalSheetCards/FriendsVisited";
import { LocationImage } from "./modalSheetCards/LocationImage";
import { GradationButton } from "../../layout/GradationButton";
import { useState } from "react";

function HotModalSheet({ setPosition, position }) {
  // const [disableTransform, setDisableTransform] = useState(false);
  console.log("position", position);
  const [isTapped, setIsTapped] = useState(false);

  // const backHeart = () => {
  //   return (
  //     <motion.div
  //       className={styles.container}
  //       initial={{ opacity: 0, scale: 0 }}
  //       animate={{ opacity: "100%", scale: "200%" }}
  //       transition={{
  //         duration: 0.5,
  //         ease: "easeInOut",
  //       }}
  //       onAnimationComplete={() => setIsTapped(false)}
  //     >
  //       <Icon
  //         icon="heroicons:heart-16-solid"
  //         style={{
  //           fontSize: "24px",
  //           color: "#ffffff50",
  //         }}
  //       />
  //     </motion.div>
  //   );
  // };
  // {isTapped && backHeart()}

  return (
    <>
      <div className={styles.dragHandle} />
      <div className={styles.meinContents}>
        <Meter />
        <div style={{ display: "flex", gap: "10px" }}>
          <LocationImage />
          <div className={styles.rightContents}>
            <GradationButton
              color="red"
              styles={{ overflow: "hidden", display: "block" }}
              onClick={() => setIsTapped(true)}
            >
              いいね送信
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
