import { Link } from "react-router-dom";

import Title from "../layout/home/Title";
import Background from "../layout/home/background";

function Top() {
  return (
    <div>
      <Link to="/login">
        <Title />
        <Background />
      </Link>
    </div>
  );
}

export default Top;
