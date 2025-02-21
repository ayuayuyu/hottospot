import { auth } from '../api/firebase';
import styles from './UserInfo.module.scss';
import defalutImg from '../../../public/img/defalutIcon.png';

const getUserInfo = () => {
  return auth.currentUser;
};

const UserInfo = () => {
  const user = getUserInfo();
  return (
    <div>
      <img
        src={user.photoURL || defalutImg}
        alt="user"
        className={styles.photo}
      />
      <p className={styles.name}>{user.displayName}</p>
      <p>{user.email}</p>
    </div>
  );
};
export default UserInfo;
