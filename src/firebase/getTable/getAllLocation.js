import { db } from '../api/firebase';
import { collection, getDocs } from 'firebase/firestore';
//firebase上に保存されている観光地を全て取得する
const getAllLocation = async () => {
  try {
    //locationsから観光地を取得
    const locationRef = collection(db, 'locations');
    const snapShot = await getDocs(locationRef);
    const locationData = snapShot.docs.map((doc) => ({ ...doc.data() }));
    console.log('location:', locationData);
    //観光地全てを配列で返す
    return locationData;
  } catch (error) {
    console.log('データの取得エラー:', error.code, error.message);
    return error;
  }
};
export default getAllLocation;
