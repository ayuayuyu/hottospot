import styles from "./AlbumModalSheet.module.scss";
import formatPhoto from "../../firebase/getTable/formatPhoto";
import { useEffect, useState } from "react";

function AlbumModalSheet({ setPosition, position,setIsVisited }) {

  const [location, setLocation] = useState([]);


  useEffect(() => {
    async function photoLocate() {
      const list = await formatPhoto();
      const getlist = list.map((l) => {

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
