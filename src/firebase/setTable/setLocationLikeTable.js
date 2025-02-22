import { db } from "../api/firebase";
import { doc, updateDoc } from "firebase/firestore";

const setLocationLikeTable = async (location) => {
  const likeCounts = location.likeCount + 1;
  try {
    await updateDoc(doc(db, "locations", location.locationId), {
      likeCount: likeCounts,
    });
  } catch (e) {
    console.error("いいねテーブル保存エラー2:", e.code, e.message);
    throw e.message;
  }
};
export default setLocationLikeTable;
