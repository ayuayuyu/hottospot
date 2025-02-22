import getPhoto from './getPhoto';
import { getDoc } from 'firebase/firestore';
import defalutIcon from '../../../public/img/defalutIcon.png';
import getFriendIds from './getFriendIds';
import { auth } from '../api/firebase';

const formatPhoto = async () => {
  const photos = await getPhoto();
  const friendIds = await getFriendIds();
  const uid = auth.currentUser.uid;
  // friendIds に現在のユーザーの UID を追加
  const userAndFriendIds = [...friendIds, uid];

  const formattedPhotos = await Promise.all(
    photos.map(async (photo) => {
      const userSnap = await getDoc(photo.userId);
      const locationSnap = await getDoc(photo.locationId);

      // データが存在するかの確認
      const userData = userSnap.exists() ? userSnap.data() : null;
      const locationData = locationSnap.exists() ? locationSnap.data() : null;
      // データが取得できなかった場合は `null` を返して除外
      if (!userData || !locationData) return null;

      // いいねしたユーザーが現在のユーザーまたはフレンドでなければ除外
      if (!userAndFriendIds.includes(userSnap.id)) return null;

      return {
        name: userData.name || '不明',
        icon: userData.profileImage || defalutIcon,
        photo: photo.imageUrl,
        timestamp: photo.timestamp,
        place: locationData.name || '不明',
        latitude: locationData.latitude || 0,
        longitude: locationData.longitude || 0,
      };
    }),
  );
  const validPhotos = formattedPhotos.filter((item) => item !== null);
  // console.log('Formatted Photo Data:', validPhotos);
  return validPhotos;
};
export default formatPhoto;
