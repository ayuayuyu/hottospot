import { motion } from "framer-motion";
import styles from "./ModalSheet.module.scss";
import PropTypes from "prop-types";

function ModalSheet({ children, setIsOpen, isOpen, height }) {
  return (
    <motion.div
      style={{ height: `${height}px` }}
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
        if (info.point.y > 0) setIsOpen(false);
      }}
    >
      <div className={styles.dragHandle} />
      {children}
    </motion.div>
  );
}

ModalSheet.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalSheet;
