import { motion } from "framer-motion";
import styles from "./ModalWindow.module.scss";
import PropTypes from "prop-types";
import { GradationIconButton } from "./GradationIconButton";
import { Icon } from "@iconify/react";

function ModalWindow({ children, setIsOpen, isOpen }) {
  return (
    <>
      {isOpen ? (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: "100%", scale: "100%" }}
          // transition={{
          //   stiffness: 300,
          // }}
        >
          <GradationIconButton
            color="gray"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Icon
              icon="material-symbols:close-rounded"
              style={{
                fontSize: "18px",
                color: "#5A708C",
              }}
            />
          </GradationIconButton>
          <div className={styles.dragHandle} />
          {children}
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}

ModalWindow.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWindow;
