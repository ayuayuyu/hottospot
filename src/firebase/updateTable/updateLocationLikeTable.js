import { db } from '../api/firebase';
import { updateDoc, doc } from 'firebase/firestore';

const updateLocationLikeTable = async ({ location }) => {
  const likeCounts = location.likeCount + 1;

  try {
    await updateDoc(doc(db, 'locations', location.locationId), {
      likeCount: likeCounts,
    });
  } catch (e) {
    console.error('いいねテーブル保存エラー:', e.code, e.message);
    throw e.mess;
  }
};
export default updateLocationLikeTable;
