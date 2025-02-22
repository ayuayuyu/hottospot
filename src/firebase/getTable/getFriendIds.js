import { db, auth } from '../api/firebase';
import { doc, getDoc } from 'firebase/firestore';

const getFriendIds = async () => {
  if (!auth.currentUser) {
    console.log('Not User');
    return []; // ログインしていない場合は空配列を返す
  }

  const userId = auth.currentUser.uid;

  // 自分のユーザードキュメントを取得
  const userDocRef = doc(db, 'users', userId);
  const snapShot = await getDoc(userDocRef);

  if (!snapShot.exists()) {
    console.log('User not found');
    return [];
  }

  const userData = snapShot.data();
  const friendRefs = userData.friends || []; // 友達のUIDリスト

  const friends = await Promise.all(
    friendRefs.map(async (friend) => {
      const userSnap = await getDoc(friend);
      const userData = userSnap.exists() ? userSnap.data() : null;
      if (!userData) return null;
      return userData.userId;
    }),
  );
  return friends;
};

export default getFriendIds;
