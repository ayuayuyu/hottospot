import { auth, db } from "../api/firebase";
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import setLocationLikeTable from "./setLocationLikeTable";

//firebaseのテーブルに保存する
const setLikesTable = async (location, like) => {
  //アカウントがあるかの確認
  if (!auth.currentUser) {
    throw new Error("ユーザーが認証されていません");
  }

  try {
    console.log(location);
    //likeコレクションに追加
    const likeRef = await addDoc(collection(db, "likes"), {
      userId: doc(db, "users", auth.currentUser.uid), // ユーザーの参照
      like: like,
      locationId: doc(db, "locations", location.locationId), // 観光地の参照
      timestamp: serverTimestamp(), //タイムスタンプ
    });
    console.log(location);
    await setLocationLikeTable(location);

    console.log("いいねを保存しました:", likeRef.id);
    return likeRef.id;
  } catch (error) {
    console.error("いいねテーブル保存エラー1:", error.code, error.message);
    return error.message;
  }
};
export default setLikesTable;
