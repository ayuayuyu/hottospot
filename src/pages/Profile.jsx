import { useAuthState } from 'react-firebase-hooks/auth';
import { PageTitle } from '../layout/PageTitle';
import styles from './Profile.module.scss';
import { auth } from '../firebase/api/firebase';
import defalutImg from '../../public/img/defalutIcon.png';
import { GradationButton } from '../layout/GradationButton';
import ProfileFriends from '../components/friendsModalSheet/ProfileFriends';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../layout/loading';
import ErrorPage from '../layout/error/ErrorPage';

const getUserInfo = () => {
  return auth.currentUser;
};

function Profile() {
  const user = getUserInfo();
  console.log(`user:${user}`);
  const [users, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const displayqr = () => {
    navigate('/displayqr');
  };
  const addfirends = () => {
    navigate('/addfriends');
  };

  if (loading) {
    return <Loading message={'読み込み中'} />;
  }

  if (!users) {
    return (
      <ErrorPage
        error={'アカウントが\n見つかりません'}
        message={'ログインしてください'}
      />
    );
  }

  if (error) {
    return <ErrorPage error={error.message} />;
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
          <GradationButton color="red" onClick={displayqr}>
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
