import { auth, db } from '../api/firebase';
import { addDoc, doc, collection, serverTimestamp } from 'firebase/firestore';

//firebaseのテーブルに保存する
const setPhotosTable = async (locationId, photoUrl) => {
  //アカウントがあるかの確認
  if (!auth.currentUser) {
    throw new Error('ユーザーが認証されていません');
  }

  try {
    //photoコレクションに追加
    const photoRef = await addDoc(collection(db, 'photos'), {
      userId: doc(db, 'users', auth.currentUser.uid), // ユーザーの参照
      locationId: doc(db, 'locations', locationId), // 観光地の参照
      imageUrl: photoUrl,
      visibility: 'friends-only',
      timestamp: serverTimestamp(), //タイムスタンプ
    });
    // console.log(`写真を保存しました: ${photoRef.id}`);
    return photoRef.id;
  } catch (error) {
    console.error('いいねテーブル保存エラー:', error.code, error.message);
    return error.message;
  }
};
export default setPhotosTable;
