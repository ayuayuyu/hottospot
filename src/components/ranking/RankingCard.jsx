import styles from "./RankingCard.module.scss";
import PropTypes from "prop-types";

export const RankingCard = ({ ranking, location, heartsCount, url }) => {
  return (
    <div className={`${styles.card}`}>
      {ranking === 1 ? (
        <div className={`${styles.redCircle}`}></div>
      ) : (
        <div></div>
      )}
      <div className={`${styles.whiteCircle}`}></div>
      <div className={styles.info}>
        {ranking === 1 ? (
          <div className={styles.ranking}>{ranking}</div>
        ) : (
          <div className={`${styles.ranking} ${styles.black}`}>{ranking}</div>
        )}

        <div className={styles.right}>
          <div>{location}</div>
          <div className={styles.likesContainer}>
            <img src="/img/Heart.svg" alt="icon" width={24} height={24} />
            <div className={styles.gradationText}>{heartsCount}</div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={url} alt="icon" width={24} height={24} />
      </div>
    </div>
  );
};

RankingCard.propTypes = {
  ranking: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  heartsCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
