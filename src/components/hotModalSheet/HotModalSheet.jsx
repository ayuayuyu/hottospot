import { motion } from "framer-motion";
import styles from "./HotModalSheet.module.scss";
import PropTypes from "prop-types";
import { Meter } from "./modalSheetCards/Meter";

function HotModalSheet({ setIsOpen, isOpen, setPosition, position }) {
  // const [disableTransform, setDisableTransform] = useState(false);
  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        exit={{ y: "100%" }}
        transition={{
          stiffness: 300,
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: "100%" }}
        dragElastic={0}
        onDragEnd={(_, info) => {
          if (info.point.y > 300) setIsOpen(false);
        }}
      >
        <div className={styles.dragHandle} />
        <div className={styles.meinContents}>
          <Meter></Meter>
        </div>
      </motion.div>
    </>
  );
}

HotModalSheet.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default HotModalSheet;
