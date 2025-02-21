import { auth } from '../api/firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import setUserTable from '../setTable/setUserTable';

//firebaseにサインアップ
const signUpUser = async (name, email, password) => {
  try {
    //バリテーション
    if (!email || !password) {
      throw new Error('メールアドレスとパスワードを入力してください。');
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      throw new Error('有効なメールアドレスを入力してください。');
    }
    if (password.length < 6) {
      throw new Error('パスワードは6文字以上で入力してください。');
    }

    //サインアップ
    const userCreate = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCreate.user;
    if (!user) {
      throw new Error('ユーザーのサインアップを失敗しました。');
    }

    //メール認証を送信
    if (!user.emailVerified) {
      await sendEmailVerification(user);
    }

    //ユーザー名の変更
    await updateProfile(user, { displayName: name });

    //ユーザーテーブルに保存
    await setUserTable();

    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error(
        'このメールアドレスは既に登録されています。サインインしてください。',
      );
    }
    if (error.code === 'auth/invalid-email') {
      throw new Error('有効なメールアドレスを入力してください。');
    }
    if (error.code === 'auth/weak-password') {
      throw new Error('パスワードは6文字以上で設定してください。');
    }
    if (error.code === 'auth/network-request-failed') {
      throw new Error('ネットワークエラーが発生しました。');
    }
    if (error.code === 'auth/internal-error') {
      throw new Error('内部エラーが発生しました。');
    }
    console.error('サインアップエラー:', error.code, error.message);
    throw error.message; // 呼び出し元で適切に処理できるようにする
  }
};
export default signUpUser;
