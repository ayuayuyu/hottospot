import { db, auth } from '../api/firebase';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

const addFriendUserTable = async (friendUid) => {
  const currentUserId = auth.currentUser.uid;

  try {
    const currentUserRef = doc(db, 'users', currentUserId);
    const friendUserRef = doc(db, 'users', friendUid);

    //ユーザーが存在するかの確認
    const friendSnap = await getDoc(friendUserRef);
    if (!friendSnap.exists()) {
      throw new Error('ユーザーが見つかりません');
    }

    // friendの追加
    await updateDoc(currentUserRef, {
      friends: arrayUnion(friendUserRef),
    });
    await updateDoc(friendUserRef, {
      friends: arrayUnion(currentUserRef),
    });

    console.log(`フレンド追加完了`);
  } catch (error) {
    console.error('フレンド登録エラー:', error.code, error.message);
    return error.message;
  }
};
export default addFriendUserTable;
