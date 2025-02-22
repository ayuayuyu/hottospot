import React, { useEffect, useState } from "react";
import formatLike from "../../firebase/getTable/formatLike";
import styles from "./AlbumModalCards.module.scss";

function AlbumModalCards({ locate }) {
  const [iconList, setIconList] = useState([]);
  console.log("true");

  useEffect(() => {
    async function likeCount() {
      console.log("locate", locate.photo);

      setIconList(locate?.photo ? [locate.photo] : []);
    }
    likeCount();
  }, []);

  return (
    <div className={styles.friendsList}>
      {iconList.map((friendsList, index) => {
        return <img src={friendsList} className={styles.img} key={index} />;
      })}
    </div>
  );
}

export default AlbumModalCards;
