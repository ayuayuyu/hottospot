import { useEffect, useState } from 'react';
import styles from './friendsModalSheet.Module.scss';
import formatFriends from '../../firebase/getTable/formatFriends';

function ProfileFriends() {
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    const friends = async () => {
      const list = await formatFriends();
      const icon = list.map((i) => {
        console.log('icon', i.icon);
      });
      icon;
      setIconList(list);
    };
    friends();
  }, []);
  return (
    <div className={styles.friendsList}>
      {iconList.map((friendsList, index) => {
        return (
          <div className={styles.friendCard} key={index}>
            <img src={friendsList.icon} className={styles.img} />
            <p className={styles.name}>{friendsList.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileFriends;
