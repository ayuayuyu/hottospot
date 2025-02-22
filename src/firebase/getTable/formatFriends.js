import { db } from '../api/firebase';
import { doc, getDoc } from 'firebase/firestore';
import getFriendIds from './getFriendIds';

const formatFriends = async () => {
  const friendIds = await getFriendIds();

  const friends = await Promise.all(
    friendIds.map(async (friendId) => {
      const userDocRef = doc(db, 'users', friendId);
      const snapShot = await getDoc(userDocRef);
      const userData = snapShot.exists() ? snapShot.data() : null;
      if (!userData) return null;
      return {
        name: userData.name || '不明',
        icon: userData.profileImage || null,
      };
    }),
  );

  const validFriends = friends.filter((item) => item !== null);
  console.log(validFriends);
  return validFriends;
};
export default formatFriends;
