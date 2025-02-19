import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./WhiteButton.module.scss";

export const WhiteButton = ({ children, color, onClick }) => {
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
    >
      <div>{children}</div>
    </motion.div>
  );
};

WhiteButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["red", "blue", "green"]),
  onClick: PropTypes.func,
};
