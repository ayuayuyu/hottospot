import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { PageTitle } from "../layout/PageTitle";
import styles from "./Profile.module.scss";
// import { auth } from '../api/firebase';
import { auth } from "../firebase/api/firebase";
import defalutImg from "../../public/img/defalutIcon.png";
import { motion } from "framer-motion";
import { GradationButton } from "../layout/GradationButton";
import { red } from "@mui/material/colors";
import { Handle } from "vaul";
import FriendsModalSheet from "../components/friendsModalSheet/FriendsModalSheet";
import VisitedFriends from "../components/friendsModalSheet/VisitedFriends";

const getUserInfo = () => {
  return auth.currentUser;
};

function Profile() {
  const user = getUserInfo();
  console.log(`user:${user}`);
  const [users, loading, error] = useAuthState(auth);
  const [currentPage, setCurrentPage] = useState("home");
  const handleClck = () => {
    return console.log("OK");
  };
  const friendsList = [
    {
      id: 1,
      name: "トマト",
      icon: "写真",
      like: 2,
      place: "香嵐渓",
      latitude: 35.1375,
      longitude: 137.2958,
    },
    {
      id: 2,
      name: "トマト",
      icon: "写真",
      like: 5,
      place: "犬山城",
      latitude: 35.3894,
      longitude: 136.9392,
    },
    {
      id: 3,
      name: "トマト",
      icon: "写真",
      like: 8,
      place: "岡崎城",
      latitude: 34.9546,
      longitude: 137.1608,
    },
  ];

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
          <GradationButton color="red" onClick={handleClck}>
            フレンドコード
          </GradationButton>
        </div>
        <div className={styles.addbutton}>
          <GradationButton color="red" onClick={handleClck}>
            フレンド追加
          </GradationButton>
        </div>
        <div className={styles.friendslist}>フレンドリスト</div>
        <VisitedFriends />
      </div>
    </div>
  );
}

export default Profile;
