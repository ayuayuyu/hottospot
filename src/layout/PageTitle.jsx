import styles from "./PageTitle.module.scss";
import { GradationIconButton } from "./../layout/GradationIconButton";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

export const PageTitle = ({ pageName, children }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <GradationIconButton
          color="none"
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon
            icon="heroicons:arrow-left-16-solid"
            style={{
              fontSize: "24px",
              color: "#ffffff",
            }}
          />
        </GradationIconButton>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.title}>{pageName}</span>
        <span className={styles.description}>{children}</span>
      </div>
      <div className={styles.imgContainer}>
        <ReactSVG src="/img/backfire.svg" alt="icon" width={220} height={220} />
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  pageName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
