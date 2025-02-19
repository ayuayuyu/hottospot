import { useState } from 'react';
import signInUser from './signInUser';

//メールでのサインイン
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInUser(email, password);
    } catch (error) {
      console.error('サインインエラー:', error.code, error.message);
      return error.message;
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
      </div>
      <div>
        <button onClick={handleSignIn}>ログイン</button>
      </div>
    </>
  );
};
export default SignIn;
