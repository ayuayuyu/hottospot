import styles from "./PageTitle.module.scss";
import { GradationIconButton } from "./../layout/GradationIconButton";
import PropTypes from "prop-types";

export const PageTitle = ({ pageName, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <GradationIconButton
          color="none"
          url="https://api.iconify.design/heroicons:arrow-left-16-solid.svg?color=%23ffffff"
        />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.title}>{pageName}</span>
        <span className={styles.description}>{children}</span>
      </div>
      <div className={styles.imgContainer}>
        <img src="/img/backfire.svg" alt="icon" width={24} height={24} />
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  pageName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
