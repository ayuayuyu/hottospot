import styles from './Search.module.scss';
import { Icon } from '@iconify/react';
import { auth } from '../firebase/api/firebase';
import defalutImg from '../../public/img/defalutIcon.png';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const getUserInfo = () => {
  return auth.currentUser;
};

const Search = () => {
  const user = getUserInfo();
  const navigate = useNavigate();
  const [users, loading, error] = useAuthState(auth);
  if (loading) {
    return <p>読み込み中...</p>;
  }
  if (!users) {
    return <p>ログインしてください</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Icon
          icon="heroicons:magnifying-glass-16-solid"
          style={{
            fontSize: '24px',
            color: '#293641',
          }}
        />
        場所を検索...
      </div>
      <img
        onClick={() => {
          navigate('/profile');
        }}
        style={{ width: '48px', height: '48px', borderRadius: '100px' }}
        src={user.photoURL || defalutImg}
        alt="user"
        className={styles.photo}
      />
    </div>
  );
};
export default Search;
