import { auth } from '../api/firebase';
import { signOut } from 'firebase/auth';

//サインアウト
const signOutUser = async () => {
  try {
    //これでサインアウトできる
    signOut(auth);
  } catch (error) {
    console.error('サインアウトエラー:', error.code, error.message);
  }
};
export default signOutUser;
