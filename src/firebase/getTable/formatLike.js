import getLike from './getLike';
import { getDoc } from 'firebase/firestore';
import defalutIcon from '../../../public/img/defalutIcon.png';

const formatLike = async () => {
  // いいねデータを取得
  const likes = await getLike();
  // いいねデータを並列処理をして、対応するユーザーと観光地を取得する
  const formattedLikes = await Promise.all(
    likes.map(async (like) => {
      // userId locationIdは参照型なため、getDocで取得する
      const userSnap = await getDoc(like.userId);
      const locationSnap = await getDoc(like.locationId);

      // データが存在するかの確認
      const userData = userSnap.exists() ? userSnap.data() : null;
      const locationData = locationSnap.exists() ? locationSnap.data() : null;

      // データが取得できなかった場合は `null` を返して除外
      if (!userData || !locationData) return null;

      return {
        name: userData.name || '不明',
        icon: userData.profileImage || defalutIcon,
        like: like.like,
        timestamp: like.timestamp,
        place: locationData.name || '不明',
        latitude: locationData.latitude || 0,
        longitude: locationData.longitude || 0,
      };
    }),
  );

  // 無効なデータ (null) を除外
  const validLikes = formattedLikes.filter((item) => item !== null);

  console.log('Formatted Like Data:', validLikes);
  return validLikes;
};

export default formatLike;
