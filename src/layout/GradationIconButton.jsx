import PropTypes from "prop-types";
import { easeOut, motion } from "framer-motion";
import styles from "./GradationIconButton.module.css";

export const GradationIconButton = ({ url, color, onClick }) => {
  return (
    <motion.button
      initial={{ scale: 1, position: "relative", zIndex: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{
        duration: 0.1,
        ease: easeOut,
      }}
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
      style={{ outline: "none" }}
    >
      <img src={url} alt="icon" width={24} height={24} />
    </motion.button>
  );
};

GradationIconButton.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["gray", "red", "white", "none"]),
  onClick: PropTypes.func,
};
