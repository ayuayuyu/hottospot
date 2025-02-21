import { db } from '../api/firebase';
import { collection, getDocs } from 'firebase/firestore';
//firebase上に保存されているいいねの取得する
const getLike = async () => {
  try {
    const likeRef = collection(db, 'likes');
    const snapShot = await getDocs(likeRef);
    const likeData = snapShot.docs.map((doc) => ({ ...doc.data() }));
    //いいねの全てを返す
    return likeData;
  } catch (error) {
    console.log('データの取得エラー:', error.code, error.message);
    return error;
  }
};
export default getLike;
