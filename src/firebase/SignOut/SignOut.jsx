import signOutUser from './signOutUser';
//サインアウト
const SignOut = () => {
  return (
    <>
      <button onClick={signOutUser}>サインアウト</button>
    </>
  );
};
export default SignOut;
