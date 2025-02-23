import QrCodeReaderFriend from '../components/friendsModalSheet/QrCodeReaderFriend';
import { PageTitle } from '../layout/PageTitle';
import { GradationButton } from '../layout/GradationButton';
import styles from './QrCodeScan.module.scss';
import { useNavigate } from 'react-router-dom';

const QrCodeScan = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={styles.pagetitle}>
        <PageTitle pageName="QR 読み取り">
          ランキングはリアルタイムで更新され、人気の変動もひと目で分かる。あなたのお気に入りの場所も、もしかしたらランクインしているかも？
          今、行くべきアツい場所を見つけよう！
        </PageTitle>
      </div>
      <div className={styles.scan}>
        <QrCodeReaderFriend />
      </div>
      <div className={styles.codobutton}>
        <GradationButton color="red" onClick={handleBack}>
          戻る
        </GradationButton>
      </div>
    </>
  );
};
export default QrCodeScan;
