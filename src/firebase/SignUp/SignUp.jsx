import { useState } from 'react';
import signUpUser from './signUpUser';

//メールでのサインアップ
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUpUser(name, email, password);
    } catch (error) {
      console.error('ユーザー作成エラー:', error);
      throw new Error('ユーザーエラー');
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前"
        />
      </div>
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
        <button onClick={handleSignUp}>新規登録</button>
      </div>
    </>
  );
};
export default SignUp;
