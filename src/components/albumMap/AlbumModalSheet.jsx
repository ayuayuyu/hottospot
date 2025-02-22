import { Box, Button, Drawer, Icon, Modal, Typography } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Meter } from "../hotModalSheet/modalSheetCards/Meter";
import { LocationImage } from "../hotModalSheet/modalSheetCards/LocationImage";
import { LocationRanking } from "../hotModalSheet/modalSheetCards/LocationRanking";
import { FriendsVisited } from "../hotModalSheet/modalSheetCards/FriendsVisited";
import styles from "./AlbumModalSheet.module.scss";
import AlbumModalCards from "./AlbumModalCards";
import formatPhoto from "../../firebase/getTable/formatPhoto";
import { useEffect, useState } from "react";

function AlbumModalSheet({ setPosition, position, isVisited, setIsVisited }) {
  //console.log("position", position);
  const [location, setLocation] = useState([]);
  //const list = await formatLike();

  // const [iconList, setIconList] = useState([]);

  // useEffect(() => {
  //   async function likeCount() {
  //     const list = await formatLike();
  //     setIconList(list);
  //   }
  //   likeCount();
  // }, []);

  useEffect(() => {
    async function photoLocate() {
      const list = await formatPhoto();
      const getlist = list.map((l) => {
        console.log("list", l);

        return l;
      });

      setLocation(getlist);
    }
    photoLocate();
  }, []);

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.upper}>
          <div className={styles.title}>{position.name}で撮った写真</div>
        </div>
        <div className={styles.friendsList}>
          {location.map((locate, index) => {
            console.log("locate.latitude", locate.photo);
            console.log("position.latitude", typeof position.latitude);

            return locate.latitude === Number(position.latitude) ? (
              <img src={locate.photo} className={styles.img} key={index} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default AlbumModalSheet;
