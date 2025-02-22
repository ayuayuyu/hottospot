import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './api/firebase';
import { Icon } from '@iconify/react/dist/iconify.js';
import setUserTable from './setTable/setUserTable';
import { db } from './api/firebase';
import { getDoc, doc } from 'firebase/firestore';

//googleでのサインアップ、サインイン
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (!result) {
      throw new Error('サインインに失敗しました。');
    }

    const user = result.user;
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      console.log('既存ユーザーとしてサインイン:', user.email);
    } else {
      console.log('新規ユーザーとして登録:', user.email);
      await setUserTable();
    }
  } catch (error) {
    console.error('Googleサインインエラー:', error.message);
  }
};

const SignInGoole = () => {
  return (
    <>
      <Icon
        icon="flat-color-icons:google"
        width="48"
        height="48"
        onClick={signInWithGoogle}
      />
    </>
  );
};

export default SignInGoole;
