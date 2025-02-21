import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './api/firebase';
import { Icon } from '@iconify/react/dist/iconify.js';
import setUserTable from './setTable/setUserTable';

//googleでのサインアップ、サインイン
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (!result) {
      throw new Error('サインインに失敗しました。');
    }

    const user = result.user;
    if (user) {
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
