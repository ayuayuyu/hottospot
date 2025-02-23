import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { PageTitle } from '../layout/PageTitle';
import styles from './Profile.module.scss';
// import { auth } from '../api/firebase';
import { auth } from '../firebase/api/firebase';
import defalutImg from '../../public/img/defalutIcon.png';
import { GradationButton } from '../layout/GradationButton';
import ProfileFriends from '../components/friendsModalSheet/ProfileFriends';
import { useNavigate } from 'react-router-dom';

const getUserInfo = () => {
  return auth.currentUser;
};

function Profile() {
  const user = getUserInfo();
  console.log(`user:${user}`);
  const [users, loading, error] = useAuthState(auth);
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();

  const friendcode = () => {
    navigate('/addqr');
  };
  const addfirends = () => {
    navigate('/addfriends');
  };

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error.message}</p>;
  }

  return (
    <div>
      <div className={styles.pagetitle}>
        <PageTitle pageName="プロフィール">
          ランキングはリアルタイムで更新され、人気の変動もひと目で分かる。あなたのお気に入りの場所も、もしかしたらランクインしているかも？
          今、行くべきアツい場所を見つけよう！
        </PageTitle>
      </div>
      <div className={styles.upper}>
        <img
          src={user.photoURL || defalutImg}
          alt="user"
          className={styles.photo}
        />
        <p className={styles.username}>{user.displayName}</p>
        <p className={styles.email}>{user.email}</p>
        <div className={styles.codobutton}>
          <GradationButton color="red" onClick={friendcode}>
            フレンドコード
          </GradationButton>
        </div>
        <div className={styles.addbutton}>
          <GradationButton color="red" onClick={addfirends}>
            フレンド追加
          </GradationButton>
        </div>
        <div className={styles.friendslist}>フレンドリスト</div>
        <ProfileFriends />
      </div>
    </div>
  );
}

export default Profile;
