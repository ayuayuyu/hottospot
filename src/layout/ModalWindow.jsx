import { motion } from "framer-motion";
import styles from "./ModalWindow.module.scss";
import PropTypes from "prop-types";
import { GradationIconButton } from "./GradationIconButton";
import { Icon } from "@iconify/react";

function ModalWindow({ children, setIsOpen, isOpen }) {
  const handleBackgroundClick = () => {
    // 背景がクリックされたときにモーダルを閉じる
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <div className={styles.container} onClick={handleBackgroundClick}>
          <motion.div
            className={styles.mainContainer}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: "100%", scale: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: "100%", scale: "100%" }}
          >
            <GradationIconButton
              color="red"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Icon
                icon="material-symbols:close-rounded"
                style={{
                  fontSize: "18px",
                  color: "#ffffff",
                }}
              />
            </GradationIconButton>
          </motion.div>
        </div>
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
