import { Link } from "react-router-dom";

function Top() {
  return (
    <div>
      <Link to="/ranking">Ranking</Link>
      <Link to="/map">Map</Link>
    </div>
  );
}

export default Top;
