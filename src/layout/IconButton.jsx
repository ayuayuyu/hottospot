import Image from "next/image";
import { easeOut, motion } from "framer-motion";

const buttonColors = {
  gray: { backgroundColor: "#e0e8f0" },
  red: {
    background: "linear-gradient(97.4deg, #f84f90 0%, #ed4b4b 100%)",
  },
  white: { backgroundColor: "#ffffff" },
  none: { background: "none" },
};

export const IconButton = (url, color, onClick) => {
  return (
    <div style={{ position: "relative", height: "fit-content" }}>
      <motion.button
        initial={{ scale: 1, position: "relative", zIndex: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{
          duration: 0.1,
          ease: easeOut,
        }}
        style={{
          ...buttonColors[color],
          padding: "8px 8px",
          display: "flex",
          borderRadius: "100px",
          width: "fit-content",
          fontWeight: "bold",
          alignContent: "center",
          justifyContent: "center",
          border: "none",
          transition: "100ms",
        }}
        onClick={onClick}
      >
        <Image src={url} alt="icon" width={24} height={24} />
      </motion.button>
    </div>
  );
};
