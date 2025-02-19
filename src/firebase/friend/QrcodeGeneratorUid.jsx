import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { auth } from '../api/firebase';
import styles from './QrCodeGeneratorUid.module.scss';

//自分のuidをQRコードで表示する
const QrCodeGeneratorUid = () => {
  const [uid, setUid] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setUid(auth.currentUser.uid);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <div className={styles.container}>
          <div>
            <p>QRコードをスキャンしてフレンド登録！</p>
            <QRCodeSVG value={uid} size={200} />
          </div>
          <div>
            <button onClick={handleClose}>QRコードを閉じる</button>
          </div>
        </div>
      ) : (
        <button onClick={handleOpen}>QRコードの表示</button>
      )}
    </>
  );
};

export default QrCodeGeneratorUid;

//出されたQRコードを読み取ってフレンド追加を作る予定
