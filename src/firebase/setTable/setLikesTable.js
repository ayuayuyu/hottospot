import { auth, db } from '../api/firebase';
import { addDoc, doc, collection, serverTimestamp } from 'firebase/firestore';

//firebaseのテーブルに保存する
const setLikesTable = async (locationId) => {
  //アカウントがあるかの確認
  if (!auth.currentUser) {
    throw new Error('ユーザーが認証されていません');
  }

  try {
    //likeコレクションに追加
    const likeRef = await addDoc(collection(db, 'likes'), {
      userId: doc(db, 'users', auth.currentUser.uid), // ユーザーの参照
      locationId: doc(db, 'locations', locationId), // 観光地の参照
      timestamp: serverTimestamp(), //タイムスタンプ
    });

    console.log('いいねを保存しました:', likeRef.id);
    return likeRef.id;
  } catch (e) {
    console.error('いいねテーブル保存エラー:', e.code, e.message);
    throw e.message;
  }
};
export default setLikesTable;
