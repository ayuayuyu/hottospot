import { auth, db } from '../api/firebase';
import { addDoc, doc, collection, serverTimestamp } from 'firebase/firestore';

//firebaseのテーブルに保存する
const setLikesTable = async (locationId, like) => {
  //アカウントがあるかの確認
  if (!auth.currentUser) {
    throw new Error('ユーザーが認証されていません');
  }

  try {
    //likeコレクションに追加
    const likeRef = await addDoc(collection(db, 'likes'), {
      userId: doc(db, 'users', auth.currentUser.uid), // ユーザーの参照
      like: like,
      locationId: doc(db, 'locations', locationId), // 観光地の参照
      timestamp: serverTimestamp(), //タイムスタンプ
    });

    console.log('いいねを保存しました:', likeRef.id);
    return likeRef.id;
  } catch (error) {
    console.error('いいねテーブル保存エラー:', error.code, error.message);
    return error.message;
  }
};
export default setLikesTable;
