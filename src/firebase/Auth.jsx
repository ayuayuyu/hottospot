import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignInGoole from './SignInGoogle';
import SignOut from './SignOut/SignOut';
import { auth } from './api/firebase';
import UserInfo from './user/UserInfo';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
//以下のimportはできているかのテストだけ本番では違うところで使う
import AddFriend from './friend/AddFriend';
import QrCodeGeneratorUid from './friend/QrcodeGeneratorUid';
import ShareUid from './friend/ShareUid';
import formatLike from './getTable/formatLike';
import UploadImg from './uploadPhoto/UploadImg';
import QrcodeScannerUid from './friend/QrcodeScannerUid';
import formatPhoto from './getTable/formatPhoto';
import getFriendIds from './getTable/getFriendIds';

const Auth = () => {
  const [friendIds, setFriendIds] = useState([]);
  formatLike();
  formatPhoto();
  const [user, loading, error] = useAuthState(auth);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (loading) return;
    (async () => {
      const friendIds = await getFriendIds();
      setFriendIds((fs) => [...friendIds, ...fs]);
    })();
  }, [loading]);

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error.message}</p>;
  }

  return (
    <>
      {user ? (
        <>
          <UserInfo />
          <SignOut />
        </>
      ) : (
        <>
          {currentPage === 'home' && (
            <>
              <SignInGoole />
              <div>
                <button onClick={() => setCurrentPage('signin')}>
                  サインイン
                </button>
              </div>
              <div>
                <button onClick={() => setCurrentPage('signup')}>
                  サインアップ
                </button>
              </div>
            </>
          )}
          {currentPage === 'signin' && <SignIn />}
          {currentPage === 'signup' && <SignUp />}
          {currentPage !== 'home' && (
            <button onClick={() => setCurrentPage('home')}>戻る</button>
          )}
        </>
      )}
      <ShareUid />
      <AddFriend />
      <QrCodeGeneratorUid />
      <UploadImg locationId={'f9f49240-ad11-4830-9272-b18c3566acfb'} />
      <QrcodeScannerUid />
    </>
  );
};
export default Auth;
