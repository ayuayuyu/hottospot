import React, { useEffect, useState } from "react";

import styles from "./friendsModalSheet.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import formatLike from "../../firebase/getTable/formatLike";
import { li } from "framer-motion/client";
import ProfileFriends from "./ProfileFriends";
import VisitedFriends from "./VisitedFriends";

function FriendsModalSheet({ setIsVisited, isVisited, position }) {
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    async function likeCount() {
      const list = await formatLike();
      setIconList(list);
    }
    likeCount();
  }, []);

  const handleVisited = () => {
    setIsVisited(true);
  };

  return (
    <div className={styles.body}>
      <div className={styles.upper}>
        <div className={styles.icon} onClick={handleVisited}>
          <Icon
            icon="lsicon:left-outline"
            width="80px"
            height="80px"
            color="#eff3f7"
          />
        </div>
        <div className={styles.title}>訪れた友達</div>
      </div>
      <div className={styles.friends}>
        <VisitedFriends position={position} />
      </div>
    </div>
  );
}

export default FriendsModalSheet;
