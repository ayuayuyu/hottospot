import React from "react";
import { PageTitle } from "../layout/PageTitle";
import { auth } from "../firebase/api/firebase";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import styles from "./AddQr.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { GradationButton } from "../layout/GradationButton";

function AddQr() {
  const [isOpen, setOpen] = useState(false);
  const [users, loading, error] = useAuthState(auth);
  const [currentPage, setCurrentPage] = useState("home");
  const copyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(uid);
      console.log("コピー成功しました！！");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <p>読み込み中...</p>;
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

export default AddQr;
