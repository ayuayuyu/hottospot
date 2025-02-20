import jsQR from 'jsqr';
import { useEffect, useRef, useState } from 'react';
import addFriendUserTable from '../updateTable/addFriendUserTable';

const QrcodeScannerUid = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleAddFriend = async (uid) => {
    if (!uid) {
      console.log(`uidがありません`);
      return;
    }
    await addFriendUserTable(uid);
  };

  useEffect(() => {
    const constraints = {
      video: {
        facingMode: 'environment',
        width: { ideal: 300 },
        height: { ideal: 300 },
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            setTimeout(scanQrCode, 500);
          };
        }
      })
      .catch((err) => {
        console.error('Error accessing media devices:', err);
        setError(`カメラのアクセスに失敗しました: ${err.message}`);
      });

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const scanQrCode = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const qrCodeData = jsQR(imageData.data, imageData.width, imageData.height);

    if (qrCodeData && qrCodeData.data) {
      setResult(qrCodeData.data);
      console.log(`getUid: ${qrCodeData.data}`);
      handleAddFriend(qrCodeData.data);
    } else {
      setTimeout(scanQrCode, 100);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!result && (
        <div className="relative h-[300px] w-[300px]">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="absolute left-0 top-0 -z-50 h-[300px] w-[300px]"
          />
          <canvas
            ref={canvasRef}
            width="300"
            height="300"
            className="absolute left-0 top-0"
          />
        </div>
      )}
      {result && (
        <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
          <h1 className="text-lg font-bold">読み取ったデータ:</h1>
          <p className="text-sm text-gray-700 break-all">{result}</p>
        </div>
      )}
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default QrcodeScannerUid;
