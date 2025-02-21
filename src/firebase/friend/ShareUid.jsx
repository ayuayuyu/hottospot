import { useState } from 'react';
import { auth } from '../api/firebase';
import { SiLine, SiX } from '@icons-pack/react-simple-icons';

const ShareUid = () => {
  const [snsLinks, setSnsLinks] = useState({});
  const handleLink = () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const message = `友達になろう！この UID を使って登録してね: ${uid}`;
    const encodedMessage = encodeURIComponent(message);
    const snsLinks = {
      line: `https://line.me/R/msg/text/?${encodedMessage}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedMessage}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedMessage}`,
    };
    setSnsLinks(snsLinks);
  };
  return (
    <div>
      <div>
        <button onClick={handleLink}>SNSで共有</button>
      </div>
      <div>
        {snsLinks.line && (
          <a href={snsLinks.line} target="_blank" rel="noopener noreferrer">
            <SiLine size={48} fill="#00C300" />
          </a>
        )}
      </div>
      <div>
        {snsLinks.twitter && (
          <a href={snsLinks.twitter} target="_blank" rel="noopener noreferrer">
            <SiX size={48} fill="#000000" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ShareUid;
