import { useState } from 'react';
import addFriendUserTable from '../updateTable/addFriendUserTable';

//フレンドの追加をする(snsで送られてきたuidを打つ)
const AddFriend = () => {
  const [friendUid, setFriendUid] = useState('');
  const [message, setMessage] = useState('');

  const handleAddFriend = async () => {
    if (!friendUid) {
      setMessage('UID を入力してください');
      return;
    }
    const result = await addFriendUserTable(friendUid);
    console.log(`友達登録完了: ${result}`);
  };

  return (
    <div>
      <h2>フレンド登録</h2>
      <input
        type="text"
        value={friendUid}
        onChange={(e) => setFriendUid(e.target.value)}
        placeholder="友達の UID を入力"
      />
      <button onClick={() => handleAddFriend()}>フレンド追加</button>
      <p>{message}</p>
    </div>
  );
};

export default AddFriend;
