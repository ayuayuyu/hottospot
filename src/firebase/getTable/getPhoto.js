import { db } from '../api/firebase';
import { collection, getDocs } from 'firebase/firestore';

const getPhoto = async () => {
  try {
    const photoRef = collection(db, 'photos');
    const snapShot = await getDocs(photoRef);
    const photoData = snapShot.docs.map((doc) => ({ ...doc.data() }));
    return photoData;
  } catch (error) {
    console.log('データの取得エラー:', error.code, error.message);
    return error;
  }
};
export default getPhoto;
