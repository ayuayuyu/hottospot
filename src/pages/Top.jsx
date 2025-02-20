import { Link } from "react-router-dom";

import Title from "../layout/home/Title";
import Background from "../layout/home/background";
import { useNavigate } from "react-router-dom";

function Top() {
  const navigate = useNavigate();

  const handleRanking = () => {
    navigate("/ranking");
    console.log("ranking");
  };

  const handleMap = () => {
    navigate("/map");
  };

  return (
    <div>
      <button onClick={handleRanking} style={{ zIndex: 30, position:"absolute", left: "50px", width:"30%"}}>
        Ranking
      </button>
      <button onClick={handleMap} style={{ zIndex: 30, position:"absolute",right: "50px", width:"30%"}}>Map</button>

      
        <Link to="/login" style={{ zIndex: 10 }}>
          <Title />
          <Background />
        </Link>
      
    </div>
  );
}

export default Top;
