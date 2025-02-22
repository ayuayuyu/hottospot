import { motion } from "framer-motion";
import styles from "./HotModalSheet.module.scss";
import PropTypes from "prop-types";
import { Meter } from "./modalSheetCards/Meter";
import { LocationRanking } from "./modalSheetCards/LocationRanking";
import { FriendsVisited } from "./modalSheetCards/FriendsVisited";
import { LocationImage } from "./modalSheetCards/LocationImage";

function HotModalSheet({ setPosition, position }) {
  // const [disableTransform, setDisableTransform] = useState(false);
  console.log("position", position);
  return (
    <>
      <div className={styles.dragHandle} />
      <div className={styles.meinContents}>
        <Meter />
        <div style={{ display: "flex", gap: "10px" }}>
          <LocationImage />
          <div className={styles.rightContents}>
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
