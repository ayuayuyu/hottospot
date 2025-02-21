import { PageTitle } from "../layout/PageTitle";
import styles from "./AddFriends.module.scss";
import { auth } from "../firebase/api/firebase";
import { GradationButton } from "../layout/GradationButton";
import { FormInput } from "./../layout/FormInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import addFriendUserTable from "../firebase/updateTable/addFriendUserTable";

const getUserInfo = () => {
  return auth.currentUser;
};

function AddFriends() {
  const { register, handleSubmit } = useForm();
  const [friendUid, setFriendUid] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    setFriendUid(data.friendCode);
    handleAddFriend();
  };
  const handleAddFriend = async () => {
    if (!friendUid) {
      setMessage("UID を入力してください");
      return;
    }
    try {
      //友達の追加
      await addFriendUserTable(friendUid);
      setMessage(`友達登録完了`);
      setFriendUid(""); // 入力欄をクリア\
    } catch (error) {
      setMessage("エラーが発生しました: " + error.message);
    }
  };

  const user = getUserInfo();
  console.log(`user:${user}`);

  return (
    <div>
      <div className={styles.pagetitle}>
        <PageTitle pageName="フレンド追加">
          ランキングはリアルタイムで更新され、人気の変動もひと目で分かる。あなたのお気に入りの場所も、もしかしたらランクインしているかも？
          今、行くべきアツい場所を見つけよう！
        </PageTitle>
      </div>
      <form className={styles.upper}>
        <FormInput
          label="フレンドコード"
          fieldName="friendCode"
          register={register}
        />
        <GradationButton color="red" onClick={handleSubmit(onSubmit)}>
          フレンド追加
        </GradationButton>
      </form>
    </div>
  );
}

export default AddFriends;
