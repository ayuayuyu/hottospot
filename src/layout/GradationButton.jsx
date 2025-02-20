import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./GradationButton.module.scss";

export const GradationButton = ({ children, color, onClick }) => {
  const transition = {
    duration: 0.2,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className={`${styles.button} ${styles[color]}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={transition}
      onClick={onClick}
      style={{ outline: "none" }}
    >
      {children}
    </motion.div>
  );
};

GradationButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["gray", "red", "white", "none"]),
  onClick: PropTypes.func.isRequired,
};
