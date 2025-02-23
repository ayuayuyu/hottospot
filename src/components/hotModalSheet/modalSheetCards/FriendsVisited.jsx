import styles from "./FriendsVisited.module.scss";
import { Icon } from "@iconify/react";
import { GradationIconButton } from "../../../layout/GradationIconButton";
import { useEffect, useState } from "react";
import formatFriends from "../../../firebase/getTable/formatFriends";

export const FriendsVisited = () => {
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    const friends = async () => {
      const list = await formatFriends();
      // console.log("list", list);
      const icon = list.map((i) => {
        console.log("icon", i.icon, "name", i.name);
      });
      setIconList(list);
    };
    friends();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>訪れた友達</div>

      <div className={styles.iconlist}>
        {iconList.map((friendsList, index) => {
          return (
            <div className={styles.friendsicon} key={index}>
              <img src={friendsList.icon} className={styles.img}/>
            </div>
          );
        })}
      </div>

      <div
        className={styles.bottom}
        //onClick={() => handleVisited()}
      >
        <span>詳しく見る</span>
        <Icon
          icon="heroicons:arrow-right-16-solid"
          style={{
            fontSize: "16px",
            color: "#2c3e50",
          }}
        />
      </div>
    </div>
  );
};
