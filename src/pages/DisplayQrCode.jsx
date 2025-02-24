import { PageTitle } from '../layout/PageTitle';
import { auth } from '../firebase/api/firebase';
import { QRCodeSVG } from 'qrcode.react';
import styles from './displayQrCode.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GradationButton } from '../layout/GradationButton';
import { Loading } from '../layout/loading';

function DisplayQrCode() {
  const [user, loading, error] = useAuthState(auth);
  const copyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(uid);
      console.log('コピー成功しました！！');
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Loading message={'読み込み中'} />;
  }

  if (!user) {
    return <p>ログインをしてください</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error.message}</p>;
  }

  const uid = auth.currentUser.uid;
  return (
    <div className={styles.allContainer}>
      <PageTitle pageName="フレンドコード">
        ランキングはリアルタイムで更新され、人気の変動もひと目で分かる。あなたのお気に入りの場所も、もしかしたらランクインしているかも？
        今、行くべきアツい場所を見つけよう！
      </PageTitle>
      <div className={styles.container}>
        <QRCodeSVG value={uid} size={240} />
      </div>
      <div className={styles.uid}>
        <GradationButton color="red" onClick={copyClipboard}>
          コードをコピー
        </GradationButton>
      </div>
    </div>
  );
}

export default DisplayQrCode;
