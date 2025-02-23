import { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import addFriendUserTable from '../../firebase/updateTable/addFriendUserTable';
import styles from './QrCodeReaderFriend.module.scss';
import ModalWindow from '../../layout/ModalWindow';

const QrCodeReaderFriend = () => {
  const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const scanningRef = useRef(false); // スキャン状態を管理

  const handleAddFriend = async (uid) => {
    if (!uid) return;
    await addFriendUserTable(uid);
  };

  const scanQrCode = () => {
    if (!scanningRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 240;
    canvas.height = 240;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const qrCodeData = jsQR(imageData.data, imageData.width, imageData.height);

    if (qrCodeData?.data) {
      setResult(qrCodeData.data);
      console.log(`getUid: ${qrCodeData.data}`);
      handleAddFriend(qrCodeData.data);
      scanningRef.current = false;
      setModalWindowIsOpen(true);
    } else {
      setTimeout(scanQrCode, 100); // 少し間隔を広げる
    }
  };

  useEffect(() => {
    scanningRef.current = true;
    setResult(''); // 画面をリセット

    const constraints = {
      video: {
        facingMode: 'environment',
        width: { ideal: 240 },
        height: { ideal: 240 },
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setTimeout(scanQrCode, 500);
          };
        }
      })
      .catch((err) => {
        console.error('Error accessing media devices:', err);
        setError(`カメラのアクセスに失敗しました: ${err.message}`);
      });

    return () => {
      scanningRef.current = false;

      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream instanceof MediaStream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        videoRef.current.srcObject = null; // メモリ解放
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      {!result && (
        <div className={styles.videoWrapper}>
          <video ref={videoRef} autoPlay playsInline className={styles.video} />
          <canvas
            ref={canvasRef}
            width="240"
            height="240"
            className={styles.canvas}
          />
        </div>
      )}

      <ModalWindow setIsOpen={setModalWindowIsOpen} isOpen={modalWindowIsOpen}>
        <p className={styles.finish}>登録完了</p>
      </ModalWindow>

      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default QrCodeReaderFriend;
