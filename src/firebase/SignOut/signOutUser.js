import { auth } from '../api/firebase';
import { signOut } from 'firebase/auth';

//サインアウト
const signOutUser = async () => {
  try {
    //これでサインアウトできる
    signOut(auth);
    console.log('サインアウト');
  } catch (error) {
    console.error('サインアウトエラー:', error.code, error.message);
  }
};
export default signOutUser;
