import { db, auth } from '../api/firebase';
import { setDoc, doc } from 'firebase/firestore';

//ユーザーIDなどをuserテーブルに保存する
const setUserTable = async () => {
  try {
    //usersに保存する
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      userId: auth.currentUser.uid, //ユーザーID
      name: auth.currentUser.displayName, //ユーザーの名前
      email: auth.currentUser.email, // ユーザーのメールアドレス
      profileImage: auth.currentUser.photoURL, //ユーザーのアイコンの写真
    });
  } catch (error) {
    if (error.code === 'permission-denied') {
      throw new Error('権限がありません');
    }
    if (error.code === 'not-found') {
      throw new Error('データベースが見つかりません');
    }
    if (error.code === 'aborted') {
      throw new Error('トランザクションが中止されました');
    }
    if (error.code === 'resource-exhausted') {
      throw new Error('リソースが枯渇しました');
    }
    if (error.code === 'unauthenticated') {
      throw new Error('認証されていません');
    }
    if (error.code === 'already-exists') {
      throw new Error('既に存在します');
    }
    if (error.code === 'cancelled') {
      throw new Error('キャンセルされました');
    }
    if (error.code === 'data-loss') {
      throw new Error('データが失われました');
    }
    if (error.code === 'deadline-exceeded') {
      throw new Error('締め切りが過ぎました');
    }
    if (error.code === 'internal') {
      throw new Error('内部エラー');
    }
    if (error.code === 'invalid-argument') {
      throw new Error('引数が無効です');
    }
    if (error.code === 'not-found') {
      throw new Error('見つかりません');
    }
    if (error.code === 'out-of-range') {
      throw new Error('範囲外です');
    }
    if (error.code === 'unimplemented') {
      throw new Error('未実装です');
    }
    if (error.code === 'unavailable') {
      throw new Error('利用できません');
    }

    console.error('ユーザーテーブル保存エラー:', error.code, error.message);
    return error.message;
  }
};
export default setUserTable;
