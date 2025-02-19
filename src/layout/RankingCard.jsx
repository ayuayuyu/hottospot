import styles from "./RankingCard.module.scss";
import Image from "next/image";
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
            <Image
              className={styles.heart}
              src="/Heart.svg"
              alt={location}
              width={26}
              height={26}
            />
            <div className={styles.gradationText}>{heartsCount}</div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={url} alt={location} fill />
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
